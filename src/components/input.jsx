/* eslint-disable react/prop-types */
const Input = ({
  type = "text",
  name,
  id = name,
  dataId = name, 
  text,
  handlechange,
  value,
  placeholder,
  isActive
}) => {
  return (
    <div className="input_control">
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        name={name}
        id={id}
        data-id={dataId}
        onChange={(e) => handlechange(e)}
        value={value}
        placeholder={placeholder}
        disabled={!isActive}
      />
      <div className="error"></div>
    </div>
  );
};
export default Input;

const TextArea = ({ text, id, handlechange, placeholder, isActive, dataId }) => {
  return (
    <div className="input_control">
      <label htmlFor={id}>{text}</label>
      <textarea rows={5} cols={20} id={id} onChange={handlechange} placeholder={placeholder} disabled={!isActive} data-id={dataId}></textarea>
      <div className="error"></div>
    </div>
  );
};
export { TextArea };
