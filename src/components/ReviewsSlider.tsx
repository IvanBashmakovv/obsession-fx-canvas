import { useLanguage } from '@/contexts/LanguageContext';

interface Review {
  name: string; age: number;
  prof_en: string; prof_sk: string;
  country: string; initial: string;
  avatar: string;
  text_en: string; text_sk: string;
  size?: 'large' | 'small';
  verified?: boolean;
  accent?: string;
}

const reviews: Review[] = [
  {
    name: 'Martin', age: 24, prof_en: 'IT Developer', prof_sk: 'IT Developer', country: 'SK',
    initial: 'M', avatar: 'linear-gradient(135deg,#D0FF00,#8FB300)', accent: '#D0FF00',
    text_en: 'I always thought trading was for finance people. Then I found obsession.fx. Free course, no pressure, no sales pitch. Just solid material. 3 weeks in and I understand market structure better than after two paid courses I bought last year.',
    text_sk: 'Vždy som si myslel že trading je pre finančných odborníkov. Potom som našiel obsession.fx. Po 3 týždňoch rozumiem trhovej štruktúre lepšie než po dvoch platených kurzoch z minulého roka.',
    size: 'large', verified: true,
  },
  {
    name: 'Lucia', age: 28, prof_en: 'Teacher', prof_sk: 'Učiteľka', country: 'SK',
    initial: 'L', avatar: 'linear-gradient(135deg,#8116E0,#4A0A8A)', accent: '#8116E0',
    text_en: "I'm a teacher. I never thought I could trade. After 10 lessons I realized I was wrong.",
    text_sk: 'Som učiteľka. Nikdy som si nemyslela že by som mohla obchodovať. Mýlila som sa.',
    verified: true,
  },
  {
    name: 'Jakub', age: 19, prof_en: 'Student', prof_sk: 'Študent', country: 'CZ',
    initial: 'J', avatar: 'linear-gradient(135deg,#26A5E4,#1565C0)',
    text_en: "I'm 19. When I saw obsession.fx was free I was skeptical. This is better than paid stuff.",
    text_sk: 'Mám 19. Bol som skeptický. Toto je lepšie než platené veci.',
  },
  {
    name: 'Petra', age: 32, prof_en: 'Accountant', prof_sk: 'Účtovníčka', country: 'SK',
    initial: 'P', avatar: 'linear-gradient(135deg,#F04E23,#A02810)', accent: '#F04E23',
    text_en: 'My husband and I both went through the material. Complete beginners. The sessions module alone changed how I think about timing entries. Nobody explained this in the two paid courses I bought before.',
    text_sk: 'Manžel a ja sme obaja prešli materiálom. Modul o reláciách zmenil môj pohľad na vstupy.',
    size: 'large', verified: true,
  },
  {
    name: 'David', age: 26, prof_en: 'Freelancer', prof_sk: 'Freelancer', country: 'CZ',
    initial: 'D', avatar: 'linear-gradient(135deg,#FF2D95,#8A0050)',
    text_en: 'What got me was the honesty. No Lamborghinis. Just teach you and let you decide.',
    text_sk: 'Zaujala ma úprimnosť. Žiadne Lamborghini.',
    verified: true,
  },
  {
    name: 'Tomáš', age: 22, prof_en: 'Warehouse', prof_sk: 'Skladník', country: 'SK',
    initial: 'T', avatar: 'linear-gradient(135deg,#8116E0,#D0FF00)',
    text_en: 'I work shifts. I do lessons between 10pm and midnight. Written for normal people.',
    text_sk: 'Pracujem na zmeny. Materiál pre normálnych ľudí.',
  },
  {
    name: 'Natalia', age: 30, prof_en: 'Nurse', prof_sk: 'Sestra', country: 'SK',
    initial: 'N', avatar: 'linear-gradient(135deg,#FF2D95,#D0FF00)',
    text_en: 'The psychology module hit different. Fear, FOMO — skills I already have from nursing.',
    text_sk: 'Psychologický modul zasiahol inak. Zručnosti zo zdravotníctva.',
    verified: true,
  },
];

