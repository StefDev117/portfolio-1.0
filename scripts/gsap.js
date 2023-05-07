gsap.from("#profile", {
  opacity: 0,
  delay: 0.4,
});

gsap.from(".abm-experiences", {
  xPercent: -100,
  opacity: 0,
  duration: 1,
  delay: 0.8,
});

gsap.from(".skills", {
  xPercent: 100,
  opacity: 0,
  duration: 1,
  delay: 1.2,
});

const btnCV = document.querySelector(".btn-ddl-cv");

gsap.from(btnCV, {
  xPercent: 100,
  opacity: 0,
  duration: 1,
  delay: 1.6,
});

gsap.from(".bigFont", {
  xPercent: 100,
  opacity: 0,
  duration: 1,
  delay: 2,
});

gsap.from("footer", {
  yPercent: 100,
  opacity: 0,
  duration: 1,
  delay: 2.4,
});

var animationCV = gsap.fromTo(
  btnCV,
  { scale: 1, yPercent: 0, duration: 0.25 },
  { scale: 1.1, yPercent: -10, duration: 0.25 }
);

btnCV.addEventListener("mouseover", function () {
  animationCV.play();
});

btnCV.addEventListener("mouseout", function () {
  animationCV.reverse();
});
