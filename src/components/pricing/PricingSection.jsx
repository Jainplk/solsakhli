import React, { useState } from 'react';
import PricingCard from './PricingCard';
 
export default function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedDetails, setExpandedDetails] = useState(false);
 
  const plans = [
    {
      id: 'essentials',
      name: 'Bella LV-3 Essentials Plan',
      price: 399,
      description: 'One time setup fee plus',
      monthly: 24.95,
      features: [
        'Dedicated onboarding & account support',
        'Structured brand intake & positioning',
        'Mood board & visual direction development',
        'Professional website design & layout build',
        'Strategic, conversion-focused development',
        'Performance-optimized hosting',
        'Ongoing maintenance & management'
      ]
    },
    {
      id: 'pro',
      name: 'Bella LV-3 Pro Plan',
      badge: 'POPULAR',
      badgeColor: 'bg-orange-500',
      price: 599,
      description: 'One time setup fee plus',
      monthly: 24.95,
      features: [
        'Everything in Essentials',
        'Expanded design refinement',
        'Complex layout & component builds',
        'Advanced customization capability',
        'Automation-ready architecture',
        'Higher-touch collaboration & refinement',
        'Priority deployment handling'
      ],
      hasDetails: true
    }
  ];
 
  return (
    <div className="min-h-screen bg-black py-8 px-4 flex items-start">
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .perspective { perspective: 1000px; }
      `}</style>
 
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl sm:text-4xl font-bold text-center animate-slide-up mb-6 sm:mb-8 text-white mb-2">
            Plans and Prices
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Every plan includes our intelligent design engine,
            secure hosting, and a dedicated team to help you launch.
          </p>
        </div>
 
        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-6">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isHovered={hoveredCard === plan.id}
              onHover={() => setHoveredCard(plan.id)}
              onLeave={() => setHoveredCard(null)}
              expandedDetails={expandedDetails}
              setExpandedDetails={setExpandedDetails}
            />
          ))}
        </div>
 
        {/* Compare */}
        {/* <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all hover:scale-105">
            Compare Plans
          </button>
        </div> */}
      </div>
    </div>
  );
}