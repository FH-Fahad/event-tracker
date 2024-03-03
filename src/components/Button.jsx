/* eslint-disable react/prop-types */
function Button({ type, text, onClick, isActive }) {
  return (
    <button
      className={isActive ? "activeButton" : "inactiveButton"}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
