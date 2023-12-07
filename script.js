const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbar = document.querySelector(".navbar-links");
//select all nav-links
const navbarLinks = document.querySelectorAll(".nav-link");
console.log(navbarLinks);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("active");
  toggleButton.classList.toggle("active");
  navbar.classList.toggle("active");
});

// to close navbar after presing the link

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.toggle("active");
    toggleButton.classList.toggle("active");
    navbar.classList.toggle("active");
  });
});
