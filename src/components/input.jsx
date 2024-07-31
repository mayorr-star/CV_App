/* eslint-disable react/prop-types */
const Input = ({
  type = "text",
  name,
  id = name,
  text,
  handlechange,
  value,
  placeholder,
  isActive
}) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={(e) => handlechange(e)}
        value={value}
        placeholder={placeholder}
        disabled={!isActive}
      />
    </>
  );
};
export default Input;

const TextArea = ({ text, id, handlechange, placeholder, isActive }) => {
  return (
    <>
      <label htmlFor="text_area">{text}</label>
      <textarea rows={5} cols={20} id={id} onChange={handlechange} placeholder={placeholder} disabled={!isActive}></textarea>
    </>
  );
};
export { TextArea };
