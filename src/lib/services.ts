import { Wrench, Snowflake, Wind, Thermometer, Droplets, Power, Fan, Settings, Zap, Plug, Cog, Gauge, Waves } from "lucide-react";

export type ServiceItem = {
  name: string;
  description: string;
  icon: typeof Wrench;
};

export type ServiceModule = {
  key: "ac" | "fridge" | "washing";
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: string;
  gradient: string;
  previewList: string[];
  services: ServiceItem[];
};

export const SERVICE_MODULES: ServiceModule[] = [
  {
    key: "ac",
    title: "AC Repair & Service",
    shortTitle: "AC Services",
    tagline: "Keep your cool all year round",
    description:
      "Professional air conditioner repair, installation and maintenance for all major brands and models — split, window and inverter units.",
    image:
      "https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Technician repairing an outdoor air conditioner unit",
    accent: "#0891b2",
    gradient: "from-cyan-500 to-blue-600",
    previewList: ["AC Repair", "AC Installation", "AC Maintenance", "AC Gas Charging", "AC Cleaning"],
    services: [
      { name: "AC Repair", description: "Comprehensive diagnostics and repair for all cooling and electrical faults.", icon: Wrench },
      { name: "AC Installation", description: "Expert installation of split, window and inverter AC units.", icon: Snowflake },
      { name: "AC Uninstallation", description: "Safe removal and relocation of your existing AC unit.", icon: Settings },
      { name: "AC Gas Charging", description: "Refrigerant refill and pressure check to restore cooling performance.", icon: Wind },
      { name: "AC Cleaning", description: "Deep cleaning of filters, coils and fins for better airflow and efficiency.", icon: Droplets },
      { name: "AC Maintenance", description: "Scheduled servicing to keep your AC running like new year-round.", icon: Gauge },
      { name: "Cooling Problem", description: "Diagnosis and fix for weak or no cooling issues.", icon: Thermometer },
      { name: "Water Leakage", description: "Stop indoor unit dripping and drainage blockages.", icon: Droplets },
      { name: "AC Not Turning On", description: "Power, PCB and sensor troubleshooting for non-starting units.", icon: Power },
    ],
  },
  {
    key: "fridge",
    title: "Refrigerator Repair & Service",
    shortTitle: "Refrigerator Services",
    tagline: "Your food stays fresh, always",
    description:
      "Complete refrigerator repair and maintenance for single-door, double-door, side-by-side and inverter fridges of every major brand.",
    image:
      "https://images.pexels.com/photos/6593607/pexels-photo-6593607.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Modern kitchen with a white refrigerator",
    accent: "#2563eb",
    gradient: "from-blue-500 to-indigo-600",
    previewList: ["Refrigerator Repair", "Cooling Problems", "Compressor Issues", "Gas Charging", "General Maintenance"],
    services: [
      { name: "Refrigerator Repair", description: "Full diagnostics and repair for all fridge faults and failures.", icon: Wrench },
      { name: "Not Cooling", description: "Restore proper cooling when your fridge runs warm or stops cooling.", icon: Thermometer },
      { name: "Compressor Repair", description: "Compressor testing, repair and replacement by certified technicians.", icon: Cog },
      { name: "Gas Charging", description: "Refrigerant recharge to bring back optimal cooling efficiency.", icon: Wind },
      { name: "Thermostat Problems", description: "Thermostat and temperature sensor calibration and replacement.", icon: Gauge },
      { name: "Water Leakage", description: "Fix internal leaks, drain blockages and pooling water issues.", icon: Droplets },
      { name: "Ice Formation", description: "Resolve excessive frost and ice build-up in freezer compartments.", icon: Snowflake },
      { name: "General Maintenance", description: "Routine cleaning and tune-up to extend your fridge's lifespan.", icon: Settings },
    ],
  },
  {
    key: "washing",
    title: "Washing Machine Repair & Service",
    shortTitle: "Washing Machine Services",
    tagline: "Laundry day, sorted",
    description:
      "Expert washing machine repair for top-load, front-load, semi-automatic and fully-automatic machines from all leading brands.",
    image:
      "https://images.pexels.com/photos/4700400/pexels-photo-4700400.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Row of modern washing machines",
    accent: "#0d9488",
    gradient: "from-teal-500 to-cyan-600",
    previewList: ["Washing Machine Repair", "Drainage Problems", "Spin Problems", "Motor Issues", "General Maintenance"],
    services: [
      { name: "Washing Machine Repair", description: "Complete repair service for all washer types and brands.", icon: Wrench },
      { name: "Not Starting", description: "Power, timer and control board diagnosis for machines that won't start.", icon: Power },
      { name: "Drainage Problems", description: "Clear blockages and repair drain pumps and hoses.", icon: Waves },
      { name: "Spin Problems", description: "Fix spin cycles that won't spin, vibrate excessively or leave clothes wet.", icon: Fan },
      { name: "Motor Problems", description: "Motor testing, repair and replacement for smooth operation.", icon: Cog },
      { name: "Water Leakage", description: "Locate and seal leaks from tubs, hoses and inlet valves.", icon: Droplets },
      { name: "Door Problems", description: "Repair stuck, broken or leaking door locks and seals.", icon: Settings },
      { name: "General Maintenance", description: "Tune-up and descale service to keep your washer running efficiently.", icon: Gauge },
    ],
  },
];
