const toggleButton = document.querySelector('.tgl');
const heroSections = document.querySelectorAll('.hero');
const headerSection = document.querySelector('header');
const navSection = document.querySelector('.nav');
const navMenuSection = document.querySelector('.nav-menu')
const navMenuLi = document.querySelector('.nav-menu li')

toggleButton.addEventListener('click', () => {
  heroSections.forEach(section => {
    section.classList.toggle('solid-background');
  });
  
  headerSection.classList.toggle('solid-background-header');

  navSection.classList.toggle('navSectionBackground');
  
  navMenuSection.classList.toggle('navMenuSectionBackground');
  
  navMenuLi.classList.toggle('navMenuLiSectionBackground');
});