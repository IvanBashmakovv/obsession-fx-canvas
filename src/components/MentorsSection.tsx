import { useLanguage } from '@/contexts/LanguageContext';

const MentorsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mentors" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <p className="text-primary font-label text-[10px] tracking-[4px] uppercase mb-4 section-tag reveal-heading">{t('Team', 'Tím')}</p>
      <h2 className="font-heading text-6xl md:text-7xl text-foreground mb-16 reveal-heading">{t('OUR MENTORS.', 'NAŠI MENTORI.')}</h2>

      <div className="grid md:grid-cols-2 gap-[1px] bg-border reveal-content">
        <div className="p-8 md:p-12 relative overflow-hidden reveal-card" style={{ background: '#1E1E20', transitionDelay: '0ms' }}>
          <span className="absolute top-4 right-6 font-heading text-[120px] leading-none select-none" style={{ color: 'rgba(240,78,35,0.15)' }}>01</span>
          <div className="relative z-10">
            <p className="font-label text-[10px] tracking-[4px] uppercase mb-2" style={{ color: '#D4F000' }}>{t('Founder · Head Mentor', 'Zakladateľ · Hlavný Mentor')}</p>
            <h3 className="font-heading text-4xl text-foreground mb-4">IVNB</h3>
            <p className="font-body text-sm text-[#AAAAAA] mb-6 max-w-sm">
              {t(
                'Creator of the obsession.fx methodology. Built and refined the Advanced SMC system through extensive backtesting across Forex, Indices, and Crypto markets.',
                'Tvorca metodológie obsession.fx. Vybudoval a zdokonalil systém pokročilého SMC rozsiahlym backtestovaním na Forex, Indexoch a Krypto trhoch.'
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              {['Forex', 'Indices', 'Crypto', 'SMC', 'Prop Trading'].map(tag => (
                <span key={tag} className="font-label text-[10px] tracking-[1px] uppercase px-3 py-1" style={{ background: '#252527', color: '#777777' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 md:p-12 relative overflow-hidden reveal-card" style={{ background: '#1E1E20', transitionDelay: '100ms' }}>
          <span className="absolute top-4 right-6 font-heading text-[120px] leading-none select-none" style={{ color: 'rgba(240,78,35,0.15)' }}>02</span>
          <div className="relative z-10">
            <p className="font-label text-[10px] tracking-[4px] uppercase mb-2" style={{ color: '#D4F000' }}>{t('Senior Mentor', 'Senior Mentor')}</p>
            <h3 className="font-heading text-4xl text-foreground mb-4">MENTOR 02</h3>
            <p className="font-body text-sm text-[#AAAAAA] mb-6 max-w-sm">
              {t(
                'Coming soon. We select mentors with exceptional track records and deep knowledge of our Advanced SMC methodology.',
                'Čoskoro. Vyberáme mentorov s výnimočnými výsledkami a hlbokými znalosťami našej pokročilej SMC metodológie.'
              )}
            </p>
            <span className="font-label text-[10px] tracking-[1px] uppercase px-3 py-1" style={{ background: '#252527', color: '#777777' }}>{t('Coming soon', 'Čoskoro')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
