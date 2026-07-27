// Typing Effect
const typing = document.getElementById("typing");

const words = [
  "Software Developer",
  "Java Developer",
  "Python Developer",
  "Web Developer",
  "ECE Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  if (!typing) return;

  const currentWord = words[wordIndex];

  if (!deleting) {
    typing.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    typing.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Fade Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("fade");
  observer.observe(section);
});
