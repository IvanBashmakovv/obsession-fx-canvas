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
    { color: '#2AABEE', label: 'Telegram', value: '@obsessionfx', href: 'https://t.me/obsessionfx' },
    { color: '#25D366', label: 'WhatsApp', value: '+421 951 701 758', href: 'https://wa.me/421951701758' },
    { color: '#7360F2', label: 'Viber', value: '+421 951 701 758', href: '#' },
    { color: '#E1306C', label: 'Instagram', value: '@obsession.fx', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="text-primary font-label text-[10px] tracking-[4px] uppercase mb-4 section-tag reveal-heading">{t('Get started', 'Začni')}</p>
      <h2 className="font-heading text-6xl md:text-7xl text-foreground mb-16 reveal-heading">{t('START YOUR JOURNEY.', 'ZAČNI SVOJU CESTU.')}</h2>

      <div className="border border-border grid md:grid-cols-2 reveal-content">
        {/* Form */}
        <div className="p-8 md:p-10">
          <p className="font-body text-sm text-muted-foreground mb-8">
            {t('Fill in the form and we\'ll get back to you within 24 hours.', 'Vyplňte formulár a ozveme sa vám do 24 hodín.')}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-label text-[10px] tracking-[3px] uppercase text-dim">{t('YOUR NAME', 'VAŠE MENO')}</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)}
                className="w-full bg-transparent border-b border-border font-body text-sm text-foreground py-2 focus:outline-none focus:border-primary transition-colors placeholder:text-inactive"
                placeholder={t('Enter your name', 'Zadajte svoje meno')}
                required maxLength={100} />
            </div>
            <div>
              <label className="font-label text-[10px] tracking-[3px] uppercase text-dim">{t('HOW TO REACH YOU?', 'AKO VÁS KONTAKTOVAŤ?')}</label>
              <select value={platform} onChange={e => setPlatform(e.target.value)}
                className="w-full bg-transparent border-b border-border font-body text-sm text-foreground py-2 focus:outline-none focus:border-primary transition-colors">
                <option value="Telegram">Telegram</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Viber">Viber</option>
                <option value="Instagram">Instagram</option>
              </select>
            </div>
            <div>
              <label className="font-label text-[10px] tracking-[3px] uppercase text-dim">{t('FORMAT INTEREST', 'ZÁUJEM O FORMÁT')}</label>
              <select value={format} onChange={e => setFormat(e.target.value)}
                className="w-full bg-transparent border-b border-border font-body text-sm text-foreground py-2 focus:outline-none focus:border-primary transition-colors">
                <option value="Education">Education</option>
                <option value="Education PRO">Education PRO</option>
                <option value="Become a Mentor">{t('Become a Mentor', 'Staň sa mentorom')}</option>
              </select>
            </div>
            <button type="submit" disabled={sent}
              className={`w-full font-body text-xs font-bold tracking-[2px] uppercase py-3 transition-all ${sent ? 'bg-green text-accent-foreground' : 'bg-primary text-primary-foreground hover:opacity-90'}`}>
              {sent ? t('✓ SENT — WE\'LL BE IN TOUCH', '✓ ODOSLANÉ — OZVEME SA') : t('SEND MESSAGE →', 'ODOSLAŤ SPRÁVU →')}
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="bg-card p-8 md:p-10">
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            <span className="text-primary">{t('OBSESSION', 'POSADNUTOSŤ')}</span><br />
            {t('BEATS TALENT.', 'PORÁŽA TALENT.')}
          </h3>
          <div className="space-y-0">
            {contacts.map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 py-4 border-b border-border hover:bg-secondary/50 transition-colors px-2 -mx-2">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                <span className="font-label text-xs tracking-[2px] uppercase text-label w-24">{c.label}</span>
                <span className="font-body text-sm text-foreground">{c.value}</span>
              </a>
            ))}
          </div>
          <p className="font-body text-xs text-label mt-6">ivan.b@thaurusguru.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