const ReviewsSlider = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="reviews" className="max-w-[1280px] mx-auto relative z-10" style={{ padding: '100px 56px' }}>
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: 11 }}>
        {t('REAL PEOPLE. REAL REACTIONS.', 'SKUTOČNÍ ĽUDIA. SKUTOČNÉ REAKCIE.')}
      </p>
      <h2 className="font-heading mb-12 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
        {t('What people ', 'Čo ľudia ')}
        <span style={{ background: 'linear-gradient(90deg,#D0FF00,#8116E0)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{t('actually say.', 'naozaj hovoria.')}</span>
      </h2>

      {/* Rating summary row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 reveal-content">
        <div style={{
          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: 16, padding: 24, textAlign: 'center', opacity: 0.5,
        }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#666', letterSpacing: '0.1em' }}>⭐ TRUSTPILOT</div>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: 36, color: '#888', marginTop: 6 }}>—</div>
          <div style={{ fontFamily: 'Inter', fontSize: 10, color: '#555' }}>{t('Coming soon', 'Čoskoro')}</div>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, rgba(208,255,0,0.1), rgba(208,255,0,0.02))',
          border: '1px solid rgba(208,255,0,0.3)',
          borderRadius: 16, padding: 24, textAlign: 'center',
          boxShadow: '0 0 60px rgba(208,255,0,0.08)',
        }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#D0FF00', letterSpacing: '0.1em' }}>⭐ obsession.fx</div>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: 48, color: '#D0FF00', marginTop: 4, lineHeight: 1 }}>5.0</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
            {['#D0FF00','#8116E0','#26A5E4','#F04E23','#FF2D95'].map((c,i) => (
              <div key={i} style={{ width: 24, height: 24, borderRadius: '50%', background: `linear-gradient(135deg,${c},#000)`, marginLeft: i === 0 ? 0 : -8, border: '2px solid #0E0E0F' }} />
            ))}
          </div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: 16, padding: 24, textAlign: 'center', opacity: 0.5,
        }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#666', letterSpacing: '0.1em' }}>⭐ GOOGLE</div>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: 36, color: '#888', marginTop: 6 }}>—</div>
          <div style={{ fontFamily: 'Inter', fontSize: 10, color: '#555' }}>{t('Coming soon', 'Čoskoro')}</div>
        </div>
      </div>

      {/* Bento grid */}
      <div className="reveal-content" style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gridAutoFlow: 'dense', gap: 16,
      }}>
        {reviews.map((r, i) => (
          <div key={i} className="rs-card-hover" style={{
            gridColumn: r.size === 'large' ? 'span 2' : 'span 1',
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid ${r.accent ? `${r.accent}33` : 'rgba(255,255,255,0.07)'}`,
            borderTop: r.accent ? `2px solid ${r.accent}` : '1px solid rgba(255,255,255,0.07)',
            borderRadius: 16, padding: 28, position: 'relative',
            transition: 'all 0.3s ease',
          }}>
            {r.verified && (
              <div style={{
                position: 'absolute', top: 16, right: 16,
                width: 22, height: 22, borderRadius: '50%',
                background: '#1DA1F2', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#FFF', fontSize: 12, fontWeight: 700,
              }}>✓</div>
            )}
            <div style={{ color: '#D0FF00', fontSize: 13, letterSpacing: 2, marginBottom: 12 }}>★★★★★</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%', background: r.avatar,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Bebas Neue', fontSize: 20, color: '#FFF',
                border: '2px solid rgba(255,255,255,0.1)',
              }}>{r.initial}</div>
              <div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 700, color: '#FEFFFC' }}>{r.name}, {r.age}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#666' }}>
                  {lang === 'en' ? r.prof_en : r.prof_sk} · {r.country}
                </div>
              </div>
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: 13, color: '#BBB', lineHeight: 1.7 }}>
              {lang === 'en' ? r.text_en : r.text_sk}
            </p>
          </div>
        ))}

        {/* Video placeholder */}
        <div style={{
          gridColumn: 'span 1',
          background: 'linear-gradient(135deg, rgba(129,22,224,0.1), rgba(208,255,0,0.05))',
          border: '1px solid rgba(208,255,0,0.2)',
          borderRadius: 16, padding: 28,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          minHeight: 200, boxShadow: '0 0 60px rgba(208,255,0,0.05)',
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'linear-gradient(135deg,#D0FF00,#8116E0)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, color: '#0E0E0F', marginBottom: 14,
            boxShadow: '0 0 30px rgba(208,255,0,0.4)',
          }}>▶</div>
          <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#FEFFFC', textAlign: 'center' }}>
            {t('Video testimonials', 'Video referencie')}
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#888', marginTop: 4 }}>
            {t('Coming soon', 'Čoskoro')}
          </div>
        </div>
      </div>

      <style>{`
        .rs-card-hover:hover {
          transform: scale(1.02);
          border-color: rgba(208,255,0,0.4) !important;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3), 0 0 40px rgba(208,255,0,0.08);
        }
      `}</style>
    </section>
  );
};

export default ReviewsSlider;
