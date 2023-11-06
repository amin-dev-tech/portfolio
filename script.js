// drawing animation
let ctx = document.querySelector("canvas").getContext("2d"),
  dashLen = 220,
  dashOffset = dashLen,
  speed = 10,
  txt = "amin.dev.tech",
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

// modal certificates

const modal = document.querySelector(".certificates__modal");
const modalImg = document.querySelector(".certificates__modal-img");
const progCard = document.querySelectorAll(".certificates__card");
const closeModal = document.getElementById("close");
const background = document.getElementById("overlay");

progCard.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.id === "prog") {
      modalImg.src = "assets/amin-python.png";
    }

    if (card.id === "data") {
      modalImg.src = "assets/amin-data-science.png";
    }

    if (card.id === "sql") {
      modalImg.src = "assets/amin-mssql.png";
    }

    modal.style.transform = "translate(-50%, -50%) scale(1)";
    modal.style.opacity = "1";
    background.classList.add("overlay");

    progCard.forEach((card) => {
      card.style.pointerEvents = "none";
    });
  });
});

closeModal.addEventListener("click", () => {
  modal.style.transform = "translate(-50%, -50%) scale(0)";
  background.classList.remove("overlay");
  modal.style.opacity = "0";

  progCard.forEach((card) => {
    card.style.pointerEvents = "auto";
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.opacity === "1") {
    modal.style.transform = "translate(-50%, -50%) scale(0)";
    background.classList.remove("overlay");
    modal.style.opacity = "0";

    progCard.forEach((card) => {
      card.style.pointerEvents = "auto";
    });
  }
});
