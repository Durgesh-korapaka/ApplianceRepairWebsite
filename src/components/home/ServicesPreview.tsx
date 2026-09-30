import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICE_MODULES } from "@/lib/services";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete appliance repair solutions"
          subtitle="From AC installation to fridge compressor replacement and washing machine motor repair — we handle it all."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_MODULES.map((module, i) => (
            <ServiceCard key={module.key} module={module} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
