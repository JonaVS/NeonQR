import React from "react";

type Props = {
  contentColor: string;
  glow: boolean;
};

const QRCodeFilters = ({ contentColor, glow }: Props) => {
  return (
    <svg height="0">
      <filter id="f1">
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation={`${glow ? "7" : "0"}`}
          floodColor={contentColor}
        />
      </filter>
      <filter id="f2">
        {Array.from({ length: 3 }).map((_, idx) => (
          <feDropShadow
            key={idx}
            dx="0"
            dy="0"
            stdDeviation={`${glow ? "3" : "0"}`}
            floodColor={contentColor}
          />
        ))}
      </filter>
    </svg>
  );
};

export default QRCodeFilters;
