const darkModeButton = document.getElementById("darkModeButton");
const body = document.body;
const btn = document.querySelector('button')
let isDarkMode = false;

darkModeButton.addEventListener("click", () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    btn.innerHTML = 'Light-mode'
    btn.style.background = 'white'
    btn.style.color = 'black'
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});