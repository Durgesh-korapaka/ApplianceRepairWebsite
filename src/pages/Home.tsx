import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import HowItWorks from "@/components/home/HowItWorks";
import CTASection from "@/components/home/CTASection";
import { useSEO } from "@/lib/seo";

export default function Home() {
  useSEO({
    title: "AC, Refrigerator & Washing Machine Repair Services",
    description:
      "Professional AC, refrigerator and washing machine repair services. Fast, reliable and affordable appliance repair solutions.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <HowItWorks />
      <CTASection />
    </>
  );
}
