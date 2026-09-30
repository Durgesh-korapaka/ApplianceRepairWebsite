import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { SERVICE_MODULES, type ServiceItem } from "@/lib/services";
import { useSEO } from "@/lib/seo";

function ServiceTile({ service, accent, index }: { service: ServiceItem; accent: string; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl bg-white p-5 shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 transition-shadow hover:shadow-xl"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${accent}15` }}
      >
        <Icon className="h-6 w-6" style={{ color: accent }} />
      </div>
      <h4 className="mt-4 text-base font-bold text-slate-900">{service.name}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{service.description}</p>
      <Link
        to="/contact"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:underline"
        style={{ color: accent }}
      >
        Book Service
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

export default function Services() {
  useSEO({
    title: "Our Appliance Repair Services",
    description:
      "Complete AC, refrigerator and washing machine repair and maintenance services. Expert technicians for all brands and models.",
    path: "/services",
  });

  return (
    <div className="pt-16 lg:pt-20">
      {/* Page header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-200 ring-1 ring-white/15"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Our Appliance Repair Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Complete repair and maintenance solutions for your home appliances.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-cyan-500/30 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <CalendarCheck className="h-5 w-5" />
              Book a Service
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service modules */}
      {SERVICE_MODULES.map((module, mi) => (
        <section
          key={module.key}
          className={mi % 2 === 1 ? "bg-slate-50 py-20 lg:py-28" : "bg-white py-20 lg:py-28"}
          id={module.key}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Module header */}
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: mi % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={mi % 2 === 1 ? "lg:order-2" : ""}
              >
                <span
                  className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: `${module.accent}15`, color: module.accent }}
                >
                  {module.tagline}
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  {module.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">{module.description}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
                  style={{ background: `linear-gradient(to right, ${module.accent}, ${module.accent}dd)` }}
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book {module.shortTitle}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`overflow-hidden rounded-3xl shadow-xl ${mi % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <img
                  src={module.image}
                  alt={module.imageAlt}
                  loading="lazy"
                  className="h-64 w-full object-cover sm:h-80"
                />
              </motion.div>
            </div>

            {/* Service grid */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {module.services.map((service, si) => (
                <ServiceTile key={service.name} service={service} accent={module.accent} index={si} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Ready to get your appliance fixed?</h2>
          <p className="mt-3 text-blue-50">Book a service today and get same-day repair from expert technicians.</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-blue-600 shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
          >
            <CalendarCheck className="h-5 w-5" />
            Book a Service
          </Link>
        </div>
      </section>
    </div>
  );
}
