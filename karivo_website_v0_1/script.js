const glow=document.querySelector('.cursor-glow');
window.addEventListener('mousemove',(event)=>{if(!glow)return;glow.style.left=event.clientX+'px';glow.style.top=event.clientY+'px';});
const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting)entry.target.classList.add('visible');});},{threshold:.14});
document.querySelectorAll('.reveal').forEach((el)=>observer.observe(el));
document.querySelectorAll('button').forEach((button)=>{button.addEventListener('click',()=>{alert('Demo-Formular: In Version 0.2 verbinden wir Formspree oder Netlify Forms.');});});
