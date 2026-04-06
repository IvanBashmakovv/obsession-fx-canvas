import { useEffect, useRef } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import TickerBar from '@/components/TickerBar';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsStrip from '@/components/StatsStrip';
import MissionSection from '@/components/MissionSection';
import MentorsSection from '@/components/MentorsSection';
import BecomeAMentorSection from '@/components/BecomeAMentorSection';
import ProgramSection from '@/components/ProgramSection';
import StrategiesSection from '@/components/StrategiesSection';
import FormatsSection from '@/components/FormatsSection';
import ResultsSection from '@/components/ResultsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const cursorTarget = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal, .reveal-heading, .reveal-content, .reveal-card, .section-tag, .banner-border-animate').forEach(el => observer.observe(el));

    const cursor = cursorRef.current;
    if (!cursor) return () => observer.disconnect();

    const onMouseMove = (e: MouseEvent) => {
      cursorTarget.current = { x: e.clientX, y: e.clientY };
    };

    const onHover = () => cursor.classList.add('hovering');
    const onLeave = () => cursor.classList.remove('hovering');

    let rafId: number;
    const lerp = () => {
      cursorPos.current.x += (cursorTarget.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (cursorTarget.current.y - cursorPos.current.y) * 0.15;
      if (cursor) {
        cursor.style.transform = `translate(${cursorPos.current.x - 6}px, ${cursorPos.current.y - 6}px)`;
      }
      rafId = requestAnimationFrame(lerp);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(lerp);

    const interactives = document.querySelectorAll('button, a, select, input');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onHover);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen" style={{ cursor: 'none' }}>
        <div ref={cursorRef} className="custom-cursor hidden md:block" style={{ willChange: 'transform' }} />
        <div className="relative z-10">
          <TickerBar />
          <Navigation />
          <HeroSection />
          <div className="section-divider" />
          <StatsStrip />
          <div className="section-divider" />
          <MissionSection />
          <div className="section-divider" />
          <MentorsSection />
          <BecomeAMentorSection />
          <div className="section-divider" />
          <ProgramSection />
          <div className="section-divider" />
          <StrategiesSection />
          <div className="section-divider" />
          <FormatsSection />
          <div className="section-divider" />
          <ResultsSection />
          <div className="section-divider" />
          <FAQSection />
          <div className="section-divider" />
          <ContactSection />
          <FooterSection />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
