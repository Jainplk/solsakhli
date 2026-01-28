
import React, { useEffect, useRef } from "react";
import cardImage_1 from "../../assets/Image/meetbella_1.png";
import cardImage_2 from "../../assets/Image/meetbella_2.png";
import cardImage_3 from "../../assets/Image/meetbella_3.png";
import "./MeetBellaSection.css";

export default function MeetBellaSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            
            if (entry.target === sectionRef.current) {
              const cards = cardsRef.current;
              cards.forEach((card, index) => {
                setTimeout(() => {
                  if (card) card.classList.add("card-visible");
                }, index * 200);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: "Your Design Partner",
      desc: "Bella works with you to help shape your website. She helps you think through ideas, make better choices, and create something clear and professional.",
      image: cardImage_3,
      delay: "0s",
    },
    {
      title: "Smart Creative Guidance",
      desc: "Bella suggests layouts, colors, and components that fit your brand while keeping the experience simple and effective.",
      image: cardImage_1,
      delay: "0.15s",
    },
    {
      title: "Consistent Visual Quality",
      desc: "Every decision Bella helps you make maintains clarity, balance, and consistency across your entire website.",
      image: cardImage_2,
      delay: "0.3s",
    },
  ];

  return (
    <section className="bella-section" ref={sectionRef}>
     
      <h2 className="bella-title fade-in">
        <span className="orange">Meet</span>{" "}
        <span className="white">Bella LV-3!</span>
      </h2>

      <div className="bella-cards">
        {cards.map((card, index) => (
          <div
            className="bella-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{ animationDelay: card.delay }}
          >
    
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </div>

            <div className="card-image-wrap">
              <div className="image-overlay"></div>
              <img 
                src={card.image} 
                alt={card.title} 
                className="card-image"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}