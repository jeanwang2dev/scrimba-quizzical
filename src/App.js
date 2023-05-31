import { useState, useEffect } from 'react'

import Start from './components/Start'
import Questions from './components/Questions'
import Results from './components/Results'

const App = () => {
    const [quizState, setQuizState] = useState({isStart: false, isAnswered: false, isChecked: false })
    const [questions, setQuestions] = useState({loading: true, data: null})

    function startQuiz(){
        console.log('start...')
        const url = "https://opentdb.com/api.php?amount=5&type=multiple"
        setQuizState(prevQuizState => ({
            ...quizState,
            isStart: true
        }))
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setQuestions({
                loading: false,
                data: data.results.map( (item, index ) =>{

                    const answers = item.incorrect_answers
                    answers.push(item.correct_answer)
                    shuffleArray(answers)

                    const newOptions = answers.map( option => {
                        return {
                            option: option,
                            isChecked: false
                        }
                    })

                    return { 
                        question: item.question,
                        questionIdx: index,
                        answers: newOptions,
                        correctAnswer: item.correct_answer,
                        userAnswerIdx: -1 
                    }
                })
            })})


    }   

    
    function shuffleArray(array) { 
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function answer(questionIdx, answerIdx) {
        console.log('user is answering: ' + questionIdx + " " + answerIdx)
        setQuestions(prevQuestions => {
            const updatedData = prevQuestions.data.map( (item, index) => {
                if( index === questionIdx) {
                    item.answers.map( (option, oIdx) => {
                        if( oIdx === answerIdx) {
                           return option.isChecked = !option.isChecked
                        }
                    })
                }
            })
            // console.log(updatedData)
            return {
                ...prevQuestions,
                // data: prevQuestions.data
            }
        })
    }
    
    useEffect( () => {
        console.log('update questions', questions)
    }, [questions] )

    function checkAnswers(){
        console.log('check answers...')
        setQuizState(prevQuizState => ({
            ...quizState,
            isAnswered: true
        }))
    }

    function restartQuiz(){
        setQuizState(prevQuizState => ({
            ...quizState,
            isStart: false,
            isAnswered: false,
            isChecked: false
        }))
    }

    return (
        <main className="max-w-5xl mx-auto text-center py-52">
            { !quizState.isStart && <Start startQuiz={startQuiz}/> }
            { quizState.isStart && !quizState.isAnswered && <Questions answerAction={answer} questions={questions} checkAnswers={checkAnswers} />}
            { quizState.isStart && quizState.isAnswered && <Results restartQuiz={restartQuiz}/>}
        </main>
    )
}

export default App;