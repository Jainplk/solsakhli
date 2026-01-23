import { useEffect, useRef, useState } from 'react';
import './BusinessSection.css';

interface BusinessSectionProps {
  features: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  buttonText?: string;
  cardTitle?: string;
}

const BusinessSection = ({ 
  features, 
  imageSrc, 
  imageAlt, 
  reverse = false,
  buttonText = "Build Your Website",
  cardTitle
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
        <div className={`business-section__content ${reverse ? 'business-section__content--reverse' : ''}`}>
          {/* Text Content with Points */}
          <div className="business-section__text">
            {/* Features with bullet points */}
            <ul className="business-section__features">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className={`business-section__feature ${
                    isVisible ? 'business-section__feature--visible' : 'business-section__feature--hidden'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <span className="business-section__feature-bullet">•</span>
                  <span className="business-section__feature-text">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button 
              className={`business-section__cta ${
                isVisible ? 'business-section__cta--visible' : 'business-section__cta--hidden'
              }`}
              style={{ transitionDelay: `${300 + features.length * 100}ms` }}
            >
              {buttonText}
            </button>
          </div>

          {/* Image with Card */}
          <div 
            className={`business-section__image-wrapper ${
              isVisible 
                ? 'business-section__image-wrapper--visible' 
                : reverse 
                  ? 'business-section__image-wrapper--hidden-left' 
                  : 'business-section__image-wrapper--hidden-right'
            }`}
          >
            <div className="business-section__card">
              {/* Card title if provided */}
              {cardTitle && (
                <div className="business-section__card-title">{cardTitle}</div>
              )}
              
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
      </div>
    </section>
  );
};

export default BusinessSection;