// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import AIHumanSection from "../components/AIHumanSection/AIHumanSection";
import "../App.css";
import FAQsSection from "../components/FaqsSection/FaqsSection";
export default function Faq() {
  return (
    <Layout>
      {/* <Navbar /> */}

<main style={{ background: '#0b0f14' }}>
        <FAQsSection />
        <AIHumanSection />
      </main>

      {/* <Footer /> */}
    </Layout>
  );
}
