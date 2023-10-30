import type { IconProps } from '@/types/IconProps';

const closeIcon = ({
  className,
  color = 'fill-gray-700',
  height = 40,
  width = 40,
}: IconProps) => (
  <svg
    className={color + ' ' + className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 40 40">
    <path
      className="hover:fill-inherit transition-colors"
      fillRule="evenodd"
      d="M3.908.077.272 3.713 16.47 19.911.094 36.287l3.636 3.636 16.376-16.376L36.27 39.712l3.636-3.636-16.164-16.164L39.73 3.925 36.093.289 20.105 16.275 3.908.077Z"
      clipRule="evenodd"
    />
  </svg>
);

export default closeIcon;
