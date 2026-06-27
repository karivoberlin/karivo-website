window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => preloader?.classList.add('hide'), 450);
});

const toggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
toggle?.addEventListener('click', () => navLinks?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks?.classList.remove('open'));
});

const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', (event) => {
  if (glow) {
    glow.style.left = event.clientX + 'px';
    glow.style.top = event.clientY + 'px';
  }
  const scene = document.getElementById('heroScene');
  if (scene && window.innerWidth > 1050) {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    scene.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelectorAll('.magnetic').forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translate(0,0)';
  });
});
