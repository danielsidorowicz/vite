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





import { CustomDiv, gameobj } from "./modules/js/customdiv.js";

let size = 5

document.body.onload = function loadsize() {
    let counter = 1
    document.getElementById('game').innerHTML = ''
    let left = 50
    size = document.getElementById('size').value
    gameobj = {}
    gameobj.size = size
    for (let i = 0; i < size; i++) {
        let top = 50
        for (let j = 0; j < size; j++) {
            if (i % 2 != 0 && j == 0) {
                top += 50
            }
            let customDiv = new CustomDiv(100, counter, i, j)
            customDiv.setXY(left, top)
            document.getElementById('game').append(customDiv.getRoot())
            top += 100
            counter++
        }
        left += 100
    }
}


document.getElementById('size').onchange = function changesize() {
    let counter = 1
    document.getElementById('game').innerHTML = ''
    let left = 50
    size = document.getElementById('size').value
    gameobj = {}
    gameobj.size = size
    for (let i = 0; i < size; i++) {
        let top = 50
        for (let j = 0; j < size; j++) {
            if (i % 2 != 0 && j == 0) {
                top += 50
            }
            let customDiv = new CustomDiv(100, counter, i, j)
            customDiv.setXY(left, top)
            document.getElementById('game').append(customDiv.getRoot())
            top += 100
            counter++
        }
        left += 100
    }
}

