import { useState, useCallback, useMemo } from "react";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import MapView from "@/components/MapView";
import MicButton from "@/components/MicButton";
import EmergencyBanner from "@/components/EmergencyBanner";
import VoiceChatModal from "@/components/VoiceChatModal";
import { hospitals as allHospitalData, type Hospital } from "@/data/hospitals";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useVoice } from "@/hooks/useVoice";
import { analyzeSymptoms } from "@/utils/nlpEngine";
import { haversineDistance } from "@/utils/haversine";
import { speak } from "@/utils/speechService";
import { generateResponse } from "@/utils/responseGenerator";

const Index = () => {
  const [selectedState, setSelectedState] = useState("Karnataka");
  const [selectedDistrict, setSelectedDistrict] = useState("Mysore");
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [matchedHospitalIds, setMatchedHospitalIds] = useState<string[]>([]);
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const [detectedSpecialization, setDetectedSpecialization] = useState<string | undefined>();
  const [voiceChatOpen, setVoiceChatOpen] = useState(false);
  const [bookingHospital, setBookingHospital] = useState<Hospital | null>(null);
  const [routeTarget, setRouteTarget] = useState<Hospital | null>(null);
  const [bookingSpec, setBookingSpec] = useState("General Medicine");

  const geo = useGeolocation();

  // Filter hospitals by state/district
  const filteredHospitals = useMemo(() => {
    let list = allHospitalData;
    if (selectedState) list = list.filter(h => h.state === selectedState);
    if (selectedDistrict) list = list.filter(h => h.district === selectedDistrict);

    // Add distance from user
    if (geo.lat && geo.lng) {
      list = list.map(h => ({
        ...h,
        distance: haversineDistance(geo.lat!, geo.lng!, h.lat, h.lng),
      }));
    }
    return list;
  }, [selectedState, selectedDistrict, geo.lat, geo.lng]);

  // Matched hospitals (from voice)
  const matchedHospitals = useMemo(() => {
    if (matchedHospitalIds.length === 0) return [];
    return filteredHospitals
      .filter(h => matchedHospitalIds.includes(h.id))
      .sort((a, b) => (a.distance || 999) - (b.distance || 999));
  }, [filteredHospitals, matchedHospitalIds]);

  const handleVoiceResult = useCallback((text: string) => {
    const result = analyzeSymptoms(text);
    setDetectedSpecialization(result.specialization);
    setIsEmergencyMode(result.isEmergency);

    // Filter hospitals by specialization
    let matched = filteredHospitals.filter(h =>
      h.specializations.includes(result.specialization)
    );

    if (result.isEmergency) {
      matched = matched.filter(h => h.isEmergency);
      if (matched.length === 0) {
        matched = filteredHospitals.filter(h => h.isEmergency);
      }
    }

    // Sort by distance
    matched.sort((a, b) => (a.distance || 999) - (b.distance || 999));

    setMatchedHospitalIds(matched.map(h => h.id));

    const nearest = matched[0] || null;
    if (nearest) {
      setSelectedHospital(nearest);
      if (result.isEmergency) {
        setRouteTarget(nearest);
      }
    }

    // Generate and speak response
    const response = generateResponse(
      result.specialization,
      result.isEmergency,
      matched,
      selectedDistrict,
      nearest ? { ...nearest } : undefined
    );
    speak(response, result.isEmergency);
  }, [filteredHospitals, selectedDistrict]);

  const { isListening, isProcessing, interimTranscript, toggleListening } = useVoice(handleVoiceResult);

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedDistrict("");
    setMatchedHospitalIds([]);
    setIsEmergencyMode(false);
    setDetectedSpecialization(undefined);
    setRouteTarget(null);
  };

  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district);
    setMatchedHospitalIds([]);
    setIsEmergencyMode(false);
    setDetectedSpecialization(undefined);
    setRouteTarget(null);
  };

  const handleHospitalClick = (hospital: Hospital) => {
    setSelectedHospital(hospital);
  };

  const handleBooking = (hospital: Hospital) => {
    setBookingHospital(hospital);
    setBookingSpec(detectedSpecialization || hospital.specializations[0] || "General Medicine");
    setRouteTarget(hospital);
    setVoiceChatOpen(true);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-background">
      {/* Emergency mode effects */}
      {isEmergencyMode && (
        <>
          <EmergencyBanner
            specialization={detectedSpecialization || "Emergency"}
            hospitalName={selectedHospital?.name}
          />
        </>
      )}

      {/* Full-screen map */}
      <div className="absolute inset-0">
        <MapView
          hospitals={filteredHospitals}
          selectedHospital={selectedHospital}
          matchedHospitalIds={matchedHospitalIds}
          userLat={geo.lat}
          userLng={geo.lng}
          onHospitalClick={handleHospitalClick}
          onBooking={handleBooking}
          routeTarget={routeTarget}
        />
      </div>

      {/* Left Panel */}
      <LeftPanel
        selectedState={selectedState}
        selectedDistrict={selectedDistrict}
        onStateChange={handleStateChange}
        onDistrictChange={handleDistrictChange}
        onVoiceClick={toggleListening}
        isListening={isListening}
        interimTranscript={interimTranscript}
      />

      {/* Right Panel */}
      <RightPanel
        hospitals={filteredHospitals}
        matchedHospitals={matchedHospitals}
        selectedHospitalId={selectedHospital?.id}
        onHospitalSelect={handleBooking}
        detectedSpecialization={detectedSpecialization}
      />

      {/* Floating Mic Button */}
      <MicButton
        isListening={isListening}
        isProcessing={isProcessing}
        onClick={toggleListening}
      />

      {/* Voice Chat Modal */}
      {voiceChatOpen && bookingHospital && (
        <VoiceChatModal
          hospital={bookingHospital}
          specialization={bookingSpec}
          onClose={() => setVoiceChatOpen(false)}
        />
      )}

      {/* Floating transcript */}
      {interimTranscript && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 cyber-panel rounded px-4 py-2 max-w-md">
          <p className="text-xs font-mono text-cyber-cyan text-center">{interimTranscript}</p>
        </div>
      )}
    </div>
  );
};

export default Index;
