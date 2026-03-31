import { useLanguage } from '@/contexts/LanguageContext';

const TickerBar = () => {
  const { t } = useLanguage();
  const text = t(
    "OBSESSION BEATS TALENT ✦ ADVANCED SMC ✦ 1000+ HOURS TESTED ✦ 4 TRADING STRATEGIES ✦ INTRADAY · SWING · DYNAMIC · STATIC ✦ PROP CHALLENGE SUPPORT ✦ ",
    "POSADNUTOSŤ PORÁŽA TALENT ✦ POKROČILÉ SMC ✦ 1000+ HODÍN TESTOVANÉ ✦ 4 OBCHODNÉ STRATÉGIE ✦ INTRADAY · SWING · DYNAMIC · STATIC ✦ PODPORA PROP VÝZIEV ✦ "
  );

  return (
    <div className="overflow-hidden whitespace-nowrap" style={{ background: '#D4F000' }}>
      <div className="ticker-scroll inline-flex">
        <span className="font-body text-[10px] font-bold tracking-[3px] uppercase py-2 px-4" style={{ color: '#0E0E0F' }}>
          {text}{text}{text}{text}
        </span>
      </div>
    </div>
  );
};

export default TickerBar;
