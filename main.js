function myFunction() {
  const leftMenu = document.getElementById("left-menus");
  if (leftMenu.style.display === "none") {
    leftMenu.style.display = "inline-block";
  } else {
    leftMenu.style.display = "none";
  }
}

function openNav() {
const mobileTop = document.getElementById("mobile-top");
const leftMenu = document.getElementById("left-menu-get");
const mobileMenu = document.getElementById("mobile-menu");
  if (mobileTop.style.height === "700px") {
    mobileTop.style.height = "200px";
    leftMenu.style.display = "inline-block";
    mobileMenu.style.display = "none";
  } else {
    mobileTop.style.height = "700px";
    leftMenu.style.display = "none";
    mobileMenu.style.display = "block";
  }
}


