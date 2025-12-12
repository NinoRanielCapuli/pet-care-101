document.addEventListener("DOMContentLoaded", () => {
  // BACK TO TOP BUTTON
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.classList.add("back-to-top");
  backToTop.style.display = "none"; // hidden by default
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // SMOOTH SCROLL FOR INTERNAL LINKS (#)
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // FORM VALIDATION (only runs if form exists)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // Ensure all fields exist
      if (!name || !email || !message) return;

      // Empty fields prevention
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert("Please fill in all fields.");
        e.preventDefault();
        return;
      }

      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
      if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  }
});
