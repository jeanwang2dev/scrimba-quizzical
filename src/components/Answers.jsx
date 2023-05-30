import Button from './Button'

function Answers(props) {

    return (
        <>
        <p>Checked answers...</p> 
        <Button btn_action={props.restartQuiz} btn_text="Play again" /> 
        </>
    )

}

export default Answers