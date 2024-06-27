document.addEventListener('DOMContentLoaded', function () {
  
  AOS.init({
    duration: 1000, 
    once: true 
  });

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  
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
