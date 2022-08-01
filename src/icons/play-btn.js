import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={100}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={50} cy={50} r={42.385} fill="url(#a)" />
    <path
      d="M65.13 46.776c2.405 1.388 2.405 4.86 0 6.248L43.788 65.346c-2.405 1.388-5.411-.347-5.411-3.124V37.578c0-2.777 3.006-4.513 5.41-3.124L65.13 46.776Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={16.733}
        y1={23.948}
        x2={86.974}
        y2={70.341}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5FADDA" />
        <stop offset={1} stopColor="#4182CB" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
