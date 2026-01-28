import SmallBusinessSection from './SmallBusinessSection';
import AgenciesSection from './AgenciesSection';
import "./BusinessPlansCommon.css";

export default function BusinessPlansSection() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen py-20 px-6 relative overflow-hidden">
      <SmallBusinessSection />
      <AgenciesSection />
    </div>
  );
}