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
    <div className="mt-6 p-4" style={{ background: 'rgba(212,240,0,0.06)', border: '1px solid rgba(212,240,0,0.2)', borderRadius: '12px' }}>
      <p className="font-label text-[10px] tracking-[0.08em] uppercase text-center" style={{ color: '#D4F000', maxWidth: '100%' }}>
        {t('🎁 FREE community access — first 6 months promo', '🎁 ZADARMO prístup do komunity — prvých 6 mesiacov promo')}
      </p>
    </div>
  );

  return (
    <section id="formats" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto section-alt-bg relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading visible text-2xl text-primary" style={{ color: '#D4F000' }}>{t('Formats', 'Formáty')}</p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(48px, 8vw, 96px)' }}>{t('CHOOSE YOUR PATH.', 'VYBER SI SVOJU CESTU.')}</h2>

      <div className="grid md:grid-cols-2 gap-8 reveal-content">
        {/* EDUCATION */}
        <div className="glass-card p-8 md:p-10 flex flex-col reveal-card" style={{ transitionDelay: '0ms' }}>
          <span className="font-label tracking-[0.08em] uppercase px-4 py-2 self-start mb-6 text-primary bg-primary-foreground text-sm"
            style={{ background: 'rgba(255,255,255,0.06)', color: '#AAAAAA', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}>
            {t('Self-study', 'Samoštúdium')}
          </span>
          <h3 className="font-heading text-5xl mb-2" style={{ color: '#F0EDE6' }}>EDUCATION</h3>
          <p className="font-body text-xs tracking-[0.1em] uppercase mb-6" style={{ color: '#888888' }}>
            {t('Self-paced · your schedule', 'Vlastné tempo · tvoj rozvrh')}
          </p>
          <div className="mb-8">
            <span className="font-body text-sm line-through mr-4 bg-primary-foreground text-primary" style={{ color: '#444444' }}>399€</span>
            <span className="font-heading text-[52px] leading-none" style={{ color: '#F0EDE6' }}>299€</span>
            <p className="font-body text-[11px] mt-2 text-primary" style={{ color: '#777777' }}>{t('One-time payment', 'Jednorázová platba')}</p>
          </div>
          <div className="space-y-4 flex-1">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: eduActive[i] ? '#D4F000' : 'rgba(255,255,255,0.06)' }} />
                <span className={`font-body text-sm ${eduActive[i] ? '' : 'line-through'}`}
                  style={{ color: eduActive[i] ? '#F0EDE6' : '#444444' }}>
                  {t(f.en, f.sk)}
                </span>
              </div>
            ))}
          </div>
          {communityBanner}
          <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <p className="font-label text-[10px] tracking-[0.1em] uppercase mb-2 text-primary" style={{ color: '#777777' }}>{t('Community access', 'Prístup do komunity')}</p>
            <p className="font-body text-sm mb-6 text-primary" style={{ color: '#AAAAAA' }}>{t('Monthly subscription', 'Mesačné predplatné')}</p>
            <button onClick={scrollToContact}
              className="w-full font-body text-xs font-bold tracking-[0.15em] uppercase py-4 transition-all min-h-[48px]"
              style={{ border: '1px solid rgba(240,237,230,0.25)', color: '#F0EDE6', background: 'transparent', borderRadius: '12px' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4F000'; e.currentTarget.style.color = '#D4F000'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,237,230,0.25)'; e.currentTarget.style.color = '#F0EDE6'; }}>
              {t('CONTACT US →', 'KONTAKTOVAŤ NÁS →')}
            </button>
          </div>
        </div>

        {/* EDUCATION PRO */}
        <div className="p-8 md:p-10 flex flex-col relative overflow-hidden pro-card-glow reveal-card"
          style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.1)', borderLeft: '2px solid #F04E23', backdropFilter: 'blur(12px)', borderRadius: '12px', transitionDelay: '80ms' }}>
          <span className="font-label text-[10px] tracking-[0.08em] uppercase px-4 py-2 self-start mb-6 flex items-center gap-2"
            style={{ background: 'rgba(212,240,0,0.1)', color: '#D4F000', border: '1px solid rgba(212,240,0,0.2)', borderRadius: '12px' }}>
            ★ {t('Most popular', 'Najpopulárnejší')}
            <span className="pulse-dot" />
          </span>
          <h3 className="font-heading text-5xl mb-2" style={{ color: '#F0EDE6' }}>EDUCATION PRO</h3>
          <p className="font-body text-xs tracking-[0.1em] uppercase mb-6" style={{ color: '#888888' }}>
            {t('Group learning · mentors live', 'Skupinové učenie · mentori naživo')}
          </p>
          <div className="mb-8">
            <span className="font-body text-sm line-through mr-4" style={{ color: '#444444' }}>899€</span>
            <span className="font-heading text-[52px] leading-none" style={{ color: '#F0EDE6' }}>699€</span>
            <p className="font-body text-[11px] mt-2" style={{ color: '#777777' }}>{t('One-time payment', 'Jednorázová platba')}</p>
          </div>
          <div className="space-y-4 flex-1">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#D4F000' }} />
                <span className="font-body text-sm" style={{ color: '#F0EDE6' }}>{t(f.en, f.sk)}</span>
              </div>
            ))}
          </div>
          {communityBanner}
          <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <p className="font-label text-[10px] tracking-[0.1em] uppercase mb-2" style={{ color: '#777777' }}>{t('Community access', 'Prístup do komunity')}</p>
            <p className="font-body text-sm mb-6" style={{ color: '#D4F000' }}>{t('90 days FREE', '90 dní ZADARMO')}</p>
            <button disabled
              className="w-full font-body text-xs font-bold tracking-[0.15em] uppercase py-4 cursor-not-allowed min-h-[48px]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#666666', borderRadius: '12px' }}>
              {t('NO SPOTS AVAILABLE', 'ŽIADNE MIESTA K DISPOZÍCII')}
            </button>
          </div>

          {/* SOLD OUT overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center sold-out-overlay">
            <div className="px-8 py-4" style={{ border: '2px solid #D4F000', borderRadius: '12px' }}>
              <span className="font-heading text-[64px] leading-none" style={{ color: '#D4F000' }}>SOLD OUT</span>
            </div>
            <p className="font-body text-sm mt-6 text-primary" style={{ color: '#666666' }}>{t('Next intake — contact us', 'Ďalší nábor — kontaktujte nás')}</p>
          </div>

          {/* Ticker */}
          <div className="mt-8 -mx-10 overflow-hidden relative z-30" style={{ background: '#D4F000', borderRadius: '0' }}>
            <div className="ticker-scroll-fast inline-flex whitespace-nowrap py-2">
              <span className="text-[10px] font-label font-bold tracking-[0.15em] uppercase" style={{ color: '#0E0E0F' }}>
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
