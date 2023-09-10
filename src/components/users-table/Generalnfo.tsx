import React, { FC } from 'react'
import { GeneralInfoProps } from '../../types/components-props'

const GeneralInfo: FC<GeneralInfoProps> = (props) => {
  const { bloodGroup, height, weight, hairColor } = props
  return (
    <div>
      Bloodgroup {bloodGroup}; Height: {height}; Weight: {weight}, Hair color {hairColor}
    </div>
  )
}

export default GeneralInfo
