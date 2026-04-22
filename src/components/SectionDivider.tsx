import { useEffect, useRef, useState } from 'react';

const SectionDivider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        height: 1,
        width: '100%',
        background:
          'linear-gradient(90deg, transparent 0%, rgba(212,240,0,0.15) 20%, rgba(240,78,35,0.10) 50%, rgba(107,95,212,0.15) 80%, transparent 100%)',
        transform: visible ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'center',
        transition: 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
    />
  );
};

export default SectionDivider;
