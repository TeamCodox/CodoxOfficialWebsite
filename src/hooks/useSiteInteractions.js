import { useEffect } from "react";

/** Runs the exported site's pointer, reveal, scroll, and FAQ interactions after React mounts. */
export default function useSiteInteractions() {
  useEffect(() => {
    (function() {
        const wrappers = document.querySelectorAll('.bento-card-wrapper');
        wrappers.forEach(wrapper => {
            const card = wrapper.querySelector('.bento-card');
            const glare = wrapper.querySelector('.bento-glare');
    
            wrapper.addEventListener('mousemove', (e) => {
                const rect = wrapper.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (centerY - y) / 20;
                const rotateY = (x - centerX) / 20;
    
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                glare.style.opacity = '1';
                glare.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
                glare.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
            });
    
            wrapper.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                glare.style.opacity = '0';
            });
        });
    })();
    (function(){const wrappers=document.querySelectorAll('.comet-card-wrapper');wrappers.forEach(wrapper=>{const card=wrapper.querySelector('.comet-card');const glare=card.querySelector('.comet-glare');wrapper.addEventListener('mousemove',(e)=>{const rect=wrapper.getBoundingClientRect();const x=e.clientX-rect.left;const y=e.clientY-rect.top;const centerX=rect.width/2;const centerY=rect.height/2;const rotateX=(centerY-y)/15;const rotateY=(x-centerX)/15;card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;glare.style.opacity='1';glare.style.setProperty('--mouse-x',`${(x/rect.width)*100}%`);glare.style.setProperty('--mouse-y',`${(y/rect.height)*100}%`);});wrapper.addEventListener('mouseleave',()=>{card.style.transform='rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';glare.style.opacity='0';});});})();
    (function() {
      const section = document.querySelector('#portfolio');
      if (!section) return;
      section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        section.style.setProperty('--mouse-x', x + '%');
        section.style.setProperty('--mouse-y', y + '%');
      });
    })();
    (function() {
        const wrappers = document.querySelectorAll('.project-card-wrapper');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
    
        wrappers.forEach(wrapper => {
            wrapper.style.opacity = '0';
            wrapper.style.transform = 'translateY(40px)';
            wrapper.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            observer.observe(wrapper);
    
            const card = wrapper.querySelector('.project-card');
            const spotlight = card.querySelector('.project-spotlight');
            const image = card.querySelector('.project-image');
    
            wrapper.addEventListener('mousemove', (e) => {
                const rect = wrapper.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (centerY - y) / 25;
                const rotateY = (x - centerX) / 25;
    
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
                
                // Parallax for image
                const moveX = (x - centerX) / 30;
                const moveY = (y - centerY) / 30;
                image.style.transform = `translate(${-moveX}px, ${-moveY}px) scale(1.15)`;
    
                spotlight.style.opacity = '1';
                spotlight.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
                spotlight.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
            });
    
            wrapper.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                image.style.transform = 'translate(0, 0) scale(1)';
                spotlight.style.opacity = '0';
            });
        });
    })();
    (function() {
            const wrappers = document.querySelectorAll('.team-card-wrapper');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 150);
                    }
                });
            }, { threshold: 0.1 });
    
            wrappers.forEach(wrapper => {
                wrapper.style.opacity = '0';
                wrapper.style.transform = 'translateY(40px)';
                wrapper.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                observer.observe(wrapper);
    
                const card = wrapper.querySelector('.team-card');
                const spotlight = wrapper.querySelector('.team-spotlight');
    
                wrapper.addEventListener('mousemove', (e) => {
                    const rect = wrapper.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (centerY - y) / 25;
                    const rotateY = (x - centerX) / 25;
    
                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                    spotlight.style.opacity = '1';
                    spotlight.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
                    spotlight.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
                });
    
                wrapper.addEventListener('mouseleave', () => {
                    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                    spotlight.style.opacity = '0';
                });
            });
        })();
    (function() {
            const wrappers = document.querySelectorAll('.pricing-card-wrapper');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 150);
                    }
                });
            }, { threshold: 0.1 });
    
            wrappers.forEach(wrapper => {
                wrapper.style.opacity = '0';
                wrapper.style.transform = 'translateY(40px)';
                wrapper.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                observer.observe(wrapper);
    
                const card = wrapper.querySelector('.pricing-card');
                wrapper.addEventListener('mousemove', (e) => {
                    const rect = wrapper.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (centerY - y) / 30;
                    const rotateY = (x - centerX) / 30;
                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
                wrapper.addEventListener('mouseleave', () => {
                    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                });
            });
        })();
    (function(){const items=document.querySelectorAll('.faq-item');items.forEach(item=>{const btn=item.querySelector('button');const ans=item.querySelector('.faq-answer');const icon=btn.querySelector('.material-symbols-outlined');btn.addEventListener('click',()=>{const isOpen=ans.style.maxHeight&&ans.style.maxHeight!=='0px';document.querySelectorAll('.faq-answer').forEach(a=>{a.style.maxHeight='0px';a.previousElementSibling.querySelector('.material-symbols-outlined').style.transform='rotate(0deg)';});if(!isOpen){ans.style.maxHeight=ans.scrollHeight+'px';icon.style.transform='rotate(45deg)';}else{ans.style.maxHeight='0px';icon.style.transform='rotate(0deg)';}});});})();
    (function() {
        const section = document.querySelector('#how-we-work');
        if (!section) return;
        const cards = section.querySelectorAll('.bento-card');
    
        cards.forEach(card => {
            card.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.transformStyle = 'preserve-3d';
    
            card.parentElement.addEventListener('mousemove', (e) => {
                const rect = card.parentElement.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (centerY - y) / 15; // Max ~10-12 degrees
                const rotateY = (x - centerX) / 15;
    
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                
                const glare = card.querySelector('.bento-glare');
                if (glare) {
                    glare.style.opacity = '1';
                    glare.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
                    glare.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
                }
            });
    
            card.parentElement.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                const glare = card.querySelector('.bento-glare');
                if (glare) glare.style.opacity = '0';
            });
        });
    })();

    return () => {
      // Listeners attached to window are removed on unmount; element-scoped listeners
      // are harmless for this single-page site and are discarded with the DOM.
    };
  }, []);
}
