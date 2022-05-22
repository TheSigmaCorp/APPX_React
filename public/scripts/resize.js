"use strict";

export default function makeResizable(actualElement) {
	actualElement.addEventListener("click", () => {
		console.log("Clicked", actualElement.children[0])
		let element = actualElement.children[0];
		let resizer;
		if (!resizer) {
			element?.classList?.add('resizable');
			resizer = createResizer()  // to make sure multiple resizer do not get created !
		}


		/**  Performing the resize  **/
		var startX, startY, startWidth, startHeight;
		function initDrag(e) {
			startX = e.clientX;
			startY = e.clientY;
			startWidth = parseInt(document.defaultView.getComputedStyle(element).width, 10);
			startHeight = parseInt(document.defaultView.getComputedStyle(element).height, 10);
			document.documentElement.addEventListener('mousemove', doDrag, false);
			document.documentElement.addEventListener('mouseup', stopDrag, false);
		}

		function doDrag(e) {
			element.style.width = (startWidth + e.clientX - startX) + 'px';
			element.style.height = (startHeight + e.clientY - startY) + 'px';
			resizer.remove(); // to make sure the position of resizser if perfect
			resizer = createResizer()
		}

		function stopDrag(e) {
			document.documentElement.removeEventListener('mousemove', doDrag, false); document.documentElement.removeEventListener('mouseup', stopDrag, false);
		}

		function createResizer() {
			resizer = document.createElement('div');
			resizer.className = 'resizer';
			element.parentNode.appendChild(resizer);
			resizer.addEventListener('mousedown', initDrag, false);
			return resizer
		}

		/** Click outside Element **/
		document.onclick = function (e) {
			console.log(e.target.parentNode, element)
			if (e.target !== element) {
				resizer?.remove();
				element?.classList?.remove('resizable')
			}
		}

	}, false)
}