const button = document.querySelector("button[data-behavior='contact-button']")
const modal = document.querySelector("div[data-behavior='contact-modal']")
const close = document.querySelector("span[data-behavior='contact-close']")

const formOpen = () => {
  modal.style.display = "block";
}

const formClose = () => {
  modal.style.display = "none";
}

const formCloseWindow = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

window.addEventListener('click', formCloseWindow)
button.addEventListener('click', formOpen)
close.addEventListener('click', formClose)