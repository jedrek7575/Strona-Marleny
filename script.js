const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


const mobileNav = document.querySelector('.dropdown ul');
const burgerIcon = document.querySelector('.tryb');

// Obsługa kliknięcia na ikonę trybu
burgerIcon.addEventListener('click', function(event) {
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
    event.stopPropagation(); // Zapobiega propagacji kliknięcia do document
});

// Obsługa kliknięcia poza menu (zamykanie)
document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileNav.contains(event.target);
    const isClickOnBurger = burgerIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
        mobileNav.classList.remove('active');
        burgerIcon.classList.remove('active');
    }
});

//pojawianie i znikanie tekstu

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("visible");
      } else {
          entry.target.classList.remove("visible"); // Usuwa klasę, jeśli element znika
      }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const images = document.querySelectorAll(".carousel img");
  const imageWidth = images[0].clientWidth;
  let index = 0;

  function moveCarousel() {
    index++;
    if (index > images.length - 3) {
      index = 0; // Reset do początku
    }
    track.style.transform = `translateX(-${index * imageWidth}px)`;
  }

  setInterval(moveCarousel, 2000); // Zmiana co 2 sekundy
});

document.addEventListener("DOMContentLoaded", function() {
  const menu = document.querySelector(".dropdown ul");
  const closeBtn = document.querySelector(".close-menu");
  const trybBtn = document.querySelector(".tryb");

  trybBtn.addEventListener("click", function() {
    menu.classList.add("active");
  });

  closeBtn.addEventListener("click", function() {
    menu.classList.remove("active");
  });
});