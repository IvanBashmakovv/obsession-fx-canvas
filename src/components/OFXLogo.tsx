const OFXLogo = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="50" r="22" stroke="#D4F000" strokeWidth="10" fill="none" />
    <polygon points="52,25 75,25 52,55" fill="#1E1E20" />
    <polygon points="55,50 75,80 65,80 45,50 55,35 65,50" fill="#F04E23" />
    <polygon points="65,50 85,80 75,80 60,55" fill="#F04E23" />
  </svg>
);

export default OFXLogo;
