import { stateDistricts, states } from "@/data/stateDistricts";
import { Crosshair } from "lucide-react";

interface LeftPanelProps {
  selectedState: string;
  selectedDistrict: string;
  onStateChange: (state: string) => void;
  onDistrictChange: (district: string) => void;
  onVoiceClick: () => void;
  isListening: boolean;
  interimTranscript: string;
}

const LeftPanel = ({
  selectedState,
  selectedDistrict,
  onStateChange,
  onDistrictChange,
  onVoiceClick,
  isListening,
  interimTranscript,
}: LeftPanelProps) => {
  const districts = selectedState ? stateDistricts[selectedState] || [] : [];

  return (
    <div className="fixed top-4 left-4 z-30 w-80 cyber-panel rounded-md p-4 slide-in-left max-h-[calc(100vh-120px)] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="blink-dot" />
        <h2 className="text-sm font-semibold tracking-wide cyber-text">
          HEALTHCARE FACILITY LOCATOR
        </h2>
      </div>

      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
        Find the nearest healthcare facilities for appointments or emergency routing.
      </p>

      {/* State selector */}
      <div className="mb-3">
        <label className="text-xs text-muted-foreground font-medium mb-1 block">
          State
        </label>
        <select
          value={selectedState}
          onChange={(e) => onStateChange(e.target.value)}
          className="cyber-select w-full px-3 py-2 rounded text-sm"
        >
          <option value="">-- Select Sector --</option>
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* District selector */}
      <div className="mb-4">
        <label className="text-xs text-muted-foreground font-medium mb-1 block">
          District
        </label>
        <select
          value={selectedDistrict}
          onChange={(e) => onDistrictChange(e.target.value)}
          className="cyber-select w-full px-3 py-2 rounded text-sm"
          disabled={!selectedState}
        >
          <option value="">-- Select Grid --</option>
          {districts.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Voice command button */}
      <button
        onClick={onVoiceClick}
        className={`cyber-button w-full py-2.5 rounded text-sm font-medium flex items-center justify-center gap-2 ${
          isListening ? "animate-pulse" : ""
        }`}
      >
        <Crosshair className="w-4 h-4" />
        {isListening ? "Listening..." : "Initiate Voice Command"}
      </button>

      {/* Interim transcript */}
      {interimTranscript && (
        <div className="mt-3 p-2 rounded bg-muted/30 border border-border">
          <p className="text-[10px] text-muted-foreground font-mono mb-1">VOICE INPUT:</p>
          <p className="text-xs text-cyber-cyan font-mono">{interimTranscript}</p>
        </div>
      )}
    </div>
  );
};

export default LeftPanel;
