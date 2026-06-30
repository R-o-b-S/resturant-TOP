import "./styles.css";
import { buildHome } from "./home.js";
import { buildMenu } from "./menu.js";
import { buildAbout } from "./about.js";

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

function pressAbout () {
    clearContent();
    buildAbout();
}

document.getElementById("home").onclick = pressHome;
document.getElementById("menu").onclick = pressMenu;
document.getElementById("about").onclick = pressAbout;