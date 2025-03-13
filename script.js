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


  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".tryb"); // Ikona tryb
    const menuList = document.querySelector(".dropdown ul"); // Lista menu

    menuToggle.addEventListener("click", function () {
      menuList.classList.toggle("active"); // Dodaje/usuwa klasę "active"
    });
  });

