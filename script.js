console.log("🚀 Script loaded!");

const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');

if (!canvas || !ctx) {
  console.error("Canvas or context not found.");
}

let particles = [];
const PARTICLE_COUNT = 30;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      velocity: Math.random() * 0.2 + 0.05,
      opacity: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.5 ? 'rgba(135, 206, 235, ' : 'rgba(221, 160, 221, '
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(particle => {
    const opacity = Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.2 + particle.opacity;
    ctx.fillStyle = particle.color + opacity + ')';
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
    ctx.fill();
  });
}

function updateParticles() {
  particles.forEach(particle => {
    particle.y += particle.velocity;
    
    if (particle.y > canvas.height + 10) {
      particle.x = Math.random() * canvas.width;
      particle.y = -10;
    }
  });
}

function animate() {
  drawParticles();
  updateParticles();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles();
});

resizeCanvas();
createParticles();
animate(); 
