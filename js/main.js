document.addEventListener("DOMContentLoaded", function() {
  window.onload = function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        mainContent.classList.remove('hidden');
      }, 500);
    }, 2500);
  };

  const exploreBtn = document.querySelector('.explore-btn');
  const hero = document.getElementById('hero');
  exploreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    hero.classList.add('slide-out');
    setTimeout(() => {
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  });
});
