import { useLanguage } from '@/contexts/LanguageContext';
import OFXLogo from './OFXLogo';

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

  return (
    <footer className="relative mt-16" style={{ background: '#0C0C0C', borderRadius: '24px 24px 0 0', borderTop: '1px solid #1E1E1E' }}>
      {/* Watermark */}
      <div className="overflow-hidden pt-12 text-center select-none pointer-events-none">
        <p className="font-heading leading-none" style={{ fontSize: 'clamp(80px, 15vw, 180px)', color: 'rgba(255,255,255,0.04)' }}>OBSESSION</p>
        <p className="font-heading leading-none" style={{ fontSize: 'clamp(80px, 15vw, 180px)', color: 'rgba(255,30,30,0.06)' }}>.FX</p>
      </div>

      {/* 4 columns */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Social */}
        <div>
          <p className="font-body text-[13px] text-foreground font-bold mb-4">{t('Follow us', 'Sleduj nás')}</p>
          <div className="flex gap-2">
            {[
              { href: 'https://t.me/obsessionfx', icon: <path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2 15.7" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
              { href: '#', icon: <><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="18" cy="6" r="1" fill="currentColor" /></> },
              { href: '#', icon: <path d="M9 12A6.5 6.5 0 0112 4C15.5 4 16 7 16 8.5C16 10 15 11 14.5 11C14 11 13.5 10.5 14 9L13 5M12 20C8.5 20 8 17 8 15.5C8 14 9 13 9.5 13C10 13 10.5 13.5 10 15L11 19" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
              { href: '#', icon: <path d="M4 4L10.5 12L4 20H6L11.5 13.5L16 20H20L13 11.5L19 4H17L12 10L8 4H4Z" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
              { href: '#', icon: <><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M10 9L15 12L10 15V9Z" fill="currentColor" /></> },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded border border-[#2a2a2a] flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-body text-[13px] text-foreground font-bold mb-4">{t('Quick Links', 'Rýchle odkazy')}</p>
          <div className="flex flex-col gap-2">
            {quickLinks.map((l, i) => (
              <button key={i} onClick={() => scrollTo(l.id)}
                className="text-left font-body text-[13px] text-[#666666] hover:text-foreground transition-colors">
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <p className="font-body text-[13px] text-foreground font-bold mb-4">Education</p>
          <div className="flex flex-col gap-2">
            {eduLinks.map((l, i) => (
              <span key={i} className="font-body text-[13px] text-[#666666]">{l}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-body text-[13px] text-foreground font-bold mb-4">{t('Get in touch', 'Kontaktuj nás')}</p>
          <div className="flex flex-col gap-2 font-body text-[13px] text-[#555555]">
            <span>Telegram: @obsessionfx</span>
            <span>WhatsApp: +421 951 701 758</span>
            <span>Email: ivan.b@thaurusguru.com</span>
          </div>
          <button onClick={() => scrollTo('#contact')}
            className="mt-4 bg-primary text-primary-foreground font-body text-[10px] font-bold tracking-[2px] uppercase px-4 py-2 hover:opacity-90 transition-opacity">
            {t('CONTACT US →', 'KONTAKTOVAŤ NÁS →')}
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E1E1E] px-6 md:px-14 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <OFXLogo size={16} />
            <span className="font-body text-[11px] text-[#444444]">© 2025 obsession.fx · All rights reserved.</span>
          </div>
          <span className="font-body text-[11px] text-[#444444]">Terms & Conditions · Privacy Policy · Cookies Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
