function Button(props) {

    return (
        <button 
            className="rounded-2xl bg-secondary text-white px-8 py-2"
            onClick={props.btnAction}
            >{props.btnText}</button>
    )

}

export default Button