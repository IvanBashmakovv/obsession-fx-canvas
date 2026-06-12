import { useLanguage } from '@/contexts/LanguageContext';

const MentorsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mentors" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: '11px' }}>{t('Team', 'Tím')}</p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(48px, 8vw, 96px)' }}>{t('OUR TEAM.', 'NÁŠ TÍM.')}</h2>

      <div className="flex flex-col gap-6 reveal-content">
        {/* IVNB CARD */}
        <div className="glass-card relative overflow-hidden reveal-card flex flex-col md:flex-row" style={{ borderRadius: '16px' }}>
          <div className="relative z-10 p-8 md:p-12 md:w-[60%]">
            <span className="absolute top-4 right-8 font-heading text-[120px] leading-none select-none hide-mobile pointer-events-none z-0" style={{ color: 'rgba(208,255,0,0.08)' }}>01</span>
            <div className="relative z-10">
              <p className="tag tag-accent mb-3">{t('Founder · Head Mentor', 'Zakladateľ · Hlavný Mentor')}</p>
              <h3 className="font-heading text-5xl md:text-6xl mb-8" style={{ color: '#FEFFFC' }}>IVNB</h3>

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
                    <dd style={{ color: '#FEFFFC' }}>{v}</dd>
                  </div>
                ))}
              </dl>

              <p className="font-body text-sm mb-8 leading-relaxed" style={{ color: '#BABABA' }}>
                {t(
                  'Creator of the obsession.fx methodology. 5 years in the markets. Built and refined the Advanced SMC system through thousands of hours of real backtesting. Believes obsession — not talent — separates traders who make it from those who don\'t.',
                  'Tvorca metodológie obsession.fx. 5 rokov na trhoch. Vybudoval a zdokonalil pokročilý SMC systém cez tisíce hodín reálneho backtestovania. Verí že posadnutosť — nie talent — oddeľuje traderov ktorí to dokážu od tých čo nie.'
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Forex', 'Indices', 'Crypto', 'SMC', 'Prop Trading'].map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden md:max-w-[40%] md:w-[40%] min-h-[320px] md:min-h-0 md:self-stretch">
            <img
              src="/mentor-ivnb.jpg"
              alt="IVNB - Founder & Head Mentor"
              className="block w-full h-full"
              style={{
                objectFit: 'cover', objectPosition: 'top center',
                filter: 'grayscale(100%) contrast(1.1)',
                position: 'absolute', inset: 0,
              }}
            />
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'linear-gradient(to right, rgba(14,14,15,1) 0%, rgba(14,14,15,0.4) 30%, transparent 60%)',
            }} />
            <div className="absolute z-10" style={{
              top: '16px', left: '16px',
              background: 'rgba(14,14,15,0.85)',
              backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(208,255,0,0.25)',
              borderRadius: '8px', padding: '12px 16px',
            }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#FEFFFC', fontWeight: 700 }}>IVNB</div>
              <div className="font-label mt-1" style={{ fontSize: '9px', color: '#D0FF00', letterSpacing: '0.15em' }}>FOUNDER</div>
              <div className="font-label mt-0.5" style={{ fontSize: '9px', color: '#888888', letterSpacing: '0.15em' }}>SMC DYNAMIC</div>
              <div className="font-label mt-0.5" style={{ fontSize: '9px', color: '#888888', letterSpacing: '0.15em' }}>SINCE 2020</div>
            </div>
            <div className="absolute z-10 font-label flex items-center gap-2" style={{ bottom: '16px', left: '16px', fontSize: '9px', color: '#D0FF00', letterSpacing: '0.2em' }}>
              ACTIVE
              <span className="inline-block rounded-full" style={{ width: '6px', height: '6px', background: '#D0FF00', animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }} />
            </div>
          </div>
        </div>

        {/* EGOR CARD */}
        <div className="glass-card relative overflow-hidden reveal-card flex flex-col md:flex-row" style={{ borderRadius: '16px', transitionDelay: '80ms' }}>
          <div className="relative z-10 p-8 md:p-12 md:w-[60%]">
            <span className="absolute top-4 right-8 font-heading text-[120px] leading-none select-none hide-mobile pointer-events-none z-0" style={{ color: 'rgba(208,255,0,0.07)' }}>02</span>
            <div className="relative z-10">
              <p className="tag tag-accent mb-3">{t('THE STUDENT', 'ŠTUDENT')}</p>
              <h3 className="font-heading mb-8" style={{ color: '#FEFFFC', fontSize: '40px' }}>EGOR</h3>
              <p className="font-body mb-8 leading-relaxed" style={{ color: '#BBBBBB', fontSize: '15px' }}>
                {t(
                  "Egor has a normal job and zero trading background. But he's obsessed with the idea of learning — and he's documenting every step publicly. No filters, no shortcuts. Just one person becoming a trader in real time.",
                  'Egor má normálnu prácu a nulové skúsenosti s tradingom. Ale je posadnutý myšlienkou učiť sa — a dokumentuje každý krok verejne. Bez filtrov, bez skratiek. Len jeden človek, ktorý sa stáva traderom v reálnom čase.'
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {['BEGINNER', 'OBSESSED', t('WEEK 1 JOURNEY', 'TÝŽDEŇ 1 CESTY'), t('FOLLOW THE PATH', 'SLEDUJ CESTU')].map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden md:max-w-[40%] md:w-[40%] min-h-[320px] md:min-h-0 md:self-stretch flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div style={{
              width: '70%', aspectRatio: '1', borderRadius: '16px',
              border: '2px dashed #D0FF00', display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexDirection: 'column', gap: '12px',
              color: '#D0FF00',
            }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
              </svg>
              <span style={{ fontFamily: 'Jura, sans-serif', fontSize: '10px', letterSpacing: '0.2em' }}>PHOTO COMING SOON</span>
            </div>
          </div>
        </div>

        {/* JOURNEY BANNER */}
        <div className="reveal-card flex flex-col md:flex-row justify-between items-start md:items-center gap-6" style={{
          background: 'rgba(208,255,0,0.05)',
          border: '1px solid rgba(208,255,0,0.15)',
          borderRadius: '12px',
          padding: '24px 32px',
          transitionDelay: '160ms',
        }}>
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#FEFFFC', fontWeight: 600 }}>
              {t("Follow Egor's journey →", 'Sleduj Egorovu cestu →')}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#666666', marginTop: '6px' }}>
              {t('Week 1: Complete beginner. Goal: Funded account in 6 months.', 'Týždeň 1: Úplný začiatočník. Cieľ: Funded účet za 6 mesiacov.')}
            </div>
          </div>
          <a href="https://t.me/obsessionfx" target="_blank" rel="noopener noreferrer" style={{
            background: 'transparent', color: '#D0FF00',
            border: '1px solid #D0FF00', borderRadius: '12px',
            padding: '12px 24px', fontFamily: 'Jura, sans-serif',
            fontSize: '11px', letterSpacing: '0.15em', fontWeight: 700,
            textDecoration: 'none', display: 'inline-block',
          }}>
            {t('FOLLOW PROGRESS →', 'SLEDOVAŤ POKROK →')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
