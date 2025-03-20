// Przełączanie kart
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


// Obsługa kliknięcia na ikonę trybu
const mobileNav = document.querySelector('.dropdown ul');
const burgerIcon = document.querySelector('.tryb');
const menuItems = document.querySelectorAll('.dropdown ul li'); // Pobiera wszystkie pozycje menu

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

// Zamknięcie menu po kliknięciu dowolnej pozycji w nim
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        burgerIcon.classList.remove('active');
    });
});


//zamykanie menu

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

// Pojawianie i znikanie tekstu
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("visible");
      } else {
          entry.target.classList.remove("visible");
      }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));





//otwieranie lightboxa

document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxCaption = document.querySelector(".lightbox-caption");


  items.forEach(item => {
    item.addEventListener("click", function() {
      const img = this.querySelector("img");
      const rozwinText = this.querySelector(".rozwin").innerHTML; // Pobranie tylko tekstu z <p class="rozwin">
      
      lightboxImg.src = img.src;
      lightboxCaption.innerHTML = rozwinText; // W lightboxie pokazuje się tylko tekst <p class="rozwin">
      lightbox.style.display = "flex";
    });
  });


  // Zamknięcie lightboxa po kliknięciu
  lightbox.addEventListener("click", function() {
    lightbox.style.display = "none";
  });
});