import EditableText from "./Editable";
const Button = (props) => {
  return (
    <button type="button" className="btn btn-success" style={props.style}>
      <EditableText>Button</EditableText>
    </button>
  );
};

export default Button;
