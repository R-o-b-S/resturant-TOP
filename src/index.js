import "./styles.css";
import "./home.js";

console.log ("test");

function clearContent () {
    const myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    } 
}

document.getElementById("menu").onclick = clearContent;