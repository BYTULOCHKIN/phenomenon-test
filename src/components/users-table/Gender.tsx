import React, { FC } from 'react'
import { GenderProps } from '../../types/components-props'
import MaleIcon from '../../icons/MaleIcon.tsx'
import FemaleIcon from '../../icons/FemaleIcon.tsx'

const Gender: FC<GenderProps> = ({ gender }) => {
  switch (gender) {
    case 'male':
      return <MaleIcon />
    case 'female':
      return <FemaleIcon />
  }
}

export default Gender
