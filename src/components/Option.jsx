import {useState} from 'react'

function Option(props) {

    return (
        <span 
            id={props.id} 
            onClick={()=> props.userAnswer(props.questionIdx, props.id)} 
            className={`answer-btn ${props.isChecked ? "bg-tertiary border-0": ""}`} >{props.answerChoice}</span>
    )

}

export default Option