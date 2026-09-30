export const PHONE = "7702177588";
export const PHONE_TEL = "tel:7702177588";
export const WHATSAPP_URL = "https://wa.me/917702177588";
export const WHATSAPP_MSG = "Hi, I need appliance repair service.";
export const WHATSAPP_URL_MSG = `https://wa.me/917702177588?text=${encodeURIComponent(WHATSAPP_MSG)}`;

export const COMPANY = "AV Appliance Services";
export const COMPANY_FULL = "AV Appliance Services";
export const EMAIL = "andrayya8@gmail.com";

export const IMAGES = {
  heroAC: "https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=900",
  heroTech: "https://images.pexels.com/photos/33958627/pexels-photo-33958627.jpeg?auto=compress&cs=tinysrgb&w=900",
  ac: "https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=800",
  fridge: "https://images.pexels.com/photos/6593607/pexels-photo-6593607.jpeg?auto=compress&cs=tinysrgb&w=800",
  washing: "https://images.pexels.com/photos/4700400/pexels-photo-4700400.jpeg?auto=compress&cs=tinysrgb&w=800",
  acWorkshop: "https://images.pexels.com/photos/34099331/pexels-photo-34099331.jpeg?auto=compress&cs=tinysrgb&w=900",
  cta: "https://images.pexels.com/photos/33925031/pexels-photo-33925031.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const SERVICE_CATEGORIES = [
  { key: "ac", label: "AC Repair & Service" },
  { key: "fridge", label: "Refrigerator Service" },
  { key: "washing", label: "Washing Machine Service" },
] as const;
