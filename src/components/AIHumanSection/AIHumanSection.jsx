// import React, { useEffect, useRef } from 'react';

// export default function AIHumanSection() {
//   const containerRef = useRef(null);

//   // Create animated background particles
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     // Create particles for background animation
//     const createParticles = () => {
//       const particles = [];
//       const particleCount = 20; // Increased particle count

//       for (let i = 0; i < particleCount; i++) {
//         const particle = document.createElement('div');
//         particle.className = 'ai-human-particle';
        
//         // Random properties
//         const size = Math.random() * 5 + 3; // Slightly larger particles
//         const posX = Math.random() * 100;
//         const posY = Math.random() * 100;
//         const duration = Math.random() * 25 + 15; // Longer animation
//         const delay = Math.random() * 5;
        
//         particle.style.cssText = `
//           position: absolute;
//           width: ${size}px;
//           height: ${size}px;
//           background: ${i % 3 === 0 ? '#FA8826' : i % 3 === 1 ? '#F4F1F1' : '#FAFAFA'};
//           border-radius: 50%;
//           opacity: ${Math.random() * 0.4 + 0.1};
//           left: ${posX}%;
//           top: ${posY}%;
//           animation: floatParticle ${duration}s ease-in-out ${delay}s infinite alternate;
//         `;
        
//         container.appendChild(particle);
//         particles.push(particle);
//       }

//       return particles;
//     };

//     const particles = createParticles();

//     return () => {
//       particles.forEach(particle => {
//         if (container.contains(particle)) {
//           container.removeChild(particle);
//         }
//       });
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef}
//       className="ai-human-section min-h-screen w-full bg-[#0D1014] flex items-center justify-center px-6 relative overflow-hidden"
//       style={{
//         background: 'linear-gradient(135deg, #0D1014 0%, #11161c 50%, #0D1014 100%)'
//       }}
//     >
//       {/* Animated gradient background */}
//       <div className="absolute inset-0 ai-human-gradient-animation"></div>
      
//       {/* Animated grid background */}
//       <div className="absolute inset-0 ai-human-grid-pattern opacity-[0.04]"></div>
      
//       {/* Full width container */}
//       <div className="w-full max-w-7xl relative z-10"> {/* Changed from max-w-4xl to max-w-7xl */}
//         <div className="max-w-6xl mx-auto"> {/* Added inner container for better control */}
//           {/* Animated Title - Full width */}
//           <h1 className="mb-10 animate-fadeInUp">
//             <span className="text-[#F4F1F1] font-medium text-[72px] leading-[76px] tracking-[-1.08px] ai-human-title-word animate-slideInLeft">
//               AI{' '}
//             </span>
//             <span className="text-[#FA8826] font-medium text-[72px] leading-[76px] tracking-[-1.08px] ai-human-title-plus animate-pulseGlow">
//               +
//             </span>
//             <span className="text-[#F4F1F1] font-medium text-[72px] leading-[76px] tracking-[-1.08px] ai-human-title-word animate-slideInRight">
//               {' '}Human Control
//             </span>
//           </h1>

//           {/* Animated Description - Full width */}
//           <p className="text-[#FAFAFA] text-[30px] font-normal leading-[140%] mb-14 max-w-5xl animate-fadeInUp delay-300">
//             AI gives you a powerful starting point but every design is fully editable. 
//             Refine layouts, adjust content, and make it truly yours.
//           </p>

//           {/* Animated Buttons */}
//           <div className="flex gap-6 flex-wrap animate-fadeInUp delay-500">
//             {/* Get Started Button */}
//             <button className="ai-human-button-primary bg-[#FA8826] rounded-[40px] h-14 px-10 flex items-center justify-center gap-1.5 hover:bg-[#e67a1f] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FA8826]/25">
//               <span className="text-[#0D1014] font-semibold text-lg leading-[140%]">
//                 Get Started Today
//               </span>
//             </button>

//             {/* Book a Demo Button */}
//             <button className="ai-human-button-secondary border-2 border-[#FA8826] rounded-[40px] h-14 px-10 flex items-center justify-center gap-1.5 hover:bg-[#FA8826]/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FA8826]/15 backdrop-blur-sm">
//               <span className="text-[#FA8826] font-semibold text-lg leading-[140%]">
//                 Book a Demo
//               </span>
//             </button>
//           </div>

