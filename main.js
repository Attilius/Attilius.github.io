const mobileMenuItems = document.querySelector(".mobileMenuItems");

// mobile menu switch on/off

document.querySelector(".mobile-menu").addEventListener("click", () => {
  if (mobileMenuItems.style.display === "none") {
    mobileMenuItems.style.display = "flex";
    mobileMenuItems.style.flexDirection = "column";
  } else {
    mobileMenuItems.style.display = "none";
  }
});

// mobile menus are hidden

document.querySelector(".home").addEventListener("click", () => {
  mobileMenuItems.style.display = "none";
});
document.querySelector(".definitions").addEventListener("click", () => {
  mobileMenuItems.style.display = "none";
});
document.querySelector(".git").addEventListener("click", () => {
  mobileMenuItems.style.display = "none";
});
document.querySelector(".linkedin").addEventListener("click", () => {
  mobileMenuItems.style.display = "none";
});
