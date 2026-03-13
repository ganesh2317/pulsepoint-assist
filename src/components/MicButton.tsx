import { Mic, MicOff, Loader2 } from "lucide-react";

interface MicButtonProps {
  isListening: boolean;
  isProcessing: boolean;
  onClick: () => void;
}

const MicButton = ({ isListening, isProcessing, onClick }: MicButtonProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* Ripple rings when listening */}
      {isListening && (
        <>
          <span className="ripple-ring" style={{ animationDelay: "0s" }} />
          <span className="ripple-ring" style={{ animationDelay: "0.5s" }} />
          <span className="ripple-ring" style={{ animationDelay: "1.0s" }} />
        </>
      )}

      <button
        onClick={onClick}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          isProcessing
            ? "mic-processing"
            : isListening
            ? "mic-listening"
            : "mic-idle"
        }`}
        title="Press spacebar or click to toggle voice (en-IN)"
      >
        {isProcessing ? (
          <Loader2 className="w-6 h-6 text-cyber-cyan animate-spin" />
        ) : isListening ? (
          <MicOff className="w-6 h-6 text-white" />
        ) : (
          <Mic className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Status text */}
      <div className="text-center mt-2 text-xs font-mono">
        {isProcessing ? (
          <span className="text-cyber-cyan">PROCESSING...</span>
        ) : isListening ? (
          <span className="text-cyber-purple animate-pulse">LISTENING...</span>
        ) : (
          <span className="text-muted-foreground">VOICE CMD</span>
        )}
      </div>
    </div>
  );
};

export default MicButton;
