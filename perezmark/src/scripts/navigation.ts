document.addEventListener('DOMContentLoaded', () => {
  const gearButton = document.querySelector('.gear-button');
  const navItems = document.querySelector('#nav-items');
  const gearIcon = document.querySelector('.gear-icon');
  let isOpen = false;

  gearButton?.addEventListener('click', () => {
    isOpen = !isOpen;
    navItems?.classList.toggle('active');
    if (gearIcon) {
      gearIcon.style.animationPlayState = isOpen ? 'paused' : 'running';
    }
  });

  const gearNav = document.querySelector('.gear-nav');
  gearNav?.addEventListener('mouseenter', () => {
    if (!isOpen) {
      navItems?.classList.add('active');
      if (gearIcon) {
        gearIcon.style.animationPlayState = 'paused';
      }
    }
  });

  gearNav?.addEventListener('mouseleave', () => {
    if (!isOpen) {
      navItems?.classList.remove('active');
      if (gearIcon) {
        gearIcon.style.animationPlayState = 'running';
      }
    }
  });
});