import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createComponent from "./helpers/Create";
import { selectElement } from "../../redux/elements";
import Modal from "./helpers/context/Modal";

export default function Canvas() {
  const { selectedElement } = useSelector((state) => state.elements);
  const [counter, setCounter] = useState(1);
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
    <React.Fragment>
      <div
        id="canvas"
        className="canvas-mobile"
        onClick={(e) => dropElement(e)}
      >
        {/* Magic will happen here  */}
        {components}
      </div>
      <Modal />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
        id="modalOpener"
        style={{ display: "none" }}
      >
        Open modal for @getbootstrap
      </button>
    </React.Fragment>
  );
}
