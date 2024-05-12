import React from "react";

import "./styles.css";

const Screen = () => {
  return (
    <section className="screenBorder">
      <svg className="doubleIndicators">
        <defs>
          <filter id="shadow" x="-40%" y="-40%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#shadow)">
          <circle fill="#fb5145" cx={180} cy={15} r={10} />
          <circle fill="#fff" cx={177} cy={12.5} r={2.5} />
          <circle fill="#fb5145" cx={145} cy={15} r={10} />
          <circle fill="#fff" cx={142} cy={12.5} r={2.5} />
        </g>
      </svg>
      <div className="screen" />
      <svg className="bottomIndicators">
        <g>
          <circle filter="url(#shadow)" fill="#fb5145" cx={75} cy={15} r={15} />
          <circle fill="#fff" cx={70} cy={11.5} r={3.25} />
        </g>
        <g>
          <line stroke="black" x1={200} y1={2} x2={275} y2={2} />
          <line stroke="black" x1={200} y1={9.5} x2={275} y2={9.5} />
          <line stroke="black" x1={200} y1={17} x2={275} y2={17} />
          <line stroke="black" x1={200} y1={24.5} x2={275} y2={24.5} />
          <line stroke="black" x1={200} y1={32} x2={275} y2={32} />
        </g>
      </svg>
    </section>
  );
};

export default Screen;
