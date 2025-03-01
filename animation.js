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
