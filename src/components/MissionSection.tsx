import { useLanguage } from '@/contexts/LanguageContext';

const MissionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="text-primary font-label text-[10px] tracking-[4px] uppercase mb-4 section-tag reveal-heading">{t('Who we are', 'Kto sme')}</p>
      <h2 className="font-heading text-6xl md:text-7xl text-foreground mb-16 reveal-heading">
        {t('WE ARE A ', 'SME ')}<span style={{ WebkitTextStroke: '1px #2A2A2A', color: 'transparent' }}>{t('MOVEMENT.', 'HNUTIE.')}</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 mb-16 reveal-content">
        <div className="gradient-border-left">
          <p className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
            {t('"Trading is not what we do. It\'s who we are."', '"Trading nie je to, čo robíme. Je to, kto sme."')}
          </p>
        </div>
        <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
          <p>{t(
            'obsession.fx is built on Advanced Smart Money Concepts — a methodology refined through 1000+ hours of real market testing across Forex, Indices, and Crypto.',
            'obsession.fx je postavený na pokročilých Smart Money konceptoch — metodológii overenej 1000+ hodinami reálneho testovania na Forex, Indexoch a Krypto.'
          )}</p>
          <p>{t(
            'We don\'t teach indicators. We teach you how the market truly works — from liquidity engineering to institutional order flow. Every lesson is battle-tested.',
            'Neučíme indikátory. Učíme vás, ako trh skutočne funguje — od inžinierstva likvidity po inštitucionálny order flow. Každá lekcia je overená v praxi.'
          )}</p>
        </div>
      </div>

      <div className="bg-card border border-border p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 banner-border-animate reveal-content">
        <div>
          <h3 className="font-heading text-2xl text-foreground mb-2">{t('BECOME A MENTOR', 'STAŇ SA MENTOROM')}</h3>
          <p className="font-body text-sm text-subtle max-w-lg">
            {t(
              'Are you an experienced trader with a proven track record? We\'re always looking for exceptional talent to join the obsession.fx mentor team.',
              'Si skúsený trader s preukázateľnými výsledkami? Neustále hľadáme výnimočné talenty do nášho tímu mentorov.'
            )}
          </p>
        </div>
        <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="border border-primary text-primary font-body text-xs font-bold tracking-[2px] uppercase px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all whitespace-nowrap">
          {t('APPLY NOW →', 'PRIHLÁSIŤ SA →')}
        </button>
      </div>
    </section>
  );
};

export default MissionSection;
