import React from 'react'
import { SvgIconProps } from '../types/components-props'

const FullBackIcon: React.FC<SvgIconProps> = ({
  width = '16',
  height = '16',
  className,
  fill = '#1F1E1D',
  ...rest
}) => {
  return (
    <svg
      className={className}
      {...rest}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4V16H8L8 10.4142L8.29289 10.7071L12.7929 15.2071L14.2071 13.7929L10.4142 10L14.2071 6.20711L12.7929 4.79289L8.29289 9.29289L8 9.58579L8 4H6Z"
        fill={fill}
      />
    </svg>
  )
}

export default FullBackIcon
