export function footer() {
  const cursor = document.getElementById('cursor');
  const linkedinReverse = document.getElementById('link--linkedin');
  const printer = document.getElementById('link--print');
  const email = document.getElementById('link--email');
  const linkedinClassAnim = 'is-reverse';
  const delay = 0.35 / 2 * 1000;

  linkedinReverse.addEventListener('mouseenter', () => {
    cursor.classList.remove('is-pointer');
    cursor.classList.add('is-clickable');
    setTimeout(() => {
      linkedinReverse.children[0].classList.add(linkedinClassAnim);
    }, delay);
  })
  linkedinReverse.addEventListener('mouseleave', () => {
    cursor.classList.add('is-pointer');
    cursor.classList.remove('is-clickable');
    setTimeout(() => {
      linkedinReverse.children[0].classList.remove(linkedinClassAnim);
    }, delay);
  })

  printer.addEventListener('mouseenter', () => {
    cursor.classList.remove('is-pointer');
    cursor.classList.add('is-clickable');
  });
  printer.addEventListener('mouseleave', () => {
    cursor.classList.add('is-pointer');
    cursor.classList.remove('is-clickable');
  });
  email.addEventListener('mouseenter', () => {
    cursor.classList.remove('is-pointer');
    cursor.classList.add('is-clickable');
  });
  email.addEventListener('mouseleave', () => {
    cursor.classList.add('is-pointer');
    cursor.classList.remove('is-clickable');
  });
}
