import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import PortfolioPreview from "./components/PortfolioPreview";
import ProblemSection from "./components/ProblemSection";

export default function Home() {

  return (
    <div className="bg-white dark:bg-[#0a0614]">
      <Navbar />
      <Hero/>
      <ProblemSection/>
      <HowItWorks/>
      <PortfolioPreview/>
      <FinalCTA/>
      <Footer/>
      </div>
  );
}