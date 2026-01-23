import { useEffect, useRef, useState } from 'react';
import './BusinessSection.css';

interface BusinessSectionProps {
  title: string;
  subtitle: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  label: string;
}

const BusinessSection = ({ 
  title, 
  subtitle, 
  features, 
  imageSrc, 
  imageAlt, 
  reverse = false,
  label 
}: BusinessSectionProps) => {
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
    <section ref={sectionRef} className="business-section">
      <div className="business-section__container">
        {/* Label */}
        <div 
          className={`business-section__label ${
            isVisible ? 'business-section__label--visible' : 'business-section__label--hidden'
          }`}
        >
          {label}
        </div>

        <div className={`business-section__content ${reverse ? 'business-section__content--reverse' : ''}`}>
          {/* Content */}
          <div className="business-section__text">
            <h2 
              className={`business-section__title ${
                isVisible ? 'business-section__title--visible' : 'business-section__title--hidden'
              }`}
            >
              {title}
            </h2>
            <p 
              className={`business-section__subtitle ${
                isVisible ? 'business-section__subtitle--visible' : 'business-section__subtitle--hidden'
              }`}
            >
              {subtitle}
            </p>

            <ul className="business-section__features">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className={`business-section__feature ${
                    isVisible ? 'business-section__feature--visible' : 'business-section__feature--hidden'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <span className="business-section__feature-icon">✦</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className={`business-section__cta btn-primary ${
                isVisible ? 'business-section__cta--visible' : 'business-section__cta--hidden'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Subscribe Now
            </button>
          </div>

          {/* Image */}
          <div 
            className={`business-section__image-wrapper ${
              isVisible 
                ? 'business-section__image-wrapper--visible' 
                : reverse 
                  ? 'business-section__image-wrapper--hidden-left' 
                  : 'business-section__image-wrapper--hidden-right'
            }`}
          >
            <div className="business-section__image-container">
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="business-section__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
