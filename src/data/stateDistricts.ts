export const stateDistricts: Record<string, string[]> = {
  "Karnataka": ["Mysore", "Bangalore", "Hubli", "Mangalore", "Belgaum"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kannur"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
  "West Bengal": ["Kolkata", "Howrah", "Asansol", "Siliguri", "Durgapur"],
  "Uttar Pradesh": ["Lucknow", "Varanasi", "Agra", "Kanpur", "Allahabad"],
};

export const states = Object.keys(stateDistricts);
