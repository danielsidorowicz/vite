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





import { CustomDiv, CustomDivLoad, gameobj } from "./modules/js/customdiv.js";

let size = 5

document.body.onload = function loadsize() {
    let counter = 1
    document.getElementById('game').innerHTML = ''
    let left = 50
    size = document.getElementById('size').value
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


document.getElementById('sendToServer').addEventListener('click', function () {

    let parse = JSON.parse(document.getElementById('jsondata').innerText)

    const data = JSON.stringify({
        json: parse
    })

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    }

    fetch("/saveFile", options)
})

document.getElementById('loadFromFile').addEventListener('click', function () {

    document.getElementById('game').innerHTML = ''
    const data = JSON.stringify({
        ask: 'Send',
    })

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    }

    fetch("/loadSave", options)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            document.getElementById('jsondata').innerText = JSON.stringify(json, null, 2)
            let counter = 1
            let left = 50
            size = json.size
            for (let i = 0; i < size; i++) {
                let top = 50
                for (let j = 0; j < size; j++) {
                    if (i % 2 != 0 && j == 0) {
                        top += 50
                    }
                    let found = false
                    json.level.find(function (element) {
                        if (element.x == i && element.z == j) {
                            let customDivLoad = new CustomDivLoad(100, counter, i, j, element.dirOut, element.dirIn, element.type, json.level)
                            customDivLoad.setXY(left, top)
                            console.log(customDivLoad.getRoot());
                            document.getElementById('game').append(customDivLoad.getRoot())
                            top += 100
                            counter++
                            found = true
                        }
                    })
                    if (!found) {
                        let customDiv = new CustomDiv(100, counter, i, j)
                        customDiv.setXY(left, top)
                        document.getElementById('game').append(customDiv.getRoot())
                        top += 100
                        counter++
                    }



                }
                left += 100
            }
        })
})

// document.getElementById('oneHex').addEventListener('click', function () {

// })
