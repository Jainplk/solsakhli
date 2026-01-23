import { useEffect, useRef, useState } from 'react';
import './Footer.css';

const footerLinks = {
  Company: ['About Us', 'Blog', 'Careers', 'Contact'],
  Resources: ['Documentation', 'Help Center', 'API Reference', 'Status'],
  'Our Features': ['AI Design', 'Templates', 'Integrations', 'Analytics'],
  Developer: ['GitHub', 'API', 'Open Source', 'Community']
};

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Logo & Description */}
          <div 
            className={`footer__brand ${
              isVisible ? 'footer__brand--visible' : 'footer__brand--hidden'
            }`}
          >
            <h3 className="footer__logo">webwill</h3>
            <p className="footer__description">
              Helping high-performers build AI + human designed websites at scale.
            </p>
            <div className="footer__socials">
              {['X', 'in', 'IG'].map((social, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="footer__social-link"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], catIndex) => (
            <div 
              key={category}
              className={`footer__links-section ${
                isVisible ? 'footer__links-section--visible' : 'footer__links-section--hidden'
              }`}
              style={{ transitionDelay: `${100 + catIndex * 100}ms` }}
            >
              <h4 className="footer__links-title">{category}</h4>
              <ul className="footer__links-list">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div 
          className={`footer__bottom ${
            isVisible ? 'footer__bottom--visible' : 'footer__bottom--hidden'
          }`}
        >
          <p className="footer__copyright">
            © 2024 webwill. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
