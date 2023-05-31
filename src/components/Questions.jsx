import Button from './Button'
import Question from './Question'

function Questions(props) {

    let loadingText
    let questions
    if(props.questions.loading) {
        loadingText = "Loading"
    } else {
        questions = props.questions.data.map( item => {
            return (
                <Question
                    key={item.questionIdx}
                    questionIdx={item.questionIdx}
                    question={item.question}
                    options={item.options}
                    answerAction={props.answerAction}
                />
            )
        })
    }

    return (
        <div className="flex flex-col items-center space-y-6">
            { loadingText && <p>{loadingText}</p>}
            { !props.questions.loading && questions }
            <Button btnAction={props.checkAnswers}  btnText="Check answers" /> 
        </div>
    )

}

export default Questions