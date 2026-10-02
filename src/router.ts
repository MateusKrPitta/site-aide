import { renderNavbar, initNavbarEvents } from './components/Navbar';
import { renderHero } from './components/Hero';
import { renderProblemSolution } from './components/ProblemSolution';
import { renderConversionCalculator, initConversionCalculatorEvents } from './components/ConversionCalculator';
import { renderServicesGrid, initServicesEvents } from './components/ServicesGrid';
import { renderHowItWorks } from './components/HowItWorks';
import { renderAboutFounder } from './components/AboutFounder';
import { renderKeynotesBanner } from './components/KeynotesBanner';
import { renderTestimonials } from './components/Testimonials';
import { renderFaqSection, initFaqEvents } from './components/FaqSection';
import { renderDiagnosticForm, initDiagnosticFormEvents } from './components/DiagnosticForm';
import { renderServicesPage, initServicesPageEvents } from './components/ServicesPage';
import { renderContactPage, initContactPageEvents } from './components/ContactPage';
import { renderCaptureLandingPage, initCaptureLandingPageEvents } from './components/CaptureLandingPage';
import { renderFooter, initFooterEvents } from './components/Footer';
import { renderWhatsAppFloating } from './components/WhatsAppFloating';
import { renderStickyConversionBar, initStickyConversionBarEvents } from './components/StickyConversionBar';
import { initMotionAnimations } from './utils/motion';

export class AppRouter {
  private static appElement: HTMLElement;

  public static init(): void {
    const app = document.getElementById('app');
    if (!app) return;
    this.appElement = app;

    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  }

  private static handleRoute(): void {
    const hash = window.location.hash || '#inicio';
    const mainSectionHash = hash.split('?')[0];

    const isCapturePage = ['#captura', '#lp', '#diagnostico-vip', '#funil', '#conversao'].includes(mainSectionHash);

    if (isCapturePage) {
      // 100% Distraction-Free High-Converting Standalone Funnel
      this.appElement.innerHTML = renderCaptureLandingPage();
      initCaptureLandingPageEvents();
      initMotionAnimations();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    let contentHtml = '';

    if (mainSectionHash === '#solucoes-servicos' || mainSectionHash === '#servicos') {
      contentHtml = renderServicesPage();
    } else if (mainSectionHash === '#contato') {
      contentHtml = renderContactPage();
    } else {
      // High-Converting Landing Page Funnel
      contentHtml = `
        ${renderHero()}
        ${renderProblemSolution()}
        ${renderConversionCalculator()}
        ${renderServicesGrid()}
        ${renderHowItWorks()}
        ${renderAboutFounder()}
        ${renderKeynotesBanner()}
        ${renderTestimonials()}
        ${renderFaqSection()}
        ${renderDiagnosticForm()}
      `;
    }

    this.appElement.innerHTML = `
      ${renderNavbar(mainSectionHash)}
      <main id="main-content" class="pt-20 min-h-[calc(100vh-80px)] bg-surface pb-12">
        ${contentHtml}
      </main>
      ${renderFooter()}
      ${renderWhatsAppFloating()}
      ${renderStickyConversionBar()}
    `;

    // Initialize interactive handlers
    initNavbarEvents();
    initServicesEvents();
    initDiagnosticFormEvents();
    initFooterEvents();
    initConversionCalculatorEvents();
    initFaqEvents();
    initStickyConversionBarEvents();

    if (mainSectionHash === '#solucoes-servicos' || mainSectionHash === '#servicos') {
      initServicesPageEvents();
    }

    if (mainSectionHash === '#contato') {
      initContactPageEvents();
    }

    // Initialize Framer Motion animations
    initMotionAnimations();

    // Smooth scroll for anchor routes
    const anchorIds = ['como-funciona', 'solucoes', 'sobre-a-aide', 'depoimentos', 'palestras', 'diagnostico', 'por-que-a-aide', 'calculadora-roi', 'faq', 'hero'];
    const currentId = mainSectionHash.replace('#', '');

    if (anchorIds.includes(currentId)) {
      setTimeout(() => {
        const el = document.getElementById(currentId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
