import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.from(".hero1", {
  opacity: 0,
  y: 20,
  duration: 0.5,
})
  .from(".hero2", {
    opacity: 0,
    y: 20,
    duration: 0.5,
  })
  .from(".hero3", {
    opacity: 0,
    y: 20,
    duration: 0.5,
  })
  .from(".banner", {
    opacity: 0,
    duration: 0.5,
    y: 20,
    x: -100,
  });

gsap.from("#about h1", {
  scrollTrigger: "#about h1",
  duration: 1,
  opacity: 0,
});

gsap
  .from("#about p", {
    scrollTrigger: "#about p",
    duration: 1,
    y: 50,
    opacity: 0,
  })
  .delay(1);

gsap.from("#projects h1", {
  scrollTrigger: "#projects figure",
  duration: 1,
  opacity: 0,
  y: 10,
});

gsap.from("#investx", {
  scrollTrigger: "#projects .investx",
  duration: 1,
  x: -50,
  opacity: 0,
});

gsap.from("#creaven", {
  scrollTrigger: "#projects .creaven",
  duration: 1,
  x: 50,
  opacity: 0,
});

gsap.from("#weather-info", {
  scrollTrigger: "#projects .weather-info",
  duration: 1,
  x: -50,
  opacity: 0,
});
