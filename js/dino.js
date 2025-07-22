export function dino() {
  const dino = document.getElementById('dino');
  const dinoRoar = document.getElementById('dino-roar');
  const dinoTxt = document.getElementById('dino-txt');

  if (!dino || !dinoTxt) return;

  dino.addEventListener('mouseenter', () => {
    dino.style.opacity = 0;
    dinoTxt.style.opacity = 1;
    dinoRoar.style.opacity = 1;

  });
  dino.addEventListener('mouseleave', () => {
    dinoTxt.style.opacity = 0;
    dino.style.opacity = 1;
    dinoRoar.style.opacity = 0;
  })

}
