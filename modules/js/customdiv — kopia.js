import hexagon from '../gfx/hexagon.png';

let level = []
let alreadyClicked = []
let gameobj = {
    level: level
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
            console.log(`clicked ${this.xPosition} ${this.zPosition}`)
            if (alreadyClicked.includes(this.id)) {
                for (let n = 0; n < alreadyClicked.length; n++) {
                    console.log(level[n].id == this.id);
                    if (level[n].id == this.id) {
                        level.splice(n, 1)
                    }
                }
                this.dirOut++
                this.dirOut = this.dirOut % 6
            } else {
                alreadyClicked.push(this.id)
            }
            let clickedDivObject = {}
            if (alreadyClicked.length == 1) {
                clickedDivObject = {
                    id: this.id,
                    x: this.xPosition,
                    z: this.zPosition,
                    dirOut: this.dirOut,
                    dirIn: "start",
                    type: "placeholder"
                }
            } else {
                clickedDivObject = {
                    id: this.id,
                    x: this.xPosition,
                    z: this.zPosition,
                    dirOut: this.dirOut,
                    dirIn: this.dirOut + 3,
                    type: "placeholder"
                }
            }
            level.push(clickedDivObject)
            console.log(gameobj);
            document.getElementById('jsonview').innerText = JSON.stringify(gameobj, null, 2)
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

export { CustomDiv, gameobj }