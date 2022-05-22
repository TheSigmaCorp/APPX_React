export default function openProperties(element) {
    element.addEventListener("contextmenu", function (e) {
        document.getElementById('properties_popup')?.remove();
        var popup; 
        e.preventDefault();
        if (!popup) {
            popup = document.createElement("div");
            popup.id = "properties_popup";
            popup.className = "properties_popup";
            popup.innerHTML = `<p>Modal body text goes here.</p>`;
            document.getElementById("canvas").appendChild(popup);
        }
        popup.style.left = e.pageX + "px";
        popup.style.top = e.pageY + "px";

        /** Click outside Element **/
        document.onclick = function (e) {
            console.log("Still Getting Clicked !")
            if (e.target.id != element.id) {
                document.getElementById(popup?.id)?.remove();
                popup = null;
            }
        }
    }, false)
}