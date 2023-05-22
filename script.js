"use strict";

// toggle button - burger bar

let toggleButton = document.querySelector(".toggle-button");

let ulItems = document.querySelector(".ul-items");

let body = document.querySelector(".body");

toggleButton.addEventListener("click", () => {
  ulItems.classList.toggle("active");
});

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});

toggleButton.addEventListener("click", () => {
  body.classList.toggle("active");
});

document.querySelectorAll(".list-items").forEach((n) =>
  n.addEventListener("click", () => {
    toggleButton.classList.remove("active");
    ulItems.classList.remove("active");
    body.classList.remove("active");
  })
);

// smooth scroll

let links = document.querySelectorAll(".js-scroll");

links.forEach(function (elem) {
  elem.addEventListener("click", smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();

  let link = this.getAttribute("href");

  let offsetTop = document.querySelector(link).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// subscription form - validation

let email = document.getElementById("email");
let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  let name = document.getElementById("name").value;

  if (name == "" || name.length < 3) {
    errors.name = "Name cannot be empty and must be more than 3 characters";
  }

  let emailValue = email.value;

  if (emailValue == "" || !isValidEmail(emailValue)) {
    errors.email = "Email is invalid";
  }

  let phone = document.getElementById("phone").value;

  if (phone == "" || phone.length < 9) {
    errors.phone = "Phone cannot be empty and must be equal to 9 characters";
  }

  document.querySelectorAll(".error-text").forEach((element) => {
    element.textContent = "";
  });

  for (let item in errors) {
    console.log(item);

    let errorText = document.getElementById("error-" + item);
    if (errorText) {
      errorText.innerText = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// show border-bottom and change opacity on navbar while scrolling

let navbar = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// banner slider

let currentBanner = 1;
let totalBanners = 3;
let slideshowElement = document.getElementById("slideshow");

function changeBanner() {
  let nextBanner = (currentBanner % totalBanners) + 1;
  let currentBannerElement = document.getElementById("banner" + currentBanner);
  let nextBannerElement = document.getElementById("banner" + nextBanner);

  currentBannerElement.classList.remove("active");
  nextBannerElement.classList.add("active");

  currentBanner = nextBanner;
}

setInterval(changeBanner, 3000);

// journey section slider 

let slideshows = document.querySelectorAll(".journeys-slideshow");

slideshows.forEach((slideshow) => {
  let currentSlide = 1;
  let totalSlides = 3;
  let slideElements = slideshow.querySelectorAll(".slide");

  function changeSlide() {
    let nextSlide = (currentSlide % totalSlides) + 1;
    let currentSlideElement = slideshow.querySelector(".slide" + currentSlide);
    let nextSlideElement = slideshow.querySelector(".slide" + nextSlide);

    currentSlideElement.classList.remove("active");
    nextSlideElement.classList.add("active");

    currentSlide = nextSlide;
  }

  setInterval(changeSlide, 3000);
});

