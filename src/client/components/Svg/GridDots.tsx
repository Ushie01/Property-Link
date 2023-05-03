type gridDotPros = {
  width: string;
  height: string;
  color: string;
};

const GridDots = ({ width, height, color }: gridDotPros) => (
  <svg
    width={width}
    height={height}
    color={color}
    viewBox="0 0 76 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="3" cy="45" r="3" transform="rotate(-90 3 45)" fill="#D8D4FF" />
    <circle cx="3" cy="31" r="3" transform="rotate(-90 3 31)" fill="#D8D4FF" />
    <circle cx="3" cy="17" r="3" transform="rotate(-90 3 17)" fill="#D8D4FF" />
    <circle cx="3" cy="3" r="3" transform="rotate(-90 3 3)" fill="#D8D4FF" />
    <circle
      cx="17"
      cy="45"
      r="3"
      transform="rotate(-90 17 45)"
      fill="#D8D4FF"
    />
    <circle
      cx="17"
      cy="31"
      r="3"
      transform="rotate(-90 17 31)"
      fill="#D8D4FF"
    />
    <circle
      cx="17"
      cy="17"
      r="3"
      transform="rotate(-90 17 17)"
      fill="#D8D4FF"
    />
    <circle cx="17" cy="3" r="3" transform="rotate(-90 17 3)" fill="#D8D4FF" />
    <circle
      cx="31"
      cy="45"
      r="3"
      transform="rotate(-90 31 45)"
      fill="#D8D4FF"
    />
    <circle
      cx="31"
      cy="31"
      r="3"
      transform="rotate(-90 31 31)"
      fill="#D8D4FF"
    />
    <circle
      cx="31"
      cy="17"
      r="3"
      transform="rotate(-90 31 17)"
      fill="#D8D4FF"
    />
    <circle cx="31" cy="3" r="3" transform="rotate(-90 31 3)" fill="#D8D4FF" />
    <circle
      cx="45"
      cy="45"
      r="3"
      transform="rotate(-90 45 45)"
      fill="#D8D4FF"
    />
    <circle
      cx="45"
      cy="31"
      r="3"
      transform="rotate(-90 45 31)"
      fill="#D8D4FF"
    />
    <circle
      cx="45"
      cy="17"
      r="3"
      transform="rotate(-90 45 17)"
      fill="#D8D4FF"
    />
    <circle cx="45" cy="3" r="3" transform="rotate(-90 45 3)" fill="#D8D4FF" />
    <circle
      cx="59"
      cy="45"
      r="3"
      transform="rotate(-90 59 45)"
      fill="#D8D4FF"
    />
    <circle
      cx="59"
      cy="31"
      r="3"
      transform="rotate(-90 59 31)"
      fill="#D8D4FF"
    />
    <circle
      cx="59"
      cy="17"
      r="3"
      transform="rotate(-90 59 17)"
      fill="#D8D4FF"
    />
    <circle cx="59" cy="3" r="3" transform="rotate(-90 59 3)" fill="#D8D4FF" />
    <circle
      cx="73"
      cy="45"
      r="3"
      transform="rotate(-90 73 45)"
      fill="#D8D4FF"
    />
    <circle
      cx="73"
      cy="31"
      r="3"
      transform="rotate(-90 73 31)"
      fill="#D8D4FF"
    />
    <circle
      cx="73"
      cy="17"
      r="3"
      transform="rotate(-90 73 17)"
      fill="#D8D4FF"
    />
    <circle cx="73" cy="3" r="3" transform="rotate(-90 73 3)" fill="#D8D4FF" />
  </svg>
);
export default GridDots;
