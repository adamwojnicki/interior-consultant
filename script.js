const handleMobileMenu = (e, icon) => {
  e.preventDefault();
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-active");
  iconChange = nav.classList.contains("active") ? "close" : "menu";
  icon.childNodes[0].textContent = iconChange;
};

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuIcon = document.querySelector(".hamburger-icon");
  mobileMenuIcon.addEventListener("click", (e) =>
    handleMobileMenu(e, mobileMenuIcon)
  );
});
