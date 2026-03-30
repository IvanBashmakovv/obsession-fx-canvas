import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState('Telegram');
  const [format, setFormat] = useState('Education');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSent(true);
  };

  const contacts = [
    { color: '#D4F000', label: 'Telegram', value: '@obsessionfx', href: 'https://t.me/obsessionfx' },
    { color: '#F04E23', label: 'WhatsApp', value: '+421 951 701 758', href: 'https://wa.me/421951701758' },
    { color: '#6B5FD4', label: 'Viber', value: '+421 951 701 758', href: '#' },
    { color: '#6B5FD4', label: 'Instagram', value: '@obsession.fx', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <p className="text-primary font-label text-[10px] tracking-[4px] uppercase mb-4 section-tag reveal-heading">{t('Get started', 'Začni')}</p>
      <h2 className="font-heading text-6xl md:text-7xl text-foreground mb-16 reveal-heading">{t('START YOUR JOURNEY.', 'ZAČNI SVOJU CESTU.')}</h2>

      <div className="grid md:grid-cols-2 reveal-content" style={{ border: '1px solid #2A2A2C' }}>
        <div className="p-8 md:p-10">
          <p className="font-body text-sm text-[#AAAAAA] mb-8">
            {t("Fill in the form and we'll get back to you within 24 hours.", 'Vyplňte formulár a ozveme sa vám do 24 hodín.')}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-label text-[10px] tracking-[3px] uppercase" style={{ color: '#666666' }}>{t('YOUR NAME', 'VAŠE MENO')}</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)}
                className="w-full bg-transparent font-body text-sm text-foreground py-2 focus:outline-none transition-colors"
                style={{ borderBottom: '1px solid #2A2A2C', color: '#F0EDE6' }}
                onFocus={e => e.currentTarget.style.borderBottomColor = '#D4F000'}
                onBlur={e => e.currentTarget.style.borderBottomColor = '#2A2A2C'}
                placeholder={t('Enter your name', 'Zadajte svoje meno')}
                required maxLength={100} />
            </div>
            <div>
              <label className="font-label text-[10px] tracking-[3px] uppercase" style={{ color: '#666666' }}>{t('HOW TO REACH YOU?', 'AKO VÁS KONTAKTOVAŤ?')}</label>
              <select value={platform} onChange={e => setPlatform(e.target.value)}
                className="w-full bg-transparent font-body text-sm text-foreground py-2 focus:outline-none transition-colors"
                style={{ borderBottom: '1px solid #2A2A2C' }}>
                <option value="Telegram">Telegram</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Viber">Viber</option>
                <option value="Instagram">Instagram</option>
              </select>
            </div>
            <div>
              <label className="font-label text-[10px] tracking-[3px] uppercase" style={{ color: '#666666' }}>{t('FORMAT INTEREST', 'ZÁUJEM O FORMÁT')}</label>
              <select value={format} onChange={e => setFormat(e.target.value)}
                className="w-full bg-transparent font-body text-sm text-foreground py-2 focus:outline-none transition-colors"
                style={{ borderBottom: '1px solid #2A2A2C' }}>
                <option value="Education">Education</option>
                <option value="Education PRO">Education PRO</option>
                <option value="Become a Mentor">{t('Become a Mentor', 'Staň sa mentorom')}</option>
              </select>
            </div>
            <button type="submit" disabled={sent}
              className="w-full font-body text-xs font-bold tracking-[2px] uppercase py-3 transition-all"
              style={sent ? { background: '#D4F000', color: '#1E1E20' } : { background: '#D4F000', color: '#1E1E20' }}
              onMouseEnter={e => !sent && ((e.currentTarget.style.boxShadow = '0 0 24px rgba(212,240,0,0.3)'))}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
              {sent ? t('✓ SENT — WE\'LL BE IN TOUCH', '✓ ODOSLANÉ — OZVEME SA') : t('SEND MESSAGE →', 'ODOSLAŤ SPRÁVU →')}
            </button>
          </form>
        </div>

        <div className="p-8 md:p-10" style={{ background: '#252527' }}>
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            <span style={{ color: '#D4F000' }}>{t('OBSESSION', 'POSADNUTOSŤ')}</span><br />
            {t('BEATS TALENT.', 'PORÁŽA TALENT.')}
          </h3>
          <div className="space-y-0">
            {contacts.map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 py-4 hover:opacity-80 transition-colors px-2 -mx-2"
                style={{ borderBottom: '1px solid #2A2A2C' }}>
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                <span className="font-label text-xs tracking-[2px] uppercase w-24" style={{ color: '#777777' }}>{c.label}</span>
                <span className="font-body text-sm text-foreground">{c.value}</span>
              </a>
            ))}
          </div>
          <p className="font-body text-xs mt-6" style={{ color: '#777777' }}>ivan.b@thaurusguru.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
