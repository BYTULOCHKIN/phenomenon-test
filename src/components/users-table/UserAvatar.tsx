import React, { FC } from 'react'
import * as Avatar from '@radix-ui/react-avatar'

const UserAvatar: FC<{ src: string }> = ({ src }) => {
  return (
    <Avatar.Root className="bg-blackA3 inline-flex h-[32px] w-[32px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full border-2  rounded-[inherit] object-cover"
        src={src}
        alt="image"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        CT
      </Avatar.Fallback>
    </Avatar.Root>
  )
}

export default UserAvatar
