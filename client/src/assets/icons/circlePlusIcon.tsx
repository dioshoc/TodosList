import type { IconProps } from '@/types/IconProps';

const circlePlusIcon = ({
  className,
  color = 'fill-gray-600',
  height = 42,
  width = 42,
}: IconProps) => (
  <svg
    className={color + ' ' + className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 42 42">
    <circle
      className="hover:fill-inherit transition-colors"
      cx="21"
      cy="21"
      r="21"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M22.537 11.61h-2.732v8.195H11.61v2.732h8.195v8.195h2.732v-8.195h8.195v-2.732h-8.195V11.61Z"
      clipRule="evenodd"
    />
  </svg>
);

export default circlePlusIcon;
