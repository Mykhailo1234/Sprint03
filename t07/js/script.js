let getLi = document.getElementById("characters").children;
let myDiv;
let reg = /\s[\s]*/;
let getSplitedDataLi;
let myBr;

function createDiv(myDiv, getDataLi) {
    let divLine;
    myDiv = document.createElement("div");
    myDiv.setAttribute("class", "elem " + getDataLi);
    if (getDataLi == "none") {
        divLine = document.createElement("div");
        divLine.setAttribute("class", "line");
        myDiv.appendChild(divLine);
    }
    return myDiv;
}


for (let i = 0; i < getLi.length; i++) {
    let getClassLi = getLi[i].getAttribute("class");
    let getDataLi = getLi[i].getAttribute("data-element");
    if (!getClassLi || (getClassLi != "good" && getClassLi != "evil"
        && getClassLi != "unknown"))
        getLi[i].className = "unknown";
    if (!getDataLi)
        getLi[i].setAttribute("data-element", "none");

    getDataLi = getLi[i].getAttribute("data-element");
    getSplitedDataLi = getDataLi.split(reg);
    myBr = document.createElement("br");
    getLi[i].appendChild(myBr);
    for (let j = 0; j < getSplitedDataLi.length; j++) {
        myDiv = createDiv(myDiv, getSplitedDataLi[j]);
        getLi[i].appendChild(myDiv);
    }

}