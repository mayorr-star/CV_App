/* eslint-disable react/prop-types */
const Button = ({type = "button", text, handleClick, isActive}) => {
    return (
        <button type={type} onClick={handleClick} disabled={!isActive}>{text}</button>
    )
}

export default Button;