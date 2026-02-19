// Año dinámico
const yearSpan = document.getElementById("y");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
// Tema claro/oscuro (con persistencia)
const btn = document.getElementById("themeToggle");
const THEME_KEY = "theme"; // "dark" | "light"

function setTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("theme-light", isLight);

  if (btn) {
    btn.setAttribute("aria-pressed", String(isLight));
    btn.textContent = isLight ? "Tema oscuro" : "Tema claro";
  }

  localStorage.setItem(THEME_KEY, theme);
}

function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || "dark";
}

setTheme(getSavedTheme());

if (btn) {
  btn.addEventListener("click", () => {
    const current = document.body.classList.contains("theme-light") ? "light" : "dark";
    setTheme(current === "light" ? "dark" : "light");
  });
}
// Marcar link activo en la navegación
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav a").forEach((a) => {
  const href = a.getAttribute("href");
  if (href === currentPage) {
    a.classList.add("is-active");
    a.setAttribute("aria-current", "page");
  }
});
