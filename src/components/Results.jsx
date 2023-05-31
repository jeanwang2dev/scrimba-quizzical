import Button from './Button'
import Question from './Question'

function Results(props) {

    const questions = props.questions.data.map( item => {
        return (
            <Question
                key={item.questionIdx}
                questionIdx={item.questionIdx}
                question={item.question}
                options={item.options}
                isCheckedMode={true}
            />
        )
    })

    return (
        <div className="flex flex-col items-center space-y-6">
         {questions}
        <Button btnAction={props.restartQuiz} btnText="Play again" /> 
        </div>

    )

}

export default Results