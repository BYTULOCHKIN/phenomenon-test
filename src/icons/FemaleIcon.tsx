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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.33334C8.35362 1.33334 8.69276 1.47381 8.94281 1.72386C9.19286 1.97391 9.33333 2.31305 9.33333 2.66667C9.33333 3.02029 9.19286 3.35943 8.94281 3.60948C8.69276 3.85953 8.35362 4 8 4C7.64638 4 7.30724 3.85953 7.05719 3.60948C6.80714 3.35943 6.66667 3.02029 6.66667 2.66667C6.66667 2.31305 6.80714 1.97391 7.05719 1.72386C7.30724 1.47381 7.64638 1.33334 8 1.33334ZM7 14.6667V10.6667H5L6.72667 5.60667C6.89333 5.06 7.4 4.66667 8 4.66667C8.6 4.66667 9.10667 5.06 9.27333 5.60667L11 10.6667H9V14.6667H7Z"
        fill="#1F1E1D"
      />
    </svg>
  )
}

export default MaleIcon
