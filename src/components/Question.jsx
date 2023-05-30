import {decode} from 'html-entities';
import Answer from './Answer'

function Question(props){

    const answers = props.answers.map( (item,key) => {
        return (
            <Answer key={key} answer={item}></Answer>
        )
    })
    return (
        <div className="w-3/4 text-left">
            <h3 className="font-karla text-primary font-bold text-base leading-5 mb-5">{decode(props.question)}</h3>
            <ul className="flex justify-start space-x-4">
                {answers}
            </ul>
            
            <hr />
        </div>
    )
}

export default Question