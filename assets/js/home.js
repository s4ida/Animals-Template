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

// Bütün dropdown container-ları götür
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


const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const items = document.querySelectorAll('.item');

let index = 0;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 10; // margin: 0 5px
  carousel.style.transform = `translateX(${-index * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (index < items.length - 3) { // eyni anda 3 element görünsün deyə
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});



