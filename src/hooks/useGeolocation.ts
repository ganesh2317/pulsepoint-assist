import { useState, useEffect } from "react";

interface GeoState {
  lat: number | null;
  lng: number | null;
  error: string | null;
  loading: boolean;
}

export function useGeolocation() {
  const [geo, setGeo] = useState<GeoState>({ lat: null, lng: null, error: null, loading: true });

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeo({ lat: 12.295, lng: 76.639, error: "Geolocation not supported, defaulting to Mysore", loading: false });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setGeo({ lat: pos.coords.latitude, lng: pos.coords.longitude, error: null, loading: false }),
      () => setGeo({ lat: 12.295, lng: 76.639, error: "Location denied, defaulting to Mysore", loading: false }),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  return geo;
}
