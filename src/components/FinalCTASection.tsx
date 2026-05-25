import { useLanguage } from '@/contexts/LanguageContext';

const FinalCTASection = () => {
  const { t } = useLanguage();
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="final-cta" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <div
        className="glass-card p-12 md:p-20 text-center relative overflow-hidden reveal-content"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(212,240,0,0.10) 0%, rgba(107,95,212,0.06) 40%, rgba(22,22,24,0.85) 80%)',
          borderColor: 'rgba(212,240,0,0.25)',
        }}
      >
        <p className="font-label tracking-[0.15em] uppercase mb-6 text-xs" style={{ color: '#D4F000' }}>
          {t('Ready when you are', 'Kedy budeš pripravený')}
        </p>
        <h2 className="font-heading mb-6" style={{ color: '#F0EDE6', fontSize: 'clamp(48px, 9vw, 112px)', lineHeight: 0.95 }}>
          {t('STOP GUESSING.', 'PRESTAŇ HÁDAŤ.')}
          <br />
          <span style={{ color: '#D4F000' }}>{t('START EXECUTING.', 'ZAČNI EXEKVOVAŤ.')}</span>
        </h2>
        <p className="font-body text-base leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#BABABA' }}>
          {t(
            'Join Obsession FX and build a trading process based on structure, risk control and discipline.',
            'Pridaj sa do Obsession FX a postav si obchodný proces na štruktúre, kontrole rizika a disciplíne.'
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('#formats')}
            className="btn-primary-lift font-body text-xs font-bold tracking-[0.15em] uppercase px-10 py-4 transition-all min-h-[48px]"
            style={{ background: '#D4F000', color: '#0E0E0F', borderRadius: '12px' }}
          >
            {t('START LEARNING →', 'ZAČAŤ UČENIE →')}
          </button>
          <button
            onClick={() => scrollTo('#program')}
            className="btn-ghost-lift font-body text-xs font-bold tracking-[0.15em] uppercase px-10 py-4 transition-all min-h-[48px]"
            style={{ border: '1px solid rgba(240,237,230,0.25)', color: '#F0EDE6', background: 'transparent', borderRadius: '12px' }}
          >
            {t('VIEW PROGRAM', 'POZRI PROGRAM')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
