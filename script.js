// =============================
// DARK MODE TOGGLE
// =============================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load dark mode state from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// =============================
// CONTACT FORM HANDLING
// =============================
const form = document.getElementById("contact-form");
const responseDiv = document.getElementById("form-response");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    responseDiv.textContent = `✅ Thank you, ${name}! Your message has been sent.`;
    responseDiv.style.color = "green";

    // Reset form
    form.reset();
  } else {
    responseDiv.textContent = "⚠️ Please fill out all fields.";
    responseDiv.style.color = "red";
  }
});

// =============================
// SMOOTH SCROLLING FOR NAV LINKS
// =============================
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", (
