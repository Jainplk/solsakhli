// import React, { useEffect, useRef } from 'react';
// import { Layers, TrendingUp, Zap, Target } from 'lucide-react';

// export default function DesignedForWorkSection() {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.fade-in-up');
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const features = [
//     {
//       icon: <Layers className="w-6 h-6" />,
//       title: "Structured layouts",
//       description: "AI helps establish clear structure from the start, so every page feels intentional."
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Consistent design",
//       description: "Your site stays visually consistent across pages, sections, and future updates."
//     },
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Faster from idea to live",
//       description: "Move from concept to launch without unnecessary steps or rework."
//     },
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Built to scale",
//       description: "Easily grow from one website to many without changing your process."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#0D1014] to-[#0B0C0F] py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16 fade-in-up">
//           <h2 className="text-[#FAFAFA] text-[64px] font-semibold leading-[120%] tracking-[-2.56px] mb-6">
//             Designed for how you work
//             <span className="text-[#FA8826]">.</span>
//           </h2>
//           <p className="text-[#F4F1F1] text-base font-normal leading-[135%] max-w-4xl mx-auto">
//             Design speed, without sacrificing quality. AI handles the heavy lifting, so you can focus on growth, content, and strategy.
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left - Animated Image Container */}
//           <div className="relative fade-in-up" style={{ animationDelay: '200ms' }}>
//             <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
//               {/* Rotating Gradient Border */}
//               <div className="absolute inset-0 rounded-3xl rotating-border"></div>
              
//               {/* Inner Content */}
//               <div className="absolute inset-[2px] bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a] rounded-3xl flex items-center justify-center">
//                 {/* Glow Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#FA8826]/20 via-transparent to-[#FA8826]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                
//                 {/* Center Icon/Visual */}
//                 <div className="relative z-10 text-[#FA8826] opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110">
//                   <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
//                     <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" opacity="0.3" className="animate-pulse-slow"/>
//                     <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" opacity="0.5" className="animate-pulse-slower"/>
//                     <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" opacity="0.7" className="animate-pulse-slowest"/>
//                     <circle cx="100" cy="100" r="20" fill="currentColor" className="animate-pulse"/>
//                   </svg>
//                 </div>

//                 {/* Floating Particles */}
//                 <div className="absolute inset-0 overflow-hidden rounded-3xl">
//                   <div className="particle particle-1"></div>
//                   <div className="particle particle-2"></div>
//                   <div className="particle particle-3"></div>
//                   <div className="particle particle-4"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right - Features Grid */}
//           <div className="grid grid-cols-1 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="fade-in-up hover-card group"
//                 style={{ animationDelay: `${300 + index * 100}ms` }}
//               >
//                 <div className="flex gap-4 items-start">
//                   {/* Icon */}
//                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FA8826] to-[#FA8826]/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
//                     <div className="text-[#FAFAFA]">
//                       {feature.icon}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <h3 className="text-[#FAFAFA] text-xl font-medium leading-[31px] tracking-[-0.002px] mb-2 group-hover:text-[#FA8826] transition-colors duration-300">
//                       {feature.title}
//                     </h3>
//                     <p className="text-[rgba(244,241,241,0.70)] text-base font-normal leading-[26px] tracking-[-0.002px]">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes rotate-border {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes pulse-slow {
//           0%, 100% {
//             opacity: 0.3;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.5;
//             transform: scale(1.05);
//           }
//         }

//         @keyframes pulse-slower {
//           0%, 100% {
//             opacity: 0.5;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.7;
//             transform: scale(1.08);
//           }
//         }

//         @keyframes pulse-slowest {
//           0%, 100% {
//             opacity: 0.7;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.9;
//             transform: scale(1.1);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//             opacity: 0.3;
//           }
//           50% {
//             transform: translate(10px, -10px) scale(1.2);
//             opacity: 0.6;
//           }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .rotating-border {
//           background: conic-gradient(
//             from 0deg,
//             #FA8826 0deg,
//             transparent 60deg,
//             transparent 300deg,
//             #FA8826 360deg
//           );
//           animation: rotate-border 4s linear infinite;
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }

//         .animate-pulse-slower {
//           animation: pulse-slower 4s ease-in-out infinite;
//         }

//         .animate-pulse-slowest {
//           animation: pulse-slowest 5s ease-in-out infinite;
//         }

//         .particle {
//           position: absolute;
//           width: 4px;
//           height: 4px;
//           background: #FA8826;
//           border-radius: 50%;
//           filter: blur(1px);
//         }

