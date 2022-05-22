import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createComponent from "./helpers/Create";
import { selectElement } from "../../redux/elements";
import { Rnd } from "react-rnd";

export default function Canvas() {
  const { selectedElement } = useSelector((state) => state.elements);
  const [counter, setCounter] = useState(0);
  const [components, setComponents] = useState([]);
  const dispatch = useDispatch();
  const dropElement = (e) => {
    if (selectedElement !== "") {
      let elems = components;
      let elem = createComponent(selectedElement, "canvas", counter);
      elems.push(elem);
      setComponents(elems);
      dispatch(selectElement(""));
      setCounter((counter) => counter + 1);
    }
  };
  return (
    <div id="canvas" className="canvas-mobile" onClick={(e) => dropElement(e)}>
      {/* Magic will happen here  */}
      {components}
    </div>
  );
}
