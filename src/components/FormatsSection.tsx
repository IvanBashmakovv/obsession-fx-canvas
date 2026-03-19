import { useLanguage } from '@/contexts/LanguageContext';

const FormatsSection = () => {
  const { t } = useLanguage();

  const features = [
    { en: 'Lifetime access to all materials', sk: 'Doživotný prístup ku všetkým materiálom' },
    { en: 'Access to mentor trade setups', sk: 'Prístup k mentor trade setupom' },
    { en: 'Direct communication with mentors', sk: 'Priama komunikácia s mentormi' },
    { en: 'Material updates', sk: 'Aktualizácie materiálov' },
    { en: 'Online live conferences', sk: 'Online živé konferencie' },
    { en: 'Homework with individual feedback', sk: 'Domáce úlohy s individuálnym feedbackom' },
    { en: 'Strategy optimization sessions', sk: 'Optimalizačné sessions stratégií' },
    { en: 'Full prop challenge support', sk: 'Plná podpora prop výziev' },
    { en: 'Final exam + certification', sk: 'Záverečná skúška + certifikácia' },
  ];

  const eduActive = [true, true, true, false, false, false, false, false, false];

  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="formats" className="py-24 px-6 max-w-7xl mx-auto reveal">
      <p className="text-primary font-body text-[10px] tracking-[4px] uppercase mb-4">{t('Formats', 'Formáty')}</p>
      <h2 className="font-heading text-6xl md:text-7xl text-foreground mb-16">{t('CHOOSE YOUR PATH.', 'VYBER SI SVOJU CESTU.')}</h2>

      <div className="grid md:grid-cols-2 gap-[1px] bg-border">
        {/* EDUCATION */}
        <div className="bg-background p-8 md:p-10 flex flex-col">
          <span className="bg-secondary text-muted-foreground font-body text-[10px] tracking-[1px] uppercase px-3 py-1 self-start mb-4">
            {t('Self-study', 'Samoštúdium')}
          </span>
          <h3 className="font-heading text-5xl text-foreground mb-1">EDUCATION</h3>
          <p className="font-body text-xs text-muted-foreground tracking-[2px] uppercase mb-8">
            {t('Self-paced · your schedule', 'Vlastné tempo · tvoj rozvrh')}
          </p>
          <div className="space-y-3 flex-1">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${eduActive[i] ? 'bg-primary' : 'bg-secondary'}`} />
                <span className={`font-body text-sm ${eduActive[i] ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {t(f.en, f.sk)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-body text-[10px] tracking-[2px] uppercase text-muted-foreground mb-1">{t('Community access', 'Prístup do komunity')}</p>
            <p className="font-body text-sm text-foreground mb-4">{t('Monthly subscription', 'Mesačné predplatné')}</p>
            <button onClick={scrollToContact}
              className="w-full border border-muted text-foreground font-body text-xs font-bold tracking-[2px] uppercase py-3 hover:border-foreground transition-colors">
              {t('CONTACT US →', 'KONTAKTOVAŤ NÁS →')}
            </button>
          </div>
        </div>

        {/* EDUCATION PRO */}
        <div className="bg-background p-8 md:p-10 flex flex-col relative overflow-hidden">
          <span className="bg-primary/20 text-primary font-body text-[10px] tracking-[1px] uppercase px-3 py-1 self-start mb-4">
            ★ {t('Most popular', 'Najpopulárnejší')}
          </span>
          <h3 className="font-heading text-5xl text-foreground mb-1">EDUCATION PRO</h3>
          <p className="font-body text-xs text-muted-foreground tracking-[2px] uppercase mb-8">
            {t('Group learning · mentors live', 'Skupinové učenie · mentori naživo')}
          </p>
          <div className="space-y-3 flex-1">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-primary" />
                <span className="font-body text-sm text-foreground">{t(f.en, f.sk)}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-body text-[10px] tracking-[2px] uppercase text-muted-foreground mb-1">{t('Community access', 'Prístup do komunity')}</p>
            <p className="font-body text-sm text-green mb-4">{t('90 days FREE', '90 dní ZADARMO')}</p>
            <button onClick={scrollToContact}
              className="w-full bg-primary text-primary-foreground font-body text-xs font-bold tracking-[2px] uppercase py-3 hover:opacity-90 transition-opacity">
              {t('RESERVE SPOT →', 'REZERVOVAŤ MIESTO →')}
            </button>
          </div>
          {/* Green ticker */}
          <div className="mt-6 -mx-10 overflow-hidden" style={{ background: 'hsl(73, 100%, 50%)' }}>
            <div className="ticker-scroll-fast inline-flex whitespace-nowrap py-1">
              <span className="text-[10px] font-body font-bold tracking-[3px] uppercase" style={{ color: '#0C0C0C' }}>
                {'GROUP LEARNING ✦ GROUP LEARNING ✦ GROUP LEARNING ✦ GROUP LEARNING ✦ GROUP LEARNING ✦ GROUP LEARNING ✦ GROUP LEARNING ✦ GROUP LEARNING ✦ '.repeat(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatsSection;
