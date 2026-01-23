import { useEffect, useRef, useState } from 'react';
import './MeetBella.css';

const cards = [
  {
    title: "Your Design Partner",
    description: "Enhance your vision with AI-powered design suggestions that adapt to your brand's unique style and preferences.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
  },
  {
    title: "Build Faster, Ship Smarter",
    description: "Cut development time in half with intelligent code generation and real-time collaboration tools.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    title: "Scale With Confidence",
    description: "From startup to enterprise, our platform grows with you. No limits, no compromises.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  }
];

const MeetBella = () => {
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
    <section ref={sectionRef} className="meet-bella">
      <div className="meet-bella__container">
        <h2 
          className={`meet-bella__title ${
            isVisible ? 'meet-bella__title--visible' : 'meet-bella__title--hidden'
          }`}
        >
          Meet Bella LV-3!
        </h2>

        <div className="meet-bella__grid">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`meet-bella__card ${
                isVisible ? 'meet-bella__card--visible' : 'meet-bella__card--hidden'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="meet-bella__card-image-container">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="meet-bella__card-image"
                />
              </div>
              <div className="meet-bella__card-content">
                <h3 className="meet-bella__card-title">{card.title}</h3>
                <p className="meet-bella__card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetBella;
