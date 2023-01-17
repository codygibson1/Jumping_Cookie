const tl = gsap.timeline({
  default: { duration: 0.75, ease: "power1.out" },
});

tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.75 }
);
tl.fromTo(
  ".cookie",
  { opacity: 0, y: -50, rotation: "-90deg" },
  {
    opacity: 1,
    y: 0,
    rotation: "0deg",
    ease: "bounce.out",
    duration: 2.5,
  },
  "<"
);
tl.fromTo(".text", { opacity: 0, y: -50 }, { opacity: 1, y: 0 }, "<40%");

// Click to make cookie jump
const jumpingCookie = document.querySelector(".cookie-container");
//Cookie jump
jumpingCookie.addEventListener("click", () => {
  tl.fromTo(
    ".cookie",
    { y: 0, rotation: "0deg" },
    { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 }
  );
  // Crumbs jumping
  tl.fromTo("#Crumbs", { y: 0 }, { y: -40, yoyo: true, repeat: -1 }, "<");
});

//Fading cookie out
const button = document.querySelector("button");
button.addEventListener("click", () => {
  gsap.to(".cookie-container", {
    opacity: 0,
    y: 100,
    duration: 0.75,
    ease: "power1.out",
  });
});
