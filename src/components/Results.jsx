import Button from './Button'
import Question from './Question'

function Results(props) {

    //console.log("result question props: ", props)
    // calculate how many questions are correct
    const correctQuestions = props.questions.data.filter( item => {
        return item.isCorrect === true
    })
    

    //console.log( correctQuestions.length )

    const questions = props.questions.data.map( item => {
        return (
            <Question
                key={item.questionIdx}
                questionIdx={item.questionIdx}
                question={item.question}
                options={item.options}
                correctAnswerIdx={item.correctAnswerIdx}
                userAnswerIdx={item.userAnswerIdx}
                isCheckedMode={true}
            />
        )
    })

    return (
        <div className="flex flex-col items-center space-y-6">
            {questions}
            <div className="flex justify-center items-center space-x-5">
                <h4 className="text-primary font-inter font-bold text-sm">You scored {correctQuestions.length}/5 correct answers</h4>
                <Button btnAction={props.restartQuiz} btnText="Play again" />
            </div>
        </div>

    )

}

export default Results