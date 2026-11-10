document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear())});

/* Do not let the fixed mobile booking shortcut obscure the actual booking UI or footer. */
document.addEventListener('DOMContentLoaded',()=>{
  const shortcut=document.querySelector('.mobile-book');
  if(!shortcut || !('IntersectionObserver' in window)) return;
  const targets=[document.querySelector('#termin'),document.querySelector('.faq-cta'),document.querySelector('footer')].filter(Boolean);
  const visible=new Set();
  const observer=new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    }
    shortcut.classList.toggle('is-hidden',visible.size>0);
  },{threshold:0.01});
  targets.forEach(element=>observer.observe(element));
});
