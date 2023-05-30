import { useState } from 'react'

import Start from './components/Start'
import Questions from './components/Questions'
import Answers from './components/Answers'

const App = () => {
    const [quizState, setQuizState] = useState({isStart: false, isAnswered: false, isChecked: false })

    function startQuiz(){
        console.log('start...')
        setQuizState(prevQuizState => ({
            ...quizState,
            isStart: true
        }))
    }      

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
            { quizState.isStart && !quizState.isAnswered && <Questions checkAnswers={checkAnswers} />}
            { quizState.isStart && quizState.isAnswered && <Answers restartQuiz={restartQuiz}/>}
        </main>
    )
}

export default App;