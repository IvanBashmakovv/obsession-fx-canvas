import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type LeadModalVariant = 'education' | 'pro' | 'contact' | 'mentor';
export type Lang = 'en' | 'sk';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant: LeadModalVariant;
  lang: Lang;
}

const t = (lang: Lang, en: string, sk: string) => (lang === 'en' ? en : sk);

const sendToTelegram = async (payload: {
  variant: LeadModalVariant;
  plan: string;
  price: string;
  name: string;
  method: string;
  contact: string;
  lang: Lang;
  interest?: string;
  experience?: string;
}) => {
  const { error } = await supabase.functions.invoke('send-lead', { body: payload });
  if (error) throw error;
};

const eduFeatures = [
  { en: 'Lifetime access to all materials', sk: 'Doživotný prístup k materiálom', active: true },
  { en: 'Access to mentor trade setups', sk: 'Prístup k setupom mentorov', active: true },
  { en: 'Direct communication with mentors', sk: 'Priama komunikácia s mentormi', active: true },
  { en: 'Full prop challenge support', sk: 'Kompletná podpora prop challenge', active: true },
  { en: 'Material updates', sk: 'Aktualizácie materiálov', active: false },
  { en: 'Online live conferences', sk: 'Online živé konferencie', active: false },
  { en: 'Homework with individual feedback', sk: 'Domáce úlohy s feedbackom', active: false },
  { en: 'Strategy optimization sessions', sk: 'Sedenia optimalizácie stratégie', active: false },
  { en: 'Final exam + certification', sk: 'Záverečná skúška + certifikácia', active: false },
];

const placeholderFor = (method: string, lang: Lang) => {
  switch (method) {
    case 'Telegram':
      return { label: t(lang, 'TELEGRAM USERNAME', 'TELEGRAM NICK'), placeholder: '@username' };
    case 'WhatsApp':
      return { label: t(lang, 'WHATSAPP NUMBER', 'ČÍSLO WHATSAPP'), placeholder: '+421 XXX XXX XXX' };
    case 'Viber':
      return { label: t(lang, 'VIBER NUMBER', 'ČÍSLO VIBER'), placeholder: '+421 XXX XXX XXX' };
    case 'Instagram':
      return { label: t(lang, 'INSTAGRAM USERNAME', 'INSTAGRAM NICK'), placeholder: '@username' };
    default:
      return { label: '', placeholder: '' };
  }
};

