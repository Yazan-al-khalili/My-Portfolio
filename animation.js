const textElement = document.getElementById("typing-text");
const words = ["Software Engineer!", "Web Developer!", "AI Enthusiast!"]; // Add more words if needed
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        textElement.textContent = currentWord.substring(0, charIndex++);
    }

    // Set Speed
    let typingSpeed = isDeleting ? 100 : 200; // Slower when typing, faster when deleting


    // When word is fully typed, wait before deleting
    if (!isDeleting && charIndex === currentWord.length + 1) {
        typingSpeed = 1500; // Pause before erasing
        isDeleting = true;
    }
    // When word is fully deleted, switch to next word
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Loop through words
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start the animation
typeEffect();


// Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close navbar when a link is clicked
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Update active nav link on scroll
const sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
