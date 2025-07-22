import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

export function gsapCarousel() {
  // Parameters:
  const animationDuration = 15; //Seconds
  const curveAnimation = "linear";
  const clonesPlusItem = 2;
  // -------------------
  const cursor = document.getElementById('cursor');
  const carousel = document.getElementById('carousel-wrapper');
  const spacingItems = parseFloat(getComputedStyle(carousel).gap);

  const carouselItems = carousel.querySelectorAll('.carousel-item');
  let totalItemsWidth = 0;

  carouselItems.forEach((item) => {
    totalItemsWidth += item.offsetWidth;
  });
  // all items are cloned on html. (cloned items & original items = all carousel)
  const itemsNumber = carouselItems.length / clonesPlusItem;
  const originalItemsWidth = totalItemsWidth / clonesPlusItem;
  const gapsInOriginalContent = (itemsNumber - 1) * spacingItems;
  const originalContentWithGaps = originalItemsWidth + gapsInOriginalContent;
  const distance = carousel.scrollWidth - originalContentWithGaps;

  let carouselAnimation = gsap.to(carousel, {
    x: `-${distance}`,
    ease: curveAnimation,
    duration: animationDuration,
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % distance)
    }
  });

  let isDragging = false;

  gsap.registerPlugin(Draggable);

  function handleRelease() {
    isDragging = false;
    carousel.style.cursor = 'grab';

    const currentX = gsap.getProperty(carousel, "x");
    const wrappedX = ((currentX % -distance) + -distance) % -distance;

    gsap.set(carousel, { x: wrappedX });

    carouselAnimation.kill(); // Fuck it, destroy this to replace

    // Now, my new animation with true values :)
    carouselAnimation = gsap.to(carousel, {
      x: `-=${distance}`,
      ease: curveAnimation,
      duration: animationDuration,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % distance)
      }
    });
    window.removeEventListener('mouseup', handleMouseUpOutside);
  }

  function handleMouseUpOutside() {
    if (isDragging) {
      handleRelease();
    }
  }

  const draggable = Draggable.create(carousel, {
    type: "x",
    inertia: true,
    bounds: { minX: -distance, maxX: 0 },
    onPress: function () {
      isDragging = true;
      carousel.style.cursor = 'grabbing';
      if (!carouselAnimation.paused()) {
        carouselAnimation.pause();
      }
      window.addEventListener('mouseup', handleMouseUpOutside);
    },

    onDrag: function () {
      const currentPos = gsap.getProperty(carousel, "x");
      if (currentPos > 0) {
        gsap.set(carousel, { x: currentPos - distance });
      } else if (currentPos < -distance) {
        gsap.set(carousel, { x: currentPos + distance });
      }
    },

    onRelease: handleRelease,
  });

  carousel.parentElement.addEventListener('mouseenter', () => {
    if (!isDragging && !carouselAnimation.paused()) {
      carouselAnimation.pause();
    }
  });

  carousel.parentElement.addEventListener('mouseleave', () => {
    if (!isDragging && carouselAnimation.paused()) {
      carouselAnimation.resume();
    }
  });

  carouselItems.forEach(item => {
    item.addEventListener('dragstart', (e) => e.preventDefault());

    item.addEventListener('mouseenter', () => {
      cursor.classList.remove('is-pointer');
      cursor.classList.add('is-clickable');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.add('is-pointer');
      cursor.classList.remove('is-clickable');
    });
  });
}


