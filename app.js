document.addEventListener("DOMContentLoaded", function (event) {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d"); //* add context via ctx

  console.log(ctx);

  ctx.fillStyle = "white";
  ctx.fillRect(10, 10, 150, 150);
});
