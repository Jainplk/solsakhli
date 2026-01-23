// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";

import HeroSection from "../components/hero/HeroSection";
// import FeaturesSection from "../components/features/FeaturesSection";
// import WorkflowSection from "../components/workflow/WorkflowSection";
// import PricingSection from "../components/pricing/PricingSection";
import BusinessPlansSection from "../components/BusinessPlansSection/BusinessPlansSection";
import AIHumanSection from "../components/AIHumanSection/AIHumanSection";
import "../App.css";
import DesignedForWorkSection from "../components/DesignedForWorkSection/DesignedForWorkSection";
export default function Home() {
  return (
    <Layout>
      {/* <Navbar /> */}

      <main>
        <HeroSection />
        {/* 
        <FeaturesSection />
        <WorkflowSection />
        <PricingSection />
        <HumanControlSection /> */}

        <BusinessPlansSection />
        <DesignedForWorkSection />
        <AIHumanSection />
      </main>

      {/* <Footer /> */}
    </Layout>
  );
}
