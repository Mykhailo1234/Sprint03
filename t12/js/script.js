let getAddButton = document.getElementsByClassName("add");
let getClearButton = document.getElementsByClassName("clear");
let getText = document.getElementById("box");
let getOutArea = document.getElementById("secondBox");
let now = new Date().toLocaleString();
let countKeys = 0;

// повертає значення атрибута value текстового поля
getOutArea.value = "[Empty]";
let getInfo = () => {  // передати значення змінної в іншу функцію
    getAddButton[0].addEventListener("click", setInfo);
}

let setInfo = () => {
    let resultStr = "";
    let arrovStr = "--> ";

    if (!getText.value)
        alert("It's empty. Try to input something in \"Text input\".");
    else {
        if (getOutArea.value == "[Empty]")
            getOutArea.value = "";
        resultStr += arrovStr + getText.value + " " + "[" + now + "]" + "\n";
        getOutArea.value += resultStr;
        // Встановлює значення пари, визначеної ключем, у значення, створюючи нову пару ключ 
        localStorage.setItem("name" + countKeys, getText.value);
        countKeys++;
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
        localStorage.clear();
        getOutArea.value = "[Empty]";
    }
}
getInfo();
resetInfo();