import React from "react";

type Props = {
  contentColor: string;
};

const QRCodeFilters = ({ contentColor }: Props) => {
  return (
    <svg height="0">
      <filter id="f1" x="-50%" y="-50%" width="200%" height="300%">
        <feOffset dx="0" dy="0" />
        {Array.from({ length: 2 }).map((_, idx) => (
          <feGaussianBlur key={idx} stdDeviation="0.3" result="offset-blur" />
        ))}
        <feComposite operator="out" in="SourceGraphic" result="inverse" />
        <feFlood floodColor={contentColor} floodOpacity="1" result="color" />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
        <feComponentTransfer in="shadow" result="shadow">
          <feFuncA type="linear" slope="1" />
        </feComponentTransfer>
        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation="0.45"
          floodColor={contentColor}
        />
      </filter>

      <filter id="f2">
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation="3"
          floodColor="#d3d3d3"
        />
        {Array.from({ length: 2 }).map((_, idx) => (
          <feDropShadow
            key={idx}
            dx="0"
            dy="0"
            stdDeviation= "3"
            floodColor={contentColor}
          />
        ))}
      </filter>
    </svg>
  );
};

export default QRCodeFilters;
