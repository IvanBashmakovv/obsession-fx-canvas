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
    <nav className="fixed top-0 left-0 right-0 z-50 nav-transition"
      style={{
        backgroundColor: scrolled ? 'rgba(14,14,15,0.97)' : 'rgba(14,14,15,0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid transparent',
        borderImage: scrolled ? 'linear-gradient(90deg, transparent 0%, rgba(212,240,0,0.3) 50%, transparent 100%) 1' : 'none',
      }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 logo-glitch cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <OFXLogo size={28} />
          <span className="font-heading text-xl tracking-wider" style={{ color: '#F0EDE6' }}>
            OBSESSION.<span style={{ color: '#D4F000' }}>FX</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="font-body text-xs tracking-[0.1em] uppercase transition-colors min-h-[44px] flex items-center bg-primary-foreground text-primary"
              style={{ color: '#9A9A9A' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F0EDE6'}
              onMouseLeave={e => e.currentTarget.style.color = '#9A9A9A'}>
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <button onClick={() => setLang('en')}
              className="px-4 py-2 text-xs font-label font-bold transition-colors min-w-[40px]"
              style={lang === 'en' ? { background: '#D4F000', color: '#0E0E0F' } : { color: '#9A9A9A' }}>
              EN
            </button>
            <button onClick={() => setLang('sk')}
              className="px-4 py-2 text-xs font-label font-bold transition-colors min-w-[40px]"
              style={lang === 'sk' ? { background: '#D4F000', color: '#0E0E0F' } : { color: '#9A9A9A' }}>
              SK
            </button>
          </div>
          <button onClick={() => scrollTo('#formats')}
            className="hidden sm:block font-body text-xs font-bold tracking-[0.15em] uppercase px-6 py-3 transition-all min-h-[44px]"
            style={{ background: '#D4F000', color: '#0E0E0F', borderRadius: '12px' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#C4E000'; e.currentTarget.style.boxShadow = '0 0 32px rgba(212,240,0,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#D4F000'; e.currentTarget.style.boxShadow = 'none'; }}>
            {t('START →', 'ŠTART →')}
          </button>
          <button className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center" style={{ color: '#F0EDE6' }} onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden px-6 py-6 flex flex-col gap-4" style={{ backgroundColor: 'rgba(14,14,15,0.97)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="font-body text-sm tracking-[0.1em] uppercase transition-colors text-left min-h-[44px] flex items-center"
              style={{ color: '#9A9A9A' }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