//           {/* Connection line animation between AI and Human - Wider */}
//           <div className="ai-human-connection-line absolute top-24 left-1/2 transform -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-transparent via-[#FA8826] to-transparent"></div>
//         </div>

//         {/* Additional decorative elements for wider layout */}
//         <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-px bg-gradient-to-r from-[#FA8826] to-transparent opacity-30"></div>
//         <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-px bg-gradient-to-l from-[#FA8826] to-transparent opacity-30"></div>
//       </div>

//       {/* Add CSS animations in style tag */}
//       <style jsx>{`
//         @keyframes floatParticle {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           50% {
//             transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) scale(1.3);
//           }
//         }

//         @keyframes gradientShift {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-80px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(80px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes pulseGlow {
//           0%, 100% {
//             opacity: 1;
//             text-shadow: 0 0 25px rgba(250, 136, 38, 0);
//           }
//           50% {
//             opacity: 0.9;
//             text-shadow: 0 0 25px rgba(250, 136, 38, 0.7);
//           }
//         }

//         .ai-human-section {
//           position: relative;
//           width: 100%;
//         }

//         .ai-human-gradient-animation {
//           background: linear-gradient(
//             -45deg, 
//             rgba(250, 136, 38, 0.05) 0%, 
//             rgba(244, 241, 241, 0.03) 25%, 
//             rgba(250, 136, 38, 0.02) 50%, 
//             rgba(244, 241, 241, 0.03) 75%, 
//             rgba(250, 136, 38, 0.05) 100%
//           );
//           background-size: 400% 400%;
//           animation: gradientShift 20s ease infinite;
//         }

//         .ai-human-grid-pattern {
//           background-image: 
//             linear-gradient(to right, rgba(250, 136, 38, 0.15) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(250, 136, 38, 0.15) 1px, transparent 1px);
//           background-size: 60px 60px; /* Larger grid for wider layout */
//         }

//         .ai-human-title-word {
//           display: inline-block;
//         }

