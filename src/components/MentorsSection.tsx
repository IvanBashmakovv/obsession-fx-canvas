import { useLanguage } from '@/contexts/LanguageContext';

const MentorsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mentors" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading text-2xl" style={{ color: '#D4F000' }}>{t('Team', 'Tím')}</p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(48px, 8vw, 96px)' }}>{t('OUR MENTORS.', 'NAŠI MENTORI.')}</h2>

      <div className="grid md:grid-cols-2 gap-6 reveal-content">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden reveal-card" style={{ transitionDelay: '0ms' }}>
          <span className="absolute top-4 right-8 font-heading text-[120px] leading-none select-none hide-mobile" style={{ color: 'rgba(212,240,0,0.08)' }}>01</span>
          <div className="relative z-10">
            <p className="tag tag-accent mb-3">{t('Founder · Head Mentor', 'Zakladateľ · Hlavný Mentor')}</p>
            <h3 className="font-heading text-4xl mb-6" style={{ color: '#F0EDE6' }}>IVNB</h3>
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
        <div className="glass-card p-8 md:p-12 relative overflow-hidden reveal-card" style={{ transitionDelay: '80ms' }}>
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
