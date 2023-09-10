import React, { FC } from 'react'
import { TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const SearchBar: FC<{ value: string; setValue: (val: string) => void }> = ({ value, setValue }) => {
  return (
    <TextField.Root variant="surface">
      <TextField.Slot>
        <MagnifyingGlassIcon height="20" width="20" />
      </TextField.Slot>
      <TextField.Input
        value={value}
        size="3"
        placeholder="Search..."
        onChange={(event) => setValue(event.target.value)}
      />
    </TextField.Root>
  )
}

export default SearchBar
