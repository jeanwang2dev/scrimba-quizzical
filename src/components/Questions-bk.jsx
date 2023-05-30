
import Button from './Button'
import DataFetcher from './DataFetcher'

function Questions(props) {

    return (
        <>
        <DataFetcher url="https://opentdb.com/api.php?amount=5&type=multiple">
            {(data, loading) => {
                    return (
                        loading ? 
                        <h1>Loading...</h1> :
                        <p>{JSON.stringify(data)}</p>
                    )
            }}
        </DataFetcher>
        <Button btn_action={props.checkAnswers}  btn_text="Check answers" /> 
        </>
    )

}

export default Questions