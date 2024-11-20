let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
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