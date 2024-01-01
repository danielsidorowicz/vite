import hexagon from '../gfx/hexagon.png';
import hexagon0 from '../gfx/hexagon0.png';
import hexagon1 from '../gfx/hexagon1.png';
import hexagon2 from '../gfx/hexagon2.png';
import hexagon3 from '../gfx/hexagon3.png';
import hexagon4 from '../gfx/hexagon4.png';
import hexagon5 from '../gfx/hexagon5.png';

let selectedType = 'wall'

document.getElementById('wall').addEventListener('click', function () {
    selectedType = 'wall'
    document.getElementById('selectedPreview').innerText = 'Selected Type: Wall'
})
document.getElementById('treasure').addEventListener('click', function () {
    selectedType = 'treasure'
    document.getElementById('selectedPreview').innerText = 'Selected Type: Treasure'
})
document.getElementById('light').addEventListener('click', function () {
    selectedType = 'light'
    document.getElementById('selectedPreview').innerText = 'Selected Type: Light'
})

let srcList = [hexagon0, hexagon1, hexagon2, hexagon3, hexagon4, hexagon5]
let level = []
let selectedHex = []
let gameobj = {
    level: level,
}

class CustomDiv {

    constructor(w, id, x, z) {

        // console.log(this)

        this.w = w
        this.id = id
        this.x = x
        this.z = z
        //
        this.createDiv()

    }

    createDiv() {
        this.div = document.createElement("div")
        this.img = document.createElement('img')
        this.div.style.width = `${this.w}px`
        this.div.style.position = "absolute"
        this.div.id = `${this.id}`
        this.img.src = hexagon
        this.img.width = 100
        this.div.append(this.img)
        this.div.xPosition = this.x
        this.div.zPosition = this.z
        this.div.dirOut = 0
        this.div.dirIn = 0
        //
        this.div.onclick = function () {
            let HexId = this.id
            let thisHex = this
            if (selectedHex.includes(this.id)) {
                gameobj.level.find(function (element, index) {
                    if (element.id == HexId) {
                        gameobj.level[index].dirOut++
                        gameobj.level[index].dirOut = gameobj.level[index].dirOut % 6
                        gameobj.level[index].type = selectedType
                        thisHex.children[0].src = srcList[gameobj.level[index].dirOut]
                    }

                })
            }
            else {
                let clickedHexObject = {}
                selectedHex.push(this.id)
                if (selectedHex[0] == this.id) {
                    clickedHexObject = {
                        id: this.id,
                        x: this.xPosition,
                        z: this.zPosition,
                        dirOut: this.dirOut,
                        dirIn: "start",
                        type: selectedType
                    }
                } else {
                    let dirInGive = 0
                    selectedHex.find(function (element, index) {
                        if (element == HexId) {
                            dirInGive = (gameobj.level[index - 1].dirOut + 3) % 6
                        }
                    })
                    clickedHexObject = {
                        id: this.id,
                        x: this.xPosition,
                        z: this.zPosition,
                        dirOut: this.dirOut,
                        dirIn: selectedHex[0] != this.id ? dirInGive : 'start',
                        type: selectedType
                    }
                }
                thisHex.children[0].src = srcList[0]
                gameobj.level.push(clickedHexObject)
            }
            document.getElementById('jsondata').innerText = JSON.stringify(gameobj, null, 2)
        }
    }

    getRoot() {
        return this.div
    }

    setXY(x, y) {
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
    }

}

class CustomDivLoad {

    constructor(w, id, x, z, dirOut, dirIn, type, level) {

        // console.log(this)
        gameobj = {
            level: level
        }



        this.w = w
        this.id = id
        this.x = x
        this.z = z
        this.dirOut = dirOut
        this.dirIn = dirIn
        this.type = type
        //
        this.createDiv()

    }

    createDiv() {
        this.div = document.createElement("div")
        this.img = document.createElement('img')
        this.div.style.width = `${this.w}px`
        this.div.style.position = "absolute"
        this.div.id = `${this.id}`
        this.img.src = srcList[this.dirOut]
        this.img.width = 100
        this.div.append(this.img)
        this.div.xPosition = this.x
        this.div.zPosition = this.z
        this.div.dirOut = this.dirOut
        this.div.dirIn = this.dirIn
        this.div.type = this.type
        selectedHex.push(this.id)

        //
        this.div.onclick = function () {
            let HexId = this.id
            let thisHex = this
            gameobj.level.find(function (element, index) {
                if (element.id == HexId) {
                    gameobj.level[index].dirOut++
                    gameobj.level[index].dirOut = gameobj.level[index].dirOut % 6
                    gameobj.level[index].type = selectedType
                    thisHex.children[0].src = srcList[gameobj.level[index].dirOut]
                }

            })
            document.getElementById('jsondata').innerText = JSON.stringify(gameobj, null, 2)
        }
    }

    getRoot() {
        return this.div
    }

    setXY(x, y) {
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
    }

}

export { CustomDiv, CustomDivLoad, gameobj }