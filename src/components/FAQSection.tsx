import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const faqs = [
  {
    q_en: 'Is this suitable for beginners?',
    q_sk: 'Je to vhodné pre začiatočníkov?',
    a_en: 'Yes. The program starts with the foundations and then moves into more advanced execution models. You do not need to be profitable before joining, but you should be ready to learn seriously.',
    a_sk: 'Áno. Program začína od základov a postupne prechádza k pokročilejším exekučným modelom. Nemusíš byť pred vstupom profitabilný, ale musíš byť pripravený sa seriózne učiť.',
  },
  {
    q_en: 'Do I get instant access?',
    q_sk: 'Mám okamžitý prístup?',
    a_en: 'Yes. After purchase, you receive access to the education platform and can start learning immediately.',
    a_sk: 'Áno. Po nákupe získaš prístup k platforme a môžeš sa hneď začať učiť.',
  },
  {
    q_en: 'Is this a signal service?',
    q_sk: 'Je to signálová služba?',
    a_en: 'No. Obsession FX is not a signal group. We teach you how to understand the market, build your own trading plan and execute with structure.',
    a_sk: 'Nie. Obsession FX nie je signálová skupina. Učíme ťa rozumieť trhu, postaviť si vlastný plán a exekvovať so štruktúrou.',
  },
  {
    q_en: 'How long do I have access?',
    q_sk: 'Ako dlho mám prístup?',
    a_en: 'You receive lifetime access to the program and future updates included in your plan.',
    a_sk: 'Získavaš doživotný prístup k programu a budúcim aktualizáciám v rámci tvojho plánu.',
  },
  {
    q_en: 'Do I get mentor support?',
    q_sk: 'Dostávam mentor podporu?',
    a_en: 'Yes. Mentor support is included so you can ask questions, clarify lessons and improve your process.',
    a_sk: 'Áno. Mentor podpora je v cene, aby si sa mohol pýtať, ujasňovať lekcie a zlepšovať svoj proces.',
  },
  {
    q_en: 'What markets does this work for?',
    q_sk: 'Pre aké trhy to funguje?',
    a_en: 'The concepts are focused on FX and CFD-style markets, but the core principles of structure, liquidity, risk and execution can be applied across multiple markets.',
    a_sk: 'Koncepty sú zamerané na FX a CFD trhy, ale jadrové princípy štruktúry, likvidity, rizika a exekúcie sa dajú aplikovať na viaceré trhy.',
  },
  {
    q_en: 'Can this help with prop firm challenges?',
    q_sk: 'Pomôže to s prop firm výzvami?',
    a_en: 'Yes. The program includes risk management, execution discipline and strategy structure that can help traders prepare for funded account challenges. However, results depend on your discipline, risk control and consistency.',
    a_sk: 'Áno. Program obsahuje risk management, exekučnú disciplínu a štruktúru stratégie, ktoré pomáhajú pripraviť sa na funded výzvy. Výsledky však závisia od tvojej disciplíny a konzistencie.',
  },
  {
    q_en: 'Do you guarantee profits?',
    q_sk: 'Garantujete zisky?',
    a_en: 'No. Trading involves risk and no education can guarantee profits. Obsession FX provides education, structure and mentorship, but your results depend on your own execution and risk management.',
    a_sk: 'Nie. Obchodovanie zahŕňa riziko a žiadne vzdelanie nemôže garantovať zisky. Obsession FX poskytuje vzdelanie, štruktúru a mentoring, no výsledky závisia od teba.',
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
