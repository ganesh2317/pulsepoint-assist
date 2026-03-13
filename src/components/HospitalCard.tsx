import { Star } from "lucide-react";
import type { Hospital } from "@/data/hospitals";

interface HospitalCardProps {
  hospital: Hospital & { distance?: number };
  isMatched?: boolean;
  onClick: () => void;
}

const specColors: Record<string, string> = {
  "Cardiology": "bg-red-900/50 text-red-300 border-red-700/50",
  "Neurology": "bg-blue-900/50 text-blue-300 border-blue-700/50",
  "Orthopedics": "bg-amber-900/50 text-amber-300 border-amber-700/50",
  "General Medicine": "bg-emerald-900/50 text-emerald-300 border-emerald-700/50",
  "Emergency Care": "bg-red-900/60 text-red-200 border-red-600/50",
  "Oncology": "bg-purple-900/50 text-purple-300 border-purple-700/50",
  "Pediatrics": "bg-pink-900/50 text-pink-300 border-pink-700/50",
  "Gynecology": "bg-fuchsia-900/50 text-fuchsia-300 border-fuchsia-700/50",
  "Psychiatry": "bg-indigo-900/50 text-indigo-300 border-indigo-700/50",
  "Dermatology": "bg-orange-900/50 text-orange-300 border-orange-700/50",
  "ENT": "bg-teal-900/50 text-teal-300 border-teal-700/50",
  "Ophthalmology": "bg-cyan-900/50 text-cyan-300 border-cyan-700/50",
  "Urology": "bg-yellow-900/50 text-yellow-300 border-yellow-700/50",
  "Gastroenterology": "bg-lime-900/50 text-lime-300 border-lime-700/50",
  "Pulmonology": "bg-sky-900/50 text-sky-300 border-sky-700/50",
};

const HospitalCard = ({ hospital, isMatched, onClick }: HospitalCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`p-3 rounded cursor-pointer transition-all duration-200 hover:scale-[1.02] ${
        isMatched
          ? "cyber-panel-strong border-cyber-green/40"
          : "bg-muted/20 border border-border/50 hover:border-primary/30"
      }`}
    >
      <div className="flex items-start justify-between mb-1.5">
        <h4 className={`text-xs font-mono font-bold leading-tight ${isMatched ? "text-cyber-green" : "text-foreground"}`}>
          {hospital.name}
        </h4>
      </div>

      {/* Specializations */}
      <div className="flex flex-wrap gap-1 mb-2">
        {hospital.specializations.slice(0, 3).map((s) => (
          <span key={s} className={`text-[9px] px-1.5 py-0.5 rounded border font-mono ${specColors[s] || "bg-muted text-muted-foreground border-border"}`}>
            {s}
          </span>
        ))}
        {hospital.specializations.length > 3 && (
          <span className="text-[9px] px-1.5 py-0.5 rounded border border-border text-muted-foreground font-mono">
            +{hospital.specializations.length - 3}
          </span>
        )}
      </div>

      {/* Rating & Distance */}
      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.round(hospital.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
            />
          ))}
          <span className="ml-1">{hospital.rating}</span>
        </div>
        {hospital.distance !== undefined && (
          <span className="text-cyber-cyan">{hospital.distance.toFixed(1)} km</span>
        )}
      </div>

      {hospital.isEmergency && (
        <div className="mt-1.5 flex items-center gap-1">
          <span className="blink-dot-red" style={{ width: 4, height: 4 }} />
          <span className="text-[9px] text-red-400 font-mono">EMERGENCY READY</span>
        </div>
      )}
    </div>
  );
};

export default HospitalCard;
