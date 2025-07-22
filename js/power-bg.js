export function wave() {
  const wavesContainer = document.getElementById('power');
window.addEventListener('click', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const waveEl = document.createElement('div');
    waveEl.classList.add('pulse-wave');
    waveEl.style.left = `${mouseX}px`;
    waveEl.style.top = `${mouseY}px`;

    wavesContainer.appendChild(waveEl);
    const computedStyle = getComputedStyle(waveEl);
    const animDuration = parseFloat(computedStyle.animationDuration);
    
    setTimeout(() => {
      waveEl.remove();
    }, animDuration * 1000);
  });
}
