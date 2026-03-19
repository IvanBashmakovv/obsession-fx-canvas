import { useLanguage } from '@/contexts/LanguageContext';

const StatsStrip = () => {
  const { t } = useLanguage();
  const stats = [
    { num: '500+', label: t('Students trained', 'Vyškolených študentov') },
    { num: '1000+', label: t('Hours tested', 'Hodín testované') },
    { num: '4', label: t('Trading strategies', 'Obchodné stratégie') },
    { num: '90%', label: t('Prop pass rate', 'Úspešnosť prop') },
  ];

  return (
    <section className="border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className={`px-6 py-10 text-center ${i > 0 ? 'border-l border-border' : ''}`}>
            <div className="font-heading text-5xl text-primary">{s.num}</div>
            <div className="font-body text-[10px] tracking-[3px] uppercase text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
