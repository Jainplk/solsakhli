import { Layers, TrendingUp, Zap, Target } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import designedForWorkImage from "../../assets/Image/WorkSection.jpg";
import "./DesignedForWorkSection.css";

export default function DesignedForWorkSection() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isImageInView, setIsImageInView] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            if (entry.target === imageRef.current) {
              setIsImageInView(true);
            }
          }
        });
      },
      { threshold: 0.15 },
    );

    document
      .querySelectorAll(".fade-in-up")
      .forEach((el) => observer.observe(el));
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
        
          <div
            ref={(el) => {
              containerRef.current = el;
              imageRef.current = el;
            }}
            className={`image-wrap fade-in-up ${isImageInView ? "image-animated" : ""}`}
            style={{
              transform: `
                perspective(1000px)
                rotateX(${(mousePosition.y - 50) * 0.05}deg)
                rotateY(${(mousePosition.x - 50) * -0.05}deg)
              `,
            }}
          >
            <div className="image-glow" />
            <img
              src={designedForWorkImage}
              alt="Workflow preview"
              className="image-content"
            />
          </div>

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
    </section>
  );
}
