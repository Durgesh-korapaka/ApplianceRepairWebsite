import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import { PHONE, PHONE_TEL, WHATSAPP_URL, EMAIL } from "@/lib/constants";
import { useSEO } from "@/lib/seo";

export default function Contact() {
  useSEO({
    title: "Contact Us — Appliance Repair Service",
    description: "Contact us for fast AC, refrigerator and washing machine repair services. Call 7720177588 or send us a request.",
    path: "/contact",
  });

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-200 ring-1 ring-white/15"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Need appliance repair? Get in touch with us today.
          </motion.p>
        </div>
      </section>

      {/* Contact body */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: contact info cards */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <h2 className="text-2xl font-extrabold text-slate-900">Reach out to us</h2>
                <p className="text-sm leading-relaxed text-slate-600">
                  Whether it's an AC that won't cool, a fridge that's leaking or a washing machine that won't spin —
                  our technicians are ready to help. Call us directly or send a WhatsApp message for a quick response.
                </p>

                {/* Contact cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href={PHONE_TEL}
                    className="group flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100 transition-all hover:shadow-lg hover:ring-cyan-200"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 transition-transform group-hover:scale-110">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">Call Now</p>
                      <p className="text-base font-bold text-slate-900">{PHONE}</p>
                    </div>
                  </a>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100 transition-all hover:shadow-lg hover:ring-green-200"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] transition-transform group-hover:scale-110">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">WhatsApp</p>
                      <p className="text-base font-bold text-slate-900">Chat with us</p>
                    </div>
                  </a>
                </div>

                {/* Info rows */}
                <div className="space-y-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-slate-700">{EMAIL}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-slate-700">Mon — Sun: 8:00 AM to 9:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-slate-700">Service available across the city</span>
                  </div>
                </div>

                {/* Big call button */}
                <a
                  href={PHONE_TEL}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.01] active:scale-95"
                >
                  <Phone className="h-5 w-5" />
                  Call Now — {PHONE}
                </a>
              </motion.div>
            </div>

            {/* Right: contact form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/5 ring-1 ring-slate-100 sm:p-8"
            >
              <h2 className="text-2xl font-extrabold text-slate-900">Send a Service Request</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form below and we'll get back to you via WhatsApp or phone call.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
