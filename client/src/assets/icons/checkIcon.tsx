import type { IconProps } from '@/types/IconProps';

const checkIcon = ({
  className,
  color = 'fill-gray-700',
  height = 38,
  width = 50,
}: IconProps) => (
  <svg
    className={color + ' ' + className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 50 38">
    <path
      className="hover:fill-inherit transition-colors"
      fillRule="evenodd"
      d="M48.342.644a2.5 2.5 0 0 1 .18 3.531l-29.791 33a2.5 2.5 0 0 1-3.712 0l-13.541-15a2.5 2.5 0 1 1 3.711-3.35l11.686 12.944L44.811.825a2.5 2.5 0 0 1 3.531-.18Z"
      clipRule="evenodd"
    />
  </svg>
);

export default checkIcon;
