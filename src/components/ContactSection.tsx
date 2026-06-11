import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LeadModal from './LeadModal';

const ContactSection = () => {
  const { t, lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState('Telegram');
  const [format, setFormat] = useState('Free Course Access');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const contacts = [
    { color: '#D4F000', label: 'Telegram', value: '@obsessionfx', href: 'https://t.me/obsessionfx' },
    { color: '#F04E23', label: 'WhatsApp', value: '+421 951 701 758', href: 'https://wa.me/421951701758' },
    { color: '#6B5FD4', label: 'Viber', value: '+421 951 701 758', href: '#' },
    { color: '#6B5FD4', label: 'Instagram', value: '@obsession.fx', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label text-[10px] tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D4F000' }}>{t('Get started', 'Začni')}</p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(48px, 8vw, 96px)' }}>{t('START YOUR JOURNEY.', 'ZAČNI SVOJU CESTU.')}</h2>

      <div className="grid md:grid-cols-2 reveal-content glass-card overflow-hidden">
        <div className="p-8 md:p-12">
          <p className="font-body mb-8 leading-relaxed text-base" style={{ color: '#AAAAAA' }}>
            {t("Fill in the form and we'll get back to you within 24 hours.", 'Vyplňte formulár a ozveme sa vám do 24 hodín.')}
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="font-label text-[10px] tracking-[0.15em] uppercase block mb-2" style={{ color: '#888888' }}>{t('YOUR NAME', 'VAŠE MENO')}</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)}
                className="w-full bg-transparent font-body text-sm py-3 focus:outline-none transition-colors min-h-[44px]"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#F0EDE6' }}
                onFocus={e => e.currentTarget.style.borderBottomColor = 'rgba(212,240,0,0.5)'}
                onBlur={e => e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                placeholder={t('Enter your name', 'Zadajte svoje meno')}
                required maxLength={100} />
            </div>
            <div>
              <label className="font-label text-[10px] tracking-[0.15em] uppercase block mb-2" style={{ color: '#888888' }}>{t('HOW TO REACH YOU?', 'AKO VÁS KONTAKTOVAŤ?')}</label>
              <select value={platform} onChange={e => setPlatform(e.target.value)}
                className="w-full bg-transparent font-body text-sm py-3 focus:outline-none transition-colors min-h-[44px]"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#F0EDE6' }}>
                <option value="Telegram" style={{ background: '#161618' }}>Telegram</option>
                <option value="WhatsApp" style={{ background: '#161618' }}>WhatsApp</option>
                <option value="Viber" style={{ background: '#161618' }}>Viber</option>
                <option value="Instagram" style={{ background: '#161618' }}>Instagram</option>
              </select>
            </div>
            <div>
              <label className="font-label text-[10px] tracking-[0.15em] uppercase block mb-2" style={{ color: '#888888' }}>{t('FORMAT INTEREST', 'ZÁUJEM O FORMÁT')}</label>
              <select value={format} onChange={e => setFormat(e.target.value)}
                className="w-full bg-transparent font-body text-sm py-3 focus:outline-none transition-colors min-h-[44px]"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#F0EDE6' }}>
                <option value="Free Course Access" style={{ background: '#161618' }}>{t('Free Course Access', 'Prístup k bezplatnému kurzu')}</option>
                <option value="Join the Community" style={{ background: '#161618' }}>{t('Join the Community', 'Pridaj sa do komunity')}</option>
                <option value="Become a Mentor" style={{ background: '#161618' }}>{t('Become a Mentor', 'Stať sa mentorom')}</option>
                <option value="General Question" style={{ background: '#161618' }}>{t('General Question', 'Všeobecná otázka')}</option>
              </select>

            </div>
            <button type="submit" disabled={sent}
              className="btn-primary-lift w-full font-body text-xs font-bold tracking-[0.15em] uppercase py-4 transition-all min-h-[48px]"
              style={{ background: '#D4F000', color: '#0E0E0F', fontWeight: 700, borderRadius: '12px' }}>
              {sent ? t('✓ SENT — WE\'LL BE IN TOUCH', '✓ ODOSLANÉ — OZVEME SA') : t('SEND MESSAGE →', 'ODOSLAŤ SPRÁVU →')}
            </button>
          </form>
        </div>

        <div className="p-8 md:p-12" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
          <h3 className="font-heading text-3xl md:text-4xl mb-8" style={{ color: '#F0EDE6' }}>
            <span style={{ color: '#D4F000' }}>{t('OBSESSION', 'POSADNUTOSŤ')}</span><br />
            {t('BEATS TALENT.', 'PORÁŽA TALENT.')}
          </h3>
          <div className="space-y-0">
            {contacts.map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 py-5 transition-colors px-2 -mx-2 min-h-[48px]"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => { const spans = e.currentTarget.querySelectorAll('span'); spans[2]?.setAttribute('style', 'color: #F0EDE6'); }}
                onMouseLeave={e => { const spans = e.currentTarget.querySelectorAll('span'); spans[2]?.setAttribute('style', 'color: #AAAAAA'); }}>
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: c.color }} />
                <span className="font-label text-xs tracking-[0.1em] uppercase w-24" style={{ color: '#888888' }}>{c.label}</span>
                <span className="font-body text-sm" style={{ color: '#AAAAAA' }}>{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} variant="contact" lang={lang} />
    </section>
  );
};

export default ContactSection;
