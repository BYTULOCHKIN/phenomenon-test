import React from 'react'
import { SvgIconProps } from '../types/components-props'

const MaleIcon: React.FC<SvgIconProps> = ({
  width = '16',
  height = '16',
  fill = '#1F1E1D',
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
        d="M8.5 3.75C9.19036 3.75 9.75 3.19036 9.75 2.5C9.75 1.80964 9.19036 1.25 8.5 1.25C7.80964 1.25 7.25 1.80964 7.25 2.5C7.25 3.19036 7.80964 3.75 8.5 3.75Z"
        fill={fill}
      />
      <path
        d="M10.375 4.375H6.625C6.45924 4.375 6.30027 4.44085 6.18306 4.55806C6.06585 4.67527 6 4.83424 6 5V9.375H7.25V13.75H9.75V9.375H11V5C11 4.83424 10.9342 4.67527 10.8169 4.55806C10.6997 4.44085 10.5408 4.375 10.375 4.375Z"
        fill={fill}
      />
    </svg>
  )
}

export default MaleIcon
