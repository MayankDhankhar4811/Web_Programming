import React, { useState, useEffect } from "react";
import "./TrafficLight.css";

const lights = ["red", "yellow", "green"];

export default function TrafficLight() {
  const [active, setActive] = useState(0);
  const [pedestrianBlink, setPedestrianBlink] = useState(false);

  useEffect(() => {
    let timer;
    if (lights[active] === "green") {
      // Pedestrian signal blinks every 500ms during green
      timer = setInterval(() => {
        setPedestrianBlink((b) => !b);
      }, 500);
    } else {
      setPedestrianBlink(false);
    }
    return () => clearInterval(timer);
  }, [active]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % lights.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="traffic-light-outer">
      <div className="traffic-light-body">
        {lights.map((color, idx) => (
          <div
            key={color}
            className={`light ${color} ${active === idx ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="traffic-light-pole" />
      <div className="traffic-light-base" />
      <div className="pedestrian-signal">
        <div className={`pedestrian-icon ${lights[active] === "green" && pedestrianBlink ? "blink" : ""}`}>
          <span role="img" aria-label="walk">🚶‍♂️</span>
        </div>
        <div className="pedestrian-label">
          {lights[active] === "green" ? (pedestrianBlink ? "WALK" : "") : "WAIT"}
        </div>
      </div>
    </div>
  );
} 