const LeadModal = ({ isOpen, onClose, variant, lang }: LeadModalProps) => {
  const [name, setName] = useState('');
  const [method, setMethod] = useState('Telegram');
  const [contact, setContact] = useState('');
  const [interest, setInterest] = useState('Free Course Access');
  const [experience, setExperience] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setSuccess(false);
      setName('');
      setContact('');
      setExperience('');
      setMethod('Telegram');
      setInterest('Free Course Access');
    }
  }, [isOpen]);

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => onClose(), 4000);
      return () => clearTimeout(timeout);
    }
  }, [success, onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen && !mounted) return null;
  if (!isOpen) return null;

  const planInfo = variant === 'pro'
    ? { badge: t(lang, 'GROUP LEARNING', 'SKUPINOVÉ UČENIE'), name: 'EDUCATION PRO', price: '699€' }
    : { badge: t(lang, 'SELF-STUDY', 'SAMOŠTÚDIUM'), name: 'EDUCATION', price: '299€' };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    if (variant === 'mentor' && !experience.trim()) return;
    setLoading(true);
    try {
      await sendToTelegram({
        variant,
        plan: variant === 'mentor' ? 'Mentor Application' : variant === 'contact' ? 'Contact' : planInfo.name,
        price: variant === 'pro' ? '699€' : variant === 'education' ? '299€' : '',
        name: name.trim(),
        method,
        contact: contact.trim(),
        lang,
        interest: variant === 'contact' ? interest : undefined,
        experience: variant === 'mentor' ? experience.trim() : undefined,
      });
      setSuccess(true);
    } catch (err) {
      console.error('Telegram send failed', err);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  const field = placeholderFor(method, lang);

  const labelStyle: React.CSSProperties = {
    fontFamily: 'Jura, sans-serif',
    fontSize: '8px',
    color: '#555',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '8px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    color: '#FEFFFC',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    padding: '10px 0',
    outline: 'none',
    transition: 'border-color 300ms',
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.92)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 1000,
        animation: 'lmFade 300ms ease-out',
      }}
    >
      <style>{`
        @keyframes lmFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lmScale { from { opacity: 0; transform: translate(-50%, -50%) scale(0.95) } to { opacity: 1; transform: translate(-50%, -50%) scale(1) } }
        @keyframes lmBounce { 0% { transform: scale(0) } 60% { transform: scale(1.2) } 100% { transform: scale(1) } }
        .lm-input:focus { border-bottom-color: #D0FF00 !important; }
        .lm-submit:hover { box-shadow: 0 0 24px rgba(208,255,0,0.4); transform: translateY(-2px); }
      `}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0E0E0F',
          border: '1px solid rgba(208,255,0,0.2)',
          borderRadius: '16px',
          padding: '48px',
          maxWidth: '900px',
          width: '90vw',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxHeight: '90vh',
          overflowY: 'auto',
          animation: 'lmScale 300ms ease-out',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '32px',
            height: '32px',
            background: 'transparent',
            border: 'none',
            color: '#555',
            fontSize: '24px',
            cursor: 'pointer',
            transition: 'color 200ms',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FEFFFC')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
        >
          ✕
        </button>

        {success ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ fontSize: '64px', color: '#D0FF00', animation: 'lmBounce 500ms ease-out', lineHeight: 1 }}>✓</div>
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '48px', color: '#FEFFFC', marginTop: '24px', lineHeight: 1 }}>
              {t(lang, 'APPLICATION RECEIVED!', 'ŽIADOSŤ PRIJATÁ!')}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#888', marginTop: '12px' }}>
              {t(lang, "We'll contact you within 24 hours via your chosen platform.", 'Ozveme sa ti do 24 hodín cez tvoju zvolenú platformu.')}
            </p>
            <p style={{ fontFamily: 'Jura, sans-serif', color: '#D0FF00', marginTop: '24px', letterSpacing: '0.1em' }}>obsession.fx</p>
            <button
              onClick={onClose}
              style={{
                marginTop: '24px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#FEFFFC',
                padding: '12px 32px',
                borderRadius: '8px',
                fontFamily: 'Jura, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.2em',
                cursor: 'pointer',
              }}
            >
              {t(lang, 'CLOSE', 'ZAVRIEŤ')}
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 45fr) minmax(0, 55fr)', gap: '40px' }}>
            <div style={{ minWidth: 0 }}>
              {variant === 'contact' ? (
                <>
                  <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '56px', lineHeight: 0.95, margin: 0 }}>
                    <span style={{ color: '#D0FF00' }}>OBSESSION</span><br />
                    <span style={{ color: '#FEFFFC' }}>BEATS</span><br />
                    <span style={{ color: '#FEFFFC' }}>TALENT.</span>
                  </h2>
                  <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <a href="https://t.me/obsessionfx" target="_blank" rel="noopener noreferrer" style={{ color: '#AAAAAA', fontFamily: 'Inter, sans-serif', fontSize: '13px', textDecoration: 'none' }}>
                      🔵 Telegram — @obsessionfx
                    </a>
                    <a href="#" style={{ color: '#AAAAAA', fontFamily: 'Inter, sans-serif', fontSize: '13px', textDecoration: 'none' }}>
                      🩷 Instagram — @obsession.fx
                    </a>
                  </div>
                </>
              ) : variant === 'mentor' ? (
                <>
                  <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '56px', lineHeight: 0.95, margin: 0 }}>
                    <span style={{ color: '#FEFFFC' }}>{t(lang, 'GOT THE', 'MÁŠ')}</span><br />
                    <span style={{ color: '#F04E23' }}>{t(lang, 'EDGE?', 'VÝHODU?')}</span>
                  </h2>
                  <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      t(lang, '✓ Funded account experience', '✓ Skúsenosť s funded účtom'),
                      t(lang, '✓ Proven track record', '✓ Preukázateľný track record'),
                      t(lang, '✓ Passion for teaching', '✓ Vášeň pre učenie'),
                    ].map((p, i) => (
                      <span key={i} style={{ display: 'inline-block', padding: '6px 12px', border: '1px solid rgba(240,78,35,0.4)', borderRadius: '999px', color: '#F04E23', fontSize: '12px', fontFamily: 'Inter, sans-serif', alignSelf: 'flex-start' }}>{p}</span>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <span style={{ display: 'inline-block', background: '#1E1E21', border: '1px solid rgba(255,255,255,0.08)', color: '#888', fontFamily: 'Jura, sans-serif', fontSize: '9px', letterSpacing: '0.2em', padding: '6px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>{planInfo.badge}</span>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '40px', color: '#FEFFFC', margin: '16px 0 8px', lineHeight: 1 }}>{planInfo.name}</h3>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '52px', color: '#FEFFFC', lineHeight: 1 }}>{planInfo.price}</div>
                  {variant === 'pro' && (
                    <p style={{ marginTop: '12px', color: '#D0FF00', fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>
                      {t(lang, 'Join the waitlist for the next intake', 'Pridaj sa na čakaciu listinu')}
                    </p>
                  )}
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '24px 0' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {eduFeatures.map((f, i) => {
                      const active = variant === 'pro' ? true : f.active;
                      return (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: active ? '#D0FF00' : '#333', flexShrink: 0 }} />
                          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: active ? '#FEFFFC' : '#444', textDecoration: active ? 'none' : 'line-through' }}>
                            {t(lang, f.en, f.sk)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            <div style={{ minWidth: 0 }}>
              <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 700, color: '#FEFFFC', margin: '0 0 24px' }}>
                {t(lang, "Fill in the form and we'll get back to you within 24 hours.", 'Vyplň formulár a ozveme sa ti do 24 hodín.')}
              </h4>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <label style={labelStyle}>{t(lang, 'YOUR NAME', 'TVOJE MENO')}</label>
                  <input
                    className="lm-input"
                    style={inputStyle}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t(lang, 'Enter your name', 'Zadaj svoje meno')}
                    maxLength={100}
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>{t(lang, 'HOW TO REACH YOU?', 'AKO SA SPOJIŤ?')}</label>
                  <select
                    className="lm-input"
                    style={{ ...inputStyle, background: '#161618' }}
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                  >
                    <option value="Telegram">Telegram</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Viber">Viber</option>
                    <option value="Instagram">Instagram</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>{field.label}</label>
                  <input
                    className="lm-input"
                    style={inputStyle}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={field.placeholder}
                    maxLength={120}
                    required
                  />
                </div>

                {variant === 'contact' && (
                  <div>
                    <label style={labelStyle}>{t(lang, 'WHAT ARE YOU INTERESTED IN?', 'O ČO MÁŠ ZÁUJEM?')}</label>
                    <select
                      className="lm-input"
                      style={{ ...inputStyle, background: '#161618' }}
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                    >
                      <option value="Free Course Access">{t(lang, 'Free Course Access', 'Prístup k bezplatnému kurzu')}</option>
                      <option value="Join the Community">{t(lang, 'Join the Community', 'Pridaj sa do komunity')}</option>
                      <option value="Become a Mentor">{t(lang, 'Become a Mentor', 'Stať sa mentorom')}</option>
                      <option value="General Question">{t(lang, 'General Question', 'Všeobecná otázka')}</option>
                    </select>
                  </div>
                )}

                {variant === 'mentor' && (
                  <div>
                    <label style={labelStyle}>{t(lang, 'TELL US ABOUT YOUR EXPERIENCE', 'POVEDZ NÁM O SVOJICH SKÚSENOSTIACH')}</label>
                    <textarea
                      className="lm-input"
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '72px' }}
                      rows={3}
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      maxLength={1000}
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="lm-submit"
                  style={{
                    width: '100%',
                    background: '#D0FF00',
                    color: '#000',
                    fontFamily: 'Jura, sans-serif',
                    fontWeight: 700,
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    padding: '16px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: loading ? 'wait' : 'pointer',
                    transition: 'all 200ms',
                    marginTop: '8px',
                  }}
                >
                  {loading
                    ? t(lang, 'SENDING...', 'ODOSIELAM...')
                    : t(lang, 'SEND APPLICATION →', 'ODOSLAŤ ŽIADOSŤ →')}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
