import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LeadModal from './LeadModal';

const TwoProductsSection = () => {
  const { t, lang } = useLanguage();
  const [modal, setModal] = useState<'education' | 'contact' | null>(null);

  const courseFeatures = t(
    'Market Structure & Liquidity|Order Blocks & Fair Value Gaps|Sessions & Timing|Risk Management Basics|Your first trading framework',
    'Trhová štruktúra a likvidita|Order Blocks a Fair Value Gaps|Relácie a načasovanie|Základy risk manažmentu|Tvoj prvý obchodný rámec'
  ).split('|');

  const communityFeatures = t(
    '📊 Morning Calls — 3x per week|🔴 Live Trading Sessions|💬 Mentor Support — ask anything|📈 Daily Market Analysis|🎓 Q&A Sessions|👥 Community Chat',
    '📊 Ranné hovory — 3x týždenne|🔴 Živé obchodné sedenia|💬 Podpora mentora — spýtaj sa čokoľvek|📈 Denná trhová analýza|🎓 Q&A sedenia|👥 Komunitný chat'
  ).split('|');

  return (
    <section id="products" className="max-w-[1280px] mx-auto relative z-10" style={{ padding: '100px 56px' }}>
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: '11px' }}>
        {t('OUR SOLUTION', 'NAŠE RIEŠENIE')}
      </p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
        {t('Two things. Both built for you.', 'Dve veci. Obidve postavené pre teba.')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-content">
        {/* CARD 1 — FREE COURSE */}
        <div className="reveal-card" style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(208,255,0,0.2)',
          borderRadius: '20px',
          padding: '52px',
          boxShadow: '0 0 60px rgba(208,255,0,0.05)',
        }}>
          <span style={{
            display: 'inline-block', background: '#D0FF00', color: '#000000',
            fontFamily: 'Jura, sans-serif', fontWeight: 700, fontSize: '11px',
            letterSpacing: '3px', padding: '6px 20px', borderRadius: '20px',
          }}>
            {t('FREE. FOREVER.', 'ZADARMO. NAVŽDY.')}
          </span>
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '44px', color: '#FEFFFC', marginTop: '20px', lineHeight: 1 }}>
            {t('The Foundation Course', 'Základný kurz')}
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#AAAAAA', lineHeight: 1.8, marginTop: '16px' }}>
            {t(
              'Everything you need to understand how markets actually move. No indicators. No guesswork. Pure Smart Money methodology — explained from zero.',
              'Všetko čo potrebuješ pochopiť ako sa trhy skutočne pohybujú. Žiadne indikátory. Čistá Smart Money metodológia — vysvetlená od nuly.'
            )}
          </p>
          <ul style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {courseFeatures.map((f, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#FEFFFC' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D0FF00', flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '24px', marginTop: '28px', marginBottom: '28px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 0' }}>
            {[['100+', 'Lessons'], ['20h+', 'Video'], ['4', 'Strategies']].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', color: '#D0FF00', lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#555555', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setModal('education')}
            className="btn-primary-lift"
            style={{
              width: '100%', background: '#D0FF00', color: '#000000',
              fontFamily: 'Jura, sans-serif', fontWeight: 700, fontSize: '12px',
              letterSpacing: '0.15em', padding: '16px', borderRadius: '12px',
              border: 'none', cursor: 'pointer', minHeight: '48px',
            }}>
            {t('GET FREE ACCESS →', 'ZÍSKAJ BEZPLATNÝ PRÍSTUP →')}
          </button>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#444444', textAlign: 'center', marginTop: '12px' }}>
            {t('No email required. No credit card.', 'Žiadny email. Žiadna kreditná karta.')}
          </p>
        </div>

        {/* CARD 2 — COMMUNITY */}
        <div className="reveal-card" style={{
          background: 'rgba(129,22,224,0.08)',
          border: '1px solid rgba(129,22,224,0.3)',
          borderRadius: '20px',
          padding: '52px',
          boxShadow: '0 0 60px rgba(129,22,224,0.08)',
          transitionDelay: '80ms',
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,30,30,0.15)', border: '1px solid rgba(255,30,30,0.4)',
            color: '#FF5050', fontFamily: 'Jura, sans-serif', fontWeight: 700,
            fontSize: '11px', letterSpacing: '0.15em', padding: '6px 14px', borderRadius: '20px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF5050', animation: 'pulse 1.5s ease-in-out infinite' }} />
            {t('⚡ LIMITED — FREE WHILE WE GROW', '⚡ LIMITOVANÉ — ZADARMO KÝM RASTIEME')}
          </span>
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '44px', color: '#FEFFFC', marginTop: '20px', lineHeight: 1 }}>
            {t('The Community', 'Komunita')}
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#AAAAAA', lineHeight: 1.8, marginTop: '16px' }}>
            {t(
              'The course gives you the knowledge. The community gives you the edge. Live analysis, morning calls, mentor support, and traders as obsessed as you are.',
              'Kurz ti dá znalosti. Komunita ti dá výhodu. Živé analýzy, ranné hovory, podpora mentora a traderi rovnako posadnutí ako ty.'
            )}
          </p>
          <ul style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {communityFeatures.map((f, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#FEFFFC' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8116E0', flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>

          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '8px', padding: '16px 20px',
            marginTop: '24px', marginBottom: '20px',
            fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#666666',
          }}>
            {t(
              'Currently FREE · Closing at 300 members · After: 70€/mo · 150€/3mo · 550€/year',
              'Momentálne ZADARMO · Uzatvára sa pri 300 členoch · Potom: 70€/mes · 150€/3mes · 550€/rok'
            )}
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#555' }}>
                {t('Community capacity', 'Kapacita komunity')}
              </span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#D0FF00' }}>~180/400 members</span>
            </div>
            <div style={{ height: '6px', background: '#1a1a1a', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '45%', height: '100%', background: '#D0FF00' }} />
            </div>
          </div>

          <button
            onClick={() => setModal('contact')}
            className="btn-primary-lift"
            style={{
              width: '100%', background: '#8116E0', color: '#FEFFFC',
              fontFamily: 'Jura, sans-serif', fontWeight: 700, fontSize: '12px',
              letterSpacing: '0.15em', padding: '16px', borderRadius: '12px',
              border: 'none', cursor: 'pointer', minHeight: '48px',
            }}>
            {t('JOIN FREE NOW — BEFORE IT CLOSES →', 'PRIDAJ SA ZADARMO — KÝM JE ČAS →')}
          </button>
        </div>
      </div>

      <LeadModal isOpen={modal === 'education'} onClose={() => setModal(null)} variant="education" lang={lang} />
      <LeadModal isOpen={modal === 'contact'} onClose={() => setModal(null)} variant="contact" lang={lang} />
    </section>
  );
};

export default TwoProductsSection;
