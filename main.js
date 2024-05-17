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