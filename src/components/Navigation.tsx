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
    <nav className={`fixed top-0 left-0 right-0 z-50 nav-transition ${scrolled ? '' : ''}`}
      style={{
        backgroundColor: scrolled ? 'rgba(30,30,32,0.97)' : 'rgba(30,30,32,0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid transparent',
        borderImage: scrolled ? 'linear-gradient(90deg, transparent 0%, rgba(212,240,0,0.3) 50%, transparent 100%) 1' : 'none',
      }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 logo-glitch cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <OFXLogo size={28} />
          <span className="font-heading text-xl text-foreground tracking-wider">
            OBSESSION.<span style={{ color: '#D4F000' }}>FX</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="font-body text-xs tracking-[2px] uppercase text-[#777777] hover:text-primary transition-colors">
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex rounded-full overflow-hidden" style={{ background: '#252527' }}>
            <button onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-label font-bold transition-colors ${lang === 'en' ? 'text-[#1E1E20]' : 'text-[#777777]'}`}
              style={lang === 'en' ? { background: '#D4F000' } : {}}>
              EN
            </button>
            <button onClick={() => setLang('sk')}
              className={`px-3 py-1 text-xs font-label font-bold transition-colors ${lang === 'sk' ? 'text-[#1E1E20]' : 'text-[#777777]'}`}
              style={lang === 'sk' ? { background: '#D4F000' } : {}}>
              SK
            </button>
          </div>
          <button onClick={() => scrollTo('#formats')}
            className="hidden sm:block font-body text-xs font-bold tracking-[2px] uppercase px-5 py-2 hover:shadow-[0_0_24px_rgba(212,240,0,0.3)] transition-all"
            style={{ background: '#D4F000', color: '#1E1E20' }}>
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
        <div className="lg:hidden border-t border-border px-6 py-4 flex flex-col gap-3" style={{ backgroundColor: 'rgba(30,30,32,0.97)' }}>
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="font-body text-sm tracking-[2px] uppercase text-[#777777] hover:text-primary transition-colors text-left">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
