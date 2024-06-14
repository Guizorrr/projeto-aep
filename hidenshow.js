document.querySelectorAll('.footer-column h3').forEach(header => {
    header.addEventListener('click', () => {
      const ul = header.nextElementSibling;
      const arrow = header.querySelector('.toggle-arrow');
      ul.style.display = ul.style.display === 'none' || ul.style.display === '' ? 'block' : 'none';
      header.classList.toggle('active');
    });
  });