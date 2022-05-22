import { Rnd } from "react-rnd";
// import Card from "./elements/Card";
import Button from "./elements/Button";
import CustomImage from "./elements/Image";
import React from "react";

const createComponent = (elementType, canvasId, classCounter) => {
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

  console.log(classCounter);

  const openContextMenu = (e) => {
    e.preventDefault();
  };

  // Great Project - another small chnage

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
    </React.Fragment>
  );
};

export default createComponent;
