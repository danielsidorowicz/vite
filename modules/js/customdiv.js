import hexagon from '../gfx/hexagon.png';

export default class CustomDiv {

    constructor(w) {

        console.log(this)

        this.w = w
        //
        this.createDiv()

    }

    createDiv() {
        this.div = document.createElement("div")
        this.img = document.createElement('img')
        this.div.style.width = `${this.w}px`
        this.div.style.position = "absolute"
        this.img.src = hexagon
        this.img.width = 100
        this.div.append(this.img)
        //
        this.div.onclick = function () {
            alert(`clicked`)
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