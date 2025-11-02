export function topProd() {
  const link = document.getElementById("topProd");
  link.addEventListener("mouseenter", () => {
    cursor.classList.remove("is-pointer");
    cursor.classList.add("is-clickable");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.add("is-pointer");
    cursor.classList.remove("is-clickable");
  });
}
