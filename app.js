document.addEventListener("DOMContentLoaded", function (event) {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d"); //* add context via ctx
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; //! resizing will destroy any drawings
  });
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.beginPath(); //* like a paint path
  ctx.arc(100, 100, 50, 0, Math.PI * 2);
  ctx.stroke();
  console.log(ctx);
});
