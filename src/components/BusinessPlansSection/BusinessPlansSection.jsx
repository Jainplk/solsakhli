import React, { useState, useEffect, useRef } from 'react';
import smallbusiness from "../../assets/Image/smallbusiness.png";
import plansection from "../../assets/Image/plansection.png";

export default function BusinessPlansSection() {
  const [isSmallBusinessOpen, setIsSmallBusinessOpen] = useState(false);
  const [isAgenciesOpen, setIsAgenciesOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const [sectionInView, setSectionInView] = useState({
    smallBusiness: false,
    agencies: false
  });

  const sectionRefs = {
    smallBusiness: useRef(null),
    agencies: useRef(null)
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.dataset.section;
            setSectionInView(prev => ({ ...prev, [section]: true }));
            
            // Animate features sequentially for the visible section
            if (section === 'smallBusiness') {
              setTimeout(() => {
                setVisibleFeatures(prev => ({ ...prev, smallBusiness: true }));
              }, 300);
            } else if (section === 'agencies') {
              setTimeout(() => {
                setVisibleFeatures(prev => ({ ...prev, agencies: true }));
              }, 300);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-100px' }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const smallBusinessFeatures = [
    "Built to support your business goals, not just look good.",
    "Clear, professional design that builds trust with customers.",
    "Easy updates so your site stays current as your business changes.",
    "Works everywhere your customers find you—phone, tablet, or desktop."
  ];

  const agencyFeatures = [
    "Produce more client websites without adding headcount.",
    "Keep design quality and brand standards consistent across projects.",
    "Speed up delivery without increasing team size.",
    "Confidently handle multiple clients and tight timelines."
  ];

  const smallBusinessCards = [
    "Custom 5-page WordPress website",
    "Designed specifically for your business",
    "Custom visuals and brand styling",
    "Custom editable page and content",
    "Mobile-friendly on all devices",
    "Managed hosting, security, and updates.",
    "Early access to Bella LV-3 features"
  ];

  const agencyCards = [
    "Custom 8-page WordPress website",
    "Expanded layouts for richer content",
    "Greater design flexibility and customization",
    "Support for dynamic pages and integrations",
    "Editable content across all pages",
    "Built to scale as your business grows",
    "Priority access to Bella LV-3 features"
  ];

  // Enhanced card hover effect with ripple
  const handleCardHover = (index, section) => {
    setHoveredCard({ index, section });
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-20 px-6 relative overflow-hidden">
      
      {/* Small Business Section */}
      <div 
        ref={sectionRefs.smallBusiness}
        data-section="smallBusiness"
        className="max-w-7xl mx-auto mb-32 relative"
      >
        {/* Section entrance glow */}
        <div 
          className={`absolute -inset-4 bg-gradient-to-r from-[#FA8826]/0 via-[#FA8826]/5 to-[#FA8826]/0 blur-xl transition-all duration-1000 ${sectionInView.smallBusiness ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="relative z-10">
          <div className="text-center mb-12">
            <button className="mb-8 px-5 py-2 rounded-full bg-gradient-to-b from-[rgba(250,136,38,0.25)] to-[rgba(250,136,38,0.25)] text-[#FA8826] text-sm font-normal leading-[135%] hover:from-[rgba(250,136,38,0.35)] hover:to-[rgba(250,136,38,0.35)] transition-all duration-300 animate-float">
              Bella LV-3 Essentials Plan
            </button>
            
            <h2 
              className="text-[#FAFAFA] text-[60px] font-semibold leading-[56px] tracking-[-0.9px] mb-6"
              style={{
                animation: sectionInView.smallBusiness ? 'titleEntrance 1s ease-out' : 'none'
              }}
            >
              For Small Business
            </h2>
            
            <p 
              className="text-[#E9E9E9] text-base font-normal leading-[135%] max-w-2xl mx-auto"
              style={{
                animation: sectionInView.smallBusiness ? 'fadeInUp 0.8s ease-out 0.2s forwards' : 'none',
                opacity: sectionInView.smallBusiness ? 1 : 0
              }}
            >
              No design skills. No technical work. Just a website that helps your business grow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Small Business Image */}
            <div 
              className="rounded-2xl h-[400px] overflow-hidden group relative"
              style={{
                animation: sectionInView.smallBusiness ? 'scaleIn 0.8s ease-out 0.4s forwards' : 'none',
                opacity: sectionInView.smallBusiness ? 1 : 0,
                transform: sectionInView.smallBusiness ? 'scale(1)' : 'scale(0.95)'
              }}
            >
              {/* Image with gradient overlay - FIXED: Using imported variable directly */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${smallbusiness})`,
                }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent" />
              
              {/* Orange overlay on hover */}
              <div className="absolute inset-0 bg-[#FA8826]/0 group-hover:bg-[#FA8826]/10 transition-all duration-500" />
              
              {/* Border effect */}
              <div className="absolute inset-0 border border-[#2a2a2a] group-hover:border-[#FA8826]/40 transition-all duration-500 rounded-2xl" />
              
              {/* Floating elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border border-[#FA8826]/30 rounded-full animate-bounce-slow bg-black/20 backdrop-blur-sm" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border border-[#FA8826]/20 rounded-full animate-bounce-slow bg-black/20 backdrop-blur-sm" style={{ animationDelay: '0.5s' }} />
              
              {/* Content overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  {/* <div className="w-2 h-2 bg-[#FA8826] rounded-full animate-pulse" />
                  <span className="text-[#FAFAFA] text-sm font-medium tracking-wide">
                    Small Business Website Example
                  </span> */}
                </div>
              </div>
            </div>

            {/* Right - Features with sequential animation */}
            <div className="space-y-6 mt-10 pt-5">
              {smallBusinessFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex gap-3 items-start group"
                  style={{
                    animation: visibleFeatures.smallBusiness ? `slideInRight 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                    opacity: visibleFeatures.smallBusiness ? 1 : 0
                  }}
                >
                  <span className="text-[#FA8826] text-base font-normal leading-[135%] mt-1 animate-pulse-glow group-hover:scale-125 transition-transform duration-300">•</span>
                  <p className="text-[#E9E9E9] text-xl font-normal leading-[135%] group-hover:text-[#FAFAFA] transition-all duration-300 hover:translate-x-2">
                    {feature}
                  </p>
                </div>
              ))}
              
              <button 
                className="mt-8 bg-[#FA8826] rounded-[40px] h-12 px-8 flex items-center justify-center gap-1.5 hover:bg-[#e67a1f] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FA8826]/50 group relative overflow-hidden"
                style={{
                  animation: sectionInView.smallBusiness ? 'fadeInUp 0.8s ease-out 0.8s forwards' : 'none',
                  opacity: sectionInView.smallBusiness ? 1 : 0
                }}
              >
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FA8826] to-[#ff9a3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-[#181818] font-semibold text-base leading-[140%] relative z-10 group-hover:scale-105 transition-transform duration-300">
                  Build Your Website
                </span>
              </button>
            </div>
          </div>

          {/* What's Included - Small Business */}
          <div className="mt-20">
            <div 
              className="flex items-center justify-between cursor-pointer group"
              onClick={() => setIsSmallBusinessOpen(!isSmallBusinessOpen)}
              style={{
                animation: sectionInView.smallBusiness ? 'fadeInUp 1s ease-out 1s forwards' : 'none',
                opacity: sectionInView.smallBusiness ? 1 : 0
              }}
            >
              <h3 className="text-[#FAFAFA] text-[60px] font-semibold leading-[120%] tracking-[-2.4px] group-hover:text-[#FA8826] transition-colors duration-500">
                What's included
              </h3>
              <span 
                className="text-[#FAFAFA] text-[60px] font-semibold leading-[120%] tracking-[-2.4px] group-hover:text-[#FA8826] transition-colors duration-300 transform group-hover:scale-125"
                style={{
                  transform: isSmallBusinessOpen ? 'rotate(0deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                {isSmallBusinessOpen ? '-' : '+'}
              </span>
            </div>
            
            <div 
              className="h-[0.5px] bg-[#FA8826]/30 mt-4 mb-8 origin-left transition-all duration-700"
              style={{
                transform: isSmallBusinessOpen ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left'
              }}
            />
            
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 overflow-hidden ${isSmallBusinessOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {smallBusinessCards.map((card, index) => (
                <div
                  key={index}
                  className="border-[0.5px] border-[#FA8826] bg-[#181818] rounded-xl p-6 flex flex-col gap-2.5 hover:bg-[#1f1f1f] hover:border-[#FA8826]/80 hover:shadow-lg hover:shadow-[#FA8826]/20 transition-all duration-300 cursor-pointer relative overflow-hidden group"
                  onMouseEnter={() => handleCardHover(index, 'smallBusiness')}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ 
                    animation: isSmallBusinessOpen ? `cardEntrance 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                    opacity: isSmallBusinessOpen ? 1 : 0,
                    transform: hoveredCard?.index === index && hoveredCard?.section === 'smallBusiness' 
                      ? 'translateY(-8px) scale(1.03)' 
                      : 'translateY(0) scale(1)'
                  }}
                >
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FA8826]/0 via-[#FA8826]/5 to-[#FA8826]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#FA8826]/50 transition-all duration-500" />
                  
                  <p className="text-[#FA8826] text-2xl font-semibold leading-[42px] tracking-[-0.002px] relative z-10 group-hover:scale-[1.02] transition-transform duration-300">
                    {card}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FA8826] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* For Agencies Section */}
      <div 
        ref={sectionRefs.agencies}
        data-section="agencies"
        className="max-w-7xl mx-auto relative"
      >
        {/* Section entrance glow */}
        <div 
          className={`absolute -inset-4 bg-gradient-to-r from-[#FA8826]/0 via-[#FA8826]/5 to-[#FA8826]/0 blur-xl transition-all duration-1000 ${sectionInView.agencies ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="relative z-10">
          <div className="text-center mb-12">
            <button className="mb-8 px-5 py-2 rounded-full bg-gradient-to-b from-[rgba(250,136,38,0.25)] to-[rgba(250,136,38,0.25)] text-[#FA8826] text-sm font-normal leading-[135%] hover:from-[rgba(250,136,38,0.35)] hover:to-[rgba(250,136,38,0.35)] transition-all duration-300 animate-float">
              Bella LV-3 Pro Plan
            </button>
            
            <h2 
              className="text-[#FAFAFA] text-[60px] font-semibold leading-[56px] tracking-[-0.9px] mb-6"
              style={{
                animation: sectionInView.agencies ? 'titleEntrance 1s ease-out' : 'none'
              }}
            >
              For Agencies
            </h2>
            
            <p 
              className="text-[#E9E9E9] text-base font-normal leading-[135%] max-w-2xl mx-auto"
              style={{
                animation: sectionInView.agencies ? 'fadeInUp 0.8s ease-out 0.2s forwards' : 'none',
                opacity: sectionInView.agencies ? 1 : 0
              }}
            >
              No design skills. No technical work. Just a website that helps your business grow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Agencies Image */}
            <div 
              className="rounded-2xl h-[400px] overflow-hidden group relative"
              style={{
                animation: sectionInView.agencies ? 'scaleIn 0.8s ease-out 0.4s forwards' : 'none',
                opacity: sectionInView.agencies ? 1 : 0,
                transform: sectionInView.agencies ? 'scale(1)' : 'scale(0.95)'
              }}
            >
              {/* Image with gradient overlay - FIXED: Using imported variable directly */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${plansection})`,
                }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent" />
              
              {/* Orange overlay on hover */}
              <div className="absolute inset-0 bg-[#FA8826]/0 group-hover:bg-[#FA8826]/10 transition-all duration-500" />
              
              {/* Border effect */}
              <div className="absolute inset-0 border border-[#2a2a2a] group-hover:border-[#FA8826]/40 transition-all duration-500 rounded-2xl" />
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-[#FA8826]/30 rounded-full animate-bounce-slow bg-black/20 backdrop-blur-sm" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border border-[#FA8826]/20 rounded-full animate-bounce-slow bg-black/20 backdrop-blur-sm" style={{ animationDelay: '0.5s' }} />
              
              {/* Content overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  {/* <div className="w-2 h-2 bg-[#FA8826] rounded-full animate-pulse" />
                  <span className="text-[#FAFAFA] text-sm font-medium tracking-wide">
                    Agency Website Dashboard Example
                  </span> */}
                </div>
              </div>
            </div>

            {/* Right - Features with sequential animation */}
            <div className="space-y-6 mt-10 pt-5">
              {agencyFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex gap-3 items-start group"
                  style={{
                    animation: visibleFeatures.agencies ? `slideInLeft 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                    opacity: visibleFeatures.agencies ? 1 : 0
                  }}
                >
                  <span className="text-[#FA8826] text-base font-normal leading-[135%] mt-1 animate-pulse-glow group-hover:scale-125 transition-transform duration-300">•</span>
                  <p className="text-[#E9E9E9] text-xl font-normal leading-[135%] group-hover:text-[#FAFAFA] transition-all duration-300 hover:translate-x-2">
                    {feature}
                  </p>
                </div>
              ))}
              
              <button 
                className="mt-8 bg-[#FA8826] rounded-[40px] h-12 px-8 flex items-center justify-center gap-1.5 hover:bg-[#e67a1f] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FA8826]/50 group relative overflow-hidden"
                style={{
                  animation: sectionInView.agencies ? 'fadeInUp 0.8s ease-out 0.8s forwards' : 'none',
                  opacity: sectionInView.agencies ? 1 : 0
                }}
              >
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FA8826] to-[#ff9a3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-[#181818] font-semibold text-base leading-[140%] relative z-10 group-hover:scale-105 transition-transform duration-300">
                  Build Your Website
                </span>
              </button>
            </div>
          </div>

          {/* What's Included - Agencies */}
          <div className="mt-20">
            <div 
              className="flex items-center justify-between cursor-pointer group"
              onClick={() => setIsAgenciesOpen(!isAgenciesOpen)}
              style={{
                animation: sectionInView.agencies ? 'fadeInUp 1s ease-out 1s forwards' : 'none',
                opacity: sectionInView.agencies ? 1 : 0
              }}
            >
              <h3 className="text-[#FAFAFA] text-[60px] font-semibold leading-[120%] tracking-[-2.4px] group-hover:text-[#FA8826] transition-colors duration-500">
                What's included
              </h3>
              <span 
                className="text-[#FAFAFA] text-[60px] font-semibold leading-[120%] tracking-[-2.4px] group-hover:text-[#FA8826] transition-colors duration-300 transform group-hover:scale-125"
                style={{
                  transform: isAgenciesOpen ? 'rotate(0deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                {isAgenciesOpen ? '-' : '+'}
              </span>
            </div>
            
            <div 
              className="h-[0.5px] bg-[#FA8826]/30 mt-4 mb-8 origin-left transition-all duration-700"
              style={{
                transform: isAgenciesOpen ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left'
              }}
            />
            
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 overflow-hidden ${isAgenciesOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {agencyCards.map((card, index) => (
                <div
                  key={index}
                  className="border-[0.5px] border-[#FA8826] bg-[#181818] rounded-xl p-6 flex flex-col gap-2.5 hover:bg-[#1f1f1f] hover:border-[#FA8826]/80 hover:shadow-lg hover:shadow-[#FA8826]/20 transition-all duration-300 cursor-pointer relative overflow-hidden group"
                  onMouseEnter={() => handleCardHover(index, 'agencies')}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ 
                    animation: isAgenciesOpen ? `cardEntrance 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                    opacity: isAgenciesOpen ? 1 : 0,
                    transform: hoveredCard?.index === index && hoveredCard?.section === 'agencies' 
                      ? 'translateY(-8px) scale(1.03)' 
                      : 'translateY(0) scale(1)'
                  }}
                >
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FA8826]/0 via-[#FA8826]/5 to-[#FA8826]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#FA8826]/50 transition-all duration-500" />
                  
                  <p className="text-[#FA8826] text-2xl font-semibold leading-[42px] tracking-[-0.002px] relative z-10 group-hover:scale-[1.02] transition-transform duration-300">
                    {card}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FA8826] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
            text-shadow: 0 0 5px rgba(250, 136, 38, 0);
          }
          50% {
            opacity: 0.8;
            text-shadow: 0 0 10px rgba(250, 136, 38, 0.5);
          }
        }

        @keyframes titleEntrance {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes cardEntrance {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Smooth transitions for all interactive elements */
        * {
          transition-duration: 300ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .text-\[60px\] {
            font-size: 48px;
            line-height: 52px;
          }
          
          .h-\[400px\] {
            height: 300px;
          }
        }

        @media (max-width: 640px) {
          .text-\[60px\] {
            font-size: 40px;
            line-height: 44px;
          }
          
          .h-\[400px\] {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}