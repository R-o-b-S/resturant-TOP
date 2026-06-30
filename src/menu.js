import "./menu.css";
import carboImg from "../carbo-dish.jpg";
import paperaImg from "../papera-dish.jpg";
import fumeImg from "../fume-dish.jpg";

export function buildMenu () {
    const disc = document.createElement("p");
    disc.id = "disclaimer";
    let txt = "Menu changes every season but those are our best dishes:";
    disc.textContent = txt;
    document.getElementById("content").appendChild(disc);

    const div = document.createElement("div");
    div.id = "menuC";
    document.getElementById("content").appendChild(div);

    const dish1 = document.createElement("div");
    dish1.classList = "dish";
    dish1.id = "dish1";
    document.getElementById("menuC").appendChild(dish1);

    const img1 = document.createElement("img");
    img1.id = "carboDish";
    img1.src = carboImg;
    document.getElementById("dish1").appendChild(img1);

    const p1 = document.createElement("p");
    txt = "Carbonara";
    p1.textContent = txt;
    document.getElementById("dish1").appendChild(p1);

    const dish2 = document.createElement("div");
    dish2.classList = "dish";
    dish2.id = "dish2";
    document.getElementById("menuC").appendChild(dish2);

    const img2 = document.createElement("img");
    img2.id = "paperaDish";
    img2.src = paperaImg;
    document.getElementById("dish2").appendChild(img2);

    const p2 = document.createElement("p");
    txt = "Gnocchi alla papera";
    p2.textContent = txt;
    document.getElementById("dish2").appendChild(p2);

    const dish3 = document.createElement("div");
    dish3.classList = "dish";
    dish3.id = "dish3";
    document.getElementById("menuC").appendChild(dish3);

    const img3 = document.createElement("img");
    img3.id = "fumeDish";
    img3.src = fumeImg;
    document.getElementById("dish3").appendChild(img3);

    const p3 = document.createElement("p");
    txt = "Penne al fume'";
    p3.textContent = txt;
    document.getElementById("dish3").appendChild(p3);
}