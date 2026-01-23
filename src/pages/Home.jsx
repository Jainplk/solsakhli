import Header from '../components/Header';
import Hero from '../components/Hero';
import BusinessSection from '../components/BusinessSection';
import AccordionSection from '../components/AccordionSection';
import MeetBella from '../components/MeetBella';
import DesignedForYou from '../components/DesignedForYou';
import Pricing from '../components/Pricing';
import AIHumanControl from '../components/AIHumanControl';
import Footer from '../components/Footer';

const smallBusinessFeatures = [
  "A unique look tailored that works for your brand in one go.",
  "Stay professional online and never miss a potential customer.",
  "Show up in local search and you're more than likely to show up first.",
  "Collect leads from customers that want to know more about your offerings."
];

const agencyFeatures = [
  "Produce more client websites without adding extra team members.",
  "Scale quickly with your unique style and ideas that connect with...",
  "Deliver more for your clients with less effort using AI automation.",
  "Don't worry about high cost developer tools, get modern websites."
];

const smallBusinessIncluded = [
  { title: "Custom 6-page WordPress website", description: "Fully customized to match your brand identity." },
  { title: "Designed specifically for your business", description: "Tailored layouts that convert visitors." },
  { title: "Custom visuals and brand styling", description: "Unique graphics that set you apart." },
  { title: "Custom website page and content", description: "SEO-optimized content for each page." },
  { title: "Mobile-friendly on all devices", description: "Perfect display on any screen size." },
  { title: "Managed hosting, security, and analytics", description: "We handle the technical details." },
  { title: "Early access to Bella LV-3 features", description: "Be first to try new AI tools." }
];

const agencyIncluded = [
  { title: "Custom 8-page WordPress website", description: "Enterprise-grade website solutions." },
  { title: "Expanded layouts for richer content", description: "More space to tell your story." },
  { title: "Greater design flexibility and customization", description: "Unlimited creative possibilities." },
  { title: "Support for dynamic pages and integrations", description: "Connect with any platform." },
  { title: "Editable content across all pages", description: "Update anytime without code." },
  { title: "Built to scale as your business grows", description: "Future-proof architecture." }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      
      <BusinessSection 
        label="For Small Business"
        title="For Small Business"
        subtitle="The busy, ambitious and driven professional's AI custom web design partner."
        features={smallBusinessFeatures}
        imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
        imageAlt="Small Business Dashboard"
      />

      <AccordionSection 
        title="What's included"
        features={smallBusinessIncluded}
      />

      <BusinessSection 
        label="For Agencies"
        title="For Agencies"
        subtitle="The busy, ambitious and driven professional's AI custom web design partner."
        features={agencyFeatures}
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
        imageAlt="Agency Team Collaboration"
        reverse
      />

      <AccordionSection 
        title="What's included"
        features={agencyIncluded}
      />

      <MeetBella />
      <DesignedForYou />
      <Pricing />
      <AIHumanControl />
      <Footer />
    </div>
  );
};

export default Index;