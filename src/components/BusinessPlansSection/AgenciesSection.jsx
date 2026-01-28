import React, { useEffect, useRef, useState } from 'react';
import plansection from "../../assets/Image/plansection.png";
import "./BusinessPlansCommon.css";

export default function AgenciesSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            setTimeout(() => {
              setVisibleFeatures(true);
            }, 300);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-100px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    "Produce more client websites without adding headcount.",
    "Keep design quality and brand standards consistent across projects.",
    "Speed up delivery without increasing team size.",
    "Confidently handle multiple clients and tight timelines."
  ];

  const cards = [
    "Custom 8-page WordPress website",
    "Expanded layouts for richer content",
    "Greater design flexibility and customization",
    "Support for dynamic pages and integrations",
    "Editable content across all pages",
    "Built to scale as your business grows",
    "Priority access to Bella LV-3 features"
  ];

  return (
    <div 
      ref={sectionRef}
      data-section="agencies"
      className="max-w-7xl mx-auto relative agencies-section"
    >
    
      <div 
        className={`absolute -inset-4 bg-gradient-to-r from-[#FA8826]/0 via-[#FA8826]/5 to-[#FA8826]/0 blur-xl transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
      />

      <div className="relative z-10">
        <div className="text-center mb-12">
          <button 
            className={`mb-8 px-5 py-2 rounded-full bg-gradient-to-b from-[rgba(250,136,38,0.25)] to-[rgba(250,136,38,0.25)] text-[#FA8826] text-sm font-normal leading-[135%] hover:from-[rgba(250,136,38,0.35)] hover:to-[rgba(250,136,38,0.35)] transition-all duration-300 animate-float ${isInView ? 'animate-in' : ''}`}
            style={{
              animation: isInView ? 'agenciesTitleEntrance 1.2s ease-out' : 'none'
            }}
          >
            Bella LV-3 Pro Plan
          </button>
          
          <h2 
            className="text-[#FAFAFA] text-[60px] font-semibold leading-[56px] tracking-[-0.9px] mb-6 agencies-title"
            style={{
              animation: isInView ? 'agenciesTitleEntrance 1.2s ease-out' : 'none',
              opacity: isInView ? 1 : 0
            }}
          >
            For Agencies
          </h2>
          
          <p 
            className="text-[#E9E9E9] text-base font-normal leading-[135%] max-w-2xl mx-auto"
            style={{
              animation: isInView ? 'fadeInUp 0.8s ease-out 0.2s forwards' : 'none',
              opacity: isInView ? 1 : 0
            }}
          >
            Scale your agency without sacrificing quality. Handle more clients with professional websites delivered faster.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
     
          <div className="space-y-6 mt-10 pt-5 order-2 lg:order-1">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-3 items-start group agencies-feature-item"
                style={{
                  animation: visibleFeatures ? `agenciesSlideInLeft 0.6s ease-out ${index * 0.15}s forwards` : 'none',
                  opacity: visibleFeatures ? 1 : 0
                }}
              >
                <span className="text-[#FA8826] text-base font-normal leading-[135%] mt-1 animate-pulse-glow group-hover:scale-125 transition-transform duration-300">•</span>
                <p className="text-[#E9E9E9] text-xl font-normal leading-[135%] group-hover:text-[#FAFAFA] transition-all duration-300 hover:-translate-x-2">
                  {feature}
                </p>
              </div>
            ))}
            
            <button 
              className="mt-8 bg-[#FA8826] rounded-[40px] h-12 px-8 flex items-center justify-center gap-1.5 hover:bg-[#e67a1f] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FA8826]/50 group relative overflow-hidden agencies-button"
              style={{
                animation: isInView ? 'fadeInUp 0.8s ease-out 0.8s forwards' : 'none',
                opacity: isInView ? 1 : 0
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FA8826] to-[#ff9a3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-[#181818] font-semibold text-base leading-[140%] relative z-10 group-hover:scale-105 transition-transform duration-300">
                Scale Your Agency
              </span>
            </button>
          </div>

          <div 
            className="rounded-2xl h-[400px] overflow-hidden group relative agencies-image-container order-1 lg:order-2"
            style={{
              animation: isInView ? 'agenciesScaleIn 1s ease-out 0.4s forwards' : 'none',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'scale(1)' : 'scale(0.95)'
            }}
          >
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 agencies-image-content"
              style={{ backgroundImage: `url(${plansection})` }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent" />
            
            <div className="absolute inset-0 bg-[#FA8826]/0 group-hover:bg-[#FA8826]/10 transition-all duration-500" />
            
            <div className="absolute inset-0 border border-[#2a2a2a] group-hover:border-[#FA8826]/40 transition-all duration-500 rounded-2xl" />
            
            <div className="absolute top-4 right-4 w-8 h-8 border border-[#FA8826]/30 rounded-full agencies-float-element" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border border-[#FA8826]/20 rounded-full agencies-float-element" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        <div className="mt-20">
          <div 
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              animation: isInView ? 'fadeInUp 1s ease-out 1s forwards' : 'none',
              opacity: isInView ? 1 : 0
            }}
          >
            <h3 className="text-[#FAFAFA] text-[60px] font-semibold leading-[120%] tracking-[-2.4px] group-hover:text-[#FA8826] transition-colors duration-500">
              What's included
            </h3>
            <span 
              className="text-[#FAFAFA] text-[60px] font-semibold leading-[120%] tracking-[-2.4px] group-hover:text-[#FA8826] transition-colors duration-300 transform group-hover:scale-125"
              style={{
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
              }}
            >
              {isOpen ? '×' : '+'}
            </span>
          </div>
          
          <div 
            className="h-[0.5px] bg-[#FA8826]/30 mt-4 mb-8 origin-left transition-all duration-700"
            style={{
              transform: isOpen ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left'
            }}
          />
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            {cards.map((card, index) => (
              <div
                key={index}
                className="border-[0.5px] border-[#FA8826] bg-[#181818] rounded-xl p-6 flex flex-col gap-2.5 hover:bg-[#1f1f1f] hover:border-[#FA8826]/80 hover:shadow-lg hover:shadow-[#FA8826]/20 transition-all duration-300 cursor-pointer relative overflow-hidden group agencies-card"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ 
                  animation: isOpen ? `cardEntrance 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                  opacity: isOpen ? 1 : 0,
                  transform: hoveredCard === index 
                    ? 'translateY(-8px) scale(1.05)' 
                    : 'translateY(0) scale(1)',
                  animationDelay: isOpen ? `${index * 0.1}s` : '0s'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FA8826]/0 via-[#FA8826]/5 to-[#FA8826]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#FA8826]/50 transition-all duration-500" />
                
                <p className="text-[#FA8826] text-2xl font-semibold leading-[42px] tracking-[-0.002px] relative z-10 group-hover:scale-[1.02] transition-transform duration-300">
                  {card}
                </p>
                
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FA8826] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .agencies-section {
          position: relative;
        }

        .agencies-title {
          animation-fill-mode: both;
          letter-spacing: -0.9px;
        }

        .agencies-image-container {
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .agencies-image-container:hover .agencies-image-content {
          animation: agenciesImageFloat 4s ease-in-out infinite;
        }

        .agencies-float-element {
          animation: agenciesImageFloat 3s ease-in-out infinite;
        }

        .agencies-feature-item {
          animation-fill-mode: both;
        }

        .agencies-button:hover {
          animation: agenciesGlowPulse 2s ease-in-out infinite;
        }

        .agencies-card:hover {
          animation: agenciesGlowPulse 2s ease-in-out infinite;
          transform: translateY(-8px) scale(1.05);
        }
      `}</style>
    </div>
  );
}