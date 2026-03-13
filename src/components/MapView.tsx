import { useEffect, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker, useMap } from "react-leaflet";
import L from "leaflet";
import type { Hospital } from "@/data/hospitals";

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const redIcon = new L.DivIcon({
  className: "hospital-marker-glow",
  html: `<div style="width:12px;height:12px;border-radius:50%;background:#ff3333;box-shadow:0 0 10px #ff3333,0 0 20px #ff333366;border:2px solid #ff666688"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

const greenIcon = new L.DivIcon({
  className: "hospital-marker-matched",
  html: `<div style="width:18px;height:18px;border-radius:50%;background:#00ff66;box-shadow:0 0 15px #00ff66,0 0 30px #00ff6666;border:2px solid #66ffaa88"></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

interface MapViewProps {
  hospitals: Hospital[];
  selectedHospital: Hospital | null;
  matchedHospitalIds: string[];
  userLat: number | null;
  userLng: number | null;
  onHospitalClick: (hospital: Hospital) => void;
  onBooking: (hospital: Hospital) => void;
  routeTarget: Hospital | null;
}

function FitBounds({ hospitals, userLat, userLng }: { hospitals: Hospital[]; userLat: number | null; userLng: number | null }) {
  const map = useMap();
  const prevBoundsKey = useRef("");

  useEffect(() => {
    if (hospitals.length === 0) return;
    const points: [number, number][] = hospitals.map(h => [h.lat, h.lng]);
    if (userLat && userLng) points.push([userLat, userLng]);
    const boundsKey = points.map(p => `${p[0].toFixed(3)},${p[1].toFixed(3)}`).join("|");
    if (boundsKey === prevBoundsKey.current) return;
    prevBoundsKey.current = boundsKey;
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 13 });
  }, [hospitals, userLat, userLng, map]);

  return null;
}

const specColorMap: Record<string, string> = {
  "Cardiology": "#ef4444", "Neurology": "#3b82f6", "Orthopedics": "#f59e0b",
  "General Medicine": "#10b981", "Emergency Care": "#dc2626", "Oncology": "#a855f7",
  "Pediatrics": "#ec4899", "Gynecology": "#d946ef", "Psychiatry": "#6366f1",
  "Dermatology": "#f97316", "ENT": "#14b8a6", "Ophthalmology": "#06b6d4",
  "Urology": "#eab308", "Gastroenterology": "#84cc16", "Pulmonology": "#0ea5e9",
};

const MapView = ({
  hospitals,
  selectedHospital,
  matchedHospitalIds,
  userLat,
  userLng,
  onHospitalClick,
  onBooking,
  routeTarget,
}: MapViewProps) => {
  const center: [number, number] = useMemo(() => {
    if (userLat && userLng) return [userLat, userLng];
    if (hospitals.length > 0) return [hospitals[0].lat, hospitals[0].lng];
    return [20.5937, 78.9629]; // India center
  }, [userLat, userLng, hospitals]);

  const routeLine = useMemo(() => {
    if (!routeTarget || !userLat || !userLng) return null;
    return [[userLat, userLng], [routeTarget.lat, routeTarget.lng]] as [number, number][];
  }, [routeTarget, userLat, userLng]);

  return (
    <MapContainer center={center} zoom={12} className="w-full h-full" zoomControl={true}>
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://carto.com">CARTO</a>'
      />

      <FitBounds hospitals={hospitals} userLat={userLat} userLng={userLng} />

      {/* User location */}
      {userLat && userLng && (
        <CircleMarker
          center={[userLat, userLng]}
          radius={8}
          pathOptions={{ color: "#00ffff", fillColor: "#00ffff", fillOpacity: 0.4, weight: 2 }}
        >
          <Popup>
            <div className="text-xs font-mono">
              <p className="font-bold" style={{ color: "#00ffff" }}>YOUR LOCATION</p>
              <p style={{ color: "#aaa" }}>{userLat.toFixed(4)}, {userLng.toFixed(4)}</p>
            </div>
          </Popup>
        </CircleMarker>
      )}

      {/* Hospital markers */}
      {hospitals.map((hospital) => {
        const isMatched = matchedHospitalIds.includes(hospital.id);
        const isSelected = selectedHospital?.id === hospital.id;
        return (
          <Marker
            key={hospital.id}
            position={[hospital.lat, hospital.lng]}
            icon={isMatched || isSelected ? greenIcon : redIcon}
            eventHandlers={{ click: () => onHospitalClick(hospital) }}
          >
            <Popup>
              <div className="text-xs font-mono min-w-[200px]">
                <p className="font-bold text-sm mb-1" style={{ color: "#00ffff" }}>{hospital.name}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {hospital.specializations.slice(0, 4).map(s => (
                    <span key={s} className="px-1.5 py-0.5 rounded text-[9px]" style={{
                      background: `${specColorMap[s] || "#666"}22`,
                      color: specColorMap[s] || "#aaa",
                      border: `1px solid ${specColorMap[s] || "#666"}44`
                    }}>{s}</span>
                  ))}
                </div>
                <p style={{ color: "#aaa" }}>⭐ {hospital.rating} | Beds: {hospital.availableBeds}/{hospital.totalBeds}</p>
                {hospital.isEmergency && <p style={{ color: "#ff3333" }}>🚨 Emergency Ready</p>}
                <button
                  onClick={(e) => { e.stopPropagation(); onBooking(hospital); }}
                  style={{
                    marginTop: 8, width: "100%", padding: "6px 12px",
                    background: "transparent", border: "1px solid #00d4d4",
                    color: "#00d4d4", borderRadius: 4, cursor: "pointer",
                    fontFamily: "monospace", fontSize: 11
                  }}
                >
                  INITIATE BOOKING
                </button>
              </div>
            </Popup>
          </Marker>
        );
      })}

      {/* Route polyline */}
      {routeLine && (
        <Polyline
          positions={routeLine}
          pathOptions={{ color: "#00ffff", weight: 3, dashArray: "12 6", opacity: 0.7 }}
          className="route-animate"
        />
      )}
    </MapContainer>
  );
};

export default MapView;
