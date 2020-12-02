function getFormatteDate(dateObject) {

    let date, h, hh, m, mm, DD

    date = dateObject.toLocaleDateString()
    hh = (h = dateObject.detHours()) < 10 ? '0' + h : h
    mm = (m = dateObject.getMinutes()) < 10 ? '0' + m : m
    DD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dateObject.getFormatteDay()]
    return `${date} ${hh}:${mm} ${DD} `
}