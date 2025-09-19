import { useState } from "react";
import "../Styling/OurProcess.css";
import firstImage from "../Assets/plan.png";
import secondImage from "../Assets/ship.png";
import forthImage from "../Assets/monitor.png";

function OurProcess() {
  const data = [
    {
      title: "1. Plan",
      explain:
        "We talk about your goals and what your fitness business really needs. No tech jargon — just clear plans that make sense.",
      image: firstImage,
    },
    {
      title: "2. Ship",
      explain:
        "We build your app or website and launch it, so clients can start booking, tracking, and buying right away.",
      image: secondImage,
    },
    {
      title: "3. Support",
      explain:
        "We keep your software updated, secure, and running smooth, so you never lose a client or a sale.",
      image: forthImage,
    },
  ];

  return (
    <div className="our-process-container">
      <div className="our-process-grid">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`our-process-item ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="item-content">
                <h3>{item.title}</h3>
                <p>{item.explain}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurProcess;
