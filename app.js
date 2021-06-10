document.addEventListener("DOMContentLoaded", function (event) {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d"); //* add context via ctx
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particleArray = [];

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; //! resizing will destroy any drawings
  });

  const mouse = {
    x: undefined,
    y: undefined,
  };

  //* passes mouse click coordinates to global variable
  // canvas.addEventListener("click", (event) => {
  //   mouse.x = event.x;
  //   mouse.y = event.y;
  //   drawCircle();
  // });

  // canvas.addEventListener("mousemove", (event) => {
  //   mouse.x = event.x;
  //   mouse.y = event.y;
  //   drawCircle();
  // });

  class Particle {
    constructor() {
      // this.x = mouse.x;
      // this.y = mouse.y;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5; //* create -ve and +ve vector
      this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
      this.x += this.speedX; //* 2D vector creation
      this.y += this.speedY;
    }
    draw() {
      ctx.fillStyle = "blue";
      ctx.beginPath(); //* like a paint path
      ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const init = () => {
    for (let i = 0; i < 100; i++) {
      particleArray.push(new Particle());
    }
  };

  init();

  const handleParticles = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      particleArray[i].update();
      particleArray[i].draw();
    }
  };

  //* Animate generations

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles(particleArray);
    requestAnimationFrame(animate);
  };
  animate();
});
