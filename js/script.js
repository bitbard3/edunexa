function userScroll() {
    const navbar = document.querySelector('.navbar');
    const brand = document.querySelector('.brand-text')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-dark');
        brand.classList.add("d-none")
      } else {
        navbar.classList.remove('bg-dark');
        brand.classList.remove("d-none")
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', userScroll);
  
