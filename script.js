// JavaScript for Interactive Elements

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the interactive button
  const interactiveButton = document.getElementById("interactive-btn");

  // Array of fun messages for the alert
  const messages = [
    "🎉 Congratulations! You just triggered a JavaScript event!",
    "💻 You're learning web development - keep going!",
    "🚀 JavaScript makes websites interactive and dynamic!",
    "🌟 Every click is a step towards becoming a developer!",
    "🎯 You've successfully used HTML, CSS, and JavaScript together!",
  ];

  // Counter to track clicks
  let clickCount = 0;

  // Add click event listener to the button
  interactiveButton.addEventListener("click", function () {
    // Increment click counter
    clickCount++;

    // Get a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Show the alert with the message
    alert(
      randomMessage +
        `\n\nYou've clicked the button ${clickCount} time${
          clickCount > 1 ? "s" : ""
        }!`
    );

    // Change button text after first click
    if (clickCount === 1) {
      interactiveButton.textContent = "Click Me Again!";
    } else if (clickCount > 5) {
      interactiveButton.textContent = `Wow! ${clickCount} clicks!`;
    }

    // Add a temporary animation class
    interactiveButton.classList.add("clicked");
    setTimeout(() => {
      interactiveButton.classList.remove("clicked");
    }, 200);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add animation class for clicked button
  const style = document.createElement("style");
  style.textContent = `
        .clicked {
            transform: scale(0.95) !important;
            background: linear-gradient(135deg, #059669, #047857) !important;
        }
    `;
  document.head.appendChild(style);

  // Console message for developers
  console.log("🎉 Welcome to your first interactive webpage!");
  console.log("📚 This webpage demonstrates:");
  console.log("   • HTML structure with semantic elements");
  console.log("   • CSS styling with modern design principles");
  console.log("   • JavaScript interactivity with event handling");
  console.log("🚀 Keep learning and building amazing things!");
});

// Additional interactive feature: Change page theme
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Log page load time
window.addEventListener("load", function () {
  console.log(`⚡ Page loaded in ${performance.now().toFixed(2)}ms`);
});
