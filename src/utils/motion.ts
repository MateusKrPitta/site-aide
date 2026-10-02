import { animate, inView, stagger, scroll } from 'motion';

/**
 * Initializes Framer Motion (Motion One) smooth animations, hover springs,
 * continuous floating elements, and scroll progress bar across the site.
 */
export function initMotionAnimations(): void {
  // 1. Top Scroll Progress Indicator Bar
  let progressBar = document.getElementById('motion-scroll-progress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'motion-scroll-progress';
    progressBar.className = 'fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary-container via-primary to-primary-container z-[9999] origin-left pointer-events-none';
    document.body.appendChild(progressBar);
  }

  scroll(
    animate(progressBar, { scaleX: [0, 1] }, { ease: 'linear' })
  );

  // 2. Page Content Smooth Entrance
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    animate(
      mainContent,
      { opacity: [0, 1], y: [16, 0] },
      { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    );
  }

  // 3. Hero Section Staggered Cascade
  const hero = document.getElementById('hero');
  if (hero) {
    const heroElements = hero.querySelectorAll('h1, p, .inline-flex, .flex-wrap, .flex-col, .grid');
    if (heroElements.length > 0) {
      animate(
        heroElements,
        { opacity: [0, 1], y: [22, 0] },
        {
          delay: stagger(0.06),
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }
      );
    }
  }

  // 4. Background Ambient Blobs - Continuous Gentle Floating
  const glowBlobs = document.querySelectorAll('.blur-3xl');
  glowBlobs.forEach((blob, idx) => {
    animate(
      blob,
      {
        y: idx % 2 === 0 ? [-15, 15, -15] : [15, -15, 15],
        x: idx % 2 === 0 ? [10, -10, 10] : [-10, 10, -10],
        scale: [1, 1.05, 1]
      },
      {
        duration: 7 + (idx % 3) * 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    );
  });

  // 5. Section Headers and Eyebrows (Scroll In-View)
  inView('section h2, section .font-serif, section .max-w-3xl', (element) => {
    animate(
      element,
      { opacity: [0, 1], y: [26, 0] },
      { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    );
  });

  // 6. Solutions Bento Grid & Service Cards
  inView('#solucoes .grid > div, #services-list-container > div', (element) => {
    animate(
      element,
      { opacity: [0, 1], y: [30, 0], scale: [0.97, 1] },
      { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    );
  });

  // 7. Metric Number Badges - Bouncy Spring Pop
  inView('.grid .font-serif.text-lg, .grid .font-serif.text-2xl, .grid .font-serif.text-xl, .grid .font-serif.text-3xl', (element) => {
    animate(
      element,
      { opacity: [0, 1], scale: [0.8, 1.08, 1] },
      { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
    );
  });

  // 8. Problem vs Solution Cards
  inView('#por-que-a-aide .grid > div, #como-funciona .grid > div', (element) => {
    animate(
      element,
      { opacity: [0, 1], y: [24, 0] },
      { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    );
  });

  // 9. Testimonials & Founder Bio
  inView('#depoimentos .grid > div, #sobre-a-aide', (element) => {
    animate(
      element,
      { opacity: [0, 1], y: [28, 0] },
      { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    );
  });

  // 10. Calculator & Diagnostic Container
  inView('#calculadora-roi, #diagnostico', (element) => {
    animate(
      element,
      { opacity: [0, 1], scale: [0.98, 1], y: [20, 0] },
      { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
    );
  });

  // 11. FAQ Items
  inView('#faq .space-y-4 > div', (element) => {
    animate(
      element,
      { opacity: [0, 1], y: [18, 0] },
      { duration: 0.45, ease: [0.25, 1, 0.5, 1] }
    );
  });

  // 12. Interactive Spring Feedback on Primary Action Buttons
  const interactiveButtons = document.querySelectorAll('a[href^="https://wa.me"], a[href="#diagnostico"], button[data-select-solution], .service-filter-btn');
  interactiveButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      animate(btn, { scale: 1.03 }, { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] });
    });
    btn.addEventListener('mouseleave', () => {
      animate(btn, { scale: 1 }, { duration: 0.2, ease: 'easeOut' });
    });
  });
}
