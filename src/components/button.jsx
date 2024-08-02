/* eslint-disable react/prop-types */
const Button = ({type = "button", text, handleClick, isActive, classId}) => {
    return (
        <button type={type} onClick={handleClick} disabled={!isActive} className={classId}>{text}</button>
    )
}

export default Button;