import React from "react";
import cardImage_1 from "../../assets/Image/meetbella_1.png";
import cardImage_2 from "../../assets/Image/meetbella_2.png";
import cardImage_3 from "../../assets/Image/meetbella_3.png";

export default function MeetBellaSection() {
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
    <section className="bella-section">
      {/* TITLE */}
      <h2 className="bella-title fade-in">
        <span className="orange">Meet</span>{" "}
        <span className="white">Bella LV-3!</span>
      </h2>

      {/* CARDS */}
      <div className="bella-cards">
        {cards.map((card, index) => (
          <div
            className="bella-card slide-up"
            key={index}
            style={{ animationDelay: card.delay }}
          >
            {/* CONTENT */}
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </div>

            {/* IMAGE */}
            <div className="card-image-wrap">
              <img src={card.image} alt={card.title} />
            </div>
          </div>
        ))}
      </div>

      {/* STYLES */}
      <style jsx>{`
        /* SECTION */
        .bella-section {
          padding: 120px 80px;
          background: radial-gradient(
              80% 60% at 50% 0%,
              rgba(255, 255, 255, 0.06),
              transparent 60%
            ),
            #0b0f14;
        }

        /* TITLE */
        .bella-title {
          text-align: center;
          margin-bottom: 80px;
          font-family: "SF Pro", sans-serif;
          font-size: 64px;
          font-weight: 590;
          line-height: 120%;
          letter-spacing: -2.56px;
          opacity: 0;
          animation: fadeIn 0.8s ease forwards;
        }

        .bella-title .orange {
          color: #fa8926;
        }

        .bella-title .white {
          color: #fafafa;
        }

        /* GRID */
        .bella-cards {
          display: flex;
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* CARD */
        .bella-card {
          flex: 1 0 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          padding: 24px;
          gap: 50px;

          border-radius: 20px;
          border: 1px solid #414141;

          background: linear-gradient(
            180deg,
            #1a1a1a -26.18%,
            rgba(26, 26, 26, 0) 59.52%
          );

          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 0.9s ease forwards;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        /* HOVER */
        .bella-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(250, 136, 38, 0.15);
        }

        /* CONTENT (EQUAL HEIGHT) */
        .card-content {
          min-height: 160px;
        }

        .card-title {
          color: #fa8826;
          font-family: Inter, sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 28px;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }

        .card-desc {
          color: #e9e9e9;
          font-family: Sora, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 150%;
        }

        /* IMAGE */
        .card-image-wrap {
          border-radius: 20px;
          border: 1px solid #1f1f1f;
          background: linear-gradient(
            180deg,
            rgba(32, 32, 32, 0.4) 0%,
            rgba(32, 32, 32, 0) 100%
          );
          overflow: hidden;
          transition: transform 0.4s ease;
        }

        .bella-card:hover .card-image-wrap {
          transform: scale(1.03);
        }

        .card-image-wrap img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
          border-radius: 12px;
        }

        /* ANIMATIONS */
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .bella-cards {
            flex-direction: column;
          }

          .bella-section {
            padding: 80px 24px;
          }

          .bella-title {
            font-size: 42px;
          }

          .card-content {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
