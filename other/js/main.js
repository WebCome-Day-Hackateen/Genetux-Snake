window.onload=function() {
  canvas = document.getElementById("bc");
  ctx = canvas.getContext("2d");
  document.addEventListener("keydown", KeyPressed)
  console.log(ctx);
  setInterval(update, 1000 / 15);
}

py = px = 25;
ax = Math.floor(Math.random() * 49);
ay = Math.floor(Math.random() * 49);
snakeLength = 20;
vx = 0;
vy = 0;
snakeWidth = 20;
pts = 0

function KeyPressed(evt)
{
  switch (evt.keyCode) {
    case 40:
        vx = 0;
        vy = 1;
      break;
    case 38:
      vx = 0;
      vy = -1;
      break;
      case 39:
        vx = 1;
        vy = 0;
        break;
      case 37:
        vx = -1;
        vy = 0;
        break;
  }

}

function draw_canvas() {
  ctx.fillStyle = "#545555";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(px * 20, py * 20, snakeLength, snakeWidth);
  ctx.fillStyle = "#33cc33";
  ctx.fillRect(ax * 20,ay * 20,20,20);
}

function update() {
  draw_canvas();

  if (px == ax && py == ay) {
    ax = Math.floor(Math.random() * 49);
    ay = Math.floor(Math.random() * 49);
    snakeLength += 10;
    pts += 100
  }
  if (px>49 || py>49 || px<1 || py<1) {
    px = py = 25;
    vx = vy = 0;
    snakeLength = snakeWidth = 20;
    ax = Math.floor(Math.random() * 49);
    ay = Math.floor(Math.random() * 49);

  }

  px += vx;
  py += vy;
  document.getElementById("title").write("test");
}
