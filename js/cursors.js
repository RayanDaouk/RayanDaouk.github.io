export function cursors() {
  const cursor = document.getElementById('cursor');

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
  });

}
