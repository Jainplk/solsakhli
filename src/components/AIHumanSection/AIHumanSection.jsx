import React, { useEffect, useRef } from "react";
import "./AIHumanSection.css";

export default function AIHumanSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];
    const count = 12;

    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div");
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

    return () => particles.forEach((p) => container.removeChild(p));
  }, []);

  return (
    <section
      ref={containerRef}
      className="ai-human-section min-h-screen w-full flex items-center justify-center px-6 relative overflow-hidden bg-[#0D1014]"
    >
      <div className="w-full max-w-7xl relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-10">
            <span className="text-[#F4F1F1] font-medium text-[72px] leading-[76px] tracking-[-1.08px] animate-slideInLeft inline-block">
              AI{" "}
            </span>
            <span className="text-[#FA8826] font-medium text-[72px] leading-[76px] animate-pulseGlow inline-block">
              +
            </span>
            <span className="text-[#F4F1F1] font-medium text-[72px] leading-[76px] tracking-[-1.08px] animate-slideInRight inline-block">
              {" "}
              Human Control
            </span>
          </h1>
          <p className="text-[#FAFAFA] text-[30px] font-normal leading-[140%] mb-14 max-w-5xl animate-fadeInUp delay-300">
            AI gives you a powerful starting point, but every design is fully
            editable. Refine layouts, adjust content, and make it truly yours.
          </p>

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
    </section>
  );
}
