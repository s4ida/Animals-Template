const counters = document.querySelectorAll('.count');
const speed = 200; 

const startCounting = (entry) => {
  const counter = entry.target;
  const target = +counter.getAttribute('data-target');
  const increment = target / speed;

  let count = 0;

  const updateCount = () => {
    count += increment;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry);
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown-container');

  dropdowns.forEach(drop => {
    const btn = drop.querySelector('.dropdown-btn');
    const content = drop.querySelector('.dropdown-content');
    const icon = drop.querySelector('.icon');

    btn.addEventListener('click', () => {
      content.classList.toggle('show'); // aç/bağla
      icon.textContent = content.classList.contains('show') ? '-' : '+';
    });
  });
});


