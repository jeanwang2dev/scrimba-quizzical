import {decode} from 'html-entities';
import Option from './Option'
import Answer from './Answer'

function Question(props){

    console.log("question props: ", props)

    let options

    if(props.isCheckedMode){
        options = props.options.map( (item,key) => {
            return (
                <Answer 
                    key={key}  
                    id={key} 
                    questionIdx={props.questionIdx} 
                    answerChoice={item.option}
                    isChecked={item.isChecked}
                />
            )
        })
    } else {
        options = props.options.map( (item,key) => {
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
    }
    



    // const content = props.isCheckedMode ? options : 

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