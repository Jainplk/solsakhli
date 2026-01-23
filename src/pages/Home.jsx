import Layout from "../components/layout/Layout";
import "../App.css";

import BusinessSection from "../components/BusinessSection/BusinessSection";
import AccordionSection from "../components/AccordionSection/AccordionSection";
import Pricing from "../components/price/Pricing";
import AIHumanControl from "../components/AIHumanControl/AIHumanControl";

import BusinessSec from "../assets/img/Image_2.png";
import BusSection from "../assets/img/Image_1.png";

// For Small Business content - Exact points from your design
const smallBusinessFeatures = [
  "Built to support your business goals, not just look good.",
  "Clear, professional design that builds trust with customers.",
  "Easy updates so your site stays current as your business changes.",
  "Works everywhere your customers find you—phone, tablet, or desktop."
];

const smallBusinessIncluded = [
  {
    title: "Custom 5-page WordPress website",
    description: "Professional website with 5 custom-designed pages"
  },
  {
    title: "Designed specifically for your business",
    description: "Unique design that reflects your brand identity"
  },
  {
    title: "Custom visuals and brand styling",
    description: "Tailored visual elements that match your brand"
  },
  {
    title: "Custom editable page and content",
    description: "Easy-to-edit content management system"
  },
  {
    title: "Mobile-friendly on all devices",
    description: "Responsive design that works on all screen sizes"
  },
  {
    title: "Managed hosting, security, and updates",
    description: "Complete hosting solution with security and updates"
  },
  {
    title: "Early access to Bella LV-3 features",
    description: "Get access to new features before anyone else"
  }
];

export default function Home() {
  return (
    <Layout>
      <main>
        {/* Business Section with only points and image */}
        <BusinessSection
          features={smallBusinessFeatures}
          imageSrc={BusSection}
          imageAlt="Small Business Website Design"
          buttonText="Build Your Website"
          cardTitle="Strategy Design Technology"
        />

        <AccordionSection
          title="What's included"
          features={smallBusinessIncluded}
        />

        <Pricing />
        <AIHumanControl />
      </main>
    </Layout>
  );
}