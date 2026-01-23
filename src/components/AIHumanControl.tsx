import { useEffect, useRef, useState } from 'react';
import './AIHumanControl.css';

const AIHumanControl = () => {
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
    <section ref={sectionRef} className="ai-human-control">
      <div className="ai-human-control__container">
        <h2 
          className={`ai-human-control__title ${
            isVisible ? 'ai-human-control__title--visible' : 'ai-human-control__title--hidden'
          }`}
        >
          <span className="gradient-text">AI + Human</span> Control
        </h2>
        
        <p 
          className={`ai-human-control__description ${
            isVisible ? 'ai-human-control__description--visible' : 'ai-human-control__description--hidden'
          }`}
        >
          AI gives you a powerful starting point, but every design is fully editable. Refine layouts, adjust content, and make it truly yours.
        </p>

        <div 
          className={`ai-human-control__actions ${
            isVisible ? 'ai-human-control__actions--visible' : 'ai-human-control__actions--hidden'
          }`}
        >
          <button className="ai-human-control__btn btn-primary">
            Join the Future Now
          </button>
          <button className="ai-human-control__btn btn-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIHumanControl;
