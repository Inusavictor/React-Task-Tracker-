const Button = ({ onToggleAdd, color, text }) => {
  return (
    <button
      onClick={onToggleAdd}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
};
export default Button;
