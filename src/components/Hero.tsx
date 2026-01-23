import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background gradient */}
      <div className="hero__bg-gradient" />
      
      {/* Animated background orbs */}
      <div className="hero__orb hero__orb--primary" />
      <div className="hero__orb hero__orb--secondary" />

      <div className="hero__content">
        <h1 className="hero__title">
          Bella LV-3
          <br />
          <span className="gradient-text">AI + Human</span> Designed
          <br />
          Websites.
        </h1>
        
        <p className="hero__subtitle">
          Be a LV-3 subscriber for the future of our shine - human + AI working together, to fit your vision.
        </p>

        <div className="hero__actions">
          <button className="hero__btn btn-primary">
            Start Free Trial
          </button>
          <button className="hero__btn btn-secondary">
            Quick Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
