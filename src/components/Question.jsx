import {decode} from 'html-entities';
import Option from './Option'

function Question(props){

    const options = props.answers.map( (item,key) => {
        return (
            <Option 
                key={key}  
                id={key} 
                questionIdx={props.questionIdx} 
                userAnswer={props.answerAction} 
                answerChoice={item.option}
                isChecked={item.isChecked}
            />
        )
    })
    return (
        <div className="w-3/4 text-left">
            <h3 className="font-karla text-primary font-bold text-base leading-5 mb-5">{decode(props.question)}</h3>
            <ul className="flex justify-start space-x-4">
                {options}
            </ul>
            
            <hr />
        </div>
    )
}

export default Question