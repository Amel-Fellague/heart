const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let t = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff4d9d";
    ctx.font = `${Math.max(8, canvas.width / 45)}px Arial`;

    for (let a = 0; a < t; a += 0.07) {
        const x = 16 * Math.pow(Math.sin(a), 3);
        const y = 13 * Math.cos(a)
                - 5 * Math.cos(2 * a)
                - 2 * Math.cos(3 * a)
                - Math.cos(4 * a);

        ctx.fillText(
            "I Love You",
            canvas.width / 2 + x * (canvas.width / 40),
            canvas.height / 2 - y * (canvas.width / 40)
        );
    }

    if (t < Math.PI * 2) {
        t += 0.015;
        requestAnimationFrame(draw);
    }
}

draw();