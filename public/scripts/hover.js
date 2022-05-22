"use strict";

export default function simulateHover(element) {
    element.addEventListener("mouseover", function (e) {
        console.log("mouseover",element.style)
        /** Show a standard blue dashed outline !  **/
        element.style.outline = "1px dashed blue"
    }, false)
    element.addEventListener("mouseout", function (e) {
        console.log("mouseover",element.style)
        /** Remove the outline on unFocus !  **/
        element.style.outline = "none"
    }, false)
}