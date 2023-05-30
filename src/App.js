import { useState, useEffect } from 'react'

import Start from './components/Start'
import Questions from './components/Questions'
import Answers from './components/Answers'

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
            .then(data => setQuestions({
                loading: false,
                data: data.results.map( item =>{
                    return { 
                        question: item.question,
                        answers: item.incorrect_answers
                    }
                })
            }))

    }   
    
    useEffect( () => {
        console.log('update questions')
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
            { quizState.isStart && !quizState.isAnswered && <Questions questions={questions} checkAnswers={checkAnswers} />}
            { quizState.isStart && quizState.isAnswered && <Answers restartQuiz={restartQuiz}/>}
        </main>
    )
}

export default App;