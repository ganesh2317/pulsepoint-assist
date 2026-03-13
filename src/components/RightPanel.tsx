import type { Hospital } from "@/data/hospitals";
import HospitalCard from "./HospitalCard";

interface RightPanelProps {
  hospitals: Hospital[];
  matchedHospitals: (Hospital & { distance?: number })[];
  selectedHospitalId?: string;
  onHospitalSelect: (hospital: Hospital) => void;
  detectedSpecialization?: string;
}

const RightPanel = ({
  hospitals,
  matchedHospitals,
  selectedHospitalId,
  onHospitalSelect,
  detectedSpecialization,
}: RightPanelProps) => {
  const displayList = matchedHospitals.length > 0 ? matchedHospitals : hospitals.slice(0, 20);
  const maxRating = displayList.length > 0 ? Math.max(...displayList.map(h => h.rating)) : 0;
  const uniqueSpecs = new Set(hospitals.flatMap(h => h.specializations));

  return (
    <div className="fixed top-4 right-4 z-30 w-80 cyber-panel rounded-md p-4 slide-in-right max-h-[calc(100vh-120px)] flex flex-col">
      {/* Header */}
      <div className="mb-3">
        <h2 className="text-xs font-mono tracking-widest cyber-text mb-2">
          HOSPITAL MATCHES
        </h2>
        {detectedSpecialization && (
          <div className="text-[10px] font-mono text-cyber-cyan mb-2 p-1.5 rounded bg-primary/5 border border-primary/20">
            FILTER: {detectedSpecialization.toUpperCase()}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-muted/20 rounded p-2 text-center">
            <div className="text-lg font-bold font-mono cyber-text count-up">{displayList.length}</div>
            <div className="text-[9px] text-muted-foreground font-mono">LIVE NODES</div>
          </div>
          <div className="bg-muted/20 rounded p-2 text-center">
            <div className="text-lg font-bold font-mono text-yellow-400 count-up">{maxRating.toFixed(1)}</div>
            <div className="text-[9px] text-muted-foreground font-mono">MAX RATING</div>
          </div>
        </div>
      </div>

      {/* Hospital List */}
      <div className="flex-1 overflow-y-auto space-y-2 min-h-0">
        {displayList.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-xs text-muted-foreground font-mono">Select a state and district to scan grid...</p>
          </div>
        ) : (
          displayList.map((h) => (
            <HospitalCard
              key={h.id}
              hospital={h}
              isMatched={h.id === selectedHospitalId}
              onClick={() => onHospitalSelect(h)}
            />
          ))
        )}
      </div>

      {/* System Stats */}
      <div className="mt-3 pt-3 border-t border-border/30 space-y-1">
        <div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground">
          <span>Total nodes in grid</span>
          <span className="text-foreground">{hospitals.length}</span>
        </div>
        <div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground">
          <span>Active specializations</span>
          <span className="text-foreground">{uniqueSpecs.size}</span>
        </div>
        <div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground">
          <span>System status</span>
          <span className="flex items-center gap-1">
            <span className="blink-dot-green" />
            <span className="text-cyber-green">ONLINE</span>
          </span>
        </div>
        <div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground">
          <span>Last scan</span>
          <span className="text-foreground">{new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
