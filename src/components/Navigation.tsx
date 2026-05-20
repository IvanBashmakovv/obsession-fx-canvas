import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';


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
        backgroundColor: scrolled ? 'rgba(8,8,16,0.85)' : 'rgba(8,8,16,0.55)',
        backdropFilter: 'blur(32px) saturate(200%)',
        WebkitBackdropFilter: 'blur(32px) saturate(200%)',
        borderBottom: '1px solid rgba(212,240,0,0.08)',
        boxShadow: '0 1px 0 rgba(212,240,0,0.05)',
      }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between" style={{ minHeight: '68px' }}>
        <div className="logo-glitch nav-logo-wrap cursor-pointer flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logo.png" alt="obsession.fx" loading="eager" className="nav-logo-img" />
        </div>



        <div className="hidden lg:flex items-center gap-2">
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="font-body text-xs tracking-[0.1em] uppercase transition-all min-h-[44px] flex items-center px-4 py-2 text-primary"
              style={{ color: '#9A9A9A', background: 'transparent', borderRadius: '6px' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#F0EDE6'; e.currentTarget.style.background = '#1E1E21'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9A9A9A'; e.currentTarget.style.background = 'transparent'; }}>
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex rounded-full overflow-hidden" style={{ background: '#1E1E21' }}>
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
            className="btn-primary-lift hidden sm:block font-body text-xs font-bold tracking-[0.15em] uppercase px-6 py-3 transition-all min-h-[44px]"
            style={{ background: '#D4F000', color: '#0E0E0F', borderRadius: '12px' }}>
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
              className="font-body text-sm tracking-[0.1em] uppercase transition-all text-left min-h-[44px] flex items-center px-4 py-2"
              style={{ color: '#9A9A9A', borderRadius: '6px' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#F0EDE6'; e.currentTarget.style.background = '#1E1E21'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9A9A9A'; e.currentTarget.style.background = 'transparent'; }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
