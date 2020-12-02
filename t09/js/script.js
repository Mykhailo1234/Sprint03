// @ts-check
// підключаємо js
let area = document.getElementById('area'),
    move = 0;

//задаємо параметр (оновити сторінку)
//! button 
function Search() {  
    location.reload();
}

//відстежуємо клік
document.getElementById('turns-count').innerHTML = 0;
area.addEventListener('click', function (event) {

    // ====  перевірка працездатності  ====
    // console.log('click');  підраховує кліки
    // console.log(event);  запам'ятовує клітку
    // console.log(event.target);  виводить розташування клітини в html

    //блокує зайняті клітинки
    if (event.target.textContent != "") {  
        return false
    }

    //визначає хід
    if (move % 2 === 0) {
        event.target.innerHTML = 'X';  //прирівнюємо до кліка 'X'
        document.getElementById('turns-count').innerHTML = Number(document.getElementById('turns-count').innerHTML) + 1;
    }
    else {
        event.target.innerHTML = '0';
        document.getElementById('turns-count').innerHTML = Number(document.getElementById('turns-count').innerHTML) + 1;
    }
    move++;  //змінює гравця
    check();
});

// колір при перемозі
function setColorPanel() {
        document.querySelector(".sidebar").style.background = "green";
}
function check() {
    let boxes = document.getElementsByClassName('box');
    let arr = [
        //перевірка масиву (по вертикалі ...)
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [2, 4, 6],
        [0, 4, 8]
    ]
    //перевірка масиву [0, 1, 2] на збіги
    for (let i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
            setColorPanel();
        }
        else if (boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0') {
            alert('0');
        }
    }
}