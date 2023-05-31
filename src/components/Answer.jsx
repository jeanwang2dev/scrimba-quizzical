import {decode} from 'html-entities';

function Answer(props) {

    return (
        <span 
            id={props.id} 
            className={`answer-btn ${props.isChecked ? "bg-tertiary border-0": ""}`} >{decode(props.answerChoice)}</span>
    )

}

export default Answer