import "./styles.css";
import { buildHome } from "./home.js";
import { buildMenu } from "./menu.js";

//buildHome();

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

function pressMenu () {
    clearContent();
    buildMenu();
}

document.getElementById("home").onclick = pressHome;
document.getElementById("menu").onclick = pressMenu;