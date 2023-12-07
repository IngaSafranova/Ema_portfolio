// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active');
//   toggleButton.classList.toggle('active')
// })

const toggleButton = document.getElementsByClassName("toggle-button")[0];

//select all nav-links
const navbarLinks = document.querySelectorAll('.nav-link');
console.log(navbarLinks)

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle('active');
});

// to close navbar after presing the link

navbarLinks.forEach(link => {
  link.addEventListener('click', ()=> {
    document.body.classList.remove('active');
  })
})