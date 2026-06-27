window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => preloader?.classList.add('hide'), 450);
});

const progress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / height) * 100;
  if (progress) progress.style.width = scrolled + '%';
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

const calcIndustry = document.getElementById('calcIndustry');
const calcPackage = document.getElementById('calcPackage');
const calcCare = document.getElementById('calcCare');
const calcHosting = document.getElementById('calcHosting');
const oneTimePrice = document.getElementById('oneTimePrice');
const monthlyPrice = document.getElementById('monthlyPrice');
const calcSummary = document.getElementById('calcSummary');
const calcInput = document.getElementById('calcInput');
const formIndustry = document.getElementById('formIndustry');
const formPackage = document.getElementById('formPackage');

function updateCalculator() {
  if (!calcPackage || !calcCare || !calcHosting) return;
  const industry = calcIndustry.value;
  const packagePrice = Number(calcPackage.value);
  const care = Number(calcCare.value);
  const hosting = Number(calcHosting.value);
  const monthly = care + hosting;
  const packageText = calcPackage.options[calcPackage.selectedIndex].text;
  const careText = calcCare.options[calcCare.selectedIndex].text;
  const hostingText = calcHosting.options[calcHosting.selectedIndex].text;

  oneTimePrice.textContent = packagePrice + ' €';
  monthlyPrice.textContent = monthly + ' €';
  calcSummary.textContent = `${packageText} für ${industry} mit ${careText} und ${hostingText}.`;

  if (calcInput) calcInput.value = calcSummary.textContent + ` Einmalig: ${packagePrice} €, monatlich: ${monthly} €.`;
  if (formIndustry) formIndustry.value = industry;
  if (formPackage) {
    [...formPackage.options].forEach(option => {
      if (packageText.includes(option.textContent.split(' · ')[0])) formPackage.value = option.textContent;
    });
  }
}

[calcIndustry, calcPackage, calcCare, calcHosting].forEach(el => el?.addEventListener('change', updateCalculator));
updateCalculator();
