import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP_URL, IMAGES } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={IMAGES.cta} alt="Technician repairing an appliance" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-cyan-900/85" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Need Appliance Repair?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg"
        >
          Get fast and reliable service from experienced technicians. We're just one call away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={PHONE_TEL}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-cyan-500/30 transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Call Now — {PHONE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-xl shadow-green-500/30 transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
