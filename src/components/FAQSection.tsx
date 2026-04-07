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
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading text-2xl" style={{ color: '#D4F000' }}>{t('FAQ', 'Otázky')}</p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(48px, 8vw, 96px)' }}>{t('YOUR QUESTIONS.', 'VAŠE OTÁZKY.')}</h2>

      <div className="max-w-3xl reveal-content" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between py-6 text-left group min-h-[48px]">
                <span className="font-body text-sm tracking-[0.02em] transition-colors leading-relaxed"
                  style={{ color: isOpen ? '#F0EDE6' : '#AAAAAA' }}>
                  {lang === 'en' ? f.q_en : f.q_sk}
                </span>
                <span className={`font-heading text-xl ml-6 flex-shrink-0 transition-transform duration-200 ease-out ${isOpen ? 'rotate-45' : ''}`}
                  style={{ color: isOpen ? '#D4F000' : '#555555' }}>+</span>
              </button>
              <div className={`accordion-content ${isOpen ? 'open' : ''}`} style={{ paddingBottom: isOpen ? '24px' : 0 }}>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#BABABA' }}>{lang === 'en' ? f.a_en : f.a_sk}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
