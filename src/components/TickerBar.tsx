import { useLanguage } from '@/contexts/LanguageContext';

const TickerBar = () => {
  const { t } = useLanguage();
  const text = t(
    'FREE TRADING COURSE ✦ JOIN THE MOVEMENT ✦ NO CREDIT CARD ✦ NO GURU BS ✦ OBSESSION BEATS TALENT ✦ FREE FOR EVERYONE ✦ ',
    'BEZPLATNÝ TRADING KURZ ✦ PRIDAJ SA K HNUTIU ✦ ŽIADNA KARTA ✦ ŽIADNE GURU ✦ POSADNUTOSŤ PORÁŽA TALENT ✦ ZADARMO PRE VŠETKÝCH ✦ '
  );

  return (
    <div className="overflow-hidden whitespace-nowrap" style={{ background: '#D0FF00' }}>
      <div className="ticker-scroll inline-flex">
        <span
          className="py-2 px-4"
          style={{
            fontFamily: 'Jura, sans-serif',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '3px',
            color: '#000000',
            textTransform: 'uppercase',
          }}
        >
          {text}{text}{text}{text}
        </span>
      </div>
    </div>
  );
};

export default TickerBar;
