// const nav = document.querySelector(".nav");

// // Menu fade animation
// const handleHover = function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = this;
//     });
//     logo.style.opacity = this;
//   }
// };

// // Passing "argument"
// nav.addEventListener("mouseover", handleHover.bind(0.5));

// nav.addEventListener("mouseout", handleHover.bind(1));

// Menu fade
// Get all navigation links
const navLinks = document.querySelectorAll(".nav__link");
const nav = document.querySelector(".nav");

// Function to handle hover
const handleHover = function () {
  const siblings = this.closest(".nav").querySelectorAll(".nav__link");
  const logo = this.closest(".nav").querySelector("img");

  siblings.forEach((el) => {
    if (el !== this) el.style.opacity = 0.5;
  });

  logo.style.opacity = 0.5;
};

// Add event listeners to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("mouseover", handleHover);
});

// Reset opacity on mouse leave from the nav
nav.addEventListener("mouseout", function () {
  navLinks.forEach((link) => {
    link.style.opacity = 1;
  });

  const logo = this.querySelector("img");
  logo.style.opacity = 1;
});
