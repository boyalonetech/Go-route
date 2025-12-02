import ClientsPartners from "@/components/Clients";
import Hero from "@/components/Hero";
import LogisticsSection from "@/components/Logistics";
import Partner from "@/components/Partner";
import QuickFacts from "@/components/QuickFacts";
import WhyUsSection from "@/components/WhyUs";
import React from "react";

const page = () => {
  return (
    <section className="mt-23">
      <Hero />
      <QuickFacts />
      <ClientsPartners />
      <LogisticsSection />
      <WhyUsSection />
      <Partner />
    </section>
  );
};

export default page;
