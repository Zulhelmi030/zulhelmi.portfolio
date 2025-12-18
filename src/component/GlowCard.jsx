import React from "react";

const GlowCard = ({ card, children, index }) => {
  const cardRefs = React.useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-bordr timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            src={import.meta.env.BASE_URL + "images/star.png"}
            key={index}
            alt="star"
            className="size-5"
          />
        ))}
      </div>
      <div className="mb-5">
        <p>{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
