// app.js

document.addEventListener('DOMContentLoaded', function () {
  const taskBoxes = document.querySelectorAll('.taskBox');

  taskBoxes.forEach(box => {
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = getRandomColor();
    });

    box.addEventListener('mouseout', () => {
      box.style.backgroundColor = '#fff';
    });
  });

  function getRandomColor() {
    const colors = ['#FF7F7F', '#FFBF7F', '#FFFF7F', '#7FFF7F', '#7FBFFF', '#BF7FFF'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
});
