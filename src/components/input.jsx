/* eslint-disable react/prop-types */
const Input = ({ type, name, id = name, text }) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input type={type} name={name} id={id} />
    </>
  );
};
export default Input;