
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Form Fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const device = document.getElementById("device").value;
    const issue = document.getElementById("issue").value;

    // Basic validation (ensure no fields are empty)
    if (!name || !email || !device || !issue) {
        alert("Please fill in all fields.");
        return;
    }

    // Display a success message (you can replace this with a modal or custom success page)
    alert("Your message has been successfully submitted!");
});


// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 1200,  // Animation duration
    easing: 'ease-in-out',  // Easing function
    once: true,  // Only animate once
});

// **Form Validation for Contact Form**
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Form Fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const device = document.getElementById("device").value;
    const issue = document.getElementById("issue").value;

    // Basic validation (ensure no fields are empty)
    if (!name || !email || !device || !issue) {
        alert("Please fill in all fields.");
        return;
    }

    // Display a success message (you can replace this with a modal or custom success page)
    alert("Your message has been successfully submitted!");
});

// **Hero Image Slideshow**
const heroImages = [
    'images/hero-image.jpg',  // Replace with your own images
    'images/laptop-screen-replacement.jpg',
    'images/data-recovery.jpg'
    ];

let currentIndex = 0;

function changeHeroImage() {
    // Change the background image of the hero section
    document.getElementById('hero').style.backgroundImage = `url(${heroImages[currentIndex]})`;
    currentIndex = (currentIndex + 1) % heroImages.length;
}

// Change the image every 2 seconds
setInterval(changeHeroImage, 2000);

// Optionally, change the image on page load
changeHeroImage();

