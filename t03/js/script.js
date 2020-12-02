function addWords(obj, str) {
    let reg = /\s[\s]*/;
    let splited = obj.words.trim().split(reg);
    let splited_two = str.trim().split(reg);

    for (let i = 0; i < splited_two.length; i++) {
        if (splited.indexOf(splited_two[i]) == -1)
            splited.push(splited_two[i]);
    }
    obj.words = splited.join(" ");
}

const obj = {
    words: "hello        world   to the death        "
}

function removeWords(obj, str) {
    let reg = /\s[\s]*/;
    let splited = obj.words.trim().split(reg);
    let splited_two = str.trim().split(reg);

    for (let i = 0; i < splited_two.length; i++) {
        if (splited.indexOf(splited_two[i]) != -1)
            splited.splice(splited.indexOf(splited_two[i]), 1);
    }
    obj.words = splited.join(" ");
}

function changeWords(obj, str, ch) {
    let reg = /\s[\s]*/;
    let splited = obj.words.trim().split(reg);
    let splited_two = str.trim().split(reg);

    for (let i = 0; i < splited_two.length; i++) {
        if (splited.indexOf(splited_two[i]) != -1)
            splited.splice(splited.indexOf(splited_two[i]), 1, ch);
    }
    obj.words = splited.join(" ");
}