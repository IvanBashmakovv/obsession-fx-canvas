import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const faqs = [
  {
    q_en: 'Is this advanced or suitable for beginners?',
    q_sk: 'Je to pokročilé alebo vhodné pre začiatočníkov?',
    a_en: 'Starts from foundations but goes far deeper than standard SMC. Beginners welcome but expect a serious curriculum.',
    a_sk: 'Začíname od základov, ale ideme oveľa hlbšie ako štandardné SMC. Začiatočníci sú vítaní, ale očakávajte seriózne učivo.',
  },
  {
    q_en: 'What are the 4 trading strategies?',
    q_sk: 'Aké sú 4 obchodné stratégie?',
    a_en: 'IntraDay, Swing, Dynamic, Static — each fully backtested with entry rules and risk management.',
    a_sk: 'IntraDay, Swing, Dynamic, Static — každá plne backtestovaná s pravidlami vstupu a risk managementom.',
  },
  {
    q_en: 'Education vs Education PRO difference?',
    q_sk: 'Rozdiel medzi Education a Education PRO?',
    a_en: 'Self-study vs live group sessions, homework feedback, strategy optimization, full prop challenge support.',
    a_sk: 'Samoštúdium vs živé skupinové sessions, feedback na domáce úlohy, optimalizácia stratégií, plná podpora prop výziev.',
  },
  {
    q_en: 'Can I pay in installments?',
    q_sk: 'Môžem platiť na splátky?',
    a_en: 'Yes for PRO. Contact via Telegram, WhatsApp, Viber or Instagram.',
    a_sk: 'Áno pre PRO. Kontaktujte nás cez Telegram, WhatsApp, Viber alebo Instagram.',
  },
  {
    q_en: 'How to become a mentor?',
    q_sk: 'Ako sa stať mentorom?',
    a_en: 'Proven funded track record required. Use contact form, select "Become a Mentor", ivnb reviews personally.',
    a_sk: 'Vyžaduje sa preukázaný fundovaný track record. Použite kontaktný formulár, vyberte "Staň sa mentorom", ivnb posudzuje osobne.',
  },
];

const FAQSection = () => {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <p className="font-label text-[10px] tracking-[4px] uppercase mb-4 section-tag reveal-heading" style={{ color: '#D4F000' }}>{t('FAQ', 'Otázky')}</p>
      <h2 className="font-heading text-6xl md:text-7xl mb-16 reveal-heading" style={{ color: '#F0EDE6' }}>{t('YOUR QUESTIONS.', 'VAŠE OTÁZKY.')}</h2>

      <div className="max-w-3xl reveal-content" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                <span className="font-body text-sm tracking-[1px] transition-colors"
                  style={{ color: isOpen ? '#F0EDE6' : '#AAAAAA' }}>
                  {lang === 'en' ? f.q_en : f.q_sk}
                </span>
                <span className={`font-heading text-xl transition-all duration-300 ml-4 ${isOpen ? 'rotate-45' : ''}`}
                  style={{ color: isOpen ? '#D4F000' : '#555555' }}>+</span>
              </button>
              <div className={`accordion-content ${isOpen ? 'open' : ''}`} style={{ paddingBottom: isOpen ? '16px' : 0 }}>
                <p className="font-body text-sm" style={{ color: '#BABABA' }}>{lang === 'en' ? f.a_en : f.a_sk}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
