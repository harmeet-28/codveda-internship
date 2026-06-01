window.addEventListener('scroll', function() {

  const navbar = document.querySelector('nav');

  if (window.scrollY > 50) {

    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';

  } else {

    navbar.style.boxShadow = 'none';

  }

});

window.onload = function() {

  // Find the hero button
  const button = document.querySelector('#hero a');

  button.addEventListener('click', function() {

    alert('Thanks for clicking! Scroll down to see my work.');

  });

};
const scrollBtn = document.getElementById('scrollBtn');
window.addEventListener('scroll', function() {

  if (window.scrollY > 300) {

    scrollBtn.classList.add('visible');

  } else {

    scrollBtn.classList.remove('visible');

  }

});

scrollBtn.addEventListener('click', function() {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});