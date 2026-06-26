const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#ff4da6";
ctx.font = "12px Arial";

let t = 0;

function draw() {
    if (t > Math.PI * 2) return;

    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t)
          - 5 * Math.cos(2 * t)
          - 2 * Math.cos(3 * t)
          - Math.cos(4 * t);

    x = canvas.width / 2 + x * 18;
    y = canvas.height / 2 - y * 18;

    ctx.fillText("I Love You", x, y);

    t += 0.03;

    requestAnimationFrame(draw);
}

draw();