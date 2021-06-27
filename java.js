
const button = document.querySelector("button");
const body = document.querySelector("body");

const color = [ 'red','green','blue','cyan','orange','yellow','pink','purple']
body.style.backgroundColor = 'violet'

button.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]
}