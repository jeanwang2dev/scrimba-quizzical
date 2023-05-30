import Button from './Button'
import Question from './Question'

function Questions(props) {

    let loadingText
    let questions
    if(props.questions.loading) {
        loadingText = "Loading"
    } else {
        console.log('here', props.questions.data)
        questions = props.questions.data.map( item => {
            return (
                <Question
                    key={item.question}
                    question={item.question}
                />
            )
        })
    }

    return (
        <div className="flex flex-col items-center">
            { loadingText && <p>{loadingText}</p>}
            { !props.questions.loading && questions }
            <Button btn_action={props.checkAnswers}  btn_text="Check answers" /> 
        </div>
    )

}

export default Questions