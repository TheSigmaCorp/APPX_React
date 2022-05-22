"use strict";
/** To hold any existing template on the editor , just an fucking experiment 
 * It ll hold the components one by one 
 * Great Idea Lets See 
 * **/
import createElement from "./create.js"
import { resizeCanvas, showHideVisualElements } from './operation.js';

var classCounter = 0;

/** Variables to Drop elements to the canvas **/
var selectedElement;
var canvas = document.getElementById("canvas");

toggleEditorCSS();
selectElement();
dropElementinSpace();
showHideVisualElements('elementHeader', 'visualElements');

function updateCanvas(device) {
    resizeCanvas(device)
}

window.updateCanvas = updateCanvas // making this function global and outside module scope 

/** apply editor's css **/
function toggleEditorCSS() {
}


function selectElement() {
    let elements = document.querySelectorAll(".visualElements ul li")
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.addEventListener("click", function () {
            elements.forEach(el => {
                el.classList.remove("selected")
            })
            element.classList.add("selected")
            selectedElement = this.innerText;
            showAlert(selectedElement + " Selected")
        })
    }
}

function showAlert(message) {
    let alert = document.getElementById("alert");
    alert.innerText = message
    alert.style.display = "block";
    setTimeout(() => {
        alert.style.display = "none";
    }, 1000);
}

function dropElementinSpace() {
    canvas.addEventListener('click', function (e) {
        console.log(e.key)
        if (selectedElement != null || selectedElement != undefined) {
            console.log("Create Element")
            createElement(selectedElement, canvas, classCounter++);
            let elements = document.querySelectorAll(".visualElements ul li")
            elements.forEach(el => {
                el.classList.remove("selected")
            })
            selectedElement = null
        }
    })
}
