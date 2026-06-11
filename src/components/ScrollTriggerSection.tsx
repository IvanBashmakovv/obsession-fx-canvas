import { useLanguage } from '@/contexts/LanguageContext';

const ScrollTriggerSection = () => {
  const { t } = useLanguage();
  const text = t(
    'WHILE YOU READ THIS — SOMEONE JUST COMPLETED THEIR FIRST LESSON — SOMEONE JUST UNDERSTOOD LIQUIDITY — SOMEONE JUST GOT ONE STEP CLOSER TO FUNDED — ',
    'KÝM TOTO ČÍTAŠ — NIEKTO PRÁVE DOKONČIL PRVÚ LEKCIU — NIEKTO PRÁVE POCHOPIL LIKVIDITU — NIEKTO SA PRÁVE PRIBLÍŽIL K FUNDED — '
  );

  return (
    <div style={{ height: '120px', overflow: 'hidden', display: 'flex', alignItems: 'center', position: 'relative' }} aria-hidden="true">
      <style>{`
        @keyframes stScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .st-scroll { display: inline-flex; white-space: nowrap; animation: stScroll 30s linear infinite; }
      `}</style>
      <div className="st-scroll">
        <span style={{
          fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(60px, 8vw, 100px)',
          color: 'rgba(208,255,0,0.06)', pointerEvents: 'none', userSelect: 'none',
          paddingRight: '40px',
        }}>{text}{text}</span>
        <span style={{
          fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(60px, 8vw, 100px)',
          color: 'rgba(208,255,0,0.06)', pointerEvents: 'none', userSelect: 'none',
          paddingRight: '40px',
        }}>{text}{text}</span>
      </div>
    </div>
  );
};

export default ScrollTriggerSection;
