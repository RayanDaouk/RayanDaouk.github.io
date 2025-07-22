const intervalTime = 150;     // speed emission ms
const particleMaxLifetime = 2000;
const particleMinLifetime = 1000;
const minWidth = 10; // px
const maxWidth = 20;
const minTravel = 105; // %
const maxTravel = 130;

function createParticle(emitter) {
  const particle = document.createElement('div');
  particle.className = 'btn-particule';

  const square = document.createElement('div');
  square.className = 'square';

  const particleID = emitter.querySelector('.stack--logo').getAttribute('id');
  particle.classList.add(`particle--${particleID}`);

  particle.appendChild(square);

  const emitterWidth = emitter.clientWidth;
  const randomWidth = minWidth + Math.random() * (maxWidth - minWidth);
  particle.style.width = `${randomWidth}px`;

  const maxLeft = emitterWidth - randomWidth;
  const randomLeft = Math.random() * maxLeft;
  particle.style.left = `${randomLeft}px`;

  const emitterHeight = emitter.clientHeight;
  const randomTravel = minTravel + Math.random() * (maxTravel - minTravel);
  const travelPx = -(randomTravel / 100) * emitterHeight;

  particle.style.setProperty('--travelY', `${travelPx}px`);

  particle.style.setProperty('--zIndex', `${Math.random() < 0.5 ? 0 : -1}`)
  return particle;
}

export function btnEmitter() {
  const emitters = document.querySelectorAll('.stack');

  emitters.forEach((emitter) => {
    let intervalId = null;

    emitter.addEventListener('mouseenter', () => {
      if (intervalId) return;

      intervalId = setInterval(() => {
        const particle = createParticle(emitter);
        emitter.appendChild(particle);
        const randomLifetime = particleMinLifetime + Math.random() * (particleMaxLifetime - particleMinLifetime);
        particle.style.setProperty('--duration', `${randomLifetime}ms`);
        // Destroy
        setTimeout(() => {
          particle.remove();
        }, randomLifetime);

      }, intervalTime);
    });

    emitter.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
      intervalId = null;
    });
  });
}

