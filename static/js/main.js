// Function to animate numbers
function animateStatNumber(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    let increment = end > start ? 1 : -1;
    let timer = setInterval(() => {
        current += increment;
        element.innerText = current;
        if (current == end) clearInterval(timer);
    }, stepTime);
}

// Call the animation function for each number
window.onload = function () {
    animateStatNumber("stat1", 0, 120, 2000);
    animateStatNumber("stat2", 0, 80, 2000);
    animateStatNumber("stat3", 0, 15, 2000);
    animateStatNumber("stat4", 0, 50, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    const slides = document.getElementsByClassName("carousel-slide");
    
    // Add click events to arrows
    document.querySelectorAll('.carousel-arrow').forEach(arrow => {
        arrow.addEventListener('click', function() {
            if (this.classList.contains('prev')) {
                moveSlide(-1);
            } else {
                moveSlide(1);
            }
        });
    });

    function moveSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Show current slide
        slides[slideIndex - 1].style.display = "block";
    }

    // Show first slide initially
    showSlides(slideIndex);

    // Auto advance slides every 5 seconds
    setInterval(() => {
        moveSlide(1);
    }, 5000);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});