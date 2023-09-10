let ctx = document.querySelector("canvas").getContext("2d"),
  dashLen = 220,
  dashOffset = dashLen,
  speed = 10,
  txt = "AMIN FALLAHZADEH",
  x = 30,
  i = 0;

ctx.font = "30px Rajdhani, cursive, TSCu_Comic, sans-serif";
ctx.lineWidth = 4;
ctx.lineJoin = "round";
ctx.strokeStyle = ctx.fillStyle = "#faf0ca";
// ctx.textAlign = "end";

(function loop() {
  ctx.clearRect(x, 0, 60, 150);
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed; // reduce dash length
  ctx.strokeText(txt[i], x, 90); // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop); // animate
  else {
    ctx.fillText(txt[i], x, 90); // fill final letter
    dashOffset = dashLen; // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random()); // random y-delta
    ctx.rotate(Math.random() * 0.005); // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();
