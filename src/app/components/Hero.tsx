"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Badge from "./ui/Badge";
import Headline from "./ui/Headline";
import CTA from "./ui/CTA";
import Stats from "./ui/Stats";
import Slider from "./ui/Slider";
import HeroContainer from "./ui/HeroContainer";
import FloatingElements from "./ui/FloatingElements";
import TrustIndicators from "./ui/TrustIndicators";
import ScrollIndicator from "./ui/ScrollIndicator";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -80]);
  
  return (
    <motion.div style={{ y }} className="relative" id="home">
     <HeroContainer>

      <FloatingElements/>
        <Badge />
        <Headline />
        <CTA />
        <TrustIndicators/>
        <Stats />

        <div className="mt-18">
        <ScrollIndicator/>
        </div>
      </HeroContainer>
        

      {/* Slider with top border for separation */}
      <div className="w-full pt-12 border-t border-gray-200 dark:border-gray-900">
        <Slider />
      </div>
    </motion.div>
  );
}