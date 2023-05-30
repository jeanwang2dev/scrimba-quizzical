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
                    key={item.question}
                    question={item.question}
                    answers={item.answers}
                />
            )
        })
    }

    return (
        <div className="flex flex-col items-center space-y-6">
            { loadingText && <p>{loadingText}</p>}
            { !props.questions.loading && questions }
            <Button btn_action={props.checkAnswers}  btn_text="Check answers" /> 
        </div>
    )

}

export default Questions