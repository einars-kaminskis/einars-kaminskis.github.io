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
  if (x != null) {
    if (x.src.indexOf("figma/dark_mode_button.svg") != -1) {
      x.src = "figma/light_mode_button.svg"
    } else {
      x.src = "figma/dark_mode_button.svg"
    }
  }
  if (y != null && y.length > 0) {
    if (y[0].src.indexOf("logos/dark_logo2.svg") != -1) {
      for (i = 0; i < y.length; i++) {
        y[i].src = "logos/light_logo2.svg"
      }
    } else {
      for (i = 0; i < y.length; i++) {
        y[i].src = "logos/dark_logo2.svg"
      }
    }
  }
}

document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var speedFactor = 0.005;
  
  var movingElement = document.getElementById('leaf-background');
  var newPos = scrollPosition * speedFactor;
  
  movingElement.style.top = (newPos) + '%';
});
