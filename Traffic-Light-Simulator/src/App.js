import React, { useState, useEffect } from "react";
import TrafficLight from "./TrafficLight";
import './App.css';

const funFacts = [
  {
    icon: "🚦",
    text: "The first traffic light was installed in London in 1868, but it was manually operated and exploded after a month!"
  },
  {
    icon: "🌍",
    text: "There are over 300,000 traffic lights in the United States alone."
  },
  {
    icon: "💡",
    text: "Modern traffic lights use energy-efficient LEDs instead of incandescent bulbs."
  },
  {
    icon: "🕒",
    text: "Some cities use smart traffic lights that adjust timing based on real-time traffic flow."
  },
  {
    icon: "🚸",
    text: "Pedestrian signals in some countries use animated figures to show when it's safe to cross."
  },
  {
    icon: "🎨",
    text: "Japan sometimes uses blue instead of green for the 'go' light due to historical language reasons."
  }
];

function App() {
  const [factIdx, setFactIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFactIdx((idx) => (idx + 1) % funFacts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-bg pattern-bg">
      <div className="container">
        <h1 className="main-title">
          🚦 Traffic Light Simulator
        </h1>
        <div className="highlight-info">
          <span className="highlight-icon">{funFacts[factIdx].icon}</span>
          <span className="highlight-text">{funFacts[factIdx].text}</span>
        </div>
        <div className="content-row">
          <TrafficLight />
          <div className="info-card">
            <h2>Did you know?</h2>
            <ul>
              <li><span role="img" aria-label="calendar">📅</span> The first electric traffic light was installed in 1914 in Cleveland, Ohio.</li>
              <li><span role="img" aria-label="stop">🛑</span> Red means stop, yellow means get ready, and green means go!</li>
              <li><span role="img" aria-label="led">💡</span> Modern traffic lights use energy-efficient LEDs.</li>
              <li><span role="img" aria-label="world">🌏</span> Some countries use different sequences and colors.</li>
              <li><span role="img" aria-label="car">🚗</span> Traffic lights help prevent accidents and keep traffic flowing smoothly.</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer">Made with <span role="img" aria-label="love">❤️</span> using React &mdash; Explore, Learn, and Stay Safe!</footer>
    </div>
  );
}

export default App; 