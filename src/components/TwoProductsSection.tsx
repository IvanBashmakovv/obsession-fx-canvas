import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LeadModal from './LeadModal';

const TwoProductsSection = () => {
  const { t, lang } = useLanguage();
  const [modal, setModal] = useState<'education' | 'contact' | null>(null);

  const features = [
    { icon: '📈', text: t('Market Structure & Liquidity', 'Trhová štruktúra a likvidita') },
    { icon: '🎯', text: t('Order Blocks & FVGs', 'Order Blocks a FVG') },
    { icon: '⏰', text: t('Sessions & Timing', 'Relácie a načasovanie') },
    { icon: '🛡️', text: t('Risk Management', 'Risk manažment') },
    { icon: '🧠', text: t('Trading Psychology', 'Psychológia tradingu') },
    { icon: '🚀', text: t('Your first framework', 'Tvoj prvý rámec') },
  ];

  const communityFeatures = [
    { icon: '📊', label: t('Morning Calls', 'Ranné hovory') },
    { icon: '🔴', label: t('Live Sessions', 'Živé sedenia') },
    { icon: '💬', label: t('Mentor Support', 'Podpora mentora') },
    { icon: '📈', label: t('Daily Analysis', 'Denná analýza') },
    { icon: '🎓', label: t('Q&A Sessions', 'Q&A sedenia') },
    { icon: '👥', label: t('Community Chat', 'Komunitný chat') },
  ];

  return (
    <section id="products" className="max-w-[1280px] mx-auto relative z-10" style={{ padding: '100px 56px' }}>
      <div aria-hidden style={{
        position: 'absolute', top: '10%', left: '-15%', width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(208,255,0,0.18), transparent 70%)',
        filter: 'blur(120px)', pointerEvents: 'none', zIndex: -1,
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '0%', right: '-10%', width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(129,22,224,0.18), transparent 70%)',
        filter: 'blur(120px)', pointerEvents: 'none', zIndex: -1,
      }} />

      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: 11 }}>
        {t("GET STARTED — IT'S FREE", 'ZAČNI — JE TO ZADARMO')}
      </p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
        {t('Two ways in. Both ', 'Dve cesty. Obe ')}
        <span style={{ background: 'linear-gradient(90deg,#D0FF00,#8116E0)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
          {t('free right now.', 'momentálne zadarmo.')}
        </span>
      </h2>

      {/* === FREE COURSE — DOMINANT CARD === */}
      <div className="reveal-card relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, rgba(208,255,0,0.08), rgba(208,255,0,0.02))',
        border: '1px solid rgba(208,255,0,0.25)',
        borderRadius: 24, padding: 56,
        boxShadow: '0 30px 100px rgba(0,0,0,0.4), 0 0 120px rgba(208,255,0,0.06)',
      }}>
        {/* watermark */}
        <div aria-hidden style={{
          position: 'absolute', top: '20%', right: '-50px', transform: 'rotate(-8deg)',
          fontFamily: 'Bebas Neue', fontSize: 200, color: 'rgba(208,255,0,0.04)',
          pointerEvents: 'none', whiteSpace: 'nowrap', lineHeight: 1,
        }}>FREE FREE</div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="shine-badge" style={{
            display: 'inline-block', position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(135deg,#D0FF00,#B8E600)', color: '#000',
            fontFamily: 'Jura', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.2em', padding: '8px 22px', borderRadius: 20,
            boxShadow: '0 0 30px rgba(208,255,0,0.3)',
          }}>
            🎁 100% FREE · {t('NO CREDIT CARD', 'BEZ KREDITNEJ KARTY')}
          </span>

          <h3 style={{ fontFamily: 'Bebas Neue', fontSize: 48, color: '#FEFFFC', marginTop: 20, lineHeight: 1 }}>
            {t('The Foundation Course', 'Základný kurz')}
          </h3>
          <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#BBBBBB', lineHeight: 1.75, marginTop: 16, maxWidth: 720 }}>
            {t(
              'Everything you need to understand how markets actually move. No indicators. No guesswork. Pure Smart Money methodology — explained from zero.',
              'Všetko čo potrebuješ pochopiť ako sa trhy skutočne pohybujú. Žiadne indikátory. Čistá Smart Money metodológia — vysvetlená od nuly.'
            )}
          </p>

          {/* Stat pills */}
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            {[['📚', '30+', t('Lessons', 'Lekcií')], ['🎬', '10+', t('Hours of video', 'Hodín videa')], ['🎯', '4', t('Core Strategies', 'Stratégie')]].map(([icon, n, l]) => (
              <div key={l as string} style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12, padding: '14px 22px', display: 'flex', alignItems: 'center', gap: 12,
                backdropFilter: 'blur(10px)',
              }}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <div>
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: 26, color: '#D0FF00', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 10, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 2 }}>{l}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature chips grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 10, marginTop: 28,
          }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8, padding: 14,
                display: 'flex', alignItems: 'center', gap: 10,
                fontFamily: 'Inter', fontSize: 13, color: '#FEFFFC',
              }}>
                <span style={{ fontSize: 16 }}>{f.icon}</span>
                {f.text}
              </div>
            ))}
          </div>

          <button onClick={() => setModal('education')} className="btn-primary-lift cta-glow group"
            style={{
              width: '100%', marginTop: 32, height: 60,
              background: 'linear-gradient(135deg,#D0FF00,#B8E600)', color: '#000',
              fontFamily: 'Jura', fontWeight: 700, fontSize: 13, letterSpacing: '0.2em',
              borderRadius: 14, border: 'none', position: 'relative', overflow: 'hidden',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              boxShadow: '0 10px 40px rgba(208,255,0,0.25)',
            }}>
            {t('GET FREE ACCESS', 'ZÍSKAJ BEZPLATNÝ PRÍSTUP')}
            <span className="cta-arrow">→</span>
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 28, marginTop: 16, flexWrap: 'wrap' }}>
            {['🔒 ' + t('No card needed', 'Žiadna karta'), '⚡ ' + t('Instant access', 'Okamžitý prístup'), '📱 ' + t('Mobile friendly', 'Mobile friendly')].map(t => (
              <span key={t} style={{ fontFamily: 'Inter', fontSize: 11, color: '#666' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* === COMMUNITY — SECONDARY CARD === */}
      <div className="reveal-card mt-6 grid grid-cols-1 md:grid-cols-[40%_60%] gap-0 overflow-hidden" style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(129,22,224,0.25)',
        borderRadius: 20,
        boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 80px rgba(129,22,224,0.05)',
      }}>
        {/* LEFT */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(129,22,224,0.12), rgba(129,22,224,0.04))',
          padding: 40, borderRight: '1px solid rgba(129,22,224,0.15)',
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,30,30,0.15)', border: '1px solid rgba(255,30,30,0.4)',
            color: '#FF5050', fontFamily: 'Jura', fontWeight: 700,
            fontSize: 10, letterSpacing: '0.15em', padding: '5px 12px', borderRadius: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5050', animation: 'pulse 1.5s infinite' }} />
            {t('LIMITED — FREE WHILE WE GROW', 'LIMITOVANÉ — ZADARMO KÝM RASTIEME')}
          </span>
          <h3 style={{ fontFamily: 'Bebas Neue', fontSize: 40, color: '#FEFFFC', marginTop: 16, lineHeight: 1 }}>
            {t('The Community', 'Komunita')}
          </h3>
          <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#AAA', lineHeight: 1.7, marginTop: 12 }}>
            {t(
              'Where knowledge becomes results. Live analysis, mentor support, and traders as obsessed as you are.',
              'Kde sa znalosti menia na výsledky. Živé analýzy, podpora mentora, traderi rovnako posadnutí ako ty.'
            )}
          </p>

          {/* progress */}
          <div style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#FEFFFC', fontWeight: 600 }}>
                🔥 180/400 {t('spots filled', 'miest obsadených')}
              </span>
              <span style={{ fontFamily: 'Jura', fontSize: 11, color: '#D0FF00' }}>45%</span>
            </div>
            <div style={{ height: 8, background: 'rgba(0,0,0,0.4)', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
              <div style={{
                width: '45%', height: '100%',
                background: 'linear-gradient(90deg,#8116E0,#D0FF00)',
                borderRadius: 4, position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'shimmerAccent 2s linear infinite',
                  backgroundSize: '200% 100%',
                }} />
              </div>
            </div>
          </div>

          <p style={{ fontFamily: 'Inter', fontSize: 11, color: '#666', marginTop: 16 }}>
            {t('Free now ', 'Teraz zadarmo ')}→ <s style={{ color: '#888' }}>70€/mo</s>{' '}{t('after launch', 'po spustení')}
          </p>
        </div>

        {/* RIGHT */}
        <div style={{ padding: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {communityFeatures.map((f, i) => (
              <div key={i} style={{
                background: 'rgba(129,22,224,0.06)', border: '1px solid rgba(129,22,224,0.15)',
                borderRadius: 10, padding: 14, textAlign: 'center',
              }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{f.icon}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#FEFFFC', fontWeight: 500 }}>{f.label}</div>
              </div>
            ))}
          </div>

          <button onClick={() => setModal('contact')} className="btn-primary-lift cta-glow group"
            style={{
              width: '100%', marginTop: 24, height: 56,
              background: 'linear-gradient(135deg,#8116E0,#6B0FC0)', color: '#FEFFFC',
              fontFamily: 'Jura', fontWeight: 700, fontSize: 12, letterSpacing: '0.2em',
              borderRadius: 14, border: 'none',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              boxShadow: '0 10px 40px rgba(129,22,224,0.35)',
            }}>
            {t('JOIN FREE — LIMITED SPOTS', 'PRIDAJ SA ZADARMO — LIMITOVANÉ')}
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>

      <LeadModal isOpen={modal === 'education'} onClose={() => setModal(null)} variant="education" lang={lang} />
      <LeadModal isOpen={modal === 'contact'} onClose={() => setModal(null)} variant="contact" lang={lang} />
    </section>
  );
};

export default TwoProductsSection;
