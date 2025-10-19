import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const mdInput = document.getElementById("markdown-input");
const preview = document.getElementById("preview");
const themeToggle = document.getElementById("theme-toggle");

function toggleTheme() {
  const themeLink = document.getElementById("theme-style") as HTMLLinkElement;
  const currentHref = themeLink.getAttribute("href") || "";
  const isDark = currentHref.includes("dark");

  // Add a class for glow animation
  document.body.classList.add("theme-transitioning");

  // Swap theme file
  themeLink.href = isDark
    ? "src/themes/polished-netherite.css"
    : "src/themes/netherite-dark.css";

  // Remove the glow after animation
  setTimeout(() => {
    document.body.classList.remove("theme-transitioning");
  }, 600);
}

mdInput.addEventListener("input", () => {
  preview.innerHTML = marked.parse(mdInput.value);
});

themeToggle.addEventListener("click", () => {
  toggleTheme();
});
