document.addEventListener('DOMContentLoaded', () => {
  const gearButton = document.querySelector('.gear-button');
  const navItems = document.querySelector('#nav-items');
  let isOpen = false;

  // Toggle menu on gear click
  gearButton?.addEventListener('click', () => {
    isOpen = !isOpen;
    navItems?.classList.toggle('active', isOpen);
    const gearIcon = gearButton.querySelector('.gear-icon');
    if (gearIcon) {
      gearIcon.style.animationPlayState = isOpen ? 'paused' : 'running';
    }
  });

  // Keep hover functionality
  const gearNav = document.querySelector('.gear-nav');
  gearNav?.addEventListener('mouseenter', () => {
    if (!isOpen) {
      navItems?.classList.add('active');
    }
  });

  gearNav?.addEventListener('mouseleave', () => {
    if (!isOpen) {
      navItems?.classList.remove('active');
    }
  });
});