import * as React from "react";

const SvgComponent = ({ color, ...props }) => (
  <svg
    width={22}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.144 12.752a.679.679 0 0 1-.679-.68V1.18a.679.679 0 0 1 1.357 0v10.894a.679.679 0 0 1-.678.678Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.144 12.752a.675.675 0 0 1-.48-.2L8.024 9.903a.68.68 0 0 1 .96-.958l2.159 2.167 2.158-2.167a.678.678 0 1 1 .96.958l-2.638 2.649c-.127.128-.3.2-.48.2Z"
      fill={color}
    />
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={4}
      width={19}
      height={14}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.095 4.782H20.19v12.435H2.096V4.782Z"
        fill={color}
      />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.187 17.217H6.108a4.017 4.017 0 0 1-4.013-4.013v-4.42A4.007 4.007 0 0 1 6.1 4.783h.851a.679.679 0 0 1 0 1.357H6.1a2.649 2.649 0 0 0-2.647 2.646v4.42a2.658 2.658 0 0 0 2.655 2.655h10.08a2.65 2.65 0 0 0 2.646-2.646v-4.42a2.658 2.658 0 0 0-2.655-2.655h-.843a.679.679 0 0 1 0-1.357h.843c2.212 0 4.012 1.8 4.012 4.013v4.418a4.009 4.009 0 0 1-4.004 4.004Z"
        fill={color}
      />
    </g>
  </svg>
);

export default SvgComponent;
