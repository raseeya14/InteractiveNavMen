// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector(".navbar");

  // Add scroll event listener
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
