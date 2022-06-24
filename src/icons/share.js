import * as React from "react";

const SvgComponent = ({ color, ...props }) => (
  <svg
    width={23}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.786 7.333a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM5.786 13.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM16.786 20.167a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM8.16 12.384l6.26 3.648M14.412 5.968 8.16 9.616"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
