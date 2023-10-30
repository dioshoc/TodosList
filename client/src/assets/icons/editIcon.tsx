import type { IconProps } from '@/types/IconProps';

const editIcon = ({
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
    viewBox="0 0 42 42">
    <path
      className="hover:fill-inherit transition-colors"
      fillRule="evenodd"
      d="m38.161 1.634 2.258 2.258c1.248 1.247 1.516 3.538.269 4.784l-1.584 1.584-7.043-7.043 1.585-1.583a3.193 3.193 0 0 1 4.515 0ZM23.097 26.266l-7.043-7.044L30.782 4.496l7.043 7.044-14.728 14.726Zm-8.11-5.583v7.036h6.562l-6.561-7.037Zm-9.96 16.09H26.76V26.449l4.527-4.528v16.212c0 1.5-.764 3.169-2.264 3.169H3.67c-1.5 0-3.169-1.67-3.169-3.17V12.78c0-1.5 1.669-2.264 3.17-2.264h17.253l-4.527 4.527H5.027v21.732Z"
      clipRule="evenodd"
    />
  </svg>
);

export default editIcon;
