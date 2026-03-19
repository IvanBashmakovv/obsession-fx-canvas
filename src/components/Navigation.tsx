import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import OFXLogo from './OFXLogo';

const Navigation = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#mission', label: t('Mission', 'Misia') },
    { href: '#mentors', label: t('Mentors', 'Mentori') },
    { href: '#program', label: t('Program', 'Program') },
    { href: '#formats', label: t('Formats', 'Formáty') },
    { href: '#reviews', label: t('Results', 'Výsledky') },
    { href: '#contact', label: t('Contact', 'Kontakt') },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 nav-transition ${scrolled ? 'border-b border-border' : 'border-b border-transparent'}`}
      style={{ backgroundColor: scrolled ? 'rgba(12,12,12,0.97)' : 'rgba(12,12,12,0.6)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 logo-glitch cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <OFXLogo size={28} />
          <span className="font-heading text-xl text-foreground tracking-wider">
            OBSESSION.<span className="text-primary">FX</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="font-body text-xs tracking-[2px] uppercase text-label hover:text-foreground transition-colors">
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-secondary rounded-full overflow-hidden">
            <button onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-label font-bold transition-colors ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-label'}`}>
              EN
            </button>
            <button onClick={() => setLang('sk')}
              className={`px-3 py-1 text-xs font-label font-bold transition-colors ${lang === 'sk' ? 'bg-primary text-primary-foreground' : 'text-label'}`}>
              SK
            </button>
          </div>
          <button onClick={() => scrollTo('#formats')}
            className="hidden sm:block bg-primary text-primary-foreground font-body text-xs font-bold tracking-[2px] uppercase px-5 py-2 hover:opacity-90 transition-opacity">
            {t('START →', 'ŠTART →')}
          </button>
          <button className="lg:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-border px-6 py-4 flex flex-col gap-3" style={{ backgroundColor: 'rgba(12,12,12,0.97)' }}>
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="font-body text-sm tracking-[2px] uppercase text-label hover:text-foreground transition-colors text-left">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
