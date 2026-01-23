import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

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
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Plans and Prices
          </h2>
          <p 
            className={`text-muted-foreground text-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Buy credits for as low as $99 per month, save up to 30%, or pay as you go for what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-700 ${
                plan.popular 
                  ? 'border-primary shadow-lg shadow-primary/20' 
                  : 'border-border'
              } card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-1">{plan.name}</p>
                <h3 className="text-xl font-semibold mb-4">{plan.tier}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                }`}
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
