export function btnSkills() {
  const cursor = document.getElementById('cursor');
  const skills = [
    { btn: 'btn-skill-html', fx: 'skills--red-on' },
    { btn: 'btn-skill-css', fx: 'skills--blue-on' },
    { btn: 'btn-skill-js', fx: 'skills--yellow-on' }
  ];

  const tvRed = document.getElementById('tv-red');
  const tvBlue = document.getElementById('tv-blue');
  const tvYellow = document.getElementById('tv-yellow');
  const skillsCollision = document.getElementById('skills--collisions');
  const monitorRed = document.getElementById('monitor-light-red');
  const monitorBlue = document.getElementById('monitor-light-blue');
  const monitorYellow = document.getElementById('monitor-light-yellow');

  let hoverEl = '';
  let redIsOn = false;
  let blueIsOn = false;
  let yellowIsOn = false;

  const observers = [];

  function notify() {
    const states = getStates();
    observers.forEach(callback => callback(states));
  }

  function getStates() {
    return {
      redIsOn,
      blueIsOn,
      yellowIsOn,
      hoverEl
    };
  }

  function subscribe(callback) {
    observers.push(callback);
  }

  function updateMaskSize() {
    const width = skillsCollision.offsetWidth;
    const height = skillsCollision.offsetHeight;

    tvRed.style.maskSize = `${width}px auto`;
    tvRed.style.webkitMaskSize = `${width}px auto`;

    tvBlue.style.maskSize = `${width}px auto`;
    tvBlue.style.webkitMaskSize = `${width}px auto`;

    tvYellow.style.maskSize = `${width}px auto`;
    tvYellow.style.webkitMaskSize = `${width}px auto`;
  }

  updateMaskSize();
  window.addEventListener('resize', updateMaskSize);

  skills.forEach(({ btn, fx }) => {
    let enterTimeout = null;

    document.getElementById(btn).addEventListener('click', () => {
      const fxElement = document.getElementById(fx);
      fxElement.classList.toggle('isOff');

      if (fx === 'skills--red-on') {
        redIsOn = !redIsOn;
      } else if (fx === 'skills--blue-on') {
        blueIsOn = !blueIsOn;
      } else if (fx === 'skills--yellow-on') {
        yellowIsOn = !yellowIsOn;
      }

      notify();
    });

    document.getElementById(btn).addEventListener('mouseenter', () => {
      cursor.classList.remove('is-pointer');
      cursor.classList.add('is-clickable');

      hoverEl = btn.replace('btn-skill-', '');
      const monitor = document.getElementById(fx).nextElementSibling.children[0];
      monitor.classList.add('on');

      if (btn === 'btn-skill-html') {
        monitorRed.classList.add('on');
        monitorRed.style.animationPlayState = 'running';
      } else if (btn === 'btn-skill-css') {
        monitorBlue.classList.add('on');
        monitorBlue.style.animationPlayState = 'running';
      } else {
        monitorYellow.classList.add('on');
        monitorYellow.style.animationPlayState = 'running';
      }

      const monitorAnimOnDuration = parseFloat(getComputedStyle(monitor).animationDuration);
      enterTimeout = setTimeout(() => {
        monitor.classList.remove('on');
        document.getElementById(fx).nextElementSibling.classList.add('screen-start');
      }, monitorAnimOnDuration * 1000);

      notify();
    });

    document.getElementById(btn).addEventListener('mouseleave', () => {
      cursor.classList.add('is-pointer');
      cursor.classList.remove('is-clickable');

      hoverEl = '';
      if (enterTimeout) {
        clearTimeout(enterTimeout);
        enterTimeout = null;
      }

      const monitor = document.getElementById(fx).nextElementSibling.children[0];
      document.getElementById(fx).nextElementSibling.classList.remove('screen-start');
      monitor.classList.add('off');
      monitor.classList.remove('on');

      if (btn === 'btn-skill-html') {
        monitorRed.classList.remove('on');
        monitorRed.style.animationPlayState = 'paused';
      } else if (btn === 'btn-skill-css') {
        monitorBlue.classList.remove('on');
        monitorBlue.style.animationPlayState = 'paused';
      } else {
        monitorYellow.classList.remove('on');
        monitorYellow.style.animationPlayState = 'paused';
      }

      const monitorAnimOnDuration = parseFloat(getComputedStyle(monitor).animationDuration);
      setTimeout(() => {
        monitor.classList.remove('off');
      }, monitorAnimOnDuration * 1000);

      notify();
    });
  });

  return {
    getStates,
    subscribe
  };
}
