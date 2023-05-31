import {useState} from 'react'
import {decode} from 'html-entities';

function Option(props) {

    return (
        <span 
            id={props.id} 
            onClick={()=> props.userAnswer(props.questionIdx, props.id)} 
            className={`option-btn ${props.isChecked ? "bg-tertiary border-0": ""}`} >{decode(props.answerChoice)}</span>
    )

}

export default Option