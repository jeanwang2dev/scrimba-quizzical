import { useState, useEffect } from 'react'

import Start from './components/Start'
import Questions from './components/Questions'
import Results from './components/Results'

const App = () => {
    const [quizState, setQuizState] = useState({isStart: false, isAnswered: false, isAnswerNotComplete: false})
    const [questions, setQuestions] = useState({loading: true, data: null})

    function startQuiz(){
        console.log('start...')
        const url = "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
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

                    const options = item.incorrect_answers
                    options.push(item.correct_answer)
                    shuffleArray(options)

                    const optionsWithState = options.map( option => {
                        return {
                            option: option,
                            isChecked: false
                        }
                    })

                    const correctAnswerIdx = optionsWithState.findIndex( itemOption =>  {
                        return itemOption.option.normalize() === item.correct_answer.normalize()
                    })

                    return { 
                        question: item.question,
                        questionIdx: index,
                        options: optionsWithState,
                        correctAnswerIdx: correctAnswerIdx,
                        userAnswerIdx: -1,
                        isCorrect: false
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
        
        setQuestions(prevQuestions => {
            const updatedData = prevQuestions.data.map( (item, index) => {
                if( index === questionIdx) {                    
                    item.options.map( (option, oIdx) => {
                        if( oIdx === answerIdx) {
                            option.isChecked = !option.isChecked
                        } else {
                            option.isChecked = false
                        }
                        return {
                            ...option
                        }

                    })
                    item.userAnswerIdx = item.options.findIndex( i => i.isChecked)
                }
                
                if(item.userAnswerIdx === item.correctAnswerIdx) {
                    item.isCorrect = true
                } else {
                    item.isCorrect = false
                }
                
                return {
                    ...item
                }
            })
            return {
                ...prevQuestions,
                data: updatedData
            }
        })
    }
    
    // useEffect( () => {
    //     // if(questions.data && questions.data[0].userAnswerIdx){
    //     //     console.log('update questions', questions.data[0].userAnswerIdx)
    //     // }
    //     console.log(questions)
    // }, [questions] )

    function checkAnswers(){
        console.log('check answers...')
        // check if all the question are anwsered
        const result = questions.data.find( item => {
            return item.userAnswerIdx === -1
        })

        if( result !== undefined) {
            console.log('you have not answered all the quesitons')
            setQuizState(prevQuizState => ({
                ...quizState,
                isAnswerNotComplete: true,
            }))
        } else {
            setQuizState(prevQuizState => ({
                ...quizState,
                isAnswered: true,
                isAnswerNotComplete: false,
            }))
        }
        
    }

    function restartQuiz(){
        setQuizState(prevQuizState => ({
            ...quizState,
            isStart: false,
            isAnswered: false,
        }))
        setQuestions({loading: true, data: null})
    }

    return (
        <main className="container max-w-5xl mx-auto text-center py-12 md:py-36">
            { quizState.isStart &&
                quizState.isAnswerNotComplete &&
                <p className="mb-4 text-red-300">Please answer all the questions.</p>
            }
            { !quizState.isStart && 
              <Start startQuiz={startQuiz}/> }
            { quizState.isStart && 
                !quizState.isAnswered && 
                <Questions answerAction={answer} questions={questions} checkAnswers={checkAnswers} />}

            { quizState.isStart && 
                quizState.isAnswered && 
                <Results restartQuiz={restartQuiz} questions={questions} />}
        </main>
    )
}

export default App;