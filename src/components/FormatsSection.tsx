import { useLanguage } from '@/contexts/LanguageContext';

const FormatsSection = () => {
  const { t } = useLanguage();

  const features = [
    { en: 'Lifetime access to all materials', sk: 'Doživotný prístup ku všetkým materiálom' },
    { en: 'Access to mentor trade setups', sk: 'Prístup k mentor trade setupom' },
    { en: 'Direct communication with mentors', sk: 'Priama komunikácia s mentormi' },
    { en: 'Full prop challenge support', sk: 'Plná podpora prop výziev' },
    { en: 'Material updates', sk: 'Aktualizácie materiálov' },
    { en: 'Online live conferences', sk: 'Online živé konferencie' },
    { en: 'Homework with individual feedback', sk: 'Domáce úlohy s individuálnym feedbackom' },
    { en: 'Strategy optimization sessions', sk: 'Optimalizačné sessions stratégií' },
    { en: 'Final exam + certification', sk: 'Záverečná skúška + certifikácia' },
  ];

  const eduActive = [true, true, true, true, false, false, false, false, false];

  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  const communityBanner = (
    <div className="mt-4 p-3 border rounded-sm" style={{ background: 'rgba(198,255,0,0.06)', borderColor: 'rgba(198,255,0,0.2)' }}>
      <p className="font-label text-[10px] tracking-[1px] uppercase text-[#C6FF00] text-center">
        {t('🎁 FREE community access — first 6 months promo', '🎁 ZADARMO prístup do komunity — prvých 6 mesiacov promo')}
      </p>
    </div>
  );

  return (
    <section id="formats" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <p className="text-primary font-label text-[10px] tracking-[4px] uppercase mb-4 section-tag reveal-heading">{t('Formats', 'Formáty')}</p>
      <h2 className="font-heading text-6xl md:text-7xl text-foreground mb-16 reveal-heading">{t('CHOOSE YOUR PATH.', 'VYBER SI SVOJU CESTU.')}</h2>

      <div className="grid md:grid-cols-2 gap-[1px] bg-border reveal-content">
        {/* EDUCATION */}
        <div className="bg-background p-8 md:p-10 flex flex-col reveal-card" style={{ transitionDelay: '0ms' }}>
          <span className="bg-secondary text-[#777777] font-label text-[10px] tracking-[1px] uppercase px-3 py-1 self-start mb-4">
            {t('Self-study', 'Samoštúdium')}
          </span>
          <h3 className="font-heading text-5xl text-foreground mb-1">EDUCATION</h3>
          <p className="font-body text-xs text-[#777777] tracking-[2px] uppercase mb-4">
            {t('Self-paced · your schedule', 'Vlastné tempo · tvoj rozvrh')}
          </p>
          <div className="mb-8">
            <span className="font-body text-sm text-[#444444] line-through mr-3">399€</span>
            <span className="font-heading text-[52px] text-foreground leading-none">299€</span>
            <p className="font-body text-[11px] text-[#555555] mt-1">{t('One-time payment', 'Jednorázová platba')}</p>
          </div>
          <div className="space-y-3 flex-1">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${eduActive[i] ? 'bg-primary' : 'bg-secondary'}`} />
                <span className={`font-body text-sm ${eduActive[i] ? 'text-foreground' : 'text-[#444444] line-through'}`}>
                  {t(f.en, f.sk)}
                </span>
              </div>
            ))}
          </div>
          {communityBanner}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="font-label text-[10px] tracking-[2px] uppercase text-[#666666] mb-1">{t('Community access', 'Prístup do komunity')}</p>
            <p className="font-body text-sm text-[#888888] mb-4">{t('Monthly subscription', 'Mesačné predplatné')}</p>
            <button onClick={scrollToContact}
              className="w-full border border-muted text-foreground font-body text-xs font-bold tracking-[2px] uppercase py-3 hover:border-foreground transition-colors">
              {t('CONTACT US →', 'KONTAKTOVAŤ NÁS →')}
            </button>
          </div>
        </div>

        {/* EDUCATION PRO */}
        <div className="bg-background p-8 md:p-10 flex flex-col relative overflow-hidden pro-card-glow reveal-card" style={{ transitionDelay: '100ms' }}>
          <span className="bg-primary/20 text-primary font-label text-[10px] tracking-[1px] uppercase px-3 py-1 self-start mb-4 flex items-center gap-2">
            ★ {t('Most popular', 'Najpopulárnejší')}
            <span className="pulse-dot" />
          </span>
          <h3 className="font-heading text-5xl text-foreground mb-1">EDUCATION PRO</h3>
          <p className="font-body text-xs text-[#777777] tracking-[2px] uppercase mb-4">
            {t('Group learning · mentors live', 'Skupinové učenie · mentori naživo')}
          </p>
          <div className="mb-8">
            <span className="font-body text-sm text-[#444444] line-through mr-3">899€</span>
            <span className="font-heading text-[52px] text-foreground leading-none">699€</span>
            <p className="font-body text-[11px] text-[#555555] mt-1">{t('One-time payment', 'Jednorázová platba')}</p>
          </div>
          <div className="space-y-3 flex-1">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-primary" />
                <span className="font-body text-sm text-foreground">{t(f.en, f.sk)}</span>
              </div>
            ))}
          </div>
          {communityBanner}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="font-label text-[10px] tracking-[2px] uppercase text-[#666666] mb-1">{t('Community access', 'Prístup do komunity')}</p>
            <p className="font-body text-sm text-[#C6FF00] mb-4">{t('90 days FREE', '90 dní ZADARMO')}</p>
            <button disabled
              className="w-full bg-[#333] text-[#666] font-body text-xs font-bold tracking-[2px] uppercase py-3 cursor-not-allowed">
              {t('NO SPOTS AVAILABLE', 'ŽIADNE MIESTA K DISPOZÍCII')}
            </button>
          </div>

          {/* SOLD OUT overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center" style={{ background: 'rgba(12,12,12,0.75)' }}>
            <div className="border-2 border-primary px-8 py-4">
              <span className="font-heading text-[64px] text-primary leading-none">SOLD OUT</span>
            </div>
            <p className="font-body text-sm text-[#666666] mt-4">{t('Next intake — contact us', 'Ďalší nábor — kontaktujte nás')}</p>
          </div>

          {/* Green ticker - visible through overlay */}
          <div className="mt-6 -mx-10 overflow-hidden relative z-30" style={{ background: 'hsl(73, 100%, 50%)' }}>
            <div className="ticker-scroll-fast inline-flex whitespace-nowrap py-1">
              <span className="text-[10px] font-label font-bold tracking-[3px] uppercase" style={{ color: '#0C0C0C' }}>
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
