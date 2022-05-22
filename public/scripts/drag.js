"use strict";

export default function makeDraggable(element) {
	console.log("Coming Here !",element)
	element.addEventListener("mousedown", () => {
		console.log("Mouse Down")
		element.children[0].classList.add("dragging");
		element.addEventListener("mousemove", onDrag, false);
	}, false);
	element.addEventListener("mouseup", () => {
		element.children[0].classList.remove("dragging")
		element.removeEventListener("mousemove", onDrag, false)
	}, false)
	element.addEventListener("mouseleave", () => {
		element.children[0].classList.remove("dragging")
		element.removeEventListener("mousemove", onDrag, false)
	}, false)
}

function onDrag(e) {
	console.log(e.target.tagName)
	e.preventDefault()
	let element = e.target.parentNode;
	let getStyle = window.getComputedStyle(element);
	let left = parseInt(getStyle.left)
	let top = parseInt(getStyle.top)
	element.style.left = `${left + e.movementX}px`
	element.style.top = `${top + e.movementY}px`
}


