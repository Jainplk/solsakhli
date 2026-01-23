import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`header ${scrolled ? 'header--scrolled' : 'header--transparent'}`}
    >
      <div className="header__container">
        <div className="header__logo">
          webwill
        </div>
        
        <nav className="header__nav">
          {['All Products', 'Blog', 'AI Resources', 'About', 'FAQs'].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="header__nav-link"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="header__cta btn-primary">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
