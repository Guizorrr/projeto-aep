document.addEventListener("DOMContentLoaded", function() {
    let counter = 1;
    const totalSlides = 3;
  
    setInterval(() => {
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if (counter > totalSlides) {
        counter = 1;
      }
    }, 5000); // Altera a cada 3 segundos (3000 ms)
  });