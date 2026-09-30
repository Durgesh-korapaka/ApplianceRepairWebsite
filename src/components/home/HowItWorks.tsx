import { motion } from "framer-motion";
import { Phone, CalendarClock, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  { Icon: Phone, title: "Contact Us", desc: "Call or WhatsApp us to describe your appliance issue." },
  { Icon: CalendarClock, title: "Schedule a Service", desc: "Pick a convenient time slot — we offer same-day visits." },
  { Icon: Wrench, title: "Get Your Appliance Repaired", desc: "Our technician arrives, diagnoses and fixes it on the spot." },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Three simple steps to get your appliance fixed"
          subtitle="Getting your appliance repaired has never been easier. Here's all it takes."
        />

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-transparent via-cyan-200 to-transparent md:block" />

          {STEPS.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 opacity-10" />
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-slate-100 transition-transform hover:scale-110">
                  <Icon className="h-9 w-9 text-blue-600" />
                </div>
                <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-bold text-white shadow-lg">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
