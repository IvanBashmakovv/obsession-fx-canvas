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
import ScrollProgress from '@/components/ScrollProgress';
import SectionDivider from '@/components/SectionDivider';

const PARTICLE_COUNT = 20;

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const cursorTarget = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<HTMLDivElement>(null);

  const particles = useRef(
    Array.from({ length: PARTICLE_COUNT }, () => {
      const r = Math.random();
      const color =
        r < 0.6 ? `rgba(212,240,0,${0.2 + Math.random() * 0.4})` :
        r < 0.85 ? `rgba(240,78,35,${0.2 + Math.random() * 0.4})` :
                   `rgba(107,95,212,${0.2 + Math.random() * 0.4})`;
      return {
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 3,
        color,
      };
    })
  ).current;

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

    const onMouseMove = (e: MouseEvent) => {
      cursorTarget.current = { x: e.clientX, y: e.clientY };

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) * -0.02;
      const dy = (e.clientY - cy) * -0.02;
      const container = particlesRef.current;
      if (container) {
        container.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    const onHover = () => cursor?.classList.add('hovering');
    const onLeave = () => cursor?.classList.remove('hovering');

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
        {/* Multi-layer animated background */}
        <div className="bg-stack" aria-hidden="true">
          <div className="gradient-mesh" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />
          <div className="orb orb-5" />
          <div className="scanlines" />
          <div className="grain" />
        </div>

        {/* Interactive parallax particles */}
        <div
          ref={particlesRef}
          className="fixed inset-0 pointer-events-none hide-mobile"
          style={{ zIndex: 1, willChange: 'transform', transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
          aria-hidden="true"
        >
          {particles.map((p, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                background: p.color,
                borderRadius: '50%',
              }}
            />
          ))}
        </div>

        <div ref={cursorRef} className="custom-cursor hidden md:block" style={{ willChange: 'transform' }} />
        <ScrollProgress />
        <div className="relative z-10">
          <TickerBar />
          <Navigation />
          <HeroSection />
          <SectionDivider />
          <StatsStrip />
          <SectionDivider />
          <MissionSection />
          <SectionDivider />
          <MentorsSection />
          <BecomeAMentorSection />
          <SectionDivider />
          <ProgramSection />
          <SectionDivider />
          <StrategiesSection />
          <SectionDivider />
          <FormatsSection />
          <SectionDivider />
          <ResultsSection />
          <SectionDivider />
          <FAQSection />
          <SectionDivider />
          <ContactSection />
          <FooterSection />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
