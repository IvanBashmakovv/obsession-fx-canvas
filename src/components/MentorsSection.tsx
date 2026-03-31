import { useLanguage } from '@/contexts/LanguageContext';

const MentorsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mentors" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <p className="font-label text-[10px] tracking-[4px] uppercase mb-4 section-tag reveal-heading" style={{ color: '#D4F000' }}>{t('Team', 'Tím')}</p>
      <h2 className="font-heading text-6xl md:text-7xl mb-16 reveal-heading" style={{ color: '#F0EDE6' }}>{t('OUR MENTORS.', 'NAŠI MENTORI.')}</h2>

      <div className="grid md:grid-cols-2 gap-4 reveal-content">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden reveal-card" style={{ transitionDelay: '0ms' }}>
          <span className="absolute top-4 right-6 font-heading text-[120px] leading-none select-none" style={{ color: 'rgba(212,240,0,0.08)' }}>01</span>
          <div className="relative z-10">
            <p className="font-label text-[10px] tracking-[4px] uppercase mb-2" style={{ color: '#D4F000' }}>{t('Founder · Head Mentor', 'Zakladateľ · Hlavný Mentor')}</p>
            <h3 className="font-heading text-4xl mb-4" style={{ color: '#F0EDE6' }}>IVNB</h3>
            <p className="font-body text-sm mb-6 max-w-sm" style={{ color: '#BABABA' }}>
              {t(
                'Creator of the obsession.fx methodology. Built and refined the Advanced SMC system through extensive backtesting across Forex, Indices, and Crypto markets.',
                'Tvorca metodológie obsession.fx. Vybudoval a zdokonalil systém pokročilého SMC rozsiahlym backtestovaním na Forex, Indexoch a Krypto trhoch.'
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              {['Forex', 'Indices', 'Crypto', 'SMC', 'Prop Trading'].map(tag => (
                <span key={tag} className="font-label text-[10px] tracking-[1px] uppercase px-3 py-1"
                  style={{ background: 'rgba(255,255,255,0.06)', color: '#AAAAAA', border: '1px solid rgba(255,255,255,0.1)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="glass-card p-8 md:p-12 relative overflow-hidden reveal-card" style={{ transitionDelay: '100ms' }}>
          <span className="absolute top-4 right-6 font-heading text-[120px] leading-none select-none" style={{ color: 'rgba(212,240,0,0.08)' }}>02</span>
          <div className="relative z-10">
            <p className="font-label text-[10px] tracking-[4px] uppercase mb-2" style={{ color: '#D4F000' }}>{t('Senior Mentor', 'Senior Mentor')}</p>
            <h3 className="font-heading text-4xl mb-4" style={{ color: '#F0EDE6' }}>MENTOR 02</h3>
            <p className="font-body text-sm mb-6 max-w-sm" style={{ color: '#BABABA' }}>
              {t(
                'Coming soon. We select mentors with exceptional track records and deep knowledge of our Advanced SMC methodology.',
                'Čoskoro. Vyberáme mentorov s výnimočnými výsledkami a hlbokými znalosťami našej pokročilej SMC metodológie.'
              )}
            </p>
            <span className="font-label text-[10px] tracking-[1px] uppercase px-3 py-1"
              style={{ background: 'rgba(255,255,255,0.06)', color: '#AAAAAA', border: '1px solid rgba(255,255,255,0.1)' }}>{t('Coming soon', 'Čoskoro')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
