export  function openHamburgerMenu() {
    const mobileMenu = document.querySelector(".hamburger-menu-wrapper");
    mobileMenu.classList.add("open");
  }
export  function closeHamburgerMenu() {
    const mobileMenu = document.querySelector(".hamburger-menu-wrapper");
    mobileMenu.classList.remove("open");
  }