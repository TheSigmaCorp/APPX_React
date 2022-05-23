import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateAppxComponent from "./helpers/Create";
import { selectElement } from "../../redux/elements";

export default function Canvas() {
  const dispatch = useDispatch();
  const { selectedElement } = useSelector((state) => state.elements);
  const [counter, setCounter] = useState(1);
  const [components, setComponents] = useState([]);
  const dropElement = (e) => {
    console.log("Clicked !");
    if (selectedElement !== "") {
      let elems = components;
      console.log(elems);
      let elem = (
        <CreateAppxComponent
          elementType={selectedElement}
          classCounter={counter}
        />
      );
      elems.push(elem);
      setComponents(elems);
      dispatch(selectElement(""));
      setCounter((counter) => counter + 1);
    }
  };

  return (
    <React.Fragment>
      <div
        id="canvas"
        className="canvas-mobile"
        onClick={(e) => dropElement(e)}
      >
        {/* Magic will happen here  */}
        {components}
      </div>
    </React.Fragment>
  );
}
