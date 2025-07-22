export function experience() {
  const cursor = document.getElementById('cursor');
  const translations = [2.7, 19.5, 36, 51.5, 67.5, 86.5];
  const powers = [5, 22, 41, 58, 74, 95];
  let step = 1;
  const btnTopNav = document.getElementById('bottom--nav');
  const btnBottomNav = document.getElementById('top--nav');
  const animateEl = document.getElementById('prise');
  const power = document.getElementById('circuit--xp-power');
  const cableEl = document.getElementById('cable-group');
  const fixedPoint = document.getElementById('fix-rope');
  const cablePath = document.getElementById('cable-path');
  const terminalExp = document.getElementById('experiences--infos-txt');
  const infosExpSliders = document.querySelectorAll('.infos-slide--wrapper');
  const xpYearSpan = document.getElementById('xp-year');
  const xpMonthSpan = document.getElementById('xp-month');
  let currentSlide = 0;


  function initSliderItems() {
    const itemsExp = document.querySelectorAll('.infos-slide');
    itemsExp.forEach((itemExp) => {
      itemExp.style.height = terminalExp.offsetHeight + 'px';
    })
  }
  initSliderItems();
  window.addEventListener('resize', () => {
    initSliderItems();
  })
  let isAnimating = false;

  let powerCurve = 40;
  function curve(x1, y1, x2, y2, t, amplitude) {
    // Linear Interpolation for X
    const x = x1 + (x2 - x1) * t; // t is the progression factor. t = 0 ? it's the start point. t = 2 ? it's the end.
    // Interpolation + sin for Y
    const y = y1 + (y2 - y1) * t + amplitude * Math.sin(Math.PI * t); // Add sinus on segment to curve it.
    return { x, y };
  }

  function animateCurvePower(from, to, duration) {
    const start = performance.now();

    function animate(now) {
      const elapsedTime = now - start;
      const t = Math.min(elapsedTime / duration, 1); // clamp 0 to 1
      // Linear interpolation :
      powerCurve = from + (to - from) * t;

      if (t < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  // -----------------------------------------------
  const numPoints = 100;
  // Fixed segment vertex
  let fixedOffsetX = 0;
  let fixedOffsetY = 0;
  // Animated segment vertex
  let animatedOffsetX = 0;
  let animatedOffsetY = 25;


  // Paths calculations to generate svg:
  function catmullRom2bezier(points) {
    if (points.length < 2) return '';

    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = i > 0 ? points[i - 1] : points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = i != points.length - 2 ? points[i + 2] : p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;

      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    return d;
  }



  function trackPosition() {
    const animatedRect = animateEl.getBoundingClientRect();
    const fixedRect = fixedPoint.getBoundingClientRect();
    const parentRect = document.getElementById('cable-svg').getBoundingClientRect();

    // Fixed dot
    const x1 = fixedRect.left - parentRect.left + fixedRect.width / 2 + fixedOffsetX;
    const y1 = fixedRect.top - parentRect.top + fixedRect.height / 2 + fixedOffsetY;

    // Animated dot
    const x2 = animatedRect.left - parentRect.left + animatedRect.width / 2 + animatedOffsetX;
    const y2 = animatedRect.top - parentRect.top + animatedRect.height / 2 + animatedOffsetY;

    const points = []; // For svg
    // Points generations:
    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1);
      const { x, y } = curve(x1, y1, x2, y2, t, powerCurve);
      points.push({ x, y });
    }

    const pathD = catmullRom2bezier(points);
    cablePath.setAttribute('d', pathD);

    requestAnimationFrame(trackPosition);
  }
  // -----------------------------------------------
  trackPosition();
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'style') {
        if (!isAnimating) {
          isAnimating = true;
          trackPosition();
          // Animated curve
          let newPowerCurve = powerCurve;
          let animDuration = 500;
          if (step === 1) {
            newPowerCurve = 40;
            animDuration = 300;
            xpYearSpan.textContent = `${years}a`;
            xpMonthSpan.textContent = `${months}m`;
          } else if (step === 2) {
            newPowerCurve = 55;
            // animDuration = 300;
            xpYearSpan.textContent = `3a`;
            xpMonthSpan.textContent = `6m`;
          } else if (step === 3) {
            newPowerCurve = 70;
            // animDuration = 300;
            xpYearSpan.textContent = `2a`;
            xpMonthSpan.textContent = ``;
          } else if (step === 4) {
            newPowerCurve = 85;
            // animDuration = 300;
            xpYearSpan.textContent = ``;
            xpMonthSpan.textContent = `3m`;
          } else if (step === 5) {
            newPowerCurve = 100;
            // animDuration = 300;
            xpYearSpan.textContent = ``;
            xpMonthSpan.textContent = `3m`;
          } else if (step === 6) {
            // Don't need to up powerCurve
            xpYearSpan.textContent = ``;
            xpMonthSpan.textContent = `3m`;
          }

          animateCurvePower(powerCurve, newPowerCurve, animDuration);

          // Stop observe after animation
          setTimeout(() => {
            isAnimating = false;
          }, 300);
        }
      }
    });
  });

  observer.observe(animateEl, {
    attributeFilter: ['style']
  });

  // Experience duration:
  // xpScreenContent
  const currentJobStart = new Date('2022-02-01');
  const currentDate = new Date();
  const totalMonths =
    (currentDate.getFullYear() - currentJobStart.getFullYear()) * 12 +
    (currentDate.getMonth() - currentJobStart.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  xpYearSpan.textContent = `${years}a`;
  xpMonthSpan.textContent = `${months}m`;


  btnTopNav.addEventListener('click', () => {
    // Timeline
    if (step < translations.length) {
      step += 1;
      cableEl.classList.add('move-left');
      cableEl.classList.remove('move-hiddle');
      setTimeout(() => {
        cableEl.classList.remove('move-left');
        cableEl.classList.add('move-hiddle');
      }, 300);
    } else {
      step = translations.length;
    }
    animateEl.style.left = `${translations[step - 1]}%`;
    power.style.width = `${powers[step - 1]}%`;

    // Carousel
    if (currentSlide < translations.length - 1) {
      currentSlide += 1;
      infosExpSliders.forEach((infosExpSlider) => {
        infosExpSlider.style.transform = `translateY(-${currentSlide * terminalExp.offsetHeight}px)`;
      })
    }
  });

  btnBottomNav.addEventListener('click', () => {
    // Timeline
    if (step > 1) {
      step -= 1;
      cableEl.classList.add('move-right');
      cableEl.classList.remove('move-hiddle');
      setTimeout(() => {
        cableEl.classList.remove('move-right');
        cableEl.classList.add('move-hiddle');
      }, 300);
    } else {
      step = 1;
    }
    animateEl.style.left = `${translations[step - 1]}%`;
    power.style.width = `${powers[step - 1]}%`;

    // Carousel
    if (currentSlide > 0) {
      currentSlide -= 1;
      infosExpSliders.forEach((infosExpSlider) => {
        infosExpSlider.style.transform = `translateY(-${currentSlide * terminalExp.offsetHeight}px)`;
      })
    }
  });

  [btnTopNav, btnBottomNav].forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      cursor.classList.remove('is-pointer');
      cursor.classList.add('is-clickable');
    });

    btn.addEventListener('mouseleave', () => {
      cursor.classList.add('is-pointer');
      cursor.classList.remove('is-clickable');
    });
  });
}
