import { useEffect, useRef, useState } from 'react';
import './HeaderSection.css';

const HeaderSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="header-section">
      <div className="header-section__container">
        {/* Badge/Label */}
        <div 
          className={`header-section__badge ${
            isVisible ? 'header-section__badge--visible' : 'header-section__badge--hidden'
          }`}
        >
          Bella LV-3 Essentials Plan
        </div>

        {/* Main Title */}
        <h1 
          className={`header-section__title ${
            isVisible ? 'header-section__title--visible' : 'header-section__title--hidden'
          }`}
        >
          For Small Business
        </h1>

        {/* Subtitle */}
        <p 
          className={`header-section__subtitle ${
            isVisible ? 'header-section__subtitle--visible' : 'header-section__subtitle--hidden'
          }`}
        >
          The busy, ambitious and driven professional's AI custom web design partner.
        </p>

        {/* Optional CTA Button */}
        {/* <button 
          className={`header-section__cta ${
            isVisible ? 'header-section__cta--visible' : 'header-section__cta--hidden'
          }`}
        >
          Get Started
        </button> */}
      </div>
    </section>
  );
};

export default HeaderSection;