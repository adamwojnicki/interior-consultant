const handleMobileMenu = (e) => {
  e.preventDefault;
};

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuIcon = document.querySelector(".hamburger-icon");
  mobileMenuIcon.addEventListener("click", (e) => handleMobileMenu(e));
});
