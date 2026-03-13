export interface Doctor {
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  available: boolean;
}

export interface Hospital {
  id: string;
  name: string;
  state: string;
  district: string;
  lat: number;
  lng: number;
  specializations: string[];
  rating: number;
  totalBeds: number;
  availableBeds: number;
  isEmergency: boolean;
  phone: string;
  address: string;
  doctors: Doctor[];
  distance?: number;
}

function h(id: string, name: string, state: string, district: string, lat: number, lng: number, specs: string[], rating: number, totalBeds: number, availBeds: number, isEmergency: boolean, phone: string, address: string, doctors: Doctor[]): Hospital {
  return { id, name, state, district, lat, lng, specializations: specs, rating, totalBeds, availableBeds: availBeds, isEmergency, phone, address, doctors };
}

function d(name: string, spec: string, exp: number, rating: number, avail = true): Doctor {
  return { name, specialization: spec, experience: exp, rating, available: avail };
}

const S = {
  C: "Cardiology", N: "Neurology", O: "Orthopedics", GM: "General Medicine",
  EC: "Emergency Care", ON: "Oncology", P: "Pediatrics", G: "Gynecology",
  PS: "Psychiatry", D: "Dermatology", ENT: "ENT", OP: "Ophthalmology",
  U: "Urology", GE: "Gastroenterology", PU: "Pulmonology"
};

