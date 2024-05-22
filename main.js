function myFunction() {
  var x = document.getElementById("myDIV")
  if (x.style.display === "none") {
    x.style.display = "block"
  } else {
    x.style.display = "none"
  }
}

function changeColor() {
  var x = document.getElementById("colorChange")
  if (x.classList.contains("text-red-700")) {
    x.classList.remove("text-red-700")
    x.classList.add("text-blue-300")
  } else {
    x.classList.remove("text-blue-300")
    x.classList.add("text-red-700")
  }
}

function showMenu() {
  var x = document.getElementById("menu")
  if (x.classList.contains("hidden")) {
    x.classList.remove("hidden")
    x.classList.add("block")
  } else {
    x.classList.remove("block")
    x.classList.add("hidden")
  }
}

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark")
  var x = document.getElementById('light-dark-mode-icon')
  var y = document.getElementsByClassName('hero-image')
  var z = document.getElementsByClassName("background-leaf")
  if (x.src.indexOf("dark_mode_button.png") != -1) {
    x.src = "light_mode_button.png"
    for (i = 0; i < y.length; i++) {
      y[i].data = "lightmode_icon.svg"
    }
    for (i = 0; i < z.length; i++) {
      z[i].data = "background_leaf_brown.svg"
    }
  } else {
    x.src = "dark_mode_button.png"
    for (i = 0; i < y.length; i++) {
      y[i].data = "darkmode_icon.svg"
    }
    for (i = 0; i < z.length; i++) {
      z[i].data = "background_leaf_green.svg"
    }
  }
}
