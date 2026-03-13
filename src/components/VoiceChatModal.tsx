import { useState, useRef, useEffect } from "react";
import { X, Send, Mic, MicOff } from "lucide-react";
import type { Hospital } from "@/data/hospitals";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface VoiceChatModalProps {
  hospital: Hospital;
  specialization: string;
  onClose: () => void;
}

const VoiceChatModal = ({ hospital, specialization, onClose }: VoiceChatModalProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatListening, setIsChatListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const systemPrompt = `You are Dr. MediAI, an expert emergency healthcare assistant. The patient has booked an appointment at ${hospital.name} for ${specialization}. Guide them with: pre-visit instructions, what to bring, immediate care steps for their symptoms, what to expect at the hospital, emergency precautions. Be concise, calm, and medically accurate. For emergencies, be urgent and clear. Speak in simple language. Keep responses under 150 words.`;

  useEffect(() => {
    // Initial greeting
    const greeting = `Welcome. I'm Dr. MediAI. You've been connected to ${hospital.name} for ${specialization}. How can I assist you with your visit preparation?`;
    setMessages([{ role: "assistant", content: greeting }]);
    speakText(greeting);
  }, [hospital.name, specialization]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const speakText = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.2;
    utterance.pitch = 1.0;
    utterance.lang = "en-IN";
    window.speechSynthesis.speak(utterance);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: ChatMessage = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Simulate AI response since we don't have Claude API key configured
      const aiResponse = generateLocalResponse(text, specialization, hospital.name);
      
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);
        speakText(aiResponse);
        setIsLoading(false);
      }, 1200);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "I apologize, there was an error processing your request. Please try again." }]);
      setIsLoading(false);
    }
  };

  const toggleChatVoice = () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;

    if (isChatListening) {
      recognitionRef.current?.stop();
      setIsChatListening(false);
      return;
    }

    const recognition = new SR();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (e: any) => {
      const text = e.results[0][0].transcript;
      sendMessage(text);
    };
    recognition.onend = () => setIsChatListening(false);
    recognition.onerror = () => setIsChatListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setIsChatListening(true);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center" style={{ background: "rgba(0,0,0,0.85)" }}>
      <div className="cyber-panel-strong rounded-lg w-full max-w-lg mx-4 h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/30">
          <div>
            <h3 className="text-sm font-mono cyber-text">DR. MEDIAI — VOICE CHAT</h3>
            <p className="text-[10px] text-muted-foreground font-mono">{hospital.name}</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble-in flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-lg px-3 py-2 text-xs font-mono leading-relaxed ${
                msg.role === "user"
                  ? "bg-cyber-purple/20 border border-cyber-purple/30 text-foreground"
                  : "bg-primary/5 border border-primary/20 text-foreground"
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-primary/5 border border-primary/20 rounded-lg px-3 py-2">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border/30 flex gap-2">
          <button
            onClick={toggleChatVoice}
            className={`p-2 rounded ${isChatListening ? "bg-cyber-purple text-white" : "bg-muted/20 text-muted-foreground hover:text-foreground"} transition-colors`}
          >
            {isChatListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Type your message..."
            className="flex-1 bg-muted/20 border border-border/50 rounded px-3 py-2 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isLoading}
            className="cyber-button p-2 rounded disabled:opacity-30"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

function generateLocalResponse(query: string, specialization: string, hospitalName: string): string {
  const lower = query.toLowerCase();
  
  if (lower.includes("what to bring") || lower.includes("documents")) {
    return `For your ${specialization} appointment at ${hospitalName}, please bring: 1) Valid photo ID (Aadhaar/PAN), 2) Previous medical records and prescriptions, 3) Insurance card if applicable, 4) List of current medications, 5) Recent test reports. Arrive 15 minutes early for registration.`;
  }
  if (lower.includes("emergency") || lower.includes("urgent")) {
    return `If this is an emergency, call the hospital directly or dial 108 for ambulance. At ${hospitalName}, proceed directly to the Emergency Department. Do not eat or drink anything. Keep the patient calm and comfortable. If there's severe bleeding, apply pressure with a clean cloth.`;
  }
  if (lower.includes("cost") || lower.includes("fee") || lower.includes("charge")) {
    return `Consultation fees at ${hospitalName} for ${specialization} typically range from ₹500-₹1500. Emergency consultations may be higher. Please contact the hospital billing department for exact charges and insurance coverage details.`;
  }
  if (lower.includes("prepare") || lower.includes("before")) {
    return `Before your ${specialization} visit: 1) Fast for 8-12 hours if blood tests needed, 2) Wear comfortable clothing, 3) Note down your symptoms timeline, 4) List any allergies, 5) Bring a companion if you feel weak. Stay hydrated unless fasting is required.`;
  }
  return `Thank you for your query. For your ${specialization} consultation at ${hospitalName}, I recommend: 1) Arrive 15 minutes early, 2) Follow any pre-visit instructions given, 3) Don't hesitate to ask your doctor questions, 4) Follow up as directed. Is there anything specific about your symptoms you'd like to discuss?`;
}

export default VoiceChatModal;
