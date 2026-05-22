import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import RatingsBar from './RatingsBar';

import { students, type Student } from '@/data/students';

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map(i => (
      <span key={i} style={{ color: i <= count ? '#D4F000' : 'rgba(255,255,255,0.1)', fontSize: 13 }}>★</span>
    ))}
  </div>
);

const Avatar = ({ s }: { s: Student }) => {
  const [err, setErr] = useState(false);
  return (
    <div
      style={{
        width: 48, height: 48, borderRadius: '50%',
        border: `2px solid ${s.accent}`,
        background: s.bgColor,
        overflow: 'hidden', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {!err ? (
        <img
          src={s.cert}
          alt={`${s.fullName} avatar`}
          loading="lazy"
          onError={() => setErr(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 16, color: s.textColor }}>
          {s.initials}
        </span>
      )}
    </div>
  );
};

const ReviewCard = ({ s }: { s: Student }) => {
  const { t, lang } = useLanguage();
  const isPro = s.tier === 'PRO';
  const badgeBg = isPro ? 'rgba(240,78,35,0.08)' : 'rgba(212,240,0,0.08)';
  const badgeBorder = isPro ? 'rgba(240,78,35,0.2)' : 'rgba(212,240,0,0.2)';
  const badgeColor = isPro ? '#F04E23' : '#D4F000';
  const badgeText = isPro
    ? t('✓ Education PRO — Group', '✓ Education PRO — Skupina')
    : t('✓ Education — Self Study', '✓ Education — Samoštúdium');

  return (
    <div
      className="reveal-card"
      style={{
        background: 'rgba(22,22,24,0.8)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 12,
        padding: 28,
        transition: 'transform 250ms, border-color 250ms',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'rgba(212,240,0,0.2)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Avatar s={s} />
        <div className="flex-1 min-w-0">
          <div style={{ fontFamily: 'Evolventa, sans-serif', fontSize: 14, fontWeight: 700, color: '#F0EDE6' }}>
            {s.firstName} {s.lastInitial}.
          </div>
          <div style={{ fontFamily: 'Jura, sans-serif', fontSize: 9, color: '#666666', marginTop: 2 }}>
            {s.flag} {s.country}
          </div>
        </div>
        <Stars count={s.stars} />
      </div>

      <div
        style={{
          display: 'inline-block',
          background: badgeBg,
          border: `1px solid ${badgeBorder}`,
          color: badgeColor,
          fontFamily: 'Jura, sans-serif',
          fontSize: 8,
          letterSpacing: '1px',
          padding: '4px 10px',
          borderRadius: 999,
          textTransform: 'uppercase',
        }}
      >
        {badgeText}
      </div>

      <p
        style={{
          fontFamily: 'Evolventa, sans-serif',
          fontSize: 13,
          color: '#BBBBBB',
          lineHeight: 1.75,
          margin: '16px 0',
        }}
      >
        {lang === 'en' ? s.reviewEN : s.reviewSK}
      </p>

      <div style={{ fontFamily: 'Jura, sans-serif', fontSize: 8, color: '#444444', letterSpacing: '1px', textTransform: 'uppercase' }}>
        {t('Verified purchase', 'Overený nákup')} · {lang === 'en' ? s.timeframeEN : s.timeframeSK}
      </div>
    </div>
  );
};

const ResultsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <RatingsBar />



      <div className="text-center mb-4 mt-16">
        <p className="font-label tracking-[0.15em] uppercase section-tag reveal-heading text-2xl" style={{ color: '#D4F000' }}>
          {t('Testimonials', 'Referencie')}
        </p>
      </div>
      <h2
        className="font-heading text-center mb-3 reveal-heading"
        style={{ color: '#F0EDE6', fontSize: 'clamp(40px, 7vw, 80px)' }}
      >
        {t('REAL REVIEWS FROM REAL STUDENTS', 'SKUTOČNÉ RECENZIE OD SKUTOČNÝCH ŠTUDENTOV')}
      </h2>
      <p
        className="text-center mb-4 mx-auto"
        style={{ fontFamily: 'Jura, sans-serif', fontSize: 10, color: '#555555', letterSpacing: '2px', textTransform: 'uppercase' }}
      >
        {t('Verified purchases · Unedited feedback', 'Overené nákupy · Neupravený feedback')}
      </p>
      <div className="text-center mb-12">
        <span
          style={{
            display: 'inline-block',
            background: 'rgba(212,240,0,0.06)',
            border: '1px solid rgba(212,240,0,0.15)',
            color: '#D4F000',
            fontFamily: 'Jura, sans-serif',
            fontSize: 9,
            padding: '6px 20px',
            borderRadius: 999,
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          {t('✓ All reviews verified by purchase', '✓ Všetky recenzie overené nákupom')}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-content">
        {students.map(s => <ReviewCard key={s.id} s={s} />)}
      </div>
    </section>
  );
};

export default ResultsSection;
