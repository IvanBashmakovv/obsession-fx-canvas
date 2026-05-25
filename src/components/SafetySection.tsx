import { useLanguage } from '@/contexts/LanguageContext';

const cards = [
  {
    title_en: 'Secure Checkout',
    title_sk: 'Bezpečná platba',
    desc_en: 'Your payment is processed through a secure payment provider.',
    desc_sk: 'Tvoja platba prebieha cez overeného poskytovateľa platieb.',
  },
  {
    title_en: 'Instant Access',
    title_sk: 'Okamžitý prístup',
    desc_en: 'Start learning immediately after purchase.',
    desc_sk: 'Začni sa učiť hneď po zaplatení.',
  },
  {
    title_en: 'Clear Learning Path',
    title_sk: 'Jasná cesta učenia',
    desc_en: 'Follow the program step by step without confusion.',
    desc_sk: 'Postupuj programom krok za krokom bez zmätku.',
  },
  {
    title_en: 'Support Included',
    title_sk: 'Podpora v cene',
    desc_en: 'Get help when you need direction or clarification.',
    desc_sk: 'Získaj pomoc, keď potrebuješ smer alebo vysvetlenie.',
  },
];

const SafetySection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="safety" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <h2 className="font-heading mb-16 reveal-heading text-center" style={{ color: '#F0EDE6', fontSize: 'clamp(36px, 6vw, 64px)' }}>
        {t('YOUR ACCESS IS ', 'TVOJ PRÍSTUP JE ')}
        <span style={{ color: '#D4F000' }}>{t('SIMPLE AND SECURE.', 'JEDNODUCHÝ A BEZPEČNÝ.')}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-content">
        {cards.map((c, i) => (
          <div
            key={i}
            className="glass-card p-8 reveal-card text-center"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="mx-auto mb-4 flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: '50%', border: '1.5px solid rgba(212,240,0,0.4)' }}>
              <span style={{ color: '#D4F000', fontFamily: 'Bebas Neue, sans-serif', fontSize: 24 }}>✓</span>
            </div>
            <h3 className="font-heading text-xl mb-3" style={{ color: '#F0EDE6' }}>
              {lang === 'en' ? c.title_en : c.title_sk}
            </h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: '#AAAAAA' }}>
              {lang === 'en' ? c.desc_en : c.desc_sk}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafetySection;
