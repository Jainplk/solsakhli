import { Layers, TrendingUp, Zap, Target } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import designedForWorkImage from "../../assets/Image/WorkSection.jpg";

export default function DesignedForWorkSection() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 },
    );

    document
      .querySelectorAll(".fade-in-up")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* Subtle parallax */
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Structured layouts",
      description:
        "Clear structure from the start, so every page feels intentional.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Consistent design",
      description:
        "Visual consistency across pages, sections, and future updates.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Faster to launch",
      description:
        "Move from idea to live without unnecessary steps or rework.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Built to scale",
      description:
        "Grow from one website to many without changing your workflow.",
    },
  ];

  return (
    <section className="work-section">
      <div className="container">
        {/* Header */}
        <div className="header fade-in-up">
          <h2>
            Designed for how you work
            <span>.</span>
          </h2>
          <p>
            Design speed without sacrificing quality. AI handles the heavy
            lifting so you can focus on growth and strategy.
          </p>
        </div>

        <div className="content-grid">
          {/* Image */}
          <div
            ref={containerRef}
            className="image-wrap fade-in-up"
            style={{
              transform: `
                perspective(1000px)
                rotateX(${(mousePosition.y - 50) * 0.05}deg)
                rotateY(${(mousePosition.x - 50) * -0.05}deg)
              `,
            }}
          >
            <div className="image-glow" />
            <img src={designedForWorkImage} alt="Workflow preview" />
          </div>

          {/* Features */}
          <div className="features-grid">
            {features.map((item, i) => (
              <div
                key={i}
                className="feature-card fade-in-up"
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                <div className="feature-head">
                  <span className="icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .work-section {
          background: linear-gradient(to bottom, #0d1014, #0b0c0f);
          padding: 120px 24px;
          color: #fafafa;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 80px;
        }

        h2 {
          font-size: 64px;
          font-weight: 600;
          letter-spacing: -2px;
        }

        h2 span {
          color: #fa8826;
        }

        .header p {
          margin-top: 16px;
          color: rgba(244, 241, 241, 0.75);
          font-size: 16px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Image */
        .image-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
          transform: scale(1.03);
        }

        .image-glow {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          box-shadow:
            0 0 0 1px rgba(250, 136, 38, 0.3),
            0 25px 70px rgba(250, 136, 38, 0.15);
          pointer-events: none;
        }

        /* Features */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .feature-card {
          padding: 20px;
          border-radius: 14px;
          border: 1px solid transparent;
          transition: all 0.35s ease;
        }

        .feature-card:hover {
          background: rgba(250, 136, 38, 0.06);
          border-color: rgba(250, 136, 38, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(250, 136, 38, 0.08);
        }

        .feature-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .icon {
          color: #fa8826;
        }

        .feature-card h3 {
          font-size: 18px;
          font-weight: 500;
        }

        .feature-card p {
          font-size: 15px;
          color: rgba(244, 241, 241, 0.7);
          line-height: 26px;
        }

        /* Animations */
        .fade-in-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.8s ease forwards;
        }

        .fade-in-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          h2 {
            font-size: 48px;
          }
        }

        @media (max-width: 640px) {
          h2 {
            font-size: 36px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
