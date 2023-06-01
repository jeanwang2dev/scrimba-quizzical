import {decode} from 'html-entities';

function Answer(props) {

    console.log("answer props: ", props)

    let answerStyle = {
        opacity: 0.5
    };
    if(props.correctAnswerIdx === props.id && props.userAnswerIdx === props.id){
        console.log("right!")
        answerStyle = {
            backgroundColor: "#94D7A2",
            border: 0
        }
    }
    if(props.correctAnswerIdx !== props.id && props.userAnswerIdx === props.id){
        answerStyle = {
            backgroundColor: "#F8BCBC",
            border:0
        }
    }

    return (
        <span 
            id={props.id} style={answerStyle}
            className={`answer-btn`} >{decode(props.answerChoice)}</span>
    )

}

export default Answer