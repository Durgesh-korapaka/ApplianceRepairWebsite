import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, Snowflake, Wind, WashingMachine, MessageCircle, Star } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP_URL, IMAGES } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const floatingIcons = [
  { Icon: Snowflake, className: "top-[18%] left-[8%] text-cyan-300/70", delay: 0 },
  { Icon: Wind, className: "top-[55%] left-[15%] text-blue-300/60", delay: 0.5 },
  { Icon: WashingMachine, className: "top-[25%] right-[10%] text-cyan-300/60", delay: 0.3 },
  { Icon: Star, className: "bottom-[20%] right-[18%] text-amber-300/70", delay: 0.7 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating appliance icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:block ${className}`}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <Icon className="h-12 w-12" />
        </motion.div>
      ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-cyan-200 backdrop-blur ring-1 ring-white/15"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-400">
              <span className="h-2 w-2 animate-ping rounded-full bg-green-400" />
            </span>
            Trusted by 5,000+ happy customers
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Fast &amp; Reliable AC, Fridge &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Washing Machine
            </span>{" "}
            Repair Services
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 lg:mx-0 sm:text-lg"
          >
            Expert technicians, quick service and reliable solutions for all your home appliance repair needs.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              to="/contact"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-cyan-500/30 transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              <CalendarCheck className="h-5 w-5" />
              Book a Service
            </Link>
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 text-base font-bold text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/20 sm:w-auto"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex items-center justify-center gap-6 lg:justify-start"
          >
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Repairs Done", value: "12K+" },
              { label: "Rating", value: "4.9★" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <img
              src={IMAGES.heroAC}
              alt="Professional AC repair technician servicing an air conditioner"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>

          {/* Floating glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-lg sm:left-6 sm:w-auto sm:translate-x-0"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Call us now</p>
                <a href={PHONE_TEL} className="text-sm font-bold text-slate-900">{PHONE}</a>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] transition-transform hover:scale-110"
                aria-label="WhatsApp us"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Service category chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { Icon: Snowflake, label: "AC Repair & Service", color: "from-cyan-500/20 to-blue-500/20", iconColor: "text-cyan-300" },
            { Icon: Wind, label: "Refrigerator Repair & Service", color: "from-blue-500/20 to-indigo-500/20", iconColor: "text-blue-300" },
            { Icon: WashingMachine, label: "Washing Machine Repair & Service", color: "from-teal-500/20 to-cyan-500/20", iconColor: "text-teal-300" },
          ].map(({ Icon, label, color, iconColor }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
              className={`flex items-center gap-3 rounded-2xl bg-gradient-to-r ${color} p-4 ring-1 ring-white/10 backdrop-blur`}
            >
              <Icon className={`h-7 w-7 ${iconColor}`} />
              <span className="text-sm font-semibold text-white">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
