// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Hide main content initially
  document.getElementById("main-content").style.display = "none";

  // Delay showing main content by 5 seconds
  setTimeout(function () {
    // Hide the animated title
    document.getElementById("title").style.display = "none";
    // Show the main content
    document.getElementById("main-content").style.display = "block";
  }, 5000); // 5000 milliseconds = 5 seconds
});
  window.onload = function () {
    document.querySelector("h1").style.opacity = 1;
  };
