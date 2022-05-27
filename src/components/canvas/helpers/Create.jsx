import { Rnd } from "react-rnd";
// import Card from "./elements/Card";
import Button from "./elements/Button";
import CustomImage from "./elements/Image";
import React, { useState } from "react";
import CustomModal from "./context/Modal";

const CreateAppxComponent = (props) => {
  const { elementType, classCounter } = props;
  const [position, setPosition] = useState({
    pageX: 0,
    pageY: 0,
  });
  const [contextMenu, setContextMenu] = useState(false);
  let currentStyle = { margin: 0, height: "100%", width: "100%" };
  let Element;
  let defaultSize = {
    x: 0,
    y: 0,
  };

  switch (elementType) {
    case "Button":
      Element = Button;
      break;
    case "Image":
      Element = CustomImage;
      defaultSize = {
        x: 0,
        y: 0,
        width: 200,
        height: 200,
      };
      break;
    default:
      break;
  }

  const openContextMenu = (e) => {
    e.preventDefault();
    const { pageX, pageY } = e;
    setPosition({ pageX, pageY });
    setContextMenu(true);
  };

  const closeContextMenu = () => {
    setContextMenu(false);
  };

  // Great Project - another small change

  return (
    <React.Fragment>
      <Rnd
        bounds="#canvas"
        onContextMenu={(e) => openContextMenu(e)}
        key={classCounter}
        default={defaultSize}
      >
        <Element style={currentStyle} />
      </Rnd>
      {contextMenu ? (
        <CustomModal
          elementType={elementType}
          onClose={closeContextMenu}
          position={position}
        ></CustomModal>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default CreateAppxComponent;
