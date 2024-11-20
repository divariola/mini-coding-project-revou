// Scroll to Top Button functionality
const scrollToTopButton = document.getElementById("scrollToTop");

// Show the button when the user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block"; // Show button
    } else {
        scrollToTopButton.style.display = "none"; // Hide button
    }
};

// Scroll to the top when the button is clicked
scrollToTopButton.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll effect
    });
};