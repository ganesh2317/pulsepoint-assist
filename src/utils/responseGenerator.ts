import type { Hospital } from "@/data/hospitals";

export function generateResponse(
  specialization: string,
  isEmergency: boolean,
  hospitals: Hospital[],
  district: string,
  nearestHospital?: Hospital & { distance?: number }
): string {
  if (isEmergency && nearestHospital) {
    const dist = nearestHospital.distance?.toFixed(1) || "unknown";
    return `Emergency detected. ${specialization} emergency identified. The nearest equipped hospital is ${nearestHospital.name}, ${dist} kilometers away. Initiating navigation now. Please stay calm.`;
  }

  if (hospitals.length > 0 && nearestHospital) {
    const dist = nearestHospital.distance?.toFixed(1) || "unknown";
    return `I've identified ${hospitals.length} hospitals specializing in ${specialization} in ${district}. The top recommended hospital is ${nearestHospital.name} with a rating of ${nearestHospital.rating} stars, located ${dist} km from your location.`;
  }

  return `I found ${hospitals.length} general hospitals in ${district}. Please select one to proceed.`;
}
