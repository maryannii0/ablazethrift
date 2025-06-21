// script.js

// Animate Hero Text
gsap.from(".hero-content .animate", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  stagger: 0.3,
  ease: "power2.out"
});

// Animate Product Cards on Scroll
gsap.registerPlugin(ScrollTrigger);
gsap.from(".product-card", {
  scrollTrigger: {
    trigger: ".product-grid",
    start: "top 80%"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
  ease: "power1.out"
});

// Animate Review Cards on Scroll
gsap.from(".review-card", {
  scrollTrigger: {
    trigger: ".reviews",
    start: "top 80%"
  },
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.3,
  ease: "back.out(1.7)"
});


gsap.from(".contact-form .form-group", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 85%"
  },
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});


gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 95%"
  },
  opacity: 0,
  y: 20,
  duration: 1
});

