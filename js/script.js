// ✅ Mobile menu toggle (already works with checkbox, but we can smooth it)
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Close menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
    });
  });
});

// ✅ EmailJS Integration
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // 🔑 Replace with your EmailJS Public Key
})();

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const name = contactForm.querySelector("input[placeholder='Your Name']").value;
    const email = contactForm.querySelector("input[placeholder='Your Email']").value;
    const message = contactForm.querySelector("textarea").value;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // 🚀 Send email via EmailJS
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
      .then(
        (response) => {
          alert("✅ Message sent successfully!");
          contactForm.reset();
        },
        (error) => {
          console.error("❌ FAILED...", error);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  });
});
