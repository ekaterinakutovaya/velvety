import gsap from "gsap";

export function introAnimation() {
  const tl = new gsap.timeline();

  tl.from(".hero__bg-left", {
    width: 0,
    duration: 2,
    ease: "power3.inOut",
  })
    .from(
      ".hero__bg-right",
      {
        width: 0,
        duration: 2,
        ease: "power3.inOut",
      },
      "<",
    )
    .from(".first span", {
      y: 150,
      opacity: 0,
      skewY: 2,
      duration: 1,
    })
    .from(
      ".second span",
      {
        y: 150,
        opacity: 0,
        skewY: 2,
        duration: 1,
      },
      "<",
    )
    .from(
      ".third span",
      {
        y: 150,
        opacity: 0,
        skewY: 2,
        duration: 1,
      },
      "<",
    )
    .from(".hero__image", {
      y: 20,
      opacity: 0,
      ease: "power3.inOut",
    })
    .from(".hero__btn", {
      x: -30,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
    });
}

export function animateHeroSlide(first, second, third, button) {
  const tl = new gsap.timeline();

  tl.from(first, {
    y: 150,
    opacity: 0,
    skewY: 2,
    duration: 1,
  })
    .from(
      second,
      {
        y: 150,
        opacity: 0,
        skewY: 2,
        duration: 1,
      },
      "<",
    )
    .from(
      third,
      {
        y: 150,
        opacity: 0,
        skewY: 2,
        duration: 1,
      },
      "<",
    )
    .from(button, {
      x: -30,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
    });
}
