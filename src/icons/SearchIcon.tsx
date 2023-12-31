import React from 'react'
import { SvgIconProps } from '../types/components-props'

const SearchIcon: React.FC<SvgIconProps> = ({
  width = '20',
  height = '20',
  fill = '#687684',
  className,
  ...rest
}) => {
  return (
    <svg
      className={className}
      {...rest}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5ZM9.01953 9.72663C8.06578 10.5217 6.83875 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5C11 6.83875 10.5217 8.06578 9.72663 9.01953L10.1213 9.41421H10.8284L15.4142 14L14 15.4142L9.41421 10.8284V10.1213L9.01953 9.72663Z"
        fill={fill}
      />
    </svg>
  )
}

export default SearchIcon
