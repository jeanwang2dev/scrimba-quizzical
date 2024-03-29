import {decode} from 'html-entities';
import Option from './Option'
import Answer from './Answer'

function Question(props){

    // console.log("question props: ", props)

    let options

    if(props.isCheckedMode){
        options = props.options.map( (item,key) => {
            return (
                <Answer 
                    key={key}  
                    id={key} 
                    questionIdx={props.questionIdx} 
                    answerChoice={item.option}
                    correctAnswerIdx={props.correctAnswerIdx}
                    userAnswerIdx={props.userAnswerIdx}
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
    

    return (
        <div className="w-11/12 text-left md:w-3/4">
            <h3 className="font-karla text-primary font-bold text-base leading-5 mb-5">{decode(props.question)}</h3>
            <ul className="flex justify-between flex-wrap space-x-1 md:space-x-4 md:justify-start md:flex-nowrap">
                {options}
            </ul>
            
            <hr />
        </div>
    )
}

export default Question