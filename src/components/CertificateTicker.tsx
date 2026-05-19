import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { students, type Student } from '@/data/students';

const CertCard = ({ s }: { s: Student }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      style={{
        width: 220,
        flexShrink: 0,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(212,240,0,0.2)',
        borderLeft: '3px solid #D4F000',
        borderRadius: 8,
        padding: '10px 14px',
        marginRight: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}
    >
      <div
        style={{
          width: 52,
          height: 40,
          borderRadius: 4,
          border: '1px solid rgba(212,240,0,0.3)',
          background: 'rgba(212,240,0,0.08)',
          flexShrink: 0,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!imgError ? (
          <img
            src={s.cert}
            alt={`${s.fullName} payout certificate`}
            loading="lazy"
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4F000" strokeWidth="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        )}
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontFamily: 'Evolventa, sans-serif', fontSize: 13, fontWeight: 700, color: '#F0EDE6', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {s.firstName} {s.lastInitial}. · {s.amount}
        </div>
        <div style={{ fontFamily: 'Jura, sans-serif', fontSize: 9, color: '#777777', letterSpacing: '1px', textTransform: 'uppercase', marginTop: 2 }}>
          {s.country} {s.flag} · {s.firm}
        </div>
      </div>
    </div>
  );
};

const CertificateTicker = () => {
  const { t } = useLanguage();
  const row1 = [...students, ...students];
  const reversed = [...students].reverse();
  const row2 = [...reversed, ...reversed];

  return (
    <div className="my-12 cert-ticker-wrapper">
      <p
        className="text-center mb-4"
        style={{ fontFamily: 'Jura, sans-serif', fontSize: 9, color: '#555555', letterSpacing: '3px', textTransform: 'uppercase' }}
      >
        {t('Verified Student Payouts', 'Overené Výplaty Študentov')}
      </p>
      <div className="cert-ticker-mask overflow-hidden">
        <div className="cert-ticker-row cert-ticker-row-1 mb-4">
          {row1.map((s, i) => <CertCard key={`r1-${i}`} s={s} />)}
        </div>
        <div className="cert-ticker-row cert-ticker-row-2">
          {row2.map((s, i) => <CertCard key={`r2-${i}`} s={s} />)}
        </div>
      </div>
    </div>
  );
};

export default CertificateTicker;
