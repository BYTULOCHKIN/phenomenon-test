import React from 'react'
import { SvgIconProps } from '../types/components-props'

const BackIcon: React.FC<SvgIconProps> = ({
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
        d="M7.29292 9.29285L11.7929 4.79285L13.2071 6.20706L9.41424 9.99995L13.2071 13.7928L11.7929 15.2071L7.29292 10.7071L6.58582 9.99995L7.29292 9.29285Z"
        fill={fill}
      />
    </svg>
  )
}

export default BackIcon
