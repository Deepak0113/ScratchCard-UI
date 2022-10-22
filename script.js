let canvas = document.getElementById("scratch");
let context = canvas.getContext("2d");
let isDown = false;

let scratchRadius = 30;
let canvasSize = 300;

let midCanvasSet = new Set();

// Create scratch card outer layer
const init = () => {
    let scratchPattern = new Image();
    scratchPattern.src = "pattern7.jpg";
    scratchPattern.onload = function () {
        console.log("loaded");
        context.drawImage(scratchPattern, 0, 0, canvasSize, canvasSize);
    }
};

// scratch card
const scratch = (x, y) => {
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, scratchRadius, 0, 2 * Math.PI, false);
    context.fill();
}

// adding event listener for the card
canvas.addEventListener('mouseenter', () => {
    let canvasPosLeft = canvas.getBoundingClientRect().left;
    let canvasPosTop = canvas.getBoundingClientRect().top;

    canvas.addEventListener('mousedown', () => {
        isDown = true;
    })

    canvas.addEventListener('mouseup', () => {
        isDown = false;
    })

    canvas.addEventListener('mousemove', (e) => {
        if (isDown) {
            scratch(e.pageX - canvasPosLeft, e.pageY - canvasPosTop);
        }
    })
})

init();