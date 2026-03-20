import { useLanguage } from '@/contexts/LanguageContext';

const RatingsBar = () => {
  const { t } = useLanguage();

  return (
    <div className="mb-16 reveal-content">
      <h3 className="font-heading text-3xl text-foreground text-center mb-2">{t('What our students say', 'Čo hovoria naši študenti')}</h3>
      <p className="font-body text-sm text-[#888888] text-center mb-10">{t("We're building our reputation one student at a time.", 'Budujeme si reputáciu jedného študenta po druhom.')}</p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-0">
        {/* Trustpilot */}
        <div className="flex-1 flex flex-col items-center py-6 px-8">
          <div className="flex gap-1 mb-2">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-[#00B67A] text-lg">★</span>
            ))}
          </div>
          <p className="font-body text-sm text-foreground font-bold mb-1">Trustpilot</p>
          <p className="font-body text-[11px] text-[#666666]">{t('Coming soon', 'Čoskoro')}</p>
        </div>

        <div className="hidden md:block w-px h-20 bg-border" />

        {/* Main rating */}
        <div className="flex-1 flex flex-col items-center py-6 px-8">
          <span className="font-heading text-5xl text-foreground mb-1">5.0</span>
          <div className="flex gap-1 mb-2">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-primary text-lg">★</span>
            ))}
          </div>
          <p className="font-body text-[11px] text-[#777777] mb-3">obsession.fx rating</p>
          <div className="flex -space-x-2">
            {['MK', 'TN', 'LP', 'AR'].map((init, i) => (
              <div key={i} className="w-7 h-7 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                <span className="font-label text-[8px] text-[#777777]">{init}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-px h-20 bg-border" />

        {/* Google */}
        <div className="flex-1 flex flex-col items-center py-6 px-8">
          <div className="flex items-center gap-1 mb-2">
            <span className="font-heading text-xl">
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </span>
          </div>
          <div className="flex gap-1 mb-1">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-[#FBBC05] text-lg">★</span>
            ))}
          </div>
          <p className="font-body text-sm text-foreground font-bold mb-1">Google Rating</p>
          <p className="font-body text-[11px] text-[#666666]">{t('Coming soon', 'Čoskoro')}</p>
        </div>
      </div>
    </div>
  );
};

export default RatingsBar;
