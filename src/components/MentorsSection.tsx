import { useLanguage } from '@/contexts/LanguageContext';

const MentorsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mentors" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="text-primary font-label text-[10px] tracking-[4px] uppercase mb-4 section-tag reveal-heading">{t('Team', 'Tím')}</p>
      <h2 className="font-heading text-6xl md:text-7xl text-foreground mb-16 reveal-heading">{t('OUR MENTORS.', 'NAŠI MENTORI.')}</h2>

      <div className="grid md:grid-cols-2 gap-[1px] bg-border reveal-content">
        <div className="bg-background p-8 md:p-12 relative overflow-hidden reveal-card" style={{ transitionDelay: '0ms' }}>
          <span className="absolute top-4 right-6 font-heading text-[120px] leading-none text-secondary select-none">01</span>
          <div className="relative z-10">
            <p className="text-primary font-label text-[10px] tracking-[4px] uppercase mb-2">{t('Founder · Head Mentor', 'Zakladateľ · Hlavný Mentor')}</p>
            <h3 className="font-heading text-4xl text-foreground mb-4">IVAN BASHMAKOV</h3>
            <p className="font-body text-sm text-muted-foreground mb-6 max-w-sm">
              {t(
                'Creator of the obsession.fx methodology. 1000+ hours of backtesting, multiple funded accounts. Specializes in Advanced SMC across Forex, Indices, and Crypto markets.',
                'Tvorca metodológie obsession.fx. 1000+ hodín backtestovania, viacero fundovaných účtov. Špecializuje sa na pokročilé SMC na Forex, Indexoch a Krypto trhoch.'
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              {['Forex', 'Indices', 'Crypto', 'SMC', 'Prop Trading'].map(tag => (
                <span key={tag} className="bg-secondary text-label font-label text-[10px] tracking-[1px] uppercase px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-background p-8 md:p-12 relative overflow-hidden reveal-card" style={{ transitionDelay: '100ms' }}>
          <span className="absolute top-4 right-6 font-heading text-[120px] leading-none text-secondary select-none">02</span>
          <div className="relative z-10">
            <p className="text-primary font-label text-[10px] tracking-[4px] uppercase mb-2">{t('Senior Mentor', 'Senior Mentor')}</p>
            <h3 className="font-heading text-4xl text-foreground mb-4">MENTOR 02</h3>
            <p className="font-body text-sm text-muted-foreground mb-6 max-w-sm">
              {t(
                'Coming soon. We select mentors with exceptional track records and deep knowledge of our Advanced SMC methodology.',
                'Čoskoro. Vyberáme mentorov s výnimočnými výsledkami a hlbokými znalosťami našej pokročilej SMC metodológie.'
              )}
            </p>
            <span className="bg-secondary text-label font-label text-[10px] tracking-[1px] uppercase px-3 py-1">{t('Coming soon', 'Čoskoro')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
