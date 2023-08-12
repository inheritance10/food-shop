const CustomButton = (props: {text: string, addClass?: string, children?: any}) => {
    const {text, addClass,children} = props
    return(
        <button className={addClass}>
            {text}
            {children ? children : null}
        </button>
    )
}


export default CustomButton