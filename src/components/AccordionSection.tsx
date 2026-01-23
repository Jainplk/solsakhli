import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import './AccordionSection.css';

interface Feature {
  title: string;
  description: string;
}

interface AccordionSectionProps {
  title: string;
  features: Feature[];
}

const AccordionSection = ({ title, features }: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="accordion-section">
      <div className="accordion-section__container">
        <div 
          className={`accordion-section__header ${
            isVisible ? 'accordion-section__header--visible' : 'accordion-section__header--hidden'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="accordion-section__title">{title}</h2>
          <button 
            className="accordion-section__toggle"
            aria-label={isOpen ? "Collapse section" : "Expand section"}
          >
            {isOpen ? (
              <Minus className="accordion-section__toggle-icon accordion-section__toggle-icon--active" />
            ) : (
              <Plus className="accordion-section__toggle-icon accordion-section__toggle-icon--inactive" />
            )}
          </button>
        </div>

        <div 
          className={`accordion-section__content ${
            isOpen ? 'accordion-section__content--open' : 'accordion-section__content--closed'
          }`}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`accordion-section__card ${
                isOpen ? 'accordion-section__card--visible' : 'accordion-section__card--hidden'
              }`}
              style={{ transitionDelay: isOpen ? `${index * 100}ms` : '0ms' }}
            >
              <h3 className="accordion-section__card-title">{feature.title}</h3>
              <p className="accordion-section__card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
