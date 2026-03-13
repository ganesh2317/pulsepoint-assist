export const emergencyKeywords = [
  "chest pain", "heart attack", "stroke", "can't breathe", "not breathing",
  "unconscious", "severe bleeding", "accident", "collapsed", "seizure",
  "cardiac arrest", "choking", "drowning", "severe burn", "head injury"
];

export const specializationMap: Record<string, string[]> = {
  "Cardiology": ["chest pain", "heart", "palpitations", "blood pressure", "cardiac", "angina", "arrhythmia", "heart attack"],
  "Neurology": ["headache", "dizziness", "stroke", "seizure", "numbness", "memory loss", "tremors", "migraine", "paralysis"],
  "Orthopedics": ["bone", "fracture", "joint pain", "back pain", "knee", "shoulder", "spine", "arthritis", "sprain"],
  "Pulmonology": ["breathing", "asthma", "cough", "lung", "respiratory", "breathless", "wheezing", "can't breathe", "not breathing"],
  "Gastroenterology": ["stomach", "abdomen", "nausea", "vomiting", "diarrhea", "liver", "ulcer", "constipation", "acidity"],
  "Pediatrics": ["child", "baby", "infant", "fever in child", "vaccination", "newborn"],
  "Gynecology": ["pregnancy", "menstrual", "ovary", "uterus", "gynecology", "women health", "period"],
  "Oncology": ["cancer", "tumor", "chemotherapy", "oncology", "biopsy", "malignant"],
  "Psychiatry": ["anxiety", "depression", "mental", "stress", "panic attack", "insomnia", "bipolar"],
  "ENT": ["ear", "nose", "throat", "hearing", "sinus", "tonsil", "vertigo"],
  "Ophthalmology": ["eye", "vision", "sight", "cataract", "glaucoma", "blind"],
  "Dermatology": ["skin", "rash", "acne", "allergy", "eczema", "psoriasis", "itching"],
  "Urology": ["kidney", "urinary", "bladder", "prostate", "kidney stone"],
  "General Medicine": ["fever", "cold", "flu", "weakness", "fatigue", "general checkup", "body ache", "infection"],
  "Emergency Care": ["emergency", "critical", "urgent", "ambulance", "accident", "trauma"],
};

export const allSpecializations = Object.keys(specializationMap);