export const hospitals: Hospital[] = [
  // ===== KARNATAKA - MYSORE (50 hospitals) =====
  h("KA-MYS-001","Bharath Hospital and Institute of Oncology","Karnataka","Mysore",12.295,76.639,[S.ON,S.C,S.GM,S.EC],4.3,200,45,true,"+91-821-2401234","Saraswathipuram, Mysore",[d("Dr. Ravi Kumar",S.ON,18,4.5),d("Dr. Meena Sharma",S.C,15,4.3)]),
  h("KA-MYS-002","Columbia Asia Hospital Mysore","Karnataka","Mysore",12.311,76.652,[S.C,S.N,S.O,S.EC,S.GM],4.5,300,62,true,"+91-821-2402345","Hebbal, Mysore",[d("Dr. Suresh Babu",S.C,20,4.7),d("Dr. Anitha Rao",S.N,14,4.4)]),
  h("KA-MYS-003","JSS Hospital","Karnataka","Mysore",12.303,76.636,[S.GM,S.C,S.N,S.O,S.P,S.G,S.EC],4.4,800,120,true,"+91-821-2403456","Ramanuja Road, Mysore",[d("Dr. Mohan Das",S.GM,22,4.6),d("Dr. Lakshmi Devi",S.G,16,4.5)]),
  h("KA-MYS-004","Narayana Multispeciality Hospital","Karnataka","Mysore",12.289,76.645,[S.C,S.N,S.EC,S.GE,S.PU],4.2,250,38,true,"+91-821-2404567","Kuvempunagar, Mysore",[d("Dr. Prasad Hegde",S.C,17,4.4),d("Dr. Vijay Kumar",S.PU,12,4.2)]),
  h("KA-MYS-005","Apollo BGS Hospitals Mysore","Karnataka","Mysore",12.321,76.618,[S.C,S.N,S.O,S.ON,S.EC,S.U],4.6,500,85,true,"+91-821-2405678","Adichunchanagiri Road, Mysore",[d("Dr. Krishna Murthy",S.C,25,4.8),d("Dr. Savitha Gowda",S.ON,15,4.5)]),
  h("KA-MYS-006","Vikram Hospital","Karnataka","Mysore",12.298,76.641,[S.O,S.N,S.GM,S.EC],4.1,150,28,true,"+91-821-2406789","Lakshmipuram, Mysore",[d("Dr. Anil Kumar",S.O,14,4.2),d("Dr. Shweta Reddy",S.N,10,4.0)]),
  h("KA-MYS-007","Manipal Hospital Mysore","Karnataka","Mysore",12.277,76.659,[S.C,S.N,S.O,S.GE,S.EC,S.P],4.5,400,70,true,"+91-821-2407890","Irwin Road, Mysore",[d("Dr. Deepak Nair",S.C,19,4.6),d("Dr. Priya Sharma",S.P,12,4.3)]),
  h("KA-MYS-008","K.R. Hospital (Government)","Karnataka","Mysore",12.307,76.648,[S.GM,S.EC,S.O,S.P,S.G],3.8,1200,200,true,"+91-821-2408901","Irwin Road, Mysore",[d("Dr. Ramesh Gowda",S.GM,30,4.0),d("Dr. Fathima Begum",S.G,20,3.9)]),
  h("KA-MYS-009","Basappa Memorial Hospital","Karnataka","Mysore",12.315,76.643,[S.GM,S.O,S.ENT,S.D],3.9,120,22,false,"+91-821-2409012","Vishveshwaraiah Road, Mysore",[d("Dr. Basappa Shetty",S.GM,25,4.1)]),
  h("KA-MYS-010","District Hospital Mysore","Karnataka","Mysore",12.302,76.631,[S.GM,S.EC,S.P,S.G,S.O],3.7,600,110,true,"+91-821-2410123","Dhanvantri Road, Mysore",[d("Dr. Shankar Prasad",S.GM,28,3.8)]),
  h("KA-MYS-011","Cauvery Heart & Multispeciality Hospital","Karnataka","Mysore",12.308,76.654,[S.C,S.EC,S.GM],4.3,180,35,true,"+91-821-2411111","Hunsur Road, Mysore",[d("Dr. Venkatesh Murthy",S.C,16,4.4)]),
  h("KA-MYS-012","Kamakshi Hospital","Karnataka","Mysore",12.296,76.647,[S.G,S.P,S.GM],4.0,100,18,false,"+91-821-2412222","Saraswathipuram, Mysore",[d("Dr. Kamala Devi",S.G,14,4.1)]),
  h("KA-MYS-013","Sadashiva Hospital","Karnataka","Mysore",12.318,76.637,[S.GM,S.D,S.ENT],3.6,80,15,false,"+91-821-2413333","Vijayanagar, Mysore",[d("Dr. Sadashiva Rao",S.GM,20,3.7)]),
  h("KA-MYS-014","Mission Hospital Mysore","Karnataka","Mysore",12.305,76.625,[S.GM,S.O,S.OP],3.8,90,20,false,"+91-821-2414444","Nazarbad, Mysore",[d("Dr. Joseph Thomas",S.OP,15,3.9)]),
  h("KA-MYS-015","Shree Devi Hospital","Karnataka","Mysore",12.285,76.651,[S.GM,S.GE,S.EC],3.9,110,25,true,"+91-821-2415555","Jayalakshmipuram, Mysore",[d("Dr. Devi Prasad",S.GE,12,4.0)]),
  h("KA-MYS-016","Mysore Kidney Foundation","Karnataka","Mysore",12.299,76.657,[S.U,S.GM],4.1,60,12,false,"+91-821-2416666","Kuvempunagar, Mysore",[d("Dr. Rajendra Kumar",S.U,18,4.3)]),
  h("KA-MYS-017","Suyog Hospital","Karnataka","Mysore",12.312,76.641,[S.O,S.GM,S.D],3.7,70,14,false,"+91-821-2417777","Hebbal, Mysore",[d("Dr. Suyog Patil",S.O,10,3.8)]),
  h("KA-MYS-018","Janata Nursing Home","Karnataka","Mysore",12.290,76.633,[S.GM,S.P],3.5,50,10,false,"+91-821-2418888","Chamaraja Mohalla, Mysore",[d("Dr. Janardhan Rao",S.GM,22,3.6)]),
  h("KA-MYS-019","Cheluvamba Hospital","Karnataka","Mysore",12.306,76.644,[S.P,S.G,S.GM],4.0,200,40,true,"+91-821-2419999","Irwin Road, Mysore",[d("Dr. Pushpalatha",S.P,18,4.2)]),
  h("KA-MYS-020","Jayadeva Hospital Mysore","Karnataka","Mysore",12.280,76.665,[S.C,S.EC],4.4,150,30,true,"+91-821-2420000","KRS Road, Mysore",[d("Dr. Jayadeva Murthy",S.C,22,4.5)]),
  h("KA-MYS-021","Sri Chamarajendra Hospital","Karnataka","Mysore",12.301,76.649,[S.GM,S.EC,S.O],3.6,400,80,true,"+91-821-2421111","Fort Mohalla, Mysore",[d("Dr. Chamaraja Urs",S.GM,25,3.7)]),
  h("KA-MYS-022","Mysore Medical College Hospital","Karnataka","Mysore",12.304,76.640,[S.GM,S.N,S.C,S.EC],4.0,900,150,true,"+91-821-2422222","Irwin Road, Mysore",[d("Dr. Srinivas Murthy",S.N,20,4.1)]),
  h("KA-MYS-023","Shantala Hospital","Karnataka","Mysore",12.292,76.636,[S.G,S.P],3.8,80,15,false,"+91-821-2423333","Gokulam, Mysore",[d("Dr. Shantala Kumari",S.G,12,3.9)]),
  h("KA-MYS-024","Anand Diagnostic Laboratory & Hospital","Karnataka","Mysore",12.310,76.656,[S.GM,S.GE,S.PU],4.0,60,10,false,"+91-821-2424444","Saraswathipuram, Mysore",[d("Dr. Anand Kumar",S.GE,14,4.1)]),
  h("KA-MYS-025","Medi-wave Hospital","Karnataka","Mysore",12.287,76.643,[S.O,S.N,S.GM],3.9,90,18,false,"+91-821-2425555","Kuvempunagar, Mysore",[d("Dr. Wave Kumar",S.O,11,4.0)]),
  h("KA-MYS-026","Pristine Hospital Mysore","Karnataka","Mysore",12.316,76.635,[S.GM,S.C,S.EC],4.2,120,25,true,"+91-821-2426666","Vijayanagar, Mysore",[d("Dr. Pristine Raj",S.C,15,4.3)]),
  h("KA-MYS-027","Sathya Sai Hospital","Karnataka","Mysore",12.275,76.670,[S.GM,S.OP,S.ENT],3.7,100,20,false,"+91-821-2427777","Hootagalli, Mysore",[d("Dr. Sathya Prasad",S.OP,13,3.8)]),
  h("KA-MYS-028","Brindavan Hospital","Karnataka","Mysore",12.322,76.625,[S.GM,S.PS,S.D],3.6,70,12,false,"+91-821-2428888","Brindavan Extension, Mysore",[d("Dr. Brinda Sharma",S.PS,10,3.7)]),
  h("KA-MYS-029","Nethralaya Eye Hospital","Karnataka","Mysore",12.300,76.652,[S.OP],4.3,40,8,false,"+91-821-2429999","Lakshmipuram, Mysore",[d("Dr. Nethralaya Gowda",S.OP,20,4.5)]),
  h("KA-MYS-030","Guru Hospital","Karnataka","Mysore",12.293,76.638,[S.GM,S.EC,S.GE],3.8,100,22,true,"+91-821-2430000","Jayalakshmipuram, Mysore",[d("Dr. Guru Prasad",S.GE,16,3.9)]),
  h("KA-MYS-031","Swasthya Hospital","Karnataka","Mysore",12.314,76.649,[S.GM,S.PU,S.D],3.7,85,17,false,"+91-821-2431111","Hebbal, Mysore",[d("Dr. Swasthya Rao",S.PU,11,3.8)]),
  h("KA-MYS-032","Arogya Hospital","Karnataka","Mysore",12.283,76.655,[S.GM,S.O,S.P],3.9,95,19,false,"+91-821-2432222","Bogadi, Mysore",[d("Dr. Arogya Kumar",S.O,13,4.0)]),
  h("KA-MYS-033","Life Care Hospital","Karnataka","Mysore",12.309,76.632,[S.C,S.N,S.EC],4.1,130,28,true,"+91-821-2433333","Nazarbad, Mysore",[d("Dr. Life Prasad",S.C,17,4.2)]),
  h("KA-MYS-034","Spandana Hospital","Karnataka","Mysore",12.297,76.660,[S.G,S.P,S.GM],4.0,75,14,false,"+91-821-2434444","Dattagalli, Mysore",[d("Dr. Spandana Devi",S.G,11,4.1)]),
  h("KA-MYS-035","Nirmaya Hospital","Karnataka","Mysore",12.320,76.640,[S.GM,S.GE,S.U],3.8,90,18,false,"+91-821-2435555","Vijayanagar, Mysore",[d("Dr. Nirmaya Shetty",S.U,14,3.9)]),
  h("KA-MYS-036","Ayush Hospital","Karnataka","Mysore",12.286,76.648,[S.GM,S.D,S.ENT],3.6,60,12,false,"+91-821-2436666","Gokulam, Mysore",[d("Dr. Ayush Kumar",S.ENT,9,3.7)]),
  h("KA-MYS-037","Samraksha Hospital","Karnataka","Mysore",12.313,76.658,[S.EC,S.GM,S.O],4.0,110,24,true,"+91-821-2437777","Saraswathipuram, Mysore",[d("Dr. Samraksha Rao",S.EC,16,4.1)]),
  h("KA-MYS-038","Sree Kanteerava Hospital","Karnataka","Mysore",12.291,76.630,[S.GM,S.C,S.N],3.9,100,20,false,"+91-821-2438888","Chamaraja Mohalla, Mysore",[d("Dr. Kanteerava Gowda",S.N,13,4.0)]),
  h("KA-MYS-039","Asha Hospital Mysore","Karnataka","Mysore",12.305,76.667,[S.GM,S.PS,S.G],3.7,70,15,false,"+91-821-2439999","Dattagalli, Mysore",[d("Dr. Asha Kumari",S.PS,10,3.8)]),
  h("KA-MYS-040","Royal Hospital Mysore","Karnataka","Mysore",12.319,76.645,[S.GM,S.O,S.EC],4.1,140,30,true,"+91-821-2440000","Hebbal, Mysore",[d("Dr. Royal Prasad",S.O,18,4.2)]),
  h("KA-MYS-041","Green City Hospital","Karnataka","Mysore",12.282,76.662,[S.GM,S.P,S.D],3.6,65,13,false,"+91-821-2441111","Bogadi, Mysore",[d("Dr. Green Kumar",S.P,8,3.7)]),
  h("KA-MYS-042","Vidya Hospital","Karnataka","Mysore",12.300,76.635,[S.OP,S.ENT,S.GM],3.8,55,11,false,"+91-821-2442222","Kuvempunagar, Mysore",[d("Dr. Vidya Prasad",S.ENT,12,3.9)]),
  h("KA-MYS-043","Metro Hospital Mysore","Karnataka","Mysore",12.317,76.652,[S.C,S.GE,S.GM],4.0,100,20,false,"+91-821-2443333","Saraswathipuram, Mysore",[d("Dr. Metro Kumar",S.C,14,4.1)]),
  h("KA-MYS-044","Rainbow Children's Hospital Mysore","Karnataka","Mysore",12.294,76.644,[S.P,S.GM],4.4,80,16,false,"+91-821-2444444","Lakshmipuram, Mysore",[d("Dr. Rainbow Devi",S.P,15,4.5)]),
  h("KA-MYS-045","Medipoint Hospital","Karnataka","Mysore",12.307,76.660,[S.GM,S.O,S.EC],3.9,90,18,true,"+91-821-2445555","Dattagalli, Mysore",[d("Dr. Medipoint Rao",S.O,11,4.0)]),
  h("KA-MYS-046","Sanjeevani Hospital","Karnataka","Mysore",12.288,76.637,[S.GM,S.C,S.PU],4.0,110,22,false,"+91-821-2446666","Jayalakshmipuram, Mysore",[d("Dr. Sanjeevani Kumar",S.PU,13,4.1)]),
  h("KA-MYS-047","City Hospital Mysore","Karnataka","Mysore",12.310,76.642,[S.GM,S.EC,S.GE],3.8,120,25,true,"+91-821-2447777","Lakshmipuram, Mysore",[d("Dr. City Prasad",S.GE,15,3.9)]),
  h("KA-MYS-048","Lotus Hospital","Karnataka","Mysore",12.278,76.655,[S.G,S.P,S.GM],4.1,70,14,false,"+91-821-2448888","KRS Road, Mysore",[d("Dr. Lotus Kumari",S.G,10,4.2)]),
  h("KA-MYS-049","Fortis Hospital Mysore","Karnataka","Mysore",12.323,76.620,[S.C,S.N,S.O,S.EC,S.ON],4.5,350,60,true,"+91-821-2449999","Ring Road, Mysore",[d("Dr. Fortis Kumar",S.C,20,4.6)]),
  h("KA-MYS-050","Max Care Hospital Mysore","Karnataka","Mysore",12.284,76.668,[S.GM,S.EC,S.U,S.GE],4.0,130,27,true,"+91-821-2450000","Hootagalli, Mysore",[d("Dr. Max Prasad",S.U,14,4.1)]),

  // ===== KARNATAKA - BANGALORE (5) =====
  h("KA-BLR-001","Manipal Hospital Whitefield","Karnataka","Bangalore",12.973,77.751,[S.C,S.N,S.O,S.EC],4.6,600,100,true,"+91-80-2501111","Whitefield, Bangalore",[d("Dr. Rajesh Nair",S.C,22,4.7)]),
  h("KA-BLR-002","Narayana Health City","Karnataka","Bangalore",12.883,77.602,[S.C,S.N,S.EC,S.ON],4.7,800,130,true,"+91-80-2502222","Bommasandra, Bangalore",[d("Dr. Devi Shetty",S.C,30,4.9)]),
  h("KA-BLR-003","Apollo Hospital Bangalore","Karnataka","Bangalore",12.944,77.624,[S.C,S.O,S.ON,S.EC],4.5,500,90,true,"+91-80-2503333","Bannerghatta Road, Bangalore",[d("Dr. Apollo Kumar",S.ON,18,4.5)]),
  h("KA-BLR-004","Fortis Hospital Bangalore","Karnataka","Bangalore",13.003,77.566,[S.C,S.N,S.GE,S.EC],4.4,400,70,true,"+91-80-2504444","Rajajinagar, Bangalore",[d("Dr. Fortis Rao",S.N,16,4.4)]),
  h("KA-BLR-005","St. John's Medical College Hospital","Karnataka","Bangalore",12.930,77.620,[S.GM,S.EC,S.P,S.G],4.3,700,120,true,"+91-80-2505555","Koramangala, Bangalore",[d("Dr. John Thomas",S.GM,25,4.4)]),

  // ===== KARNATAKA - HUBLI (3) =====
  h("KA-HUB-001","KIMS Hospital Hubli","Karnataka","Hubli",15.364,75.124,[S.GM,S.C,S.EC],4.2,400,80,true,"+91-836-2601111","Vidyanagar, Hubli",[d("Dr. KIMS Kumar",S.C,18,4.3)]),
  h("KA-HUB-002","SDM Hospital Dharwad","Karnataka","Hubli",15.458,75.005,[S.GM,S.O,S.N,S.EC],4.1,350,65,true,"+91-836-2602222","Sattur, Dharwad",[d("Dr. SDM Rao",S.N,15,4.2)]),
  h("KA-HUB-003","Ashwini Hospital Hubli","Karnataka","Hubli",15.355,75.130,[S.GM,S.GE,S.PU],3.9,150,30,false,"+91-836-2603333","Gokul Road, Hubli",[d("Dr. Ashwini Kumar",S.GE,12,4.0)]),

  // ===== KARNATAKA - MANGALORE (3) =====
  h("KA-MNG-001","KMC Hospital Mangalore","Karnataka","Mangalore",12.871,74.843,[S.C,S.N,S.O,S.EC],4.5,500,85,true,"+91-824-2701111","Attavar, Mangalore",[d("Dr. KMC Shetty",S.C,20,4.6)]),
  h("KA-MNG-002","AJ Hospital Mangalore","Karnataka","Mangalore",12.865,74.837,[S.GM,S.EC,S.O,S.GE],4.3,300,55,true,"+91-824-2702222","Kuntikan, Mangalore",[d("Dr. AJ Kumar",S.O,16,4.4)]),
  h("KA-MNG-003","Father Muller's Hospital","Karnataka","Mangalore",12.858,74.850,[S.GM,S.C,S.N,S.EC],4.4,450,75,true,"+91-824-2703333","Kankanady, Mangalore",[d("Dr. Muller Dsouza",S.N,18,4.5)]),

  // ===== KARNATAKA - BELGAUM (2) =====
  h("KA-BEL-001","KLE Hospital Belgaum","Karnataka","Belgaum",15.849,74.505,[S.GM,S.C,S.O,S.EC],4.2,600,100,true,"+91-831-2801111","Nehru Nagar, Belgaum",[d("Dr. KLE Patil",S.C,19,4.3)]),
  h("KA-BEL-002","BIMS Hospital Belgaum","Karnataka","Belgaum",15.861,74.498,[S.GM,S.EC,S.G,S.P],3.9,400,70,true,"+91-831-2802222","Maratha Galli, Belgaum",[d("Dr. BIMS Kumar",S.GM,22,4.0)]),

  // ===== MAHARASHTRA - MUMBAI (5) =====
  h("MH-MUM-001","Lilavati Hospital","Maharashtra","Mumbai",19.051,72.826,[S.C,S.N,S.O,S.ON,S.EC],4.6,300,50,true,"+91-22-2601111","Bandra, Mumbai",[d("Dr. Lilavati Mehta",S.C,25,4.7)]),
  h("MH-MUM-002","Kokilaben Hospital","Maharashtra","Mumbai",19.136,72.828,[S.C,S.N,S.ON,S.EC],4.7,500,80,true,"+91-22-2602222","Andheri, Mumbai",[d("Dr. Kokilaben Shah",S.ON,22,4.8)]),
  h("MH-MUM-003","Breach Candy Hospital","Maharashtra","Mumbai",18.969,72.805,[S.GM,S.C,S.EC,S.O],4.5,250,45,true,"+91-22-2603333","Breach Candy, Mumbai",[d("Dr. Candy Desai",S.C,20,4.6)]),
  h("MH-MUM-004","Hinduja Hospital","Maharashtra","Mumbai",19.027,72.841,[S.C,S.N,S.GE,S.EC],4.4,400,65,true,"+91-22-2604444","Mahim, Mumbai",[d("Dr. Hinduja Patel",S.GE,18,4.5)]),
  h("MH-MUM-005","Jaslok Hospital","Maharashtra","Mumbai",18.968,72.810,[S.C,S.O,S.N,S.EC],4.5,300,55,true,"+91-22-2605555","Peddar Road, Mumbai",[d("Dr. Jaslok Kapoor",S.N,20,4.5)]),

  // ===== MAHARASHTRA - PUNE (4) =====
  h("MH-PUN-001","Ruby Hall Clinic","Maharashtra","Pune",18.532,73.883,[S.C,S.EC,S.GM,S.O],4.4,350,60,true,"+91-20-2701111","Sassoon Road, Pune",[d("Dr. Ruby Kulkarni",S.C,18,4.5)]),
  h("MH-PUN-002","Sahyadri Hospital","Maharashtra","Pune",18.518,73.856,[S.C,S.N,S.O,S.EC],4.3,400,70,true,"+91-20-2702222","Deccan, Pune",[d("Dr. Sahyadri Joshi",S.N,16,4.4)]),
  h("MH-PUN-003","Jehangir Hospital","Maharashtra","Pune",18.530,73.874,[S.GM,S.C,S.GE,S.EC],4.5,300,50,true,"+91-20-2703333","Sassoon Road, Pune",[d("Dr. Jehangir Mehta",S.GE,20,4.6)]),
  h("MH-PUN-004","Deenanath Mangeshkar Hospital","Maharashtra","Pune",18.497,73.826,[S.C,S.O,S.ON,S.EC],4.4,350,55,true,"+91-20-2704444","Erandwane, Pune",[d("Dr. Deenanath Pawar",S.ON,17,4.5)]),

  // ===== MAHARASHTRA - NAGPUR (3) =====
  h("MH-NAG-001","Lata Mangeshkar Hospital","Maharashtra","Nagpur",21.147,79.080,[S.GM,S.C,S.EC,S.O],4.2,500,85,true,"+91-712-2801111","Sitabuldi, Nagpur",[d("Dr. Lata Deshmukh",S.C,19,4.3)]),
  h("MH-NAG-002","Orange City Hospital","Maharashtra","Nagpur",21.140,79.088,[S.C,S.N,S.GE,S.EC],4.3,300,50,true,"+91-712-2802222","Nagpur",[d("Dr. Orange Patil",S.N,15,4.4)]),
  h("MH-NAG-003","Wockhardt Hospital Nagpur","Maharashtra","Nagpur",21.155,79.073,[S.C,S.O,S.EC],4.1,250,40,true,"+91-712-2803333","Shankar Nagar, Nagpur",[d("Dr. Wockhardt Kumar",S.O,14,4.2)]),

  // ===== MAHARASHTRA - NASHIK (2) =====
  h("MH-NSK-001","Wockhardt Hospital Nashik","Maharashtra","Nashik",20.000,73.790,[S.C,S.N,S.EC,S.GM],4.1,200,35,true,"+91-253-2901111","Nashik",[d("Dr. Nashik Shah",S.C,13,4.2)]),
  h("MH-NSK-002","Sahyadri Hospital Nashik","Maharashtra","Nashik",19.993,73.783,[S.GM,S.O,S.EC],4.0,180,30,true,"+91-253-2902222","Nashik",[d("Dr. Sahyadri Nashik",S.O,11,4.1)]),

  // ===== MAHARASHTRA - AURANGABAD (2) =====
  h("MH-AUR-001","MGM Hospital Aurangabad","Maharashtra","Aurangabad",19.878,75.343,[S.GM,S.C,S.EC,S.O],4.0,400,70,true,"+91-240-3001111","Aurangabad",[d("Dr. MGM Desai",S.C,16,4.1)]),
  h("MH-AUR-002","Government Medical College Aurangabad","Maharashtra","Aurangabad",19.885,75.335,[S.GM,S.EC,S.P,S.G],3.8,600,100,true,"+91-240-3002222","Aurangabad",[d("Dr. GMC Kumar",S.GM,20,3.9)]),

  // ===== TAMIL NADU - CHENNAI (5) =====
  h("TN-CHE-001","Apollo Hospitals Chennai","Tamil Nadu","Chennai",13.008,80.228,[S.C,S.N,S.ON,S.O,S.EC],4.7,700,120,true,"+91-44-2601111","Greams Road, Chennai",[d("Dr. Apollo Reddy",S.C,28,4.8)]),
  h("TN-CHE-002","MIOT International","Tamil Nadu","Chennai",13.016,80.188,[S.O,S.N,S.C,S.EC],4.5,500,85,true,"+91-44-2602222","Manapakkam, Chennai",[d("Dr. MIOT Kumar",S.O,22,4.6)]),
  h("TN-CHE-003","Fortis Malar Hospital","Tamil Nadu","Chennai",13.035,80.259,[S.C,S.EC,S.GE,S.GM],4.3,300,50,true,"+91-44-2603333","Adyar, Chennai",[d("Dr. Malar Rajan",S.C,18,4.4)]),
  h("TN-CHE-004","Kauvery Hospital","Tamil Nadu","Chennai",12.991,80.218,[S.C,S.N,S.EC,S.PU],4.4,350,60,true,"+91-44-2604444","Alwarpet, Chennai",[d("Dr. Kauvery Sundaram",S.N,20,4.5)]),
  h("TN-CHE-005","Vijaya Hospital","Tamil Nadu","Chennai",12.997,80.237,[S.GM,S.C,S.O,S.EC],4.2,250,40,true,"+91-44-2605555","Vadapalani, Chennai",[d("Dr. Vijaya Kumar",S.GM,16,4.3)]),

  // ===== TAMIL NADU - COIMBATORE (3) =====
  h("TN-COI-001","PSG Hospitals","Tamil Nadu","Coimbatore",11.024,76.957,[S.C,S.N,S.O,S.EC],4.4,500,80,true,"+91-422-2701111","Peelamedu, Coimbatore",[d("Dr. PSG Raman",S.C,20,4.5)]),
  h("TN-COI-002","KMCH Hospital","Tamil Nadu","Coimbatore",11.001,76.963,[S.C,S.GM,S.EC,S.ON],4.3,450,70,true,"+91-422-2702222","Avinashi Road, Coimbatore",[d("Dr. KMCH Kumar",S.ON,18,4.4)]),
  h("TN-COI-003","Ganga Hospital","Tamil Nadu","Coimbatore",10.988,76.948,[S.O,S.EC,S.GM],4.5,300,50,true,"+91-422-2703333","Mettupalayam Road, Coimbatore",[d("Dr. Ganga Rajan",S.O,22,4.6)]),

  // ===== TAMIL NADU - MADURAI (3) =====
  h("TN-MAD-001","Meenakshi Mission Hospital","Tamil Nadu","Madurai",9.919,78.121,[S.C,S.N,S.EC,S.GM],4.4,400,65,true,"+91-452-2801111","Lake Area, Madurai",[d("Dr. Meenakshi Kumar",S.C,19,4.5)]),
  h("TN-MAD-002","Apollo Hospitals Madurai","Tamil Nadu","Madurai",9.929,78.130,[S.C,S.O,S.ON,S.EC],4.3,350,55,true,"+91-452-2802222","KK Nagar, Madurai",[d("Dr. Apollo Madurai",S.ON,16,4.4)]),
  h("TN-MAD-003","Government Rajaji Hospital","Tamil Nadu","Madurai",9.917,78.116,[S.GM,S.EC,S.P,S.G],3.9,800,130,true,"+91-452-2803333","Panagal Road, Madurai",[d("Dr. Rajaji Kumar",S.GM,25,4.0)]),

  // ===== TAMIL Nadu - SALEM (2) =====
  h("TN-SAL-001","Shanmuga Hospital","Tamil Nadu","Salem",11.651,78.158,[S.GM,S.C,S.EC],4.0,200,35,true,"+91-427-2901111","Salem",[d("Dr. Shanmuga Rajan",S.C,14,4.1)]),
  h("TN-SAL-002","SKS Hospital Salem","Tamil Nadu","Salem",11.660,78.165,[S.GM,S.O,S.EC],3.9,180,30,true,"+91-427-2902222","Salem",[d("Dr. SKS Kumar",S.O,12,4.0)]),

  // ===== TAMIL NADU - TRICHY (2) =====
  h("TN-TRI-001","Kaveri Medical Center","Tamil Nadu","Trichy",10.790,78.705,[S.C,S.N,S.EC,S.GM],4.3,300,50,true,"+91-431-3001111","Tennur, Trichy",[d("Dr. Kaveri Rajan",S.C,18,4.4)]),
  h("TN-TRI-002","SRMC Hospital Trichy","Tamil Nadu","Trichy",10.780,78.695,[S.GM,S.O,S.EC],4.0,250,40,true,"+91-431-3002222","Trichy",[d("Dr. SRMC Kumar",S.O,15,4.1)]),

  // ===== DELHI - NEW DELHI (5) =====
  h("DL-ND-001","AIIMS New Delhi","Delhi","New Delhi",28.567,77.210,[S.C,S.N,S.O,S.ON,S.EC,S.GM],4.8,2500,400,true,"+91-11-2601111","Ansari Nagar, New Delhi",[d("Dr. AIIMS Kumar",S.C,30,4.9)]),
  h("DL-ND-002","Safdarjung Hospital","Delhi","New Delhi",28.568,77.207,[S.GM,S.EC,S.O,S.G],4.2,1500,250,true,"+91-11-2602222","Ansari Nagar, New Delhi",[d("Dr. Safdar Kumar",S.GM,25,4.3)]),
  h("DL-ND-003","Max Hospital Saket","Delhi","New Delhi",28.527,77.212,[S.C,S.N,S.ON,S.EC],4.6,500,80,true,"+91-11-2603333","Saket, New Delhi",[d("Dr. Max Sharma",S.ON,20,4.7)]),
  h("DL-ND-004","Sir Ganga Ram Hospital","Delhi","New Delhi",28.639,77.189,[S.C,S.N,S.O,S.EC,S.GM],4.5,675,100,true,"+91-11-2604444","Rajinder Nagar, New Delhi",[d("Dr. Ganga Gupta",S.C,22,4.6)]),
  h("DL-ND-005","Fortis Escorts Heart Institute","Delhi","New Delhi",28.549,77.218,[S.C,S.EC],4.7,300,50,true,"+91-11-2605555","Okhla, New Delhi",[d("Dr. Escorts Bhatia",S.C,25,4.8)]),

  // ===== DELHI - Other Districts (8) =====
  h("DL-ND-006","RML Hospital","Delhi","North Delhi",28.632,77.206,[S.GM,S.EC,S.O,S.P],4.0,1000,170,true,"+91-11-2701111","Baba Kharak Singh Marg",[d("Dr. RML Kapoor",S.GM,22,4.1)]),
  h("DL-ND-007","GTB Hospital","Delhi","East Delhi",28.685,77.305,[S.GM,S.EC,S.C,S.O],3.9,1500,250,true,"+91-11-2702222","Dilshad Garden",[d("Dr. GTB Singh",S.GM,20,4.0)]),
  h("DL-SD-001","Apollo Hospital Delhi","Delhi","South Delhi",28.541,77.282,[S.C,S.N,S.ON,S.EC],4.6,700,120,true,"+91-11-2801111","Jasola, South Delhi",[d("Dr. Apollo Delhi",S.C,24,4.7)]),
  h("DL-SD-002","BLK Super Speciality","Delhi","South Delhi",28.645,77.185,[S.C,S.N,S.O,S.EC],4.5,500,85,true,"+91-11-2802222","Pusa Road",[d("Dr. BLK Mehta",S.N,20,4.6)]),
  h("DL-WD-001","Deen Dayal Hospital","Delhi","West Delhi",28.654,77.098,[S.GM,S.EC,S.P,S.G],3.8,400,70,true,"+91-11-2901111","Hari Nagar",[d("Dr. Deen Dayal",S.GM,18,3.9)]),
  h("DL-WD-002","Maharaja Agrasen Hospital","Delhi","West Delhi",28.639,77.098,[S.GM,S.C,S.O,S.EC],4.1,300,50,true,"+91-11-2902222","Punjabi Bagh",[d("Dr. Agrasen Gupta",S.C,16,4.2)]),
  h("DL-ED-001","Lal Bahadur Shastri Hospital","Delhi","East Delhi",28.663,77.291,[S.GM,S.EC,S.O],3.7,500,90,true,"+91-11-3001111","Khichripur",[d("Dr. LBS Singh",S.GM,15,3.8)]),
  h("DL-ND-008","Lok Nayak Hospital","Delhi","North Delhi",28.637,77.238,[S.GM,S.EC,S.C,S.P],4.1,2000,350,true,"+91-11-3002222","JLN Marg",[d("Dr. Lok Nayak",S.GM,25,4.2)]),

  // ===== TELANGANA - HYDERABAD (5) =====
  h("TS-HYD-001","NIMS Hospital","Telangana","Hyderabad",17.405,78.478,[S.C,S.N,S.O,S.EC,S.GM],4.4,1500,250,true,"+91-40-2601111","Punjagutta, Hyderabad",[d("Dr. NIMS Reddy",S.C,25,4.5)]),
  h("TS-HYD-002","Apollo Hospitals Jubilee Hills","Telangana","Hyderabad",17.432,78.407,[S.C,S.N,S.ON,S.EC],4.6,700,120,true,"+91-40-2602222","Jubilee Hills, Hyderabad",[d("Dr. Apollo Rao",S.ON,20,4.7)]),
  h("TS-HYD-003","Yashoda Hospitals","Telangana","Hyderabad",17.445,78.392,[S.C,S.N,S.O,S.EC,S.GE],4.5,500,85,true,"+91-40-2603333","Somajiguda, Hyderabad",[d("Dr. Yashoda Kumar",S.GE,18,4.5)]),
  h("TS-HYD-004","Care Hospitals","Telangana","Hyderabad",17.423,78.453,[S.C,S.EC,S.PU,S.GM],4.3,400,65,true,"+91-40-2604444","Banjara Hills, Hyderabad",[d("Dr. Care Reddy",S.PU,16,4.4)]),
  h("TS-HYD-005","Continental Hospitals","Telangana","Hyderabad",17.411,78.385,[S.C,S.O,S.ON,S.EC],4.4,350,55,true,"+91-40-2605555","Gachibowli, Hyderabad",[d("Dr. Continental Sharma",S.O,19,4.5)]),

  // ===== TELANGANA - Other Districts (4) =====
  h("TS-WAR-001","MGM Hospital Warangal","Telangana","Warangal",17.978,79.594,[S.GM,S.C,S.EC,S.O],4.0,500,85,true,"+91-870-2701111","Warangal",[d("Dr. MGM Warangal",S.C,16,4.1)]),
  h("TS-NIZ-001","Government Hospital Nizamabad","Telangana","Nizamabad",18.672,78.094,[S.GM,S.EC,S.P],3.7,300,55,true,"+91-846-2801111","Nizamabad",[d("Dr. Govt Nizamabad",S.GM,14,3.8)]),
  h("TS-KNR-001","Area Hospital Karimnagar","Telangana","Karimnagar",18.438,79.132,[S.GM,S.EC,S.O],3.8,350,60,true,"+91-878-2901111","Karimnagar",[d("Dr. Area Karimnagar",S.GM,15,3.9)]),
  h("TS-KHM-001","District Hospital Khammam","Telangana","Khammam",17.247,80.151,[S.GM,S.EC,S.G],3.6,250,45,true,"+91-874-3001111","Khammam",[d("Dr. District Khammam",S.GM,12,3.7)]),

  // ===== KERALA (10) =====
  h("KL-KOC-001","Amrita Hospital Kochi","Kerala","Kochi",10.027,76.305,[S.C,S.N,S.O,S.ON,S.EC],4.6,1200,200,true,"+91-484-2601111","Edappally, Kochi",[d("Dr. Amrita Kumar",S.C,22,4.7)]),
  h("KL-KOC-002","Lakeshore Hospital","Kerala","Kochi",9.991,76.301,[S.C,S.N,S.EC,S.GE],4.4,400,65,true,"+91-484-2602222","Maradu, Kochi",[d("Dr. Lakeshore Nair",S.N,18,4.5)]),
  h("KL-TVM-001","KIMS Hospital Trivandrum","Kerala","Thiruvananthapuram",8.525,76.923,[S.C,S.N,S.O,S.EC],4.5,500,80,true,"+91-471-2701111","Trivandrum",[d("Dr. KIMS Nair",S.C,20,4.6)]),
  h("KL-TVM-002","Sree Chitra Hospital","Kerala","Thiruvananthapuram",8.505,76.935,[S.C,S.N,S.EC],4.7,350,55,true,"+91-471-2702222","Trivandrum",[d("Dr. Chitra Kumar",S.C,25,4.8)]),
  h("KL-KZH-001","MIMS Hospital Kozhikode","Kerala","Kozhikode",11.260,75.778,[S.C,S.N,S.O,S.EC],4.4,450,70,true,"+91-495-2801111","Kozhikode",[d("Dr. MIMS Kurup",S.C,18,4.5)]),
  h("KL-KZH-002","Baby Memorial Hospital","Kerala","Kozhikode",11.255,75.772,[S.GM,S.EC,S.P,S.GE],4.3,300,50,true,"+91-495-2802222","Kozhikode",[d("Dr. Baby Menon",S.P,15,4.4)]),
  h("KL-THR-001","Jubilee Mission Hospital","Kerala","Thrissur",10.527,76.215,[S.GM,S.C,S.EC,S.O],4.3,400,65,true,"+91-487-2901111","Thrissur",[d("Dr. Jubilee Thomas",S.C,17,4.4)]),
  h("KL-THR-002","Amala Hospital","Kerala","Thrissur",10.535,76.220,[S.ON,S.GM,S.EC],4.2,300,50,true,"+91-487-2902222","Thrissur",[d("Dr. Amala Joseph",S.ON,16,4.3)]),
  h("KL-KNR-001","AKG Memorial Hospital","Kerala","Kannur",11.874,75.370,[S.GM,S.EC,S.C,S.O],4.0,250,40,true,"+91-497-3001111","Kannur",[d("Dr. AKG Krishnan",S.C,14,4.1)]),
  h("KL-KNR-002","District Hospital Kannur","Kerala","Kannur",11.868,75.365,[S.GM,S.EC,S.P],3.8,300,50,true,"+91-497-3002222","Kannur",[d("Dr. District Kannur",S.GM,12,3.9)]),

  // ===== GUJARAT (10) =====
  h("GJ-AHM-001","Sterling Hospital Ahmedabad","Gujarat","Ahmedabad",23.037,72.560,[S.C,S.N,S.O,S.EC],4.4,400,65,true,"+91-79-2601111","Gurukul, Ahmedabad",[d("Dr. Sterling Patel",S.C,18,4.5)]),
  h("GJ-AHM-002","Apollo Hospital Ahmedabad","Gujarat","Ahmedabad",23.033,72.527,[S.C,S.ON,S.EC,S.GM],4.5,500,80,true,"+91-79-2602222","Gandhinagar Highway",[d("Dr. Apollo Ahmedabad",S.ON,20,4.6)]),
  h("GJ-SUR-001","SMIMER Hospital Surat","Gujarat","Surat",21.186,72.811,[S.GM,S.EC,S.C,S.O],4.0,600,100,true,"+91-261-2701111","Surat",[d("Dr. SMIMER Shah",S.GM,22,4.1)]),
  h("GJ-SUR-002","Kiran Hospital Surat","Gujarat","Surat",21.196,72.820,[S.C,S.N,S.EC,S.GE],4.3,350,55,true,"+91-261-2702222","Surat",[d("Dr. Kiran Patel",S.C,16,4.4)]),
  h("GJ-VAD-001","SSG Hospital Vadodara","Gujarat","Vadodara",22.310,73.190,[S.GM,S.EC,S.C,S.O,S.P],4.1,800,130,true,"+91-265-2801111","Vadodara",[d("Dr. SSG Mehta",S.GM,25,4.2)]),
  h("GJ-VAD-002","Bhailal Amin Hospital","Gujarat","Vadodara",22.300,73.185,[S.C,S.N,S.EC,S.GM],4.2,300,50,true,"+91-265-2802222","Vadodara",[d("Dr. Amin Desai",S.C,17,4.3)]),
  h("GJ-RAJ-001","Wockhardt Hospital Rajkot","Gujarat","Rajkot",22.303,70.802,[S.C,S.EC,S.GM,S.O],4.1,250,40,true,"+91-281-2901111","Rajkot",[d("Dr. Wockhardt Rajkot",S.C,15,4.2)]),
  h("GJ-RAJ-002","Sterling Hospital Rajkot","Gujarat","Rajkot",22.290,70.798,[S.GM,S.N,S.EC],4.0,200,35,true,"+91-281-2902222","Rajkot",[d("Dr. Sterling Rajkot",S.N,13,4.1)]),
  h("GJ-GAN-001","GCS Hospital Gandhinagar","Gujarat","Gandhinagar",23.216,72.660,[S.GM,S.C,S.EC],3.9,300,50,true,"+91-79-3001111","Gandhinagar",[d("Dr. GCS Patel",S.C,14,4.0)]),
  h("GJ-GAN-002","Sola Civil Hospital","Gujarat","Gandhinagar",23.065,72.525,[S.GM,S.EC,S.P,S.G],3.8,500,85,true,"+91-79-3002222","Sola, Gandhinagar",[d("Dr. Sola Shah",S.GM,18,3.9)]),

  // ===== RAJASTHAN (10) =====
  h("RJ-JAI-001","SMS Hospital Jaipur","Rajasthan","Jaipur",26.897,75.817,[S.GM,S.C,S.EC,S.O,S.N],4.2,1500,250,true,"+91-141-2601111","Tonk Road, Jaipur",[d("Dr. SMS Sharma",S.GM,28,4.3)]),
  h("RJ-JAI-002","Fortis Escorts Jaipur","Rajasthan","Jaipur",26.881,75.756,[S.C,S.N,S.EC,S.ON],4.5,500,80,true,"+91-141-2602222","JLN Marg, Jaipur",[d("Dr. Fortis Jaipur",S.C,20,4.6)]),
  h("RJ-JOD-001","AIIMS Jodhpur","Rajasthan","Jodhpur",26.252,73.017,[S.C,S.N,S.O,S.EC,S.GM],4.6,1000,170,true,"+91-291-2701111","Basni, Jodhpur",[d("Dr. AIIMS Jodhpur",S.C,22,4.7)]),
  h("RJ-JOD-002","MDM Hospital Jodhpur","Rajasthan","Jodhpur",26.290,73.020,[S.GM,S.EC,S.O,S.P],3.9,800,130,true,"+91-291-2702222","Jodhpur",[d("Dr. MDM Rajput",S.GM,20,4.0)]),
  h("RJ-UDP-001","GBH American Hospital","Rajasthan","Udaipur",24.573,73.696,[S.C,S.N,S.O,S.EC],4.3,300,50,true,"+91-294-2801111","Udaipur",[d("Dr. GBH Mewar",S.C,18,4.4)]),
  h("RJ-UDP-002","Pacific Hospital Udaipur","Rajasthan","Udaipur",24.580,73.705,[S.GM,S.EC,S.GE,S.PU],4.1,250,40,true,"+91-294-2802222","Udaipur",[d("Dr. Pacific Singh",S.GE,15,4.2)]),
  h("RJ-KOT-001","MBS Hospital Kota","Rajasthan","Kota",25.180,75.865,[S.GM,S.EC,S.C,S.O],4.0,500,85,true,"+91-744-2901111","Kota",[d("Dr. MBS Kota",S.GM,20,4.1)]),
  h("RJ-KOT-002","Sudha Hospital Kota","Rajasthan","Kota",25.175,75.858,[S.GM,S.C,S.EC],3.9,200,35,true,"+91-744-2902222","Kota",[d("Dr. Sudha Sharma",S.C,14,4.0)]),
  h("RJ-AJM-001","JLN Hospital Ajmer","Rajasthan","Ajmer",26.452,74.638,[S.GM,S.EC,S.O,S.P],3.9,400,70,true,"+91-145-3001111","Ajmer",[d("Dr. JLN Ajmer",S.GM,18,4.0)]),
  h("RJ-AJM-002","Mittal Hospital Ajmer","Rajasthan","Ajmer",26.460,74.645,[S.GM,S.C,S.EC],4.0,200,35,true,"+91-145-3002222","Ajmer",[d("Dr. Mittal Kumar",S.C,12,4.1)]),

  // ===== WEST BENGAL (10) =====
  h("WB-KOL-001","SSKM Hospital Kolkata","West Bengal","Kolkata",22.543,88.345,[S.GM,S.C,S.N,S.EC,S.O],4.3,2000,350,true,"+91-33-2601111","AJC Bose Road, Kolkata",[d("Dr. SSKM Banerjee",S.C,25,4.4)]),
  h("WB-KOL-002","Apollo Gleneagles","West Bengal","Kolkata",22.516,88.396,[S.C,S.N,S.ON,S.EC],4.5,700,120,true,"+91-33-2602222","EM Bypass, Kolkata",[d("Dr. Apollo Kolkata",S.ON,20,4.6)]),
  h("WB-KOL-003","Fortis Hospital Kolkata","West Bengal","Kolkata",22.522,88.391,[S.C,S.N,S.O,S.EC],4.4,500,85,true,"+91-33-2603333","Anandapur, Kolkata",[d("Dr. Fortis Ghosh",S.C,18,4.5)]),
  h("WB-HOW-001","Howrah District Hospital","West Bengal","Howrah",22.595,88.330,[S.GM,S.EC,S.O,S.P],3.8,500,85,true,"+91-33-2701111","Howrah",[d("Dr. Howrah Mondal",S.GM,20,3.9)]),
  h("WB-HOW-002","Narayana Hospital Howrah","West Bengal","Howrah",22.574,88.295,[S.C,S.N,S.EC],4.3,400,65,true,"+91-33-2702222","Howrah",[d("Dr. Narayana Howrah",S.C,17,4.4)]),
  h("WB-ASN-001","The Mission Hospital Asansol","West Bengal","Asansol",23.683,86.953,[S.GM,S.EC,S.C,S.O],4.0,300,50,true,"+91-341-2801111","Asansol",[d("Dr. Mission Asansol",S.C,15,4.1)]),
  h("WB-ASN-002","District Hospital Asansol","West Bengal","Asansol",23.690,86.960,[S.GM,S.EC,S.P],3.7,250,40,true,"+91-341-2802222","Asansol",[d("Dr. District Asansol",S.GM,12,3.8)]),
  h("WB-SIL-001","North Bengal Medical College","West Bengal","Siliguri",26.726,88.445,[S.GM,S.EC,S.C,S.O,S.N],4.1,600,100,true,"+91-353-2901111","Siliguri",[d("Dr. NBMC Das",S.C,20,4.2)]),
  h("WB-SIL-002","Desun Hospital Siliguri","West Bengal","Siliguri",26.715,88.435,[S.C,S.N,S.EC,S.GE],4.2,250,40,true,"+91-353-2902222","Siliguri",[d("Dr. Desun Roy",S.N,16,4.3)]),
  h("WB-DUR-001","Durgapur Steel Plant Hospital","West Bengal","Durgapur",23.548,87.320,[S.GM,S.EC,S.O,S.C],3.9,350,60,true,"+91-343-3001111","Durgapur",[d("Dr. DSP Mukherjee",S.GM,18,4.0)]),

  // ===== UTTAR PRADESH (10) =====
  h("UP-LKO-001","KGMU Hospital Lucknow","Uttar Pradesh","Lucknow",26.851,80.945,[S.GM,S.C,S.N,S.O,S.EC],4.4,2000,350,true,"+91-522-2601111","Chowk, Lucknow",[d("Dr. KGMU Singh",S.C,25,4.5)]),
  h("UP-LKO-002","Medanta Hospital Lucknow","Uttar Pradesh","Lucknow",26.815,80.915,[S.C,S.N,S.ON,S.EC],4.6,600,100,true,"+91-522-2602222","Shaheed Path, Lucknow",[d("Dr. Medanta Tiwari",S.C,22,4.7)]),
  h("UP-VAR-001","BHU Hospital Varanasi","Uttar Pradesh","Varanasi",25.268,82.988,[S.GM,S.C,S.N,S.EC,S.O],4.3,1500,250,true,"+91-542-2701111","Lanka, Varanasi",[d("Dr. BHU Pandey",S.C,23,4.4)]),
  h("UP-VAR-002","Heritage Hospital Varanasi","Uttar Pradesh","Varanasi",25.280,82.995,[S.C,S.N,S.EC,S.GE],4.1,300,50,true,"+91-542-2702222","Varanasi",[d("Dr. Heritage Mishra",S.GE,16,4.2)]),
  h("UP-AGR-001","SN Medical College Agra","Uttar Pradesh","Agra",27.183,78.015,[S.GM,S.C,S.EC,S.O],4.0,800,130,true,"+91-562-2801111","Agra",[d("Dr. SN Agra",S.GM,20,4.1)]),
  h("UP-AGR-002","Pushpanjali Hospital Agra","Uttar Pradesh","Agra",27.190,78.022,[S.C,S.O,S.EC,S.GM],4.2,300,50,true,"+91-562-2802222","Agra",[d("Dr. Pushpanjali Verma",S.C,17,4.3)]),
  h("UP-KNP-001","Regency Hospital Kanpur","Uttar Pradesh","Kanpur",26.449,80.330,[S.C,S.N,S.EC,S.GM],4.3,400,65,true,"+91-512-2901111","Kanpur",[d("Dr. Regency Kanpur",S.C,18,4.4)]),
  h("UP-KNP-002","Rama Hospital Kanpur","Uttar Pradesh","Kanpur",26.460,80.340,[S.GM,S.EC,S.O,S.GE],4.0,300,50,true,"+91-512-2902222","Kanpur",[d("Dr. Rama Gupta",S.O,15,4.1)]),
  h("UP-ALH-001","Moti Lal Nehru Medical College","Uttar Pradesh","Allahabad",25.435,81.843,[S.GM,S.EC,S.C,S.O,S.N],4.1,1000,170,true,"+91-532-3001111","Allahabad",[d("Dr. MLN Srivastava",S.C,20,4.2)]),
  h("UP-ALH-002","Beli Hospital Allahabad","Uttar Pradesh","Allahabad",25.440,81.850,[S.GM,S.EC,S.P,S.G],3.8,400,70,true,"+91-532-3002222","Allahabad",[d("Dr. Beli Yadav",S.GM,16,3.9)]),
];
