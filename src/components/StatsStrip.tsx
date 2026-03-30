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
      { threshold: 0.3 }
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
    <section ref={ref} style={{
      background: 'linear-gradient(180deg, #252527 0%, #1E1E20 100%)',
      borderTop: '1px solid rgba(212,240,0,0.15)',
      borderBottom: '1px solid rgba(212,240,0,0.15)',
    }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className={`px-6 py-10 text-center ${i > 0 ? 'border-l border-border' : ''}`}>
            <div className="font-heading text-5xl" style={{ color: '#D4F000' }}>{s.num}</div>
            <div className="font-label text-[10px] tracking-[3px] uppercase text-[#777777] mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
