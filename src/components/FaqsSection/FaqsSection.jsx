import React, { useState } from "react";

export default function FAQsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: "Do you use templates?",
      a: "No. We use a structured foundation so we’re not rebuilding basic mechanics every time, but each site is designed, written, and assembled specifically for the client. Layout, content, and structure are tailored to your goals. Nothing is dropped into a generic template.",
    },
    {
      q: "Do I own my site?",
      a: "Yes. Your site is built on open-source WordPress. You own the site and all content. There are no lock-ins, penalties, or proprietary restrictions.",
    },
    {
      q: "What if I want to move my site elsewhere?",
      a: "You can. Because the site is built on WordPress, it can be migrated to any hosting provider at any time. We don’t restrict or block transfers.",
    },
    {
      q: "Can I update the site myself?",
      a: "Yes. The site uses a drag-and-drop editor. You can make updates without touching code.",
    },
    {
      q: "Why do you use WordPress?",
      a: "WordPress is open source, widely supported, and flexible. It avoids vendor lock-in and gives clients long-term control over their site.",
    },
    {
      q: "What is Bella LV-3?",
      a: "Bella LV-3 is our internal system that handles layout, structure, and automation behind the scenes. Details will be shared as features are released.",
    },
    {
      q: "What’s included in the monthly fee?",
      a: "Managed WordPress hosting, maintenance, and access to Bella LV-3 features as they become available.",
    },
    {
      q: "What is managed WordPress hosting?",
      a: "Hosting where updates, performance, and maintenance are handled for you. You don’t need to manage servers, software updates, or infrastructure.",
    },
    {
      q: "How are you different from other hosting companies?",
      a: "We focus on complete website delivery and ongoing support, not just server space. Hosting is paired with design, structure, and maintenance.",
    },
    {
      q: "I’m a small business / creator / startup. How does this help me?",
      a: "You get a professional website without agency overhead. You bring the vision. We handle the build and the technical side.",
    },
    {
      q: "I run an agency. How does this help me?",
      a: "You can use this as a delivery layer for client sites without managing infrastructure or rebuilding systems for each project.",
    },
    {
      q: "What does “grandfathered pricing” mean?",
      a: "Your monthly price is locked in. It does not increase in the future.",
    },
    {
      q: "Why is it affordable?",
      a: "We don’t operate like a traditional agency. Automation handles repetitive work, which keeps costs predictable and lower.",
    },
    {
      q: "Do I lose quality at this price?",
      a: "No. Sites follow professional web standards and are reviewed by designers and developers. The cost is lower because the process is efficient, not because quality is reduced.",
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQs</h2>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${isActive ? "active" : ""}`}
                onClick={() =>
                  setActiveIndex(isActive ? -1 : index)
                }
              >
                <span>{item.q}</span>
                <span className="icon">
                  {isActive ? "−" : "+"}
                </span>
              </button>

              <div className={`faq-answer ${isActive ? "open" : ""}`}>
                <div className="answer-inner">{item.a}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* STYLES */}
      <style jsx>{`
        .faq-section {
          padding: 120px 24px;
          background: #0b0f14;
          max-width: 1300px;
          margin: 0 auto;
        }

        /* TITLE */
        .faq-title {
          color: #fa8826;
          text-align: center;
          font-family: "SF Pro", sans-serif;
          font-size: 88px;
          font-weight: 590;
          line-height: 110%;
          margin-bottom: 80px;
        }

        /* LIST */
        .faq-list {
          display: flex;
          flex-direction: column;
        }

        /* QUESTION */
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          border-bottom: 1px solid #313131;
          padding: 40px 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          cursor: pointer;

          color: #fafafa;
          font-family: "SF Pro", sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 120%;
          letter-spacing: -0.96px;

          transition: color 0.3s ease, border-color 0.3s ease;
        }

        .faq-question.active {
          color: #fa8826;
          border-bottom: 1px solid rgba(250, 136, 38, 0.75);
        }

        .icon {
          font-size: 28px;
          line-height: 1;
          margin-left: 20px;
        }

        /* ANSWER */
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s ease, opacity 0.35s ease;
          opacity: 0;
        }

        .faq-answer.open {
          max-height: 500px;
          opacity: 1;
        }

        .answer-inner {
          background: #181818;
          border-radius: 12px;
          padding: 20px;
          margin: 20px;
          color: #e9e9e9;
          font-family: Sora, sans-serif;
          font-size: 18px;
          line-height: 150%;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .faq-title {
            font-size: 48px;
          }

          .faq-question {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
