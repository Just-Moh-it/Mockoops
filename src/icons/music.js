const SvgComponent = ({ color, ...props }) => (
  <svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.065 24.75a3.51 3.51 0 1 0 0-7.02 3.51 3.51 0 0 0 0 7.02Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.445 18.9V5.175c0-2.925-1.834-3.33-3.69-2.824l-7.02 1.913c-1.282.349-2.16 1.361-2.16 2.824v14.141"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.935 22.41a3.51 3.51 0 1 0 0-7.02 3.51 3.51 0 0 0 0 7.02ZM10.575 10.71l12.87-3.51"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
