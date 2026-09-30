import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ServiceModule } from "@/lib/services";

type Props = {
  module: ServiceModule;
  index?: number;
};

export default function ServiceCard({ module, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/5 ring-1 ring-slate-100"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={module.image}
          alt={module.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${module.gradient} opacity-80`} />
        <div className="absolute inset-0 flex items-end p-5">
          <h3 className="text-xl font-bold text-white drop-shadow">{module.shortTitle}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-slate-600">{module.description}</p>
        <ul className="mt-4 space-y-1.5">
          {module.previewList.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
              <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${module.gradient}`} />
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors group-hover:bg-slate-900 group-hover:text-white"
        >
          View Services
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
