import "./about.css";

export function buildAbout () {
    const p = document.createElement("p");
    p.id = "aboutC"
    let txt = "Best cousine ever!";
    p.textContent = txt;
    document.getElementById("content").appendChild(p);
}