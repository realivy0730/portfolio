

var num = (document.body.clientWidth > 767)? 5500 : 1000;

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style = "background: radial-gradient(#246, #123); background:none";

let x = 0;

class Drop {
  constructor(height, width, startPositionX, startPositionY, speed, colorOpacity) {
    this.height = height;
    this.width = width;
    this.startPositionX = startPositionX;
    this.startPositionY = startPositionY;
    this.currentPositionY = startPositionY;
    this.speed = speed;
    this.colorOpacity = colorOpacity;
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.startPositionX, this.currentPositionY);
    ctx.lineTo(this.startPositionX, this.currentPositionY + this.height);
    ctx.strokeStyle = "rgba(150, 150, 150, " + this.colorOpacity + ")";
    ctx.lineWidth = this.width;
    ctx.stroke();
    this.update();
  }

  update() {
    if (this.currentPositionY + this.height > canvas.height) {
      this.currentPositionY = 0;
    } else {
      this.currentPositionY += this.speed;
    }
  }
}

const singleDrop = new Drop (50, 5, 10, 50, 15, 0.1)
const rain = [];
for (let i = 0; i < num; i++) {
  rain.push(new Drop (
    Math.round(Math.random() * 20) + 10, /*height*/

    Math.round(Math.random() * 20) / 10, /*width*/
    Math.round(Math.random() * canvas.width), /*startPositionX*/
    Math.round(Math.random() * canvas.height), /*startPositionY*/
    Math.round(Math.random() * 55) + 5, /*speed*/
    Math.random() * .3 /* colorOpacity */
  ))
}



function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineJoin = "round";
  // singleDrop.draw();
  for(let i = 0; i < rain.length; i++) {
    rain[i].draw();
  }

}

animate();