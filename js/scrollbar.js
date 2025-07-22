import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

export function scrollbar() {
  const cursor = document.getElementById('cursor');
  const scrollbar = document.getElementById("scrollbar");

  const wrapperHeight = window.innerHeight * 0.89; // vh total
  const scrollbarHeight = wrapperHeight * 0.1;
  const maxTranslate = wrapperHeight - scrollbarHeight;

  Draggable.create(scrollbar, {
    type: "y",
    bounds: { minY: 0, maxY: maxTranslate },
    onDrag: function () {
      const progress = this.y / maxTranslate;
      const scrollableHeight = document.body.scrollHeight - window.innerHeight;
      window.scrollTo(0, progress * scrollableHeight);
    }
  });

  gsap.to(scrollbar, {
    y: maxTranslate,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: () => document.body.scrollHeight - window.innerHeight,
      scrub: true
    }
  });



  scrollbar.addEventListener('mouseenter', () => {
    cursor.classList.remove('is-pointer');
    cursor.classList.add('is-clickable');
  });
  scrollbar.addEventListener('mouseleave', () => {
    cursor.classList.add('is-pointer');
    cursor.classList.remove('is-clickable');
  });

}
