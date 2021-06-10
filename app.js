document.addEventListener("DOMContentLoaded", function (event) {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d"); //* add context via ctx
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; //! resizing will destroy any drawings
  });

  const mouse = {
    x: null,
    y: null,
  };

  //* passes mouse click coordinates to global variable
  canvas.addEventListener("click", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;

    drawCircle();
  });

  const drawCircle = () => {
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.beginPath(); //* like a paint path
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
  };
  drawCircle();
});
