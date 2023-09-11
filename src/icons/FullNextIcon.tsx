import React from 'react'
import { SvgIconProps } from '../types/components-props'

const FullNextIcon: React.FC<SvgIconProps> = ({
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
        d="M12 10.4142V16H14L14 4H12V9.58576L11.7071 9.29286L7.20712 4.79286L5.79291 6.20708L9.5858 9.99997L5.79291 13.7929L7.20712 15.2071L11.7071 10.7071L12 10.4142Z"
        fill={fill}
      />
    </svg>
  )
}

export default FullNextIcon
