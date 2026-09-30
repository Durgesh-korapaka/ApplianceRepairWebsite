import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, Snowflake, Wind, WashingMachine } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP_URL, COMPANY, COMPANY_FULL, EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/AV.png" alt="AV Appliance Services" className="h-12 w-auto max-w-[190px] object-contain" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {COMPANY_FULL} — reliable AC, refrigerator &amp; washing machine repair services.
              Expert technicians, quick service and affordable pricing.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Snowflake className="h-4 w-4 text-cyan-400" /> AC Services</li>
              <li className="flex items-center gap-2"><Wind className="h-4 w-4 text-cyan-400" /> Refrigerator Services</li>
              <li className="flex items-center gap-2"><WashingMachine className="h-4 w-4 text-cyan-400" /> Washing Machine Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Phone className="h-4 w-4 text-cyan-400" /> {PHONE}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <MessageCircle className="h-4 w-4 text-green-500" /> WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400" /> {EMAIL}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {COMPANY}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
