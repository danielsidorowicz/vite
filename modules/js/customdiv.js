export default class CustomDiv {

    constructor(w, h, hexagon) {

        console.log(this)

        this.w = w
        this.h = h
        //
        this.createDiv()

    }

    createDiv() {
        this.div = document.createElement("div")
        this.div.style.width = `${this.w}px`
        this.div.style.height = `${this.h}px`
        this.div.style.position = "absolute"
        this.div.style.backgroundImage = this.hexagon
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