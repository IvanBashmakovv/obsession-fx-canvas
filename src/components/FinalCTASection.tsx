import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LeadModal from './LeadModal';

const FinalCTASection = () => {
  const { t, lang } = useLanguage();
  const [modal, setModal] = useState<'education' | 'contact' | null>(null);

  return (
    <section className="relative z-10" style={{ padding: '100px 56px', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(129,22,224,0.15) 0%, rgba(14,14,15,0) 60%)',
        pointerEvents: 'none',
      }} />
      <div className="max-w-[1280px] mx-auto text-center relative z-10">
        <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: '11px' }}>
          {t('WHAT ARE YOU WAITING FOR', 'NA ČO ČAKÁŠ')}
        </p>
        <h2 className="font-heading mb-6 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: 0.95 }}>
          {t('START YOUR JOURNEY.', 'ZAČNI SVOJU CESTU.')}
        </h2>
        <p className="mb-10 reveal-heading" style={{
          fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#AAAAAA', maxWidth: '520px', margin: '0 auto 40px',
        }}>
          {t('Free course. Real community. Zero excuses.', 'Bezplatný kurz. Skutočná komunita. Nula výhovoriek.')}
        </p>
        <div className="flex flex-wrap justify-center gap-4 reveal-content">
          <button onClick={() => setModal('education')} className="btn-primary-lift" style={{
            background: '#D0FF00', color: '#000000',
            fontFamily: 'Jura, sans-serif', fontWeight: 700, fontSize: '12px',
            letterSpacing: '0.15em', padding: '16px 32px', borderRadius: '12px',
            border: 'none', cursor: 'pointer', minHeight: '48px',
          }}>
            {t('GET FREE COURSE →', 'ZÍSKAJ KURZ ZADARMO →')}
          </button>
          <button onClick={() => setModal('contact')} className="btn-ghost-lift" style={{
            background: 'transparent', color: '#FEFFFC',
            fontFamily: 'Jura, sans-serif', fontWeight: 700, fontSize: '12px',
            letterSpacing: '0.15em', padding: '16px 32px', borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', minHeight: '48px',
          }}>
            {t('JOIN COMMUNITY', 'PRIDAJ SA DO KOMUNITY')}
          </button>
        </div>
        <p className="mt-8 reveal-content" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#555555' }}>
          {t('🔥 47 people joined the community in the last 24 hours', '🔥 47 ľudí sa pridalo do komunity za posledných 24 hodín')}
        </p>
      </div>
      <LeadModal isOpen={modal === 'education'} onClose={() => setModal(null)} variant="education" lang={lang} />
      <LeadModal isOpen={modal === 'contact'} onClose={() => setModal(null)} variant="contact" lang={lang} />
    </section>
  );
};

export default FinalCTASection;
