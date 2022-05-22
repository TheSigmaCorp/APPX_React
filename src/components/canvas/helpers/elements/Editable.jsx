import React, { useEffect, useState } from "react";

const EditableText = (props) => {
  const [text, setText] = useState("");
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    console.log("Here Again !");
    if (typeof props.children) setText(props.children);
  }, [props.children]);
  return (
    <React.Fragment>
      {editable ? (
        <input
          type="email"
          className="form-control input-sm"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          defaultValue={text}
          autoFocus
          onChange={(e) => {
            setText(e.target.value);
          }}
          onBlur={(e) => {
            setEditable(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") setEditable(false);
          }}
          style={{
            padding: 0,
            width: text.length + "ch",
            borderRadius: "0px",
          }}
        />
      ) : (
        <span
          onDoubleClick={(e) => {
            setEditable(true);
          }}
        >
          {text}
        </span>
      )}
    </React.Fragment>
  );
};

export default EditableText;
