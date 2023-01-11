import React from "react";

type Props = {
  contentColor: string;
  glow: boolean;
};

const QRCodeFilters = ({ contentColor, glow }: Props) => {
  return (
    <svg height="0">
      <filter id="f1" x="-50%" y="-50%" width="200%" height="300%">
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="0.5" />
        <feGaussianBlur stdDeviation="0.5" />
        <feOffset dx="0" dy="0" result="offsetblur" />
        <feFlood floodColor={contentColor} result="color" />
        <feComposite in2="offsetblur" operator="in" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation={`${glow ? "0.4" : "0"}`}
          floodColor={contentColor}
        />
      </filter>
      <filter id="f2">
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation={`${glow ? "4" : "0"}`}
          floodColor="#d3d3d3"
          />
          {Array.from({ length: 2 }).map((_, idx) => (
            <feDropShadow
              key={idx}
              dx="0"
              dy="0"
              stdDeviation={`${glow ? "4" : "0"}`}
              floodColor={contentColor}
            />
          ))}
      </filter>
    </svg>
  );
};

export default QRCodeFilters;
