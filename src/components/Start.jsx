import Button from './Button'

function Start(props) {

    return (
        <>
        <h1 className="font-karla font-bold text-3xl mb-2">Quizzical</h1>
        <p className="font-inter font-medium text-base mb-6">Some description if needed</p>
        <Button btnAction={props.startQuiz} btnText="Start quiz" /> 
        </>
    )

}

export default Start