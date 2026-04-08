document.addEventListener('DOMContentLoaded', () => {
  // Panel Toggle Logic
  const openMenuBtn = document.getElementById('open-menu');
  const closeMenuBtn = document.getElementById('close-menu');
  const sidePanel = document.getElementById('side-panel');
  const overlay = document.getElementById('overlay');
  const navLinks = document.querySelectorAll('.nav-links a');

  const toggleMenu = () => {
    sidePanel.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidePanel.classList.contains('active') ? 'hidden' : '';
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  
  navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Scroll Animation Logic (Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // optional: animate only once
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.hidden');
  
  // Staggered delay for hero elements
  let heroDelay = 0;
  hiddenElements.forEach((el) => {
    if (el.closest('.hero')) {
      el.style.transitionDelay = `${heroDelay}s`;
      heroDelay += 0.15;
    }
    observer.observe(el);
  });
});
