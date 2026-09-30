import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SERVICE_CATEGORIES, WHATSAPP_URL, WHATSAPP_MSG } from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

type Errors = {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.phone.trim()) e.phone = "Please enter your phone number";
    else if (!/^[0-9]{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit phone number";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Please describe the issue";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    // Simulate async then open WhatsApp with pre-filled message
    setTimeout(() => {
      const msg = `New Service Request%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AIssue: ${form.message}`;
      window.open(`${WHATSAPP_URL}?text=${msg}`, "_blank");
      setStatus("success");
      setForm({ name: "", phone: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 800);
  };

  const update = (field: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">Name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your full name"
          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 ${
            errors.name ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100"
          }`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-700">Phone Number</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="10-digit mobile number"
          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 ${
            errors.phone ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100"
          }`}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-slate-700">Select Service</label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 ${
            errors.service ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100"
          }`}
        >
          <option value="">— Choose a service —</option>
          {SERVICE_CATEGORIES.map((s) => (
            <option key={s.key} value={s.label}>{s.label}</option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700">Message</label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Describe the issue with your appliance..."
          className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 ${
            errors.message ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100"
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.01] active:scale-95 disabled:opacity-70"
      >
        {status === "loading" ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
        ) : (
          <><Send className="h-5 w-5" /> Send Request</>
        )}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 rounded-xl bg-green-50 p-4 text-sm text-green-700 ring-1 ring-green-200"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            Your request has been sent! We'll contact you shortly.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200"
          >
            <AlertCircle className="h-5 w-5 shrink-0" />
            Something went wrong. Please try calling us directly.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
