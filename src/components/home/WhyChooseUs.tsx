import { motion } from "framer-motion";
import { Award, Zap, BadgeDollarSign, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const FEATURES = [
  { Icon: Award, title: "Experienced Technicians", desc: "Certified professionals with 10+ years of hands-on appliance repair expertise." },
  { Icon: Zap, title: "Fast & Reliable Service", desc: "Same-day visits and quick turnaround — we respect your time and schedule." },
  { Icon: BadgeDollarSign, title: "Transparent Pricing", desc: "No hidden charges. You get an honest quote upfront before any work begins." },
  { Icon: HeartHandshake, title: "Customer Satisfaction", desc: "4.9★ rated service with a 90-day repair warranty and complete peace of mind." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The trusted name in appliance repair"
          subtitle="We combine expert knowledge, genuine parts and a customer-first approach to deliver service you can rely on."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl bg-white p-7 shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 transition-shadow hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
