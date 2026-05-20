import { useLanguage } from '@/contexts/LanguageContext';


const FooterSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const quickLinks = [
    { label: t('Mission', 'Misia'), id: '#mission' },
    { label: t('Program', 'Program'), id: '#program' },
    { label: t('Formats', 'Formáty'), id: '#formats' },
    { label: t('Results', 'Výsledky'), id: '#reviews' },
    { label: 'FAQ', id: '#faq' },
    { label: t('Contact', 'Kontakt'), id: '#contact' },
  ];

  const eduLinks = [
    'Education 299€',
    'Education PRO',
    t('Become a Mentor', 'Staň sa mentorom'),
    t('Community Access', 'Prístup do komunity'),
  ];

  const socials = [
    { href: 'https://t.me/obsessionfx', label: 'Telegram', icon: <path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2 15.7" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
    { href: '#', label: 'Instagram', icon: <><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="18" cy="6" r="1" fill="currentColor" /></> },
    { href: '#', label: 'Threads', icon: <path d="M9 12A6.5 6.5 0 0112 4C15.5 4 16 7 16 8.5C16 10 15 11 14.5 11C14 11 13.5 10.5 14 9L13 5M12 20C8.5 20 8 17 8 15.5C8 14 9 13 9.5 13C10 13 10.5 13.5 10 15L11 19" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
    { href: '#', label: 'X', icon: <path d="M4 4L10.5 12L4 20H6L11.5 13.5L16 20H20L13 11.5L19 4H17L12 10L8 4H4Z" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
    { href: '#', label: 'YouTube', icon: <><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M10 9L15 12L10 15V9Z" fill="currentColor" /></> },
  ];

  return (
    <footer className="relative mt-16 footer-shell">
      {/* HERO LOGO */}
      <div className="px-6 md:px-12 pt-16 pb-12 flex justify-center">
        <h2 className="footer-logo">
          <span className="obs">OBSESSION</span><span className="dot-fx">.FX</span>
        </h2>
      </div>

      {/* 4 columns */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pb-16 grid grid-cols-2 md:grid-cols-4 gap-12">
        {/* Social */}
        <div>
          <p className="footer-section-label">{t('Follow us', 'Sleduj nás')}</p>
          <div className="flex gap-3 flex-wrap">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="footer-section-label">{t('Quick Links', 'Rýchle odkazy')}</p>
          <div className="flex flex-col gap-1">
            {quickLinks.map((l, i) => (
              <button key={i} onClick={() => scrollTo(l.id)} className="footer-link">
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <p className="footer-section-label">Education</p>
          <div className="flex flex-col gap-1">
            {eduLinks.map((l, i) => (
              <span key={i} className="footer-link" style={{ cursor: 'default' }}>
                <span>{l}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="footer-section-label">{t('Get in touch', 'Kontaktuj nás')}</p>
          <div className="flex flex-col gap-2">
            <a href="https://t.me/obsessionfx" target="_blank" rel="noopener noreferrer" className="contact-line tg">
              <span className="dot" style={{ background: '#26A5E4' }} />
              Telegram: @obsessionfx
            </a>
            <a href="https://wa.me/421951701758" target="_blank" rel="noopener noreferrer" className="contact-line wa">
              <span className="dot" style={{ background: '#25D366' }} />
              WhatsApp: +421 951 701 758
            </a>
          </div>
          <button onClick={() => scrollTo('#contact')} className="footer-cta">
            {t('CONTACT US →', 'KONTAKTOVAŤ NÁS →')}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="footer-divider" />
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-12 py-6 footer-bottom-bar">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <OFXLogo size={16} />
            <span className="font-body text-[11px]" style={{ color: '#444444' }}>© 2026 Obsession.fx · All rights reserved.</span>
          </div>
          <span className="font-body text-[11px]" style={{ color: '#444444' }}>
            <span className="legal-link">Terms & Conditions</span> · <span className="legal-link">Privacy Policy</span> · <span className="legal-link">Cookies Policy</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
