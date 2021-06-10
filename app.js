document.addEventListener("DOMContentLoaded", function (event) {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d"); //* add context via ctx
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //*resizing will destory any drawings
    ctx.fillStyle = "white";
    ctx.fillRect(10, 10, 150, 150);
  });

  ctx.fillStyle = "white";
  ctx.fillRect(10, 10, 150, 150);
});
