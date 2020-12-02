//функція викликається з двома рядками
function concat(string1, string2) {  //concat-використовується для об'єднання двох або більше рядків
    let resStr = "";
    if (string2) {
        resStr = resStr.concan(string1, " ", string2);
        return resStr;
    }


    //функція викликається з одним рядком
    function func() {
        let resStr = "";
        string2 = prompt("input string 2 : ");  //функція, яка запитує другий рядок
        func.count += 1;  //лічильник властивостей, що враховує виклик підфункції
        resStr = resStr.concat(string1, " ", string2);
        return resStr;
    }

    func.count = 0;
    return func;
}


