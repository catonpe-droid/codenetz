(function () {
  'use strict';
  document.documentElement.classList.add('js-enabled');
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('main-nav');
  if (toggle && menu) {
    const close = () => {menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');};
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
    document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!toggle.contains(e.target))close();});
  }
  const year = document.getElementById('year'); if(year)year.textContent=String(new Date().getFullYear());
  const reveal = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});
    },{threshold:0.08,rootMargin:'0px 0px 60px 0px'});
    reveal.forEach(el=>io.observe(el));
  } else reveal.forEach(el=>el.classList.add('visible'));
  const form=document.getElementById('contact-form');
  if(form){form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    if(form.elements['website-extra']?.value)return;
    const name=form.elements['name'].value.trim();
    const email=form.elements['email'].value.trim();
    const phone=form.elements['phone'].value.trim();
    const service=form.elements['service'].value.trim();
    const message=form.elements['message'].value.trim();
    if(!name||!email||!service||!message)return;
    const subject='CodeNetz Project Enquiry - '+service;
    const content=['Hello CodeNetz,','','I would like to discuss a project.','','Name: '+name,'Email: '+email,'Phone / WhatsApp: '+(phone||'Not provided'),'Service: '+service,'','Project details:',message,'','Sent from the CodeNetz website enquiry form.'].join('\n');
    const mailto='mailto:codenetztech@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(content);
    const status=document.getElementById('form-status');
    if(status){status.classList.add('show');status.textContent='Your email app should open with the enquiry ready. Please press Send there. If it does not open, email codenetztech@gmail.com directly.';}
    window.location.href=mailto;
  });}
}
  // Help visitors preselect a service and prepare an enquiry via WhatsApp.
  const requestedService=new URLSearchParams(window.location.search).get('service');
  const serviceSelect=document.getElementById('service');
  if(serviceSelect&&requestedService){
    const option=[...serviceSelect.options].find(o=>o.textContent.trim()===requestedService);
    if(option) serviceSelect.value=option.value;
  }
  const whatsappButton=document.getElementById('send-whatsapp');
  if(whatsappButton&&form){
    whatsappButton.addEventListener('click',()=>{
      if(!form.reportValidity())return;
      if(form.elements['website-extra']?.value)return;
      const name=form.elements['name'].value.trim();
      const email=form.elements['email'].value.trim();
      const phone=form.elements['phone'].value.trim();
      const service=form.elements['service'].value.trim();
      const message=form.elements['message'].value.trim();
      if(!name||!email||!service||!message)return;
      const textMessage=[
        'Hello CodeNetz, I would like to discuss a project.',
        '', 'Name: '+name,'Email: '+email,
        'Phone: '+(phone||'Not provided'), 'Service: '+service,
        '', 'Project details:',message
      ].join('\n');
      window.open('https://wa.me/918007773888?text='+encodeURIComponent(textMessage),'_blank','noopener,noreferrer');
      const status=document.getElementById('form-status');
      if(status){status.classList.add('show');status.textContent='WhatsApp should open with your enquiry. Please tap Send to deliver it.';}
    });
  }
})();
