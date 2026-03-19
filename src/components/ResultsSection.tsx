import { useLanguage } from '@/contexts/LanguageContext';

const reviews = [
  {
    initials: 'MK', color: 'bg-primary', badge: 'FTMO $100K',
    text_en: 'Before obsession.fx I blew 3 accounts. After 2 months of PRO I passed my first FTMO. The Advanced SMC is on a completely different level.',
    text_sk: 'Pred obsession.fx som prišiel o 3 účty. Po 2 mesiacoch PRO som prešiel prvý FTMO. Pokročilé SMC je na úplne inej úrovni.',
    handle: '@martin.k', country: 'Slovakia', stat1: '$100K account', stat2: '+8.4% monthly',
  },
  {
    initials: 'LP', color: 'bg-pink', badge: '2x Funded',
    text_en: 'The 4 strategies are the key. I use Static for consistency and IntraDay for extra income. Never had a system this complete.',
    text_sk: '4 stratégie sú kľúč. Používam Static na konzistentnosť a IntraDay na extra príjem. Nikdy som nemal taký kompletný systém.',
    handle: '@lukas.p', country: 'Czech Republic', stat1: '2× $50K', stat2: '+$6,200 total',
  },
  {
    initials: 'PB', color: 'bg-green', badge: 'Win rate 68%',
    text_en: 'Ivan\'s live reviews of my actual trades changed everything. 2 challenges in 3 months.',
    text_sk: 'Ivanove živé recenzie mojich obchodov zmenili všetko. 2 výzvy za 3 mesiace.',
    handle: '@peter.b', country: 'Slovakia', stat1: 'MyForexFunds', stat2: '68% win rate',
  },
];

const ResultsSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto reveal">
      <p className="text-primary font-body text-[10px] tracking-[4px] uppercase mb-4">{t('Testimonials', 'Referencie')}</p>
      <h2 className="font-heading text-6xl md:text-7xl text-foreground mb-16">{t('REAL RESULTS.', 'REÁLNE VÝSLEDKY.')}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="border border-border p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center font-heading text-sm text-background`}>
                {r.initials}
              </div>
              <span className="bg-green/20 text-green font-body text-[10px] tracking-[1px] uppercase px-2 py-0.5">{r.badge}</span>
            </div>
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="hsl(0, 100%, 56%)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="font-body text-sm text-foreground flex-1 mb-4">{lang === 'en' ? r.text_en : r.text_sk}</p>
            <p className="font-body text-[10px] text-muted-foreground tracking-[1px] mb-4">{r.handle} · {r.country}</p>
            <div className="bg-card border border-border p-3 flex justify-between">
              <span className="font-body text-xs text-muted-foreground">{r.stat1}</span>
              <span className="font-body text-xs text-green font-bold">{r.stat2}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
