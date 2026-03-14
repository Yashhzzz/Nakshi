const cities = ['Jaipur', 'Surat', 'Mumbai', 'Delhi', 'Ahmedabad', 'Hyderabad', 'Kolkata', 'Pune', 'Chennai', 'Rajkot'];
const cityStr = cities.map((c) => `✦  ${c}`).join('      ');

const SocialProofMarquee = () => {
  return (
    <div
      className="w-full h-12 md:h-14 flex items-center overflow-hidden"
      style={{ background: 'hsl(var(--nakshi-darkest))' }}
    >
      <div className="flex-shrink-0 pl-5 md:pl-10 pr-6 md:pr-8 z-10" style={{ background: 'hsl(var(--nakshi-darkest))' }}>
        <span className="font-body text-[11px] md:text-[12px] tracking-wider uppercase whitespace-nowrap" style={{ color: 'hsl(var(--nakshi-text-on-dark) / 0.6)' }}>
          Jewelers waiting
        </span>
      </div>
      <div className="marquee-track flex-1 flex items-center">
        <div 
          className="whitespace-nowrap"
          style={{ animation: 'marquee-single 40s linear infinite' }}
        >
          <span className="font-body text-[11px] md:text-[12px] tracking-wider" style={{ color: 'hsl(var(--nakshi-gold-light) / 0.7)' }}>
            {cityStr}
          </span>
        </div>
      </div>
      <style>{`
        @keyframes marquee-single {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default SocialProofMarquee;
