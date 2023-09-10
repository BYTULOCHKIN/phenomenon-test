import React from 'react'
import { SvgIconProps } from '../types/components-props'

const GoNextIcon: React.FC<SvgIconProps> = ({ width = '20', height = '20', fill = '#687684' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 18.4142V24H22L22 12H20V17.5858L19.7071 17.2929L15.2071 12.7929L13.7929 14.2071L17.5858 18L13.7929 21.7929L15.2071 23.2071L19.7071 18.7071L20 18.4142Z"
        fill={fill}
      />
    </svg>
  )
}

export default GoNextIcon
