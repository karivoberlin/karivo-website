const glow=document.querySelector('.cursor-glow');
window.addEventListener('mousemove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');});},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('button').forEach(button=>{button.addEventListener('click',()=>{alert('Demo-Formular: In der nächsten Version verbinden wir Formspree oder Netlify Forms.');});});
