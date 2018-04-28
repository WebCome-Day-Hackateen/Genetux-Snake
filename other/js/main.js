window.onload=function() {
  canvas = document.getElementById("bc");
  ctx = canvas.getContext("2d");
  console.log(ctx);
  setInterval(update, 1000 / 15);
}

function draw_canvas() {
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(0, 0, canvas.width, canvas.height;
}

function update() {
  draw_canvas();
}
