import "./home.css";


export function buildHome () {
    const div = document.createElement("div");
    div.id = "homeC";
    document.getElementById("content").appendChild(div);

    const div2 = document.createElement("div");
    div2.id = "magnaName";
    let txt = "Magna e zitto!";
    div2.textContent = txt;
    document.getElementById("homeC").appendChild(div2);

    const div3 = document.createElement("div");
    div3.id = "catch";
    txt = "Autentic Marche cuisine";
    div3.textContent = txt;
    document.getElementById("homeC").appendChild(div3);

    const div4 = document.createElement("div");
    div4.id = "smallerCatch";
    txt = "You will be fed like we are your nonna";
    div4.textContent = txt;
    document.getElementById("homeC").appendChild(div4);
}

