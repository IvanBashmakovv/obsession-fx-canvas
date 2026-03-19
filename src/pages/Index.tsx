import { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import TickerBar from '@/components/TickerBar';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsStrip from '@/components/StatsStrip';
import MissionSection from '@/components/MissionSection';
import MentorsSection from '@/components/MentorsSection';
import ProgramSection from '@/components/ProgramSection';
import StrategiesSection from '@/components/StrategiesSection';
import FormatsSection from '@/components/FormatsSection';
import ResultsSection from '@/components/ResultsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <div className="animated-bg" />
        <div className="relative z-10">
          <TickerBar />
          <Navigation />
          <HeroSection />
          <StatsStrip />
          <MissionSection />
          <MentorsSection />
          <ProgramSection />
          <StrategiesSection />
          <FormatsSection />
          <ResultsSection />
          <FAQSection />
          <ContactSection />
          <FooterSection />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