//         .ai-human-title-plus {
//           display: inline-block;
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 1.2s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-slideInLeft {
//           animation: slideInLeft 1.2s ease-out forwards;
//           opacity: 0;
//           animation-delay: 0.2s;
//         }

//         .animate-slideInRight {
//           animation: slideInRight 1.2s ease-out forwards;
//           opacity: 0;
//           animation-delay: 0.5s;
//         }

//         .animate-pulseGlow {
//           animation: pulseGlow 2.5s ease-in-out infinite;
//         }

//         .delay-300 {
//           animation-delay: 0.4s;
//         }

//         .delay-500 {
//           animation-delay: 0.7s;
//         }

//         .ai-human-button-primary {
//           box-shadow: 0 4px 20px rgba(250, 136, 38, 0.3);
//         }

//         .ai-human-button-secondary {
//           backdrop-filter: blur(12px);
//         }

//         .ai-human-connection-line {
//           animation: widthExpand 1.5s ease-out 1s forwards;
//         }

//         @keyframes widthExpand {
//           from {
//             width: 0;
//             opacity: 0;
//           }
//           to {
//             width: 500px; /* Wider connection line */
//             opacity: 0.6;
//           }
//         }

//         /* Responsive adjustments */
//         @media (max-width: 1200px) {
//           .max-w-7xl {
//             max-width: 90%;
//           }
          
//           .text-\[72px\] {
//             font-size: 64px;
//             line-height: 68px;
//           }
          
//           @keyframes widthExpand {
//             to {
//               width: 400px;
//             }
//           }
//         }

//         @media (max-width: 1024px) {
//           .max-w-7xl {
//             max-width: 95%;
//           }
          
//           .text-\[72px\] {
//             font-size: 58px;
//             line-height: 62px;
//           }
          
//           .text-\[30px\] {
//             font-size: 26px;
//           }
//         }

//         @media (max-width: 768px) {
//           .text-\[72px\] {
//             font-size: 48px;
//             line-height: 52px;
//             tracking-[-0.72px];
//           }
          
//           .text-\[30px\] {
//             font-size: 22px;
//           }
          
//           .h-14 {
//             height: 3rem;
//           }
          
//           .px-10 {
//             padding-left: 2.5rem;
//             padding-right: 2.5rem;
//           }
          
//           @keyframes widthExpand {
//             to {
//               width: 300px;
//             }
//           }
          
//           .absolute.left-0, .absolute.right-0 {
//             width: 20px;
//           }
//         }

//         @media (max-width: 640px) {
//           .text-\[72px\] {
//             font-size: 40px;
//             line-height: 44px;
//             tracking-[-0.6px];
//           }
          
//           .text-\[30px\] {
//             font-size: 20px;
//           }
          
//           .flex-wrap {
//             justify-content: center;
//             gap: 1rem;
//           }
          
//           .h-14 {
//             height: 2.75rem;
//           }
          
//           .px-10 {
//             padding-left: 2rem;
//             padding-right: 2rem;
//           }
          
//           @keyframes widthExpand {
//             to {
//               width: 250px;
//             }
//           }
//         }

//         @media (max-width: 480px) {
//           .text-\[72px\] {
//             font-size: 36px;
//             line-height: 40px;
//           }
          
//           .text-\[30px\] {
//             font-size: 18px;
//           }
          
//           .h-14 {
//             height: 2.5rem;
//           }
          
//           .px-10 {
//             padding-left: 1.5rem;
//             padding-right: 1.5rem;
//           }
          
//           .text-lg {
//             font-size: 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



import React, { useEffect, useRef } from 'react';

export default function AIHumanSection() {
  const containerRef = useRef(null);

  // Optional subtle particles (you can delete this useEffect if you want ZERO effects)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];
    const count = 12;

    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #FA8826;
        opacity: 0.15;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatDot ${20 + Math.random() * 10}s ease-in-out infinite alternate;
      `;
      container.appendChild(dot);
      particles.push(dot);
    }

    return () => particles.forEach(p => container.removeChild(p));
  }, []);

  return (
    <section
      ref={containerRef}
      className="ai-human-section min-h-screen w-full flex items-center justify-center px-6 relative overflow-hidden bg-[#0D1014]"
    >
      <div className="w-full max-w-7xl relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* TITLE */}
          <h1 className="mb-10">
            <span className="text-[#F4F1F1] font-medium text-[72px] leading-[76px] tracking-[-1.08px] animate-slideInLeft inline-block">
              AI{' '}
            </span>
            <span className="text-[#FA8826] font-medium text-[72px] leading-[76px] animate-pulseGlow inline-block">
              +
            </span>
            <span className="text-[#F4F1F1] font-medium text-[72px] leading-[76px] tracking-[-1.08px] animate-slideInRight inline-block">
              {' '}Human Control
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#FAFAFA] text-[30px] font-normal leading-[140%] mb-14 max-w-5xl animate-fadeInUp delay-300">
            AI gives you a powerful starting point, but every design is fully
            editable. Refine layouts, adjust content, and make it truly yours.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-6 flex-wrap animate-fadeInUp delay-500">
            <button className="bg-[#FA8826] rounded-[40px] h-14 px-10 flex items-center justify-center hover:bg-[#e67a1f] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#FA8826]/30">
              <span className="text-[#0D1014] font-semibold text-lg">
                Get Started Today
              </span>
            </button>

            <button className="border-2 border-[#FA8826] rounded-[40px] h-14 px-10 flex items-center justify-center hover:bg-[#FA8826]/10 hover:scale-105 transition-all duration-300">
              <span className="text-[#FA8826] font-semibold text-lg">
                Book a Demo
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes floatDot {
          0% { transform: translateY(0); }
          100% { transform: translateY(-40px); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulseGlow {
          0%, 100% { text-shadow: none; }
          50% { text-shadow: 0 0 20px rgba(250,136,38,0.6); }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1.1s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1.1s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 1.1s ease-out forwards;
          opacity: 0;
        }

        .animate-pulseGlow {
          animation: pulseGlow 2.5s ease-in-out infinite;
        }

        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
}
