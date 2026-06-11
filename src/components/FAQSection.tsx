import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const faqs = [
  {
    q_en: 'Is the course really free? Forever?',
    q_sk: 'Je kurz naozaj zadarmo? Navždy?',
    a_en: 'Yes. The Foundation Course is completely free. No hidden fees, no free trial, no credit card. We believe knowledge should be accessible to everyone. We make money through community membership — and only when you decide it\'s worth it.',
    a_sk: 'Áno. Základný kurz je úplne zadarmo. Žiadne skryté poplatky, žiadna skúšobná verzia, žiadna kreditná karta. Veríme že znalosti by mali byť dostupné každému.',
  },
  {
    q_en: 'Do I need any experience to start?',
    q_sk: 'Potrebujem skúsenosti na začiatok?',
    a_en: "Zero. The course starts from absolute basics. If you know what a chart looks like — that's enough. The methodology is built to be understood by anyone.",
    a_sk: 'Nula. Kurz začína od úplných základov. Ak vieš ako vyzerá graf — to stačí.',
  },
  {
    q_en: "What's the difference between the course and the community?",
    q_sk: 'Aký je rozdiel medzi kurzom a komunitou?',
    a_en: 'The course is the knowledge. The community is where you apply it. Course teaches you what Order Blocks are. Community is where you share analysis, get mentor feedback, watch live trades, and grow with traders on the same journey.',
    a_sk: 'Kurz sú vedomosti. Komunita je miesto kde ich aplikuješ.',
  },
  {
    q_en: 'How long will the community be free?',
    q_sk: 'Ako dlho bude komunita zadarmo?',
    a_en: "Until we reach 300-400 active members. After that, the community closes to free access and moves to paid membership (70€/month, 150€/3 months, 550€/year). If you're reading this — you're in time.",
    a_sk: 'Kým nedosiahneme 300-400 aktívnych členov. Potom sa uzavrie pre bezplatný prístup (70€/mesiac, 150€/3 mesiace, 550€/rok).',
  },
  {
    q_en: 'Who is Egor and why are you sharing his journey?',
    q_sk: 'Kto je Egor a prečo zdieľate jeho cestu?',
    a_en: 'Egor is our team member who knew trading from the sales side but never actually traded. We document his journey from beginner to funded — publicly, no filters. Because the best way to show this works is to show it working live.',
    a_sk: 'Egor je člen nášho tímu ktorý poznal trading z predajnej strany ale nikdy neobchodoval. Dokumentujeme jeho cestu od začiatočníka po funded — verejne, bez filtrov.',
  },
  {
    q_en: 'Who is this for?',
    q_sk: 'Pre koho je toto určené?',
    a_en: 'Anyone who wants a real skill. Students, employees, shift workers, freelancers, people bored of their job. No finance background needed. Just curiosity and consistency.',
    a_sk: 'Pre každého kto chce reálnu zručnosť. Študenti, zamestnanci, ľudia na zmenách, freelanceri. Nepotrebuješ finančné vzdelanie.',
  },
];

const FAQSection = () => {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: '11px' }}>{t('FAQ', 'Otázky')}</p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(48px, 8vw, 96px)' }}>{t('YOUR QUESTIONS.', 'VAŠE OTÁZKY.')}</h2>

      <div className="max-w-3xl reveal-content" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between py-6 text-left group min-h-[48px]">
                <span className="font-body text-sm tracking-[0.02em] transition-colors leading-relaxed"
                  style={{ color: isOpen ? '#FEFFFC' : '#AAAAAA' }}>
                  {lang === 'en' ? f.q_en : f.q_sk}
                </span>
                <span className={`font-heading text-xl ml-6 flex-shrink-0 transition-transform duration-200 ease-out ${isOpen ? 'rotate-45' : ''}`}
                  style={{ color: isOpen ? '#D0FF00' : '#555555' }}>+</span>
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
