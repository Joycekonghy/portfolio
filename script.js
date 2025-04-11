console.log("🚀 Script loaded!");

// Remove aria-hidden if it's interfering with visibility
document.body.removeAttribute('aria-hidden');

const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');

if (!canvas || !ctx) {
  console.error("Canvas or context not found.");
}

let stars = [];
const STAR_COUNT = 300;
const SPEED = 0.2;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log("✅ Canvas resized:", canvas.width, canvas.height);
}

function createStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.2,
      velocity: Math.random() * 0.5 + 0.05
    });
  }
  console.log("✨ Stars created:", stars.length);
}

function drawStars() {
  ctx.fillStyle = 'black'; // ← Add this
  ctx.fillRect(0, 0, canvas.width, canvas.height); // ← Draw full red canvas


  ctx.fillStyle = '#fff'; // Reset star color
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();
  });
  console.log("⭐ Stars drawn:", stars.length);
}

function updateStars() {
  stars.forEach(star => {
    star.y += star.velocity * SPEED;
    if (star.y > canvas.height) {
      star.x = Math.random() * canvas.width;
      star.y = 0;
    }
  });
  console.log("🔄 Stars updated:", stars.length);
}

function animate() {
  drawStars();
  updateStars();
  requestAnimationFrame(animate);
  console.log("🔄 Animation frame requested");
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars();
});

// Initialize
resizeCanvas();
createStars();
animate(); 
