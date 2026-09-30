import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Wrench, CalendarCheck } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg shadow-blue-900/5"
          : "bg-white/0 backdrop-blur-0"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className={`block text-lg font-extrabold tracking-tight ${scrolled ? "text-slate-900" : "text-slate-900"}`}>
                Cool<span className="text-cyan-600">Care</span>
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-slate-500">
                Appliance Services
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-cyan-600" : "text-slate-700 hover:text-cyan-600"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-cyan-500"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-cyan-600"
            >
              <Phone className="h-4 w-4 text-cyan-600" />
              {PHONE}
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Service
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 lg:hidden hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-white/95 backdrop-blur-lg lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                    pathname === link.to
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-slate-700"
              >
                <Phone className="h-5 w-5 text-cyan-600" />
                {PHONE}
              </a>
              <Link
                to="/contact"
                className="block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-center text-base font-semibold text-white"
              >
                Book a Service
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
