const headers = document.querySelectorAll(".skills__container-caption");
const skillsIcons = document.querySelectorAll(".skills-icons");
const projects = document.querySelectorAll(".projects__card");
const certificates = document.querySelectorAll(".certificates__card");
const hobbiesImg = document.querySelector(".hobbies__imgContainer-img");
const hobbiesTxt = document.querySelector(".hobbies__text");

const delayInMilliseconds = 500;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

const moveInRightAnimate = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("moveInRight");
      entry.target.classList.remove("u-hidden");
    }
  });
};

const moveInLeftAnimate = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("moveInLeft");
      entry.target.classList.remove("u-hidden");
    }
  });
};

const moveInUpAnimate = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("moveInUp");
      entry.target.classList.remove("u-hidden");
    }
  });
};

let observer1 = new IntersectionObserver(moveInRightAnimate, options);
let observer2 = new IntersectionObserver(moveInLeftAnimate, options);
let observer3 = new IntersectionObserver(moveInUpAnimate, options);

headers.forEach((ele) => {
  observer1.observe(ele);
});

skillsIcons.forEach((ele) => {
  observer2.observe(ele);
});

projects.forEach((ele) => {
  observer3.observe(ele);
});

certificates.forEach((ele) => {
  observer3.observe(ele);
});

observer2.observe(hobbiesImg);
observer1.observe(hobbiesTxt);
