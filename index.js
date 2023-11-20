import '/modules/css/style.css';

for (let i = 0; i < 8; i++) {
    let option = document.createElement("option")
    option.value = i
    option.text = i
    if (i == 5) {
        option.selected = i
    }
    document.getElementById('size').append(option)
} // dodaj onchange


import hexagon from './modules/gfx/hexagon.png';

document.getElementById("hexagonimage").src = hexagon