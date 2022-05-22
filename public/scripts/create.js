"use strict";

import makeResizable from "./resize.js";
import makeDraggable from "./drag.js";
import simulateHover from "./hover.js";
import openProperties from "./properties.js"

export default function createElement(elementType, canvasId, classCounter) {
    let canvas = document.getElementById(canvasId)
    let element = buildElement(elementType);
    element.className = element.className + " class-" + classCounter
    element.id = "identification-" + (classCounter)
    element.style.position = "relative"
    canvas.appendChild(element);
    makeDraggable(element)
    makeResizable(element)
    simulateHover(element)
    openProperties(element)
}

function buildElement(elementType) {
    let parent = document.createElement("div");
    parent.className = "elementContainer"
    let element;
    if (elementType === "Text") {
        element = document.createElement("text")
        element.innerText = "Normal Text"
    }

    if (elementType === "Button") {
        element = document.createElement("button")
        element.innerText = "Click Me"
        element.className = "button btn btn-success"
    }

    if (elementType === "Link") {
        element = document.createElement("a")
        element.href = "#"
        element.innerText = "Click me to open."
    }

    if (elementType === "Image") {
        element = document.createElement('img')
        element.src = "https://via.placeholder.com/150";
        element.className = "image img-fluid img-thumbnail"
    }

    if (elementType === "Video") {
        element = document.createElement("video")
        // 👇️ Local file
        // video.src = 'video.mp4';

        // 👇️ Remote file
        element.src =
            'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';

        element.poster =
            'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217';

        element.autoplay = false;
        element.controls = true;
        element.muted = false;
        element.height = 240; // 👈️ in px
        element.width = 320; // 👈️ in px
    }
    parent.appendChild(element)
    return parent;
}


/** ToolJet Learning ! **/
// draft-js 
// dompurify
// driver.js 
// emoji-mart
// html-loader
// immer
// react-rnd
// react-spring
// react-zoom-pan-pinch
