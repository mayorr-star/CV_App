/* eslint-disable react/prop-types */
const Button = ({type = "button", text}) => {
    return (
        <button type={type}>{text}</button>
    )
}

export default Button;