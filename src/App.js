import { useState } from 'react'

import Start from './components/Start'
import Questions from './components/Questions'

const App = () => {
    const [isStart, setIsStart] = useState(false)

    function startQuiz(){
        console.log('start...')
        setIsStart(true)
    }      

    return (
        <main className="max-w-5xl mx-auto text-center py-52">
            { !isStart ? <Start startQuiz={startQuiz}/> : <Questions />}
        </main>
    )
}

export default App;