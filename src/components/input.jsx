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

const TextArea = () => {
  return (
    <>
      <label htmlFor="text_area">Professional Statement:</label>
      <textarea rows={5} cols={10} id="text_area"></textarea>
    </>
  );
};
export { TextArea };
