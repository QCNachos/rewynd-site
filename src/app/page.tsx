import HeroSection from "@/components/sections/HeroSection";
import WhatIsRewyndSection from "@/components/sections/WhatIsRewyndSection";
import WhyItMattersSection from "@/components/sections/WhyItMattersSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import AudienceSection from "@/components/sections/AudienceSection";
import DataLayerSection from "@/components/sections/DataLayerSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />

      <div className="relative z-[1]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent" />
      </div>

      <WhatIsRewyndSection />

      <div className="bg-white/[0.015]">
        <WhyItMattersSection />
      </div>

      <HowItWorksSection />

      <div className="bg-white/[0.015]">
        <AudienceSection />
      </div>

      <DataLayerSection />

      <div className="relative z-[1]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent" />
      </div>

      <WaitlistSection />

      <div className="bg-white/[0.015]">
        <ContactSection />
      </div>
    </div>
  );
}
