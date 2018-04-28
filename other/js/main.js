window.onload=function() {
  canvas = document.getElementById("bc");
  ctx = canvas.getContext("2d");
  document.addEventListener("keydown", KeyPressed)
  setInterval(update, 1000 / 15);
}

py = px = 25;
ax = Math.floor(Math.random() * 49);
ay = Math.floor(Math.random() * 49);
snakeLength = 20;
vx = 0;
vy = 0;
trail = [];
tail = 3;

function draw_canvas() {
  ctx.fillStyle = "#545555";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#9966ff"
  ctx.fillRect(ax*20,ay*20,20,20)
}

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

var score = document.getElementById("sc");

function update() {
  draw_canvas();

  score.innerHTML = sc;

  px += vx;
  py += vy;
  console.log(vx);
  console.log(vy);
  ctx.fillStyle = "#33cc33";
  for (var i = 0; i < trail.length; i++) {
      ctx.fillRect(trail[i].x * 20, trail[i].y * 20, 18, 18);
      if (trail[i].x == px && trail[i].y == py)
        tail = 3;
  }
  trail.push({x: px, y: py});
  while (trail.length > tail)
    trail.shift();
  if (px==ax && py==ay) {
    tail+=1;
    sc += 5;
    ax = Math.floor(Math.random() * 49);
    ay = Math.floor(Math.random() * 49);
  }
  if (px>49 || py>49 || px<1 || py<1) {
    tail = 3;
    px = py = 25;
    ax = Math.floor(Math.random() * 49);
    ay = Math.floor(Math.random() * 49);
    vx = 0;
    vy = 0;
  }
}
