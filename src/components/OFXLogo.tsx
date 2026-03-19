const OFXLogo = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="50" r="22" stroke="#FF1E1E" strokeWidth="10" fill="none" />
    <polygon points="52,25 75,25 52,55" fill="#1a1a1a" />
    <polygon points="55,50 75,80 65,80 45,50 55,35 65,50" fill="#FF2D95" />
    <polygon points="65,50 85,80 75,80 60,55" fill="#FF2D95" />
  </svg>
);

export default OFXLogo;
