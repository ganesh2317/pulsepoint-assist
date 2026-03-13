interface EmergencyBannerProps {
  specialization: string;
  hospitalName?: string;
}

const EmergencyBanner = ({ specialization, hospitalName }: EmergencyBannerProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 emergency-banner px-4 py-3">
      <div className="flex items-center justify-center gap-3 text-sm font-mono">
        <span className="blink-dot-red" />
        <span className="text-cyber-red font-bold tracking-wider">
          ⚠ EMERGENCY MODE ACTIVE — {specialization.toUpperCase()}
        </span>
        {hospitalName && (
          <span className="text-red-300">
            — ROUTING TO {hospitalName.toUpperCase()}
          </span>
        )}
        <span className="blink-dot-red" />
      </div>
    </div>
  );
};

export default EmergencyBanner;
