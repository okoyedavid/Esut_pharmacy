export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
export const calculateGPA = (courses) => {
  let totalPoints = 0;
  let totalUnits = 0;

  courses.forEach((course) => {
    const { points } = calculateGradePoint(course.assessments);
    totalPoints += points * course.units;
    totalUnits += course.units;
  });

  return totalUnits === 0 ? 0 : (totalPoints / totalUnits).toFixed(2);
};

export const calculateGradePoint = (score) => {
  const totalScore = score.reduce(
    (acc, assessment) => acc + assessment.score,
    0
  );
  const totalPossible = score.reduce(
    (acc, assessment) => acc + assessment.total,
    0
  );
  const percentage = (totalScore / totalPossible) * 100;

  if (percentage >= 70) return { grade: "A", points: 5.0 };
  if (percentage >= 60) return { grade: "B", points: 4.0 };
  if (percentage >= 50) return { grade: "C", points: 3.0 };
  if (percentage >= 45) return { grade: "D", points: 0 };
  if (percentage >= 40) return { grade: "E", points: 0 };
  return { grade: "F", points: 0.0 };
};

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return "Just now";
};

export function getPassedLevels(level) {
  const pastLevels = [];
  for (let lvl = level - 100; lvl >= 100; lvl -= 100) {
    pastLevels.push(lvl);
  }

  return pastLevels;
}

export function getClassification(gp) {
  if (gp >= 4.5) {
    return {
      classification: "First Class Honours",
      standing: "Outstanding",
    };
  } else if (gp >= 3.5) {
    return {
      classification: "Second Class Honours (Upper Division)",
      standing: "Very Good",
    };
  } else if (gp >= 2.5) {
    return {
      classification: "Second Class Honours (Lower Division)",
      standing: "Good",
    };
  } else if (gp >= 1.5) {
    return {
      classification: "Third Class Honours",
      standing: "Fair",
    };
  } else if (gp >= 1.0) {
    return {
      classification: "Pass",
      standing: "Satisfactory",
    };
  } else {
    return {
      classification: "Fail",
      standing: "Unsatisfactory",
    };
  }
}

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/* This file contains helper functions for the Pico Aid Ltd website */

// Scroll to element with smooth scroll behavior
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Truncate text to a specified length
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
}

// Generate random ID for elements
function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// Detect if user has scrolled past a certain point
function hasScrolledPast(elementId, offset = 0) {
  const element = document.getElementById(elementId);
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  return rect.top + offset < 0;
}

// Add active class to element when scrolled to its section
function setActiveNavOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollY = window.scrollY;

    if (
      scrollY >= sectionTop - 200 &&
      scrollY < sectionTop + sectionHeight - 200
    ) {
      const sectionId = section.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Add smooth scrolling to all links
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      if (!targetId) return;

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add("animated");
    }
  });
}

// Initialize all scripts
function initScripts() {
  window.addEventListener("scroll", () => {
    setActiveNavOnScroll();
    animateOnScroll();

    // Add scrolled class to navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  addSmoothScrolling();
  animateOnScroll(); // Run once on page load
}

// Execute when DOM is fully loaded
window.addEventListener("DOMContentLoaded", initScripts);

export { generateId, hasScrolledPast, scrollToElement, truncateText };
