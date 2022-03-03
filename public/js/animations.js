gsap.from('.navbar', { y: '-200%' });
gsap.from('.nav-link', { opacity: 0, delay: 0.5 });
gsap.from('.login-card', {
  duration: 0.8,
  opacity: 0,
  y: '-50%',
  ease: 'power2.out',
  delay: 0.8,
});

gsap.to('.text-animation', {
  duration: 1.5,
  text: `Welcome to`,
  delay: 0.8,
});
gsap.to('.text-animation-2', {
  duration: 1.5,
  text: ` Project Tasker`,
  delay: 2.3,
});

gsap.from('.home-text', { opacity: 0, delay: 3.5 });
