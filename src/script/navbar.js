const burger = document.querySelector("div[data-behavior='burger']");
const navLinks = document.querySelector("div[data-behavior='links");
const links = document.querySelectorAll("li[data-behavior='link']");

const burgerTop = document.querySelector("div[data-behavior='burgerTop']")
const burgerMiddle = document.querySelector("div[data-behavior='burgerMiddle']")
const burgerBottom = document.querySelector("div[data-behavior='burgerBottom']")

const navOpen = () => {

  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
  
  burgerTop.classList.toggle('c-navbar__burger--top')
  burgerMiddle.classList.toggle('c-navbar__burger--middle')
  burgerBottom.classList.toggle('c-navbar__burger--bottom')
}

burger.addEventListener('click', navOpen)