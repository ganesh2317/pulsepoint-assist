import { emergencyKeywords, specializationMap } from "@/data/symptomMap";

export interface NLPResult {
  specialization: string;
  isEmergency: boolean;
  matchedKeywords: string[];
}

export function analyzeSymptoms(text: string): NLPResult {
  const lower = text.toLowerCase();
  let isEmergency = false;
  const matchedKeywords: string[] = [];

  for (const kw of emergencyKeywords) {
    if (lower.includes(kw)) {
      isEmergency = true;
      matchedKeywords.push(kw);
    }
  }

  let bestSpec = "General Medicine";
  let bestScore = 0;

  for (const [spec, keywords] of Object.entries(specializationMap)) {
    let score = 0;
    for (const kw of keywords) {
      if (lower.includes(kw)) {
        score++;
        if (!matchedKeywords.includes(kw)) matchedKeywords.push(kw);
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestSpec = spec;
    }
  }

  if (isEmergency && bestSpec === "General Medicine") {
    bestSpec = "Emergency Care";
  }

  return { specialization: bestSpec, isEmergency, matchedKeywords };
}
