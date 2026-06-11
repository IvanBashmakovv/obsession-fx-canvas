import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Review {
  name: string; age: number;
  prof_en: string; prof_sk: string;
  country: string; initial: string;
  avatarBg: string; avatarColor: string;
  text_en: string; text_sk: string;
}

const reviews: Review[] = [
  {
    name: 'Martin', age: 24, prof_en: 'IT Developer', prof_sk: 'IT Developer', country: 'Slovakia',
    initial: 'M', avatarBg: '#1a2a1a', avatarColor: '#D0FF00',
    text_en: 'I always thought trading was for finance people. Then I found obsession.fx. Free course, no pressure, no sales pitch. Just solid material. 3 weeks in and I understand market structure better than after two paid courses I bought last year.',
    text_sk: 'Vždy som si myslel že trading je pre finančných odborníkov. Potom som našiel obsession.fx. Bezplatný kurz, žiadny tlak. Len solídny materiál. Po 3 týždňoch rozumiem trhovej štruktúre lepšie než po dvoch platených kurzoch z minulého roka.',
  },
  {
    name: 'Lucia', age: 28, prof_en: 'Teacher', prof_sk: 'Učiteľka', country: 'Slovakia',
    initial: 'L', avatarBg: '#1a0a2a', avatarColor: '#8116E0',
    text_en: "I'm a teacher. My salary is fixed. I've been looking for something to do in my free time that builds a real skill. I never thought I could trade. After the first 10 lessons I realized I was wrong.",
    text_sk: 'Som učiteľka. Môj plat je fixný. Hľadala som niečo čo by som robila vo voľnom čase a rozvíjalo reálnu zručnosť. Nikdy som si nemyslela že by som mohla obchodovať. Po prvých 10 lekciách som si uvedomila že som sa mýlila.',
  },
  {
    name: 'Jakub', age: 19, prof_en: 'Student', prof_sk: 'Študent', country: 'Czech Republic',
    initial: 'J', avatarBg: '#0a1a2a', avatarColor: '#26A5E4',
    text_en: "I'm 19. No money for paid courses. When I saw obsession.fx was completely free I was skeptical. This is not garbage. This is better than paid stuff I've seen my friends waste money on.",
    text_sk: 'Mám 19 rokov. Žiadne peniaze na platené kurzy. Bol som skeptický. Toto nie je odpad. Je to lepšie než platené veci za ktoré som videl kamarátov míňať peniaze.',
  },
  {
    name: 'Petra', age: 32, prof_en: 'Accountant', prof_sk: 'Účtovníčka', country: 'Slovakia',
    initial: 'P', avatarBg: '#2a1a0a', avatarColor: '#F04E23',
    text_en: 'My husband and I both went through the material. Complete beginners. The sessions module alone changed how I think about timing entries. Nobody explained this in the two courses I paid for before.',
    text_sk: 'Môj manžel a ja sme obaja prešli materiálom. Úplní začiatočníci. Modul o reláciách sám o sebe zmenil môj pohľad na načasovanie vstupov.',
  },
  {
    name: 'David', age: 26, prof_en: 'Freelancer', prof_sk: 'Freelancer', country: 'Czech Republic',
    initial: 'D', avatarBg: '#0a2a1a', avatarColor: '#D0FF00',
    text_en: 'What got me was the honesty. No Lamborghinis. No fake promises. Just teach you the skill and let you decide. That alone made me trust them more than anyone else in this space.',
    text_sk: 'Zaujala ma úprimnosť. Žiadne Lamborghini. Žiadne falošné sľuby. Len ťa učia zručnosť a nechávajú ťa rozhodnúť.',
  },
  {
    name: 'Tomáš', age: 22, prof_en: 'Warehouse Worker', prof_sk: 'Skladník', country: 'Slovakia',
    initial: 'T', avatarBg: '#1a1a2a', avatarColor: '#8116E0',
    text_en: 'I work shifts. I have time between 10pm and midnight every day. Been doing lessons in that time for a month. The material is written for normal people. Not finance grads.',
    text_sk: 'Pracujem na zmeny. Mám čas medzi 22:00 a polnocou každý deň. Robím lekcie v tom čase mesiac. Materiál je napísaný pre normálnych ľudí.',
  },
  {
    name: 'Natalia', age: 30, prof_en: 'Nurse', prof_sk: 'Zdravotná sestra', country: 'Slovakia',
    initial: 'N', avatarBg: '#2a0a1a', avatarColor: '#FF2D95',
    text_en: 'The psychology module hit different. Fear, FOMO, emotional control. I realized these are skills I already have from nursing. Trading just needs me to apply them to charts.',
    text_sk: 'Psychologický modul zasiahol inak. Strach, FOMO, emocionálna kontrola. Uvedomila som si že tieto zručnosti už mám zo zdravotníctva.',
  },
  {
    name: 'Filip', age: 17, prof_en: 'High School Student', prof_sk: 'Stredoškolák', country: 'Czech Republic',
    initial: 'F', avatarBg: '#0a1a1a', avatarColor: '#D0FF00',
    text_en: "I'm in high school and already learning this. My economics teacher doesn't know half of what's in this course. Best part? Free. I sent it to 5 friends.",
    text_sk: 'Som na strednej škole a už sa to učím. Môj učiteľ ekonómie nevie ani polovicu z toho čo je v tomto kurze. Najlepšie? Zadarmo.',
  },
  {
    name: 'Miroslav', age: 45, prof_en: 'Truck Driver', prof_sk: 'Šofér', country: 'Slovakia',
    initial: 'M', avatarBg: '#1a1a0a', avatarColor: '#F04E23',
    text_en: "I drive trucks. I listen to the material on long routes. I'm not quitting my job tomorrow but for the first time I feel like I'm actually building something for myself.",
    text_sk: 'Šoférujem kamióny. Počúvam materiál na dlhých trasách. Nezanechám prácu zajtra ale po prvý raz cítim že skutočne budujeme niečo pre seba.',
  },
];

