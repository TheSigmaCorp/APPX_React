import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../redux/elements";

const Elements = [
  {
    title: "Text",
    icon: "bi bi-fonts",
  },
  {
    title: "Button",
    icon: "bi bi-menu-button",
  },
  {
    title: "Link",
    icon: "bi bi-link",
  },
  {
    title: "Image",
    icon: "bi bi-card-image",
  },
  {
    title: "Video",
    icon: "bi bi-play-btn",
  },
];

export default function Sidebar() {
  const [elementsStatus, setElementsStatus] = useState(true);
  const dispatch = useDispatch();
  const { selectedElement } = useSelector((state) => state.elements);

  return (
    <div className="sidebar">
      <div className="elements">
        <div className="elementsHeader">Pages</div>
        <small>dashboard page</small>
      </div>
      <div className="elements">
        <div className="elementsHeader">Elements</div>
        <div
          className="elementsHeader"
          id="elementHeader"
          onClick={() => {
            setElementsStatus(!elementsStatus);
          }}
        >
          Visual Elements{" "}
          <i
            className={
              "bi " +
              (elementsStatus === true
                ? "bi-caret-down-fill"
                : "bi-caret-right-fill")
            }
          ></i>
        </div>
        {elementsStatus ? (
          <div className="visualElements" id="visualElements">
            <div className="row">
              {Elements.map((element, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      selectedElement !== element.title
                        ? dispatch(selectElement(element.title))
                        : dispatch(selectElement(""));
                    }}
                    className={
                      selectedElement === element.title
                        ? "selected text-center col"
                        : "text-center col"
                    }
                  >
                    <i className={element.icon}></i>
                    <div>{element.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
