import { useLanguage } from '@/contexts/LanguageContext';

const MissionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading text-2xl" style={{ color: '#D4F000' }}>{t('Who we are', 'Kto sme')}</p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(48px, 8vw, 96px)' }}>
        {t('WE ARE A ', 'SME ')}<span style={{ WebkitTextStroke: '1px rgba(240,237,230,0.2)', color: 'transparent' }}>{t('MOVEMENT.', 'HNUTIE.')}</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-16 mb-16 reveal-content">
        <div className="gradient-border-left">
          <p className="font-heading text-3xl md:text-4xl leading-tight" style={{ color: '#F0EDE6', fontWeight: 700, maxWidth: '100%' }}>
            {t("We've seen every trading course out there. We know their weak spots.", "Videli sme každý trading kurz. Poznáme ich slabé miesta.")}
          </p>
        </div>
        <div className="space-y-6 font-body text-sm leading-relaxed" style={{ color: '#C4C4C4' }}>
          <p>{t(
            "Most courses sell you a lifestyle. We sell you a skillset. obsession.fx was built by traders who went through the noise, filtered out everything useless, and kept only what moves the needle.",
            "Väčšina kurzov ti predáva životný štýl. My ti predávame zručnosť. obsession.fx vznikol od traderov, ktorí prešli hlukom, odfiltrovali všetko zbytočné a nechali len to, čo naozaj funguje."
          )}</p>
          <p>{t(
            "We're at the beginning of our journey — and that's exactly why every single student gets our full attention. No big cohorts. No automated responses. Real feedback, real mentorship, real results being built right now.",
            "Sme na začiatku našej cesty — a práve preto každý študent dostáva našu plnú pozornosť. Žiadne veľké skupiny. Žiadne automatické odpovede. Skutočný feedback, skutočný mentoring, skutočné výsledky, ktoré sa budujú práve teraz."
          )}</p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
