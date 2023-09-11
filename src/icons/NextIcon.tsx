import React from 'react'
import { SvgIconProps } from '../types/components-props'

const NextIcon: React.FC<SvgIconProps> = ({
  width = '16',
  height = '16',
  className,
  fill,
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
        d="M12.7071 9.29291L8.20711 4.79291L6.79289 6.20712L10.5858 10L6.79289 13.7929L8.20711 15.2071L12.7071 10.7071L13.4142 10L12.7071 9.29291Z"
        fill={fill}
      />
    </svg>
  )
}

export default NextIcon