//         .particle-1 {
//           top: 20%;
//           left: 20%;
//           animation: float 6s ease-in-out infinite;
//         }

//         .particle-2 {
//           top: 60%;
//           right: 20%;
//           animation: float 8s ease-in-out infinite 1s;
//         }

//         .particle-3 {
//           bottom: 20%;
//           left: 30%;
//           animation: float 7s ease-in-out infinite 2s;
//         }

//         .particle-4 {
//           top: 40%;
//           right: 40%;
//           animation: float 9s ease-in-out infinite 1.5s;
//         }

//         .fade-in-up {
//           opacity: 0;
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .fade-in-up.animate-in {
//           opacity: 1;
//         }

//         .hover-card {
//           transition: all 0.3s ease;
//         }

//         .hover-card:hover {
//           transform: translateX(8px);
//         }

//         @media (max-width: 1024px) {
//           h2 {
//             font-size: 48px;
//           }
//         }

//         @media (max-width: 640px) {
//           h2 {
//             font-size: 36px;
//             line-height: 110%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }import React, { useEffect, useRef } from 'react';

// import { Layers, TrendingUp, Zap, Target } from 'lucide-react';
// import React, { useEffect, useRef } from 'react'; 
// import designedForWorkImage from '../../assets/Image/WorkSection.jpg';

// export default function DesignedForWorkSection() {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.fade-in-up');
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const features = [
//     {
//       icon: <Layers className="w-6 h-6" />,
//       title: "Structured layouts",
//       description: "AI helps establish clear structure from the start, so every page feels intentional."
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Consistent design",
//       description: "Your site stays visually consistent across pages, sections, and future updates."
//     },
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Faster from idea to live",
//       description: "Move from concept to launch without unnecessary steps or rework."
//     },
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Built to scale",
//       description: "Easily grow from one website to many without changing your process."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#0D1014] to-[#0B0C0F] py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16 fade-in-up">
//           <h2 className="text-[#FAFAFA] text-[64px] font-semibold leading-[120%] tracking-[-2.56px] mb-6">
//             Designed for how you work
//             <span className="text-[#FA8826]">.</span>
//           </h2>
//           <p className="text-[#F4F1F1] text-base font-normal leading-[135%] max-w-4xl mx-auto">
//             Design speed, without sacrificing quality. AI handles the heavy lifting, so you can focus on growth, content, and strategy.
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left - Image Container */}
//           <div 
//             className="relative fade-in-up group overflow-hidden rounded-3xl" 
//             style={{ animationDelay: '200ms' }}
//             ref={imageRef}
//           >
//             {/* Animated Border */}
//             <div className="absolute inset-0 rounded-3xl rotating-border"></div>
            
//             {/* Main Image Container */}
//             <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0D1014]/90 via-transparent to-transparent z-10"></div>
              
//               {/* Glow Effect on Hover */}
//               <div className="absolute inset-0 bg-gradient-to-br from-[#FA8826]/0 via-transparent to-[#FA8826]/0 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl z-20"></div>
              
//               {/* Main Image */}
//               <img 
//                 src={designedForWorkImage} 
//                 alt="Design workflow interface showing AI-assisted design tools"
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
              
//               {/* Floating Elements */}
//               <div className="absolute top-6 left-6 w-3 h-3 bg-[#FA8826] rounded-full animate-pulse z-30"></div>
//               <div className="absolute bottom-6 right-6 w-2 h-2 bg-[#FA8826] rounded-full animate-pulse z-30" style={{ animationDelay: '1s' }}></div>
              
//               {/* Corner Accents */}
//               <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FA8826]/40 rounded-tl-3xl"></div>
//               <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FA8826]/40 rounded-br-3xl"></div>
//             </div>
            
//             {/* Floating Labels */}
//             <div className="absolute -top-3 -right-3 bg-[#FA8826] text-[#0D1014] text-xs font-semibold px-3 py-1 rounded-full z-30 animate-float">
//               AI Powered
//             </div>
//             <div className="absolute -bottom-3 -left-3 bg-[#F4F1F1] text-[#0D1014] text-xs font-semibold px-3 py-1 rounded-full z-30 animate-float" style={{ animationDelay: '0.5s' }}>
//               Real-time
//             </div>
//           </div>

//           {/* Right - Features Grid (2x2 layout) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="fade-in-up hover-card group"
//                 style={{ animationDelay: `${300 + index * 100}ms` }}
//               >
//                 <div className="flex flex-col gap-3">
//                   {/* Icon */}
//                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FA8826] to-[#FA8826]/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
//                     <div className="text-[#FAFAFA]">
//                       {feature.icon}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div>
//                     <h3 className="text-[#FAFAFA] text-xl font-medium leading-[31px] tracking-[-0.002px] mb-2 group-hover:text-[#FA8826] transition-colors duration-300">
//                       {feature.title}
//                     </h3>
//                     <p className="text-[rgba(244,241,241,0.70)] text-base font-normal leading-[26px] tracking-[-0.002px]">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes rotate-border {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-5px);
//           }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.5;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1.2);
//           }
//         }

//         @keyframes slide-in-right {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .rotating-border {
//           background: conic-gradient(
//             from 0deg,
//             #FA8826 0deg,
//             transparent 60deg,
//             transparent 300deg,
//             #FA8826 360deg
//           );
//           animation: rotate-border 4s linear infinite;
//           z-index: 1;
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-pulse {
//           animation: pulse 2s ease-in-out infinite;
//         }

//         .fade-in-up {
//           opacity: 0;
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .fade-in-up.animate-in {
//           opacity: 1;
//         }

//         .hover-card {
//           transition: all 0.3s ease;
//           padding: 24px;
//           border-radius: 16px;
//           background: rgba(26, 26, 26, 0.3);
//           border: 1px solid rgba(42, 42, 42, 0.5);
//         }

//         .hover-card:hover {
//           transform: translateY(-4px);
//           border-color: rgba(250, 136, 38, 0.3);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//           background: rgba(26, 26, 26, 0.5);
//         }

//         /* Image hover effects */
//         .group:hover .rotating-border {
//           animation-duration: 2s;
//         }

//         .group:hover img {
//           transform: scale(1.05);
//         }

//         @media (max-width: 1024px) {
//           h2 {
//             font-size: 48px;
//           }
//         }

//         @media (max-width: 768px) {
//           .grid.md\\:grid-cols-2 {
//             grid-template-columns: 1fr;
//           }
          
//           .group img {
//             transform: scale(1.05);
//           }
//         }

//         @media (max-width: 640px) {
//           h2 {
//             font-size: 36px;
//             line-height: 110%;
//           }
          
//           .relative.aspect-\\[4\\/5\\] {
//             aspect-ratio: 1;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


import { Layers, TrendingUp, Zap, Target } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'; 
import designedForWorkImage from '../../assets/Image/WorkSection.jpg';

export default function DesignedForWorkSection() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Parallax effect for image on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Structured layouts",
      description: "AI helps establish clear structure from the start, so every page feels intentional."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Consistent design",
      description: "Your site stays visually consistent across pages, sections, and future updates."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Faster from idea to live",
      description: "Move from concept to launch without unnecessary steps or rework."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Built to scale",
      description: "Easily grow from one website to many without changing your process."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1014] to-[#0B0C0F] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-[#FAFAFA] text-[64px] font-semibold leading-[120%] tracking-[-2.56px] mb-6">
            Designed for how you work
            <span className="text-[#FA8826]">.</span>
          </h2>
          <p className="text-[#F4F1F1] text-base font-normal leading-[135%] max-w-4xl mx-auto">
            Design speed, without sacrificing quality. AI handles the heavy lifting, so you can focus on growth, content, and strategy.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Container */}
          <div 
            ref={containerRef}
            className="relative fade-in-up group overflow-hidden rounded-3xl cursor-pointer" 
            style={{ animationDelay: '200ms' }}
          >
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-[#FA8826]/20 to-transparent"
                  style={{
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `floatParticle ${Math.random() * 10 + 5}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            {/* Animated Glow Border */}
            <div className="absolute inset-0 rounded-3xl glow-border"></div>
            
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              {/* Dynamic Gradient Overlay */}
              <div 
                className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background: `radial-gradient(
                    circle at ${mousePosition.x}% ${mousePosition.y}%, 
                    rgba(250, 136, 38, 0.1) 0%, 
                    transparent 50%
                  )`,
                }}
              />
              
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 z-10 opacity-20 pattern-grid"></div>
              
              {/* Main Image with Parallax Effect */}
              <img 
                ref={imageRef}
                src={designedForWorkImage} 
                alt="Design workflow interface showing AI-assisted design tools"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: `
                    perspective(1000px) 
                    rotateX(${(mousePosition.y - 50) * 0.1}deg) 
                    rotateY(${(mousePosition.x - 50) * -0.1}deg) 
                    translateZ(0px)
                  `,
                  transition: 'transform 0.2s ease-out'
                }}
              />
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 z-20 scanlines opacity-10"></div>
              
              {/* Interactive Elements */}
              <div className="absolute top-6 left-6 z-30">
                <div className="w-3 h-3 bg-[#FA8826] rounded-full animate-pulse-ring">
                  <div className="absolute inset-0 rounded-full border border-[#FA8826] animate-ping"></div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 z-30">
                <div className="w-2 h-2 bg-[#FA8826] rounded-full animate-pulse-ring" style={{ animationDelay: '1s' }}>
                  <div className="absolute inset-0 rounded-full border border-[#FA8826] animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* Corner Glow Effects */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#FA8826]/20 to-transparent blur-xl opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#FA8826]/20 to-transparent blur-xl opacity-50"></div>
              
              {/* Floating UI Elements */}
              <div className="absolute top-1/4 left-8 z-30">
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-[#FA8826]/30 animate-slide-in-left">
                  <div className="w-2 h-2 bg-[#FA8826] rounded-full animate-pulse"></div>
                  <span className="text-[#FAFAFA] text-xs">AI Processing</span>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 right-8 z-30">
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-[#FA8826]/30 animate-slide-in-right">
                  <div className="w-2 h-2 bg-[#FA8826] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-[#FAFAFA] text-xs">Real-time Update</span>
                </div>
              </div>
            </div>
            
            {/* Animated Floating Elements */}
            <div className="absolute -top-4 -right-4 z-40 animate-bounce-slow">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#FA8826] to-[#ff9a3d] text-[#0D1014] text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                  AI Powered
                </div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#FA8826] rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 z-40 animate-bounce-slow" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#F4F1F1] to-[#ffffff] text-[#0D1014] text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                  Real-time
                </div>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#FA8826] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>

          {/* Right - Features Grid (2x2 layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="fade-in-up hover-card group"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex flex-col gap-3">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FA8826] to-[#FA8826]/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <div className="text-[#FAFAFA]">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[#FAFAFA] text-xl font-medium leading-[31px] tracking-[-0.002px] mb-2 group-hover:text-[#FA8826] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-[rgba(244,241,241,0.70)] text-base font-normal leading-[26px] tracking-[-0.002px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px) scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes glowBorder {
          0%, 100% {
            opacity: 0.3;
            box-shadow: 0 0 20px rgba(250, 136, 38, 0.2);
          }
          50% {
            opacity: 0.6;
            box-shadow: 0 0 30px rgba(250, 136, 38, 0.4);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scanline {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 10px;
          }
        }

        .glow-border {
          animation: glowBorder 3s ease-in-out infinite;
          background: linear-gradient(90deg, 
            rgba(250, 136, 38, 0.2) 0%, 
            rgba(250, 136, 38, 0.1) 25%, 
            rgba(250, 136, 38, 0.05) 50%, 
            rgba(250, 136, 38, 0.1) 75%, 
            rgba(250, 136, 38, 0.2) 100%
          );
        }

        .pattern-grid {
          background-image: 
            linear-gradient(to right, rgba(250, 136, 38, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(250, 136, 38, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .scanlines {
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(250, 136, 38, 0.05) 50%
          );
          background-size: 100% 4px;
          animation: scanline 0.5s linear infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.5s forwards;
        }

        .fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .fade-in-up.animate-in {
          opacity: 1;
        }

        .hover-card {
          transition: all 0.3s ease;
          padding: 24px;
          border-radius: 16px;
          background: rgba(26, 26, 26, 0.3);
          border: 1px solid rgba(42, 42, 42, 0.5);
        }

        .hover-card:hover {
          transform: translateY(-4px);
          border-color: rgba(250, 136, 38, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          background: rgba(26, 26, 26, 0.5);
        }

        @media (max-width: 1024px) {
          h2 {
            font-size: 48px;
          }
          
          .group:hover img {
            transform: none !important;
          }
        }

        @media (max-width: 768px) {
          .grid.md\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }
          
          .scanlines {
            animation: none;
          }
          
          .animate-slide-in-left,
          .animate-slide-in-right {
            animation: none;
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 640px) {
          h2 {
            font-size: 36px;
            line-height: 110%;
          }
          
          .relative.aspect-\\[4\\/5\\] {
            aspect-ratio: 1;
          }
          
          .glow-border {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}