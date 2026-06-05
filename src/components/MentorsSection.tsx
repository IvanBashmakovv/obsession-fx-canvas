import { useLanguage } from '@/contexts/LanguageContext';

const MentorsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mentors" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading text-2xl" style={{ color: '#D4F000' }}>{t('Team', 'Tím')}</p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(48px, 8vw, 96px)' }}>{t('OUR MENTORS.', 'NAŠI MENTORI.')}</h2>

      <div className="flex flex-col gap-6 reveal-content">
        <div className="glass-card relative overflow-hidden reveal-card flex flex-col md:flex-row" style={{ transitionDelay: '0ms' }}>
          <div className="relative z-10 p-8 md:p-12 md:w-[60%]">
            <span className="absolute top-4 right-8 font-heading text-[120px] leading-none select-none hide-mobile pointer-events-none z-0" style={{ color: 'rgba(212,240,0,0.08)' }}>01</span>
            <div className="relative z-10">
              <p className="tag tag-accent mb-3">{t('Founder · Head Mentor', 'Zakladateľ · Hlavný Mentor')}</p>
              <h3 className="font-heading text-5xl md:text-6xl mb-8" style={{ color: '#F0EDE6' }}>IVNB</h3>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8 font-label" style={{ fontSize: '11px', letterSpacing: '0.15em' }}>
                {[
                  ['HANDLE', '@IVNB'],
                  ['ROLE', t('FOUNDER', 'ZAKLADATEĽ')],
                  ['MARKETS', 'FX / IDX / CRYPTO'],
                  ['STYLE', 'SMC DYNAMIC'],
                  ['SINCE', '2020'],
                  ['STATUS', 'ACTIVE'],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1 border-l-2 pl-3" style={{ borderColor: 'rgba(208,255,0,0.4)' }}>
                    <dt style={{ color: '#888888' }}>{k}</dt>
                    <dd style={{ color: '#F0EDE6' }}>{v}</dd>
                  </div>
                ))}
              </dl>

              <p className="font-body text-sm mb-8 leading-relaxed" style={{ color: '#BABABA' }}>
                {t(
                  'Creator of the obsession.fx methodology. Built and refined the Advanced SMC system through extensive backtesting across Forex, Indices, and Crypto markets.',
                  'Tvorca metodológie obsession.fx. Vybudoval a zdokonalil systém pokročilého SMC rozsiahlym backtestovaním na Forex, Indexoch a Krypto trhoch.'
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Forex', 'Indices', 'Crypto', 'SMC', 'Prop Trading'].map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden md:w-[40%] min-h-[320px] md:min-h-0 md:self-stretch"
            style={{ borderRadius: '0 16px 16px 0' }}
          >
            <img
              src="/mentor-ivnb.jpg"
              alt="IVNB - Founder & Head Mentor"
              className="absolute inset-0 w-full h-full"
              style={{
                objectFit: 'cover',
                objectPosition: 'top center',
                filter: 'grayscale(100%) contrast(1.1)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, rgba(14,14,15,1) 0%, rgba(14,14,15,0.4) 30%, transparent 60%)',
              }}
            />
            <div
              className="absolute z-10"
              style={{
                top: '16px',
                left: '16px',
                background: 'rgba(14,14,15,0.85)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(208,255,0,0.25)',
                borderRadius: '8px',
                padding: '12px 16px',
              }}
            >
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#FEFFFC', fontWeight: 700, letterSpacing: '0.05em' }}>
                IVNB
              </div>
              <div className="font-label mt-1" style={{ fontSize: '9px', color: '#D0FF00', letterSpacing: '0.15em' }}>FOUNDER</div>
              <div className="font-label mt-0.5" style={{ fontSize: '9px', color: '#888888', letterSpacing: '0.15em' }}>SMC DYNAMIC</div>
              <div className="font-label mt-0.5" style={{ fontSize: '9px', color: '#888888', letterSpacing: '0.15em' }}>SINCE 2020</div>
            </div>
            <div
              className="absolute z-10 font-label flex items-center gap-2"
              style={{ bottom: '16px', left: '16px', fontSize: '9px', color: '#D0FF00', letterSpacing: '0.2em' }}
            >
              ACTIVE
              <span
                className="inline-block rounded-full"
                style={{ width: '6px', height: '6px', background: '#D0FF00', animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
              />
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 relative overflow-hidden reveal-card md:max-w-[50%]" style={{ transitionDelay: '80ms' }}>
          <span className="absolute top-4 right-8 font-heading text-[120px] leading-none select-none hide-mobile" style={{ color: 'rgba(212,240,0,0.08)' }}>02</span>
          <div className="relative z-10">
            <p className="tag tag-accent mb-3">{t('Senior Mentor', 'Senior Mentor')}</p>
            <h3 className="font-heading text-4xl mb-6" style={{ color: '#F0EDE6' }}>MENTOR 02</h3>
            <p className="font-body text-sm mb-8 leading-relaxed" style={{ color: '#BABABA' }}>
              {t(
                'Coming soon. We select mentors with exceptional track records and deep knowledge of our Advanced SMC methodology.',
                'Čoskoro. Vyberáme mentorov s výnimočnými výsledkami a hlbokými znalosťami našej pokročilej SMC metodológie.'
              )}
            </p>
            <span className="tag">{t('Coming soon', 'Čoskoro')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
