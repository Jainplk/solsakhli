import { useEffect, useRef, useState } from 'react';
import { Layers, Zap, Shield, BarChart3 } from 'lucide-react';
import './DesignedForYou.css';

const features = [
  {
    icon: Layers,
    title: "Drag and drop wireframing",
    description: "Build layouts effortlessly with our intuitive drag-and-drop interface."
  },
  {
    icon: Zap,
    title: "Generative images",
    description: "AI-powered image generation that matches your brand perfectly."
  },
  {
    icon: Shield,
    title: "Brand kit matching",
    description: "Automatically apply your brand colors, fonts, and styles."
  },
  {
    icon: BarChart3,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need it."
  }
];

const DesignedForYou = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="designed-for-you">
      <div className="designed-for-you__container">
        <div className="designed-for-you__header">
          <h2 
            className={`designed-for-you__title ${
              isVisible ? 'designed-for-you__title--visible' : 'designed-for-you__title--hidden'
            }`}
          >
            Designed for how you work.
          </h2>
          <p 
            className={`designed-for-you__subtitle ${
              isVisible ? 'designed-for-you__subtitle--visible' : 'designed-for-you__subtitle--hidden'
            }`}
          >
            Tools so intuitive, it's incredibly easy for you to be in command of your design workflow.
          </p>
        </div>

        <div className="designed-for-you__grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`designed-for-you__card ${
                isVisible ? 'designed-for-you__card--visible' : 'designed-for-you__card--hidden'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="designed-for-you__card-icon">
                <feature.icon />
              </div>
              <h3 className="designed-for-you__card-title">{feature.title}</h3>
              <p className="designed-for-you__card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignedForYou;
