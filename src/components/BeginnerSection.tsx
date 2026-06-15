import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, GraduationCap, Users2, TrendingUp } from 'lucide-react';

const BeginnerSection = () => {
  const { t } = useLanguage();

  const points = [
    {
      Icon: GraduationCap,
      title: t('Never traded before?', 'Nikdy si neobchodoval?'),
      text: t(
        'Good. The course starts from zero — what a chart is, how markets actually move, and why most beginners lose money before they even start.',
        'Dobre. Kurz začína od nuly — čo je graf, ako sa trhy skutočne hýbu a prečo väčšina začiatočníkov stratí peniaze ešte skôr, než začnú.'
      ),
    },
    {
      Icon: Sparkles,
      title: t('No jargon, no shortcuts', 'Žiadne žargóny, žiadne skratky'),
      text: t(
        'Every concept is explained in plain language first, then connected to the real strategy. If you understand it, you can use it — that simple.',
        'Každý koncept je najprv vysvetlený jednoducho, potom prepojený so skutočnou strategiou. Ak to chápeš, vieš to použiť.'
      ),
    },
    {
      Icon: Users2,
      title: t("You're not doing this alone", 'Nie si v tom sám'),
      text: t(
        'The community is full of people who started exactly where you are. Ask questions, share screenshots, get feedback — every single day.',
        'Komunita je plná ľudí, ktorí začínali presne tam, kde ty teraz. Pýtaj sa, zdieľaj screenshoty, dostávaj feedback — každý deň.'
      ),
    },
    {
      Icon: TrendingUp,
      title: t('Progress, not perfection', 'Pokrok, nie perfekcia'),
      text: t(
        'Nobody expects you to be profitable in week one. The goal is that every week you understand the markets a little better than the last.',
        'Nikto nečaká, že budeš ziskový v prvom týždni. Cieľom je, aby si každý týždeň rozumel trhom o kúsok lepšie.'
      ),
    },
  ];

  return (
    <section id="for-beginners" className="max-w-[1280px] mx-auto relative z-10" style={{ padding: '80px 56px' }}>
      <div className="reveal-content" style={{
        background: 'rgba(208,255,0,0.04)',
        border: '1px solid rgba(208,255,0,0.12)',
        borderRadius: 24,
        padding: 'clamp(32px, 5vw, 64px)',
      }}>
        <div className="tag tag-accent mb-6" style={{ display: 'inline-flex' }}>
          {t('NEW TO TRADING?', 'NOVÝ V TRADINGU?')}
        </div>

        <h2 className="font-heading mb-6" style={{ color: '#FEFFFC', fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.05, maxWidth: 720 }}>
          {t('You don\u2019t need to know ', 'Nemusíš vedieť ')}
          <span style={{ color: '#D0FF00' }}>{t('anything', 'nič')}</span>
          {t(' to start.', ', aby si začal.')}
        </h2>

        <p className="font-body mb-12" style={{ color: '#AAAAAA', fontSize: 16, maxWidth: 640, lineHeight: 1.7 }}>
          {t(
            'Most people never start trading because it looks complicated from the outside. It isn\u2019t — once someone explains it properly. That\u2019s the entire point of obsession.fx.',
            'Väčšina ľudí nikdy nezačne obchodovať, pretože to z vonku vyzerá komplikovane. Nie je to tak — ak to niekto vysvetlí poriadne. To je celý zmysel obsession.fx.'
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div key={i} className="reveal-card" style={{ display: 'flex', gap: 16, transitionDelay: `${i * 60}ms` }}>
              <div style={{
                flexShrink: 0, width: 44, height: 44, borderRadius: 12,
                background: 'rgba(208,255,0,0.1)', border: '1px solid rgba(208,255,0,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <p.Icon size={20} color="#D0FF00" />
              </div>
              <div>
                <h3 className="font-heading mb-2" style={{ color: '#FEFFFC', fontSize: 20 }}>
                  {p.title}
                </h3>
                <p className="font-body" style={{ color: '#999', fontSize: 14, lineHeight: 1.7 }}>
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeginnerSection;

