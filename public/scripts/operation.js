"use strict";

/** Resize Canvas Based on Mobile or Desktop Device **/
export function resizeCanvas(device){
    if (device === "mobile") {
        document.getElementById("canvas").style.height = "600px";
        document.getElementById("canvas").style.width = "325px";
    } else {
        document.getElementById("canvas").style.height = "95vh";
        document.getElementById("canvas").style.width = "calc(100% - 150px)";
    }
}
/** toggle elements **/
export function showHideVisualElements(triggerId,elementId){
    let element = document.getElementById(elementId);
    let trigger = document.getElementById(triggerId)
    trigger.addEventListener("click",()=>{
      let state = element.style.display == "none" ? "block" : "none";
      element.style.display = state
    },false)
}