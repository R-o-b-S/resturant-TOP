import "./styles.css";
import { buildHome } from "./home.js";

buildHome();

function clearContent () {
    const myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    } 
}

function pressHome () {
    clearContent();
    buildHome();
}

document.getElementById("home").onclick = pressHome;