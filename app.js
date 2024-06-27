document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true // Whether animation should happen only once
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Task box hover effect to animate text
  document.querySelectorAll('.taskBox').forEach(taskBox => {
    taskBox.addEventListener('mouseenter', function () {
      const text = this.querySelector('.tr-102');
      text.style.opacity = 1;
      text.style.transform = 'translateY(0)';
    });

    taskBox.addEventListener('mouseleave', function () {
      const text = this.querySelector('.tr-102');
      text.style.opacity = 0;
      text.style.transform = 'translateY(10px)';
    });
  });
});
