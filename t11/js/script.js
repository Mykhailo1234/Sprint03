let getAddButton = document.getElementsByClassName("add");
let getClearButton = document.getElementsByClassName("clear");
let getText = document.getElementById("box");
let getOutArea = document.getElementById("secondBox");

// повертає значення атрибута value текстового поля
getOutArea.value = "[Empty]";
let getInfo = () => {  // передати значення змінної в іншу функцію
    getAddButton[0].addEventListener("click", setInfo);
}

let setInfo = () => {
    let resultStr = "";
    let arrovStr = "--> ";
    let coockieStr = "name=";
    if (!getText.value)
        alert("It's empty. Try to input something in \"Text input\".");
    else {
        if (getOutArea.value == "[Empty]")
            getOutArea.value = "";
        resultStr += arrovStr + getText.value + "\n";
        getOutArea.value += resultStr;
        coockieStr += getText.value + " ;" + "\n" 
        document.cookie += coockieStr;
        coockieStr = "name=";
        resultStr = "";
        getText.value = "";
    }
}

let resetInfo = () => {
    getClearButton[0].addEventListener("click", resetCookie);
}

let resetCookie = () => {
    let conf = confirm("Are you sure?");
    if (conf) {
        document.cookie = "name=; max-age=0";
        getOutArea.value = "[Empty]";
    }
}
getInfo();
resetInfo();