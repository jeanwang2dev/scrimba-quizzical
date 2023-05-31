import Button from './Button'

function Results(props) {

    return (
        <>
        <p>Checked answers...</p> 
        <Button btnAction={props.restartQuiz} btnText="Play again" /> 
        </>
    )

}

export default Results