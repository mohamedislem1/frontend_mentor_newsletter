let navItems = document.querySelector(".navItems")
let menu = document.querySelector(".menu")
let close = document.querySelector(".close")
menu.addEventListener("click", handleClick)
close.addEventListener("click", handleClick)
function handleClick(){
    navItems.classList.toggle("fadeIn")
 }
