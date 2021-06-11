document.addEventListener("DOMContentLoaded", function (event) {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d"); //* add context via ctx
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particlesArray = [];

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; //! resizing will destroy any drawings
  });

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  // let r = Math.floor(Math.random() * 255);
  // let g = Math.floor(Math.random() * 255);
  // let b = Math.floor(Math.random() * 255);
  // ctx.fillStyle = `"rgb(${r}, ${g}, ${b})"`;
  console.log(r, g, b);

  class Particle {
    constructor() {
      this.x = mouse.x;
      this.y = mouse.y;
      // this.x = Math.random() * canvas.width;
      // this.y = Math.random() * canvas.height;
      this.size = Math.random() * 10 + 1;
      this.speedX = Math.random() * 3 - 1.5; //* create -ve and +ve vector
      this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
      this.x += this.speedX; //* 2D vector creation
      this.y += this.speedY;
      if (this.size > 0.2) {
        this.size -= 0.1;
      }
    }
    draw() {
      ctx.fillStyle = "blue";
      ctx.beginPath(); //* like a paint path
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  //* Mouse Movements

  const mouse = {
    x: undefined,
    y: undefined,
  };

  //* passes mouse click coordinates to global variable
  canvas.addEventListener("click", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 10; i++) {
      particlesArray.push(new Particle());
    }
  });

  canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 3; i++) {
      particlesArray.push(new Particle());
    }
  });

  //* Generate Particles
  const init = () => {
    for (let i = 0; i < 100; i++) {
      particlesArray.push(new Particle());
    }
  };

  init();

  const handleParticles = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].update();
      arr[i].draw();
      if (arr[i].size <= 0.3) {
        arr.splice(i, 1);
        console.log(arr.length);
        i--;
      }
    }
  };

  //* Animate generations

  const animate = () => {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,0,0,0.1)"; // rectangle that covers screen over and over
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles(particlesArray);
    requestAnimationFrame(animate);
  };
  animate();
});
