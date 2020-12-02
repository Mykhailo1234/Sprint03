let getH2 = document.getElementById("hero");
let getDiv = document.getElementById("lab");

function transformation() {
    //Get style div => отримати стиль div 
    //Get computed style => обчислюється стиль
    //Get property value => обчислюється "background"
    let getStyleDiv = window.getComputedStyle(getDiv, null).getPropertyValue("background");
    //немає повторної прокрутки 0% 0% / межа поля автоматичного заповнення
    if (getStyleDiv == "rgb(255, 179, 0) none repeat scroll 0% 0% / auto padding-box border-box") {
        getDiv.style.background = "#70964b";  //колір фону #70964b
        getH2.innerHTML = "Hulk";  //відображає банер "Hulk"
        getH2.style.fontSize = "130px";  //розміром шрифту 130 пікселів
        getH2.style.letterSpacing = "6px";  //інтервал між буквами 6 пікселя
    }
    else if (getStyleDiv == "rgb(112, 150, 75) none repeat scroll 0% 0% / auto padding-box border-box") {
        getDiv.style.background = "#ffb300";  
        getH2.innerHTML = "Bruce Banner";  
        getH2.style.fontSize = "60px";  
        getH2.style.letterSpacing = "2px";  
    }
}