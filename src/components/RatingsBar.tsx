import { useLanguage } from '@/contexts/LanguageContext';

const RatingsBar = () => {
  const { t } = useLanguage();

  return (
    <div className="mb-16 reveal-content">
      <h3 className="font-heading text-3xl text-center mb-3" style={{ color: '#F0EDE6' }}>{t('What our students say', 'Čo hovoria naši študenti')}</h3>
      <p className="font-body text-sm text-center mb-12" style={{ color: '#888888', maxWidth: '100%' }}>{t("We're building our reputation one student at a time.", 'Budujeme si reputáciu jedného študenta po druhom.')}</p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-0">
        {/* Trustpilot */}
        <div className="flex-1 flex flex-col items-center py-8 px-8">
          <div className="flex gap-1 mb-3">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-lg" style={{ color: '#00B67A' }}>★</span>
            ))}
          </div>
          <p className="font-body text-sm font-bold mb-1" style={{ color: '#F0EDE6' }}>Trustpilot</p>
          <p className="font-body text-[11px]" style={{ color: '#888888' }}>{t('Coming soon', 'Čoskoro')}</p>
        </div>

        <div className="hidden md:block w-px h-24" style={{ background: 'rgba(255,255,255,0.08)' }} />

        {/* Main rating */}
        <div className="flex-1 flex flex-col items-center py-8 px-8">
          <span className="font-heading text-5xl mb-2" style={{ color: '#F0EDE6' }}>5.0</span>
          <div className="flex gap-1 mb-3">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-lg" style={{ color: '#D4F000' }}>★</span>
            ))}
          </div>
          <p className="font-body text-[11px] mb-4 text-primary" style={{ color: '#888888' }}>obsession.fx rating</p>
          <div className="flex -space-x-2">
            {['MK', 'TN', 'LP', 'AR'].map((init, i) => (
              <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-primary-foreground' : i === 2 ? 'bg-secondary' : ''}`} style={{ background: i > 2 ? 'rgba(255,255,255,0.06)' : undefined, border: '2px solid #0E0E0F' }}>
                <span className="font-label text-[8px]" style={{ color: '#888888' }}>{init}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-px h-24" style={{ background: 'rgba(255,255,255,0.08)' }} />

        {/* Google */}
        <div className="flex-1 flex flex-col items-center py-8 px-8">
          <div className="flex items-center gap-1 mb-3">
            <span className="font-heading text-xl">
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </span>
          </div>
          <div className="flex gap-1 mb-2">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-lg" style={{ color: '#FBBC05' }}>★</span>
            ))}
          </div>
          <p className="font-body text-sm font-bold mb-1" style={{ color: '#F0EDE6' }}>Google Rating</p>
          <p className="font-body text-[11px]" style={{ color: '#888888' }}>{t('Coming soon', 'Čoskoro')}</p>
        </div>
      </div>
    </div>
  );
};

export default RatingsBar;
