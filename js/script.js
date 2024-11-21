let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Function to navigate slides
function plusSlides(n) {
    slideIndex += n; // Change slide index
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }
    if (slideIndex < 1) {
        slideIndex = slides.length; // Go to the last slide
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}

window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block"; // Show button
    } else {
        scrollToTopButton.style.display = "none"; // Hide button
    }
};

document.getElementById('callButton').addEventListener('click', function() {
    document.getElementById('callus').scrollIntoView({ behavior: 'smooth' });
});

// Menu toggle functionality
document.getElementById('menuButton').addEventListener('click', function() {
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('active'); // Toggle the 'active' class
});

