/* eslint-disable react/prop-types */
function Input({ type, placeholder, onChange }) {
  return (
    <div className="today">
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

export default Input;
