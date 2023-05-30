function Button(props) {

    return (
        <button 
            className="rounded-2xl bg-secondary text-white px-10 py-4"
            onClick={props.btn_action}
            >{props.btn_text}</button>
    )

}

export default Button