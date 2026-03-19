import OFXLogo from './OFXLogo';

const FooterSection = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <OFXLogo size={20} />
        <span className="font-heading text-sm text-foreground tracking-wider">
          OBSESSION.<span className="text-primary">FX</span>
        </span>
      </div>
      <p className="font-body text-[10px] tracking-[2px] text-muted-foreground">
        © 2025 obsession.fx · all rights reserved
      </p>
    </div>
  </footer>
);

export default FooterSection;
