function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function glitch() {
  console.log('glitch');
  const logos = document.querySelectorAll('.carousel-item--logo');
  window.addEventListener('DOMContentLoaded', () => {
    logos.forEach(img => {

      const width = img.offsetWidth;
      const height = img.offsetHeight;
      const src = img.src;

      // Build container
      const wrapper = document.createElement('div');
      wrapper.classList.add('glitch-wrapper');
      wrapper.style.width = width + 'px';
      wrapper.style.height = height + 'px';

      wrapper.addEventListener('mouseenter', () => {
        wrapper.querySelectorAll('.strip').forEach(strip => {
          strip.style.animationPlayState = 'running';
        });
      });

      wrapper.addEventListener('mouseleave', () => {
        wrapper.querySelectorAll('.strip').forEach(strip => {
          strip.style.animationPlayState = 'paused';
        });
      });

      // Strip img on divs
      let i = 0;
      while (i < height) {
        const stripHeight = random(12, 20);
        const realHeight = (i + stripHeight > height) ? height - i : stripHeight;

        const strip = document.createElement('div');
        strip.classList.add('strip');

        strip.style.top = i + 'px';
        strip.style.left = '0';
        strip.style.height = realHeight + 'px';

        strip.style.backgroundImage = `url(${src})`;
        strip.style.backgroundPosition = `0 -${i}px`;
        strip.style.backgroundRepeat = 'no-repeat';
        strip.style.backgroundSize = `${width}px ${height}px`;

        const moveX = (Math.random() * width - (width / 2)).toFixed(2); // from -15px to +15px
        const durationMove = ((1.5 + Math.random() * 1).toFixed(2) - 1); // from 1.5s to 2.5s
        const delayMove = (Math.random() * 2).toFixed(2);

        strip.style.setProperty('--move-x', `${moveX}px`);
        strip.style.setProperty('--duration-move', `${durationMove}s`);
        strip.style.setProperty('--delay-move', `${delayMove}s`);
        setTimeout(() => {
          wrapper.querySelectorAll('.strip').forEach(strip => {
            strip.style.animationPlayState = 'paused';
          });
        }, 800);

        wrapper.appendChild(strip);

        i += realHeight;
      }

      img.parentElement.addEventListener('mouseenter', () => {
        wrapper.querySelectorAll('.strip').forEach(strip => {
          strip.style.animationPlayState = 'running';
        });
      });

      img.parentElement.addEventListener('mouseleave', () => {
        wrapper.querySelectorAll('.strip').forEach(strip => {
          strip.style.animationPlayState = 'paused';
        });
      });
      img.parentNode.insertBefore(wrapper, img.nextSibling);
    });
  })

}
