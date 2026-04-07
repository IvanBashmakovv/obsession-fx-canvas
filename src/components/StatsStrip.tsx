import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const useCountUp = (target: number, duration: number, start: boolean) => {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setValue(Math.floor(easeOut(progress) * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, target, duration]);

  return value;
};

const StatsStrip = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const s1 = useCountUp(82, 1.5, visible);
  const s2 = useCountUp(20, 1, visible);
  const s3 = useCountUp(4, 0.5, visible);
  const s4 = useCountUp(100, 1.5, visible);

  const stats = [
    { num: `${s1}+`, label: t('Lessons', 'Lekcií') },
    { num: `${s2}h+`, label: t('Video content', 'Video obsahu') },
    { num: `${s3}`, label: t('Trading strategies', 'Obchodné stratégie') },
    { num: `${s4}%`, label: t('Mentor attention', 'Pozornosť mentora') },
  ];

  return (
    <section ref={ref} className="stats-strip-bg py-12 md:py-16" style={{
      borderTop: '1px solid transparent',
      borderBottom: '1px solid transparent',
      borderImage: 'linear-gradient(90deg, transparent 0%, rgba(212,240,0,0.2) 30%, rgba(240,78,35,0.15) 70%, transparent 100%) 1',
    }}>
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12">
        {stats.map((s, i) => (
          <div key={i} className="text-center py-4">
            <div className="font-heading text-5xl md:text-6xl" style={{ color: '#D4F000' }}>{s.num}</div>
            <div className="font-label text-[10px] tracking-[0.15em] uppercase mt-2" style={{ color: '#AAAAAA' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
