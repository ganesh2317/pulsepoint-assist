import { Star } from "lucide-react";
import type { Hospital } from "@/data/hospitals";

interface HospitalCardProps {
  hospital: Hospital & { distance?: number };
  isMatched?: boolean;
  onClick: () => void;
}

const specColors: Record<string, string> = {
  "Cardiology": "bg-red-100 text-red-700 border-red-200",
  "Neurology": "bg-blue-100 text-blue-700 border-blue-200",
  "Orthopedics": "bg-amber-100 text-amber-700 border-amber-200",
  "General Medicine": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Emergency Care": "bg-red-100 text-red-800 border-red-300",
  "Oncology": "bg-purple-100 text-purple-700 border-purple-200",
  "Pediatrics": "bg-pink-100 text-pink-700 border-pink-200",
  "Gynecology": "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
  "Psychiatry": "bg-indigo-100 text-indigo-700 border-indigo-200",
  "Dermatology": "bg-orange-100 text-orange-700 border-orange-200",
  "ENT": "bg-teal-100 text-teal-700 border-teal-200",
  "Ophthalmology": "bg-cyan-100 text-cyan-700 border-cyan-200",
  "Urology": "bg-yellow-100 text-yellow-700 border-yellow-200",
  "Gastroenterology": "bg-lime-100 text-lime-700 border-lime-200",
  "Pulmonology": "bg-sky-100 text-sky-700 border-sky-200",
};

const HospitalCard = ({ hospital, isMatched, onClick }: HospitalCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md bg-white ${
        isMatched
          ? "ring-2 ring-primary border-transparent"
          : "border border-border/50 hover:border-primary/30"
      }`}
    >
      <div className="flex items-start justify-between mb-1.5">
        <h4 className={`text-sm font-semibold leading-tight ${isMatched ? "text-primary" : "text-foreground"}`}>
          {hospital.name}
        </h4>
      </div>

      {/* Specializations */}
      <div className="flex flex-wrap gap-1 mb-2">
        {hospital.specializations.slice(0, 3).map((s) => (
          <span key={s} className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${specColors[s] || "bg-muted text-muted-foreground border-border"}`}>
            {s}
          </span>
        ))}
        {hospital.specializations.length > 3 && (
          <span className="text-[10px] px-1.5 py-0.5 rounded border border-border text-muted-foreground font-medium">
            +{hospital.specializations.length - 3}
          </span>
        )}
      </div>

      {/* Rating & Distance */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.round(hospital.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
            />
          ))}
          <span className="ml-1 font-medium">{hospital.rating}</span>
        </div>
        {hospital.distance !== undefined && (
          <span className="text-primary font-medium">{hospital.distance.toFixed(1)} km</span>
        )}
      </div>

      {hospital.isEmergency && (
        <div className="mt-2 flex items-center gap-1.5">
          <span className="blink-dot-red" style={{ width: 6, height: 6 }} />
          <span className="text-[10px] font-semibold text-red-600">EMERGENCY READY</span>
        </div>
      )}
    </div>
  );
};

export default HospitalCard;
