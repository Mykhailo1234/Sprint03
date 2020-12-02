let heroesArr = ["Black Panther", "Capitan America", "Capitan Marvel", "Hulk",
    "Iron Man", "Spider-Man", "Thanos", "Thor", "Yon-Rogg"];
let strenghtArr = ["66", "79", "97", "80", "88", "78", "99", "95", "73"];
let ageArr = ["53", "137", "26", "49", "48", "16", "1000", "1000", "52"];
let attrArr = ["Name", "Strength", "Age"];
let order = true;
let ifNumb;
let service = "Sorting by Name, order: ASC";

function getElem(elem) {
    let getElem = document.getElementById(elem);
    return getElem;
}

function createElem(elem) {
    let createdElem = document.createElement(elem);
    return createdElem;
}

function clearText(elem) { elem.innerHTML = ""; }

function swap(arr, a, b) { arr[a] = arr.splice(b, 1, arr[a])[0]; }

function createTable() {
    let getDiv = getElem("notification");
    let newTable = createElem("table");
    let newTr;
    let newTd;
    let counter = 0;

    newTable.style.border = "4px solid black";
    newTable.style.margin = "auto";
    getDiv.append(newTable);
    for (let i = 0; i < 10; i++) {
        newTr = document.createElement("tr");
        newTable.append(newTr);
        for (let j = 0; j < 3; j++) {
            newTd = createElem("td");
            newTr.append(newTd);
            
            newTd.style.width = "80px";
            newTd.style.textAlign = "center";
            i == 0 ? newTd.style.background = "red" : newTd.style.background = "lightgrey";
            newTd.style.padding = "10px";
            
            if (i == 0) {
                newTd.innerHTML = attrArr[j];
                switch (j) {
                    case 0: newTd.setAttribute("id", "sortName"); break;
                    case 1: newTd.setAttribute("id", "sortStrength"); break;
                    case 2: newTd.setAttribute("id", "sortAge"); break;
                }
            }
            else {
                switch (j) {
                    case 0: newTd.innerHTML = heroesArr[counter]; break;
                    case 1: newTd.innerHTML = strenghtArr[counter]; break;
                    case 2: newTd.innerHTML = ageArr[counter]; break;
                }
            }
        }
        i != 0 ? counter++ : counter;
    }

}

function sortBy(arr, secondArr, thirdArr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (!ifNumb) {
                if (order == true) {
                    if (arr[j] > arr[j + 1]) {
                        swap(arr, j, j + 1);
                        swap(secondArr, j, j + 1);
                        swap(thirdArr, j, j + 1);
                    }
                }
                else {
                    if (arr[j] < arr[j + 1]) {
                        swap(arr, j, j + 1);
                        swap(secondArr, j, j + 1);
                        swap(thirdArr, j, j + 1);
                    }
                }
            }
            else {
                if (order == true) {
                    if (+arr[j] > +arr[j + 1]) {
                        swap(arr, j, j + 1);
                        swap(secondArr, j, j + 1);
                        swap(thirdArr, j, j + 1);
                    }
                }
                else {
                    if (+arr[j] < +arr[j + 1]) {
                        swap(arr, j, j + 1);
                        swap(secondArr, j, j + 1);
                        swap(thirdArr, j, j + 1);
                    }
                }
            }
        }
    }

    order ? order = false : order = true;
}

function reRenderTable() {
    let contTd = 0;
    let getTr = document.getElementsByTagName("tr");

    for (let i = 1; i < getTr.length; i++) {
        for (let j = 0; j < 3; j++) {
            switch (j) {
                case 0: getTr[i].children[j].innerHTML = heroesArr[contTd]; break;
                case 1: getTr[i].children[j].innerHTML = strenghtArr[contTd]; break;
                case 2: getTr[i].children[j].innerHTML = ageArr[contTd]; break;
            }
        }
        contTd++;
    }
    order ? service += " DESC" : service += " ASC";
    getNotif.innerHTML = service;
}
clearText(getElem("notification"));
clearText(getElem("placeholder"));
createTable();

let getSortName = getElem("sortName");
let getSortStrength = getElem("sortStrength");
let getSortAge = getElem("sortAge");
let getNotif = getElem("placeholder");

getNotif.innerHTML = service;
getNotif.style.width = "auto";
getNotif.style.height = "20px";
getNotif.style.background = "grey";
getNotif.style.position = "absolute";
getNotif.style.right = "10px";
getNotif.style.top = "20px";
getNotif.style.border = "1px solid black";
getNotif.style.borderRadius = "20px";
getNotif.style.padding = "10px";
getSortName.addEventListener("click", function () {
    ifNumb = false; service = "Sorting by Name,"; sortBy(heroesArr, strenghtArr, ageArr); reRenderTable();
});
getSortStrength.addEventListener("click", function () {
    ifNumb = true; service = "Sorting by Strengh,"; sortBy(strenghtArr, heroesArr, ageArr); reRenderTable();
});
getSortAge.addEventListener("click", function () {
    ifNumb = true; service = "Sorting by Age,"; sortBy(ageArr, heroesArr, strenghtArr); reRenderTable();
});