const ReviewsSlider = () => {
  const { t, lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const maxIndex = reviews.length - 1;

  useEffect(() => {
    if (paused) return;
    const i = setInterval(() => setIndex(prev => (prev + 1) % reviews.length), 4000);
    return () => clearInterval(i);
  }, [paused]);

  const next = () => setIndex(prev => (prev + 1) % reviews.length);
  const prev = () => setIndex(p => (p - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="max-w-[1280px] mx-auto relative z-10" style={{ padding: '100px 56px' }}>
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: '11px' }}>
        {t('WHAT PEOPLE SAY', 'ČO HOVORIA ĽUDIA')}
      </p>
      <h2 className="font-heading mb-3 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
        {t('Real people. Real reactions.', 'Skutoční ľudia. Skutočné reakcie.')}
      </h2>
      <p className="mb-12 reveal-heading" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#666666' }}>
        {t('About the free course — unfiltered', 'O bezplatnom kurze — neupravené')}
      </p>

      <div
        className="relative reveal-content"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            display: 'flex', gap: '24px',
            transform: `translateX(calc(-${index} * (100% / 3) - ${index} * 8px))`,
            transition: 'transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}>
            {reviews.map((r, i) => (
              <div key={i} style={{
                flex: '0 0 calc((100% - 48px) / 3)',
                minWidth: '320px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px', padding: '32px',
              }} className="rs-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ color: '#D0FF00', fontSize: '14px', letterSpacing: '2px' }}>★★★★★</div>
                  <span style={{
                    background: 'rgba(208,255,0,0.06)', border: '1px solid rgba(208,255,0,0.15)',
                    color: '#D0FF00', fontFamily: 'Inter, sans-serif', fontSize: '9px',
                    padding: '3px 10px', borderRadius: '20px',
                  }}>
                    {lang === 'en' ? r.prof_en : r.prof_sk} · {r.country}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: r.avatarBg, color: r.avatarColor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Bebas Neue, sans-serif', fontSize: '22px',
                  }}>{r.initial}</div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#FEFFFC' }}>{r.name}, {r.age}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#555555' }}>
                      {lang === 'en' ? r.prof_en : r.prof_sk} · {r.country}
                    </div>
                  </div>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#AAAAAA', lineHeight: 1.75, marginTop: '16px' }}>
                  {lang === 'en' ? r.text_en : r.text_sk}
                </p>
                <p style={{ fontFamily: 'Jura, sans-serif', fontSize: '8px', color: '#333333', marginTop: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  {t('Verified free course student', 'Overený študent kurzu')}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button onClick={prev} aria-label="prev" style={{
          position: 'absolute', top: '50%', left: '-20px', transform: 'translateY(-50%)',
          width: '40px', height: '40px', borderRadius: '50%',
          background: 'rgba(14,14,15,0.9)', border: '1px solid rgba(208,255,0,0.3)',
          color: '#D0FF00', cursor: 'pointer', fontSize: '18px',
        }}>‹</button>
        <button onClick={next} aria-label="next" style={{
          position: 'absolute', top: '50%', right: '-20px', transform: 'translateY(-50%)',
          width: '40px', height: '40px', borderRadius: '50%',
          background: 'rgba(14,14,15,0.9)', border: '1px solid rgba(208,255,0,0.3)',
          color: '#D0FF00', cursor: 'pointer', fontSize: '18px',
        }}>›</button>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`go ${i}`} style={{
              width: i === index ? '24px' : '8px', height: '8px',
              borderRadius: '4px', border: 'none',
              background: i === index ? '#D0FF00' : 'rgba(255,255,255,0.15)',
              cursor: 'pointer', transition: 'all 0.3s',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
