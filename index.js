import '/modules/css/style.css';

for (let i = 1; i < 9; i++) {
    let option = document.createElement("option")
    option.value = i
    option.text = i
    if (i == 5) {
        option.selected = i
    }
    document.getElementById('size').append(option)
}





import CustomDiv from "./modules/js/customdiv.js";

let size = 5

document.body.onload = function siteloaded() {
    document.getElementById('game').innerHTML = ''
    let left = 50
    size = document.getElementById('size').value
    for (let i = 0; i < size; i++) {
        let top = 50
        for (let j = 0; j < size; j++) {
            if (i % 2 != 0 && j == 0) {
                top += 50
            }
            let customDiv = new CustomDiv(100)
            customDiv.setXY(left, top)
            console.log(customDiv);
            document.getElementById('game').append(customDiv.getRoot())
            top += 100
        }
        left += 100
    }
}


document.getElementById('size').onchange = function changesize() {
    document.getElementById('game').innerHTML = ''
    let left = 50
    size = document.getElementById('size').value
    for (let i = 0; i < size; i++) {
        let top = 50
        for (let j = 0; j < size; j++) {
            if (i % 2 != 0 && j == 0) {
                top += 50
            }
            let customDiv = new CustomDiv(100)
            customDiv.setXY(left, top)
            console.log(customDiv);
            document.getElementById('game').append(customDiv.getRoot())
            top += 100
        }
        left += 100
    }
}






