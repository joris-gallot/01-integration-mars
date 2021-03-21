const burgerMenu = document.getElementById('menu-burger')
const navbar = document.getElementById('navbar')

function toggleMenuBurger() {
  document.body.classList.toggle('burger-active')

  if (document.body.classList.contains('burger-active')) {
    navbar.classList.remove('nav-overlay')
  } else if (window.scrollY > 80 && !document.body.classList.contains('burger-active'))  {
    navbar.classList.add('nav-overlay')
  }
}

burgerMenu.onclick = toggleMenuBurger
document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    toggleMenuBurger()
  }
});

document.body.onscroll = function () {
  if (window.scrollY <= 80) {
    navbar.classList.remove('nav-overlay')
  } else if (window.scrollY > 80 && !navbar.classList.contains('nav-overlay')) {
    navbar.classList.add('nav-overlay')
  }
}