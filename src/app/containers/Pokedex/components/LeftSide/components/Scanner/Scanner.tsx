import React from "react";

import "./styles.css";

const SCANNER_Y = 15;
const SCANNER_X = -22.5;

const INDICATOR_Y = 10;

const Scanner = () => {
  return (
    <section className="scannerContainer">
      <div className="" />
      <div className="" />
      <svg height={200} width={400} viewBox="0 0 75 75">
        <defs>
          <filter
            id="scanner-shadow"
            x="-40%"
            y="-40%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="" />
            <feOffset dx="1" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.25" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#scanner-shadow)">
          <circle fill="#e5a3a6" cx={SCANNER_X} cy={SCANNER_Y} r="8.15" />
          <circle fill="#ebebf5" cx={SCANNER_X} cy={SCANNER_Y} r="8" />
          <circle fill="#a1b9cf" cx={SCANNER_X} cy={SCANNER_Y} r="7.5" />
          <circle fill="#619ddb" cx={SCANNER_X} cy={SCANNER_Y} r="7.25" />
          <circle fill="#fff" cx={-25} cy={SCANNER_Y - 2.5} r="2" />
        </g>
        <g filter="url(#scanner-shadow)">
          <circle fill="#e5a3a6" cx={-5} cy={INDICATOR_Y} r={2.75} />
          <circle fill="#b83342" cx={-5} cy={INDICATOR_Y} r={2.5} />
          <circle fill="#fff" cx={-6} cy={INDICATOR_Y - 0.75} r={0.5} />
          <circle fill="#e5a3a6" cx={4} cy={INDICATOR_Y} r={2.75} />
          <circle fill="#f4f948" cx={4} cy={INDICATOR_Y} r={2.5} />
          <circle fill="#fff" cx={3} cy={INDICATOR_Y - 0.75} r={0.5} />
          <circle fill="#e5a3a6" cx={12} cy={INDICATOR_Y} r={2.75} />
          <circle fill="#5cc075" cx={12} cy={INDICATOR_Y} r={2.5} />
          <circle fill="#fff" cx={11} cy={INDICATOR_Y - 0.75} r={0.5} />
        </g>
      </svg>
    </section>
  );
};

// inner circle : #9ad7fe
// middle circle: #27aafd
// outer circle: #186a9e
// outermost circle: #dadada

export default Scanner;
