import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const plans = [
  {
    name: "Bella LV-3",
    tier: "Essentials Plan",
    price: "$249",
    description: "Perfect for getting started with essentials.",
    features: [
      "Starter site",
      "Up to 5 pages of content",
      "All sections needed for website",
      "Search engine optimization basics",
      "Social ready meta images",
      "15-day turnaround"
    ],
    popular: false
  },
  {
    name: "Bella LV-3",
    tier: "Pro Plan",
    price: "$399",
    description: "For the hustle-y, ambitious, and willing.",
    features: [
      "Custom site",
      "Up to 8 pages of content",
      "All sections needed + extras",
      "Advanced SEO optimization",
      "Social media kit included",
      "10-day turnaround",
      "Priority support"
    ],
    popular: true
  }
];

const Pricing = () => {
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
    <section ref={sectionRef} className="pricing">
      <div className="pricing__container">
        <div className="pricing__header">
          <h2 
            className={`pricing__title ${
              isVisible ? 'pricing__title--visible' : 'pricing__title--hidden'
            }`}
          >
            Plans and Prices
          </h2>
          <p 
            className={`pricing__subtitle ${
              isVisible ? 'pricing__subtitle--visible' : 'pricing__subtitle--hidden'
            }`}
          >
            Buy credits for as low as $99 per month, save up to 30%, or pay as you go for what you need.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing__card ${plan.popular ? 'pricing__card--popular' : ''} ${
                isVisible ? 'pricing__card--visible' : 'pricing__card--hidden'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {plan.popular && (
                <div className="pricing__badge">
                  Most Popular
                </div>
              )}

              <div className="pricing__card-header">
                <p className="pricing__plan-name">{plan.name}</p>
                <h3 className="pricing__tier">{plan.tier}</h3>
                <div className="pricing__price-container">
                  <span className="pricing__price">{plan.price}</span>
                </div>
                <p className="pricing__description">{plan.description}</p>
              </div>

              <ul className="pricing__features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing__feature">
                    <Check className="pricing__feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`pricing__cta ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
