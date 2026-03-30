import { useLanguage } from '@/contexts/LanguageContext';

const MissionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <p className="text-primary font-label text-[10px] tracking-[4px] uppercase mb-4 section-tag reveal-heading">{t('Who we are', 'Kto sme')}</p>
      <h2 className="font-heading text-6xl md:text-7xl text-foreground mb-16 reveal-heading">
        {t('WE ARE A ', 'SME ')}<span style={{ WebkitTextStroke: '1px #2E2E30', color: 'transparent' }}>{t('MOVEMENT.', 'HNUTIE.')}</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 mb-16 reveal-content">
        <div className="gradient-border-left">
          <p className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
            {t("\"We've seen every trading course out there. We know their weak spots.\"", '"Videli sme každý trading kurz. Poznáme ich slabé miesta."')}
          </p>
        </div>
        <div className="space-y-4 font-body text-sm text-[#AAAAAA] leading-relaxed">
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
