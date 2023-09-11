import React, { FC } from 'react'
import SearchIcon from '../icons/SearchIcon.tsx'

const SearchBar: FC<{ value: string; setValue: (val: string) => void }> = ({ value, setValue }) => {
  return (
    <div className="relative ">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
      <input
        type="text"
        className="border p-2 text-s rounded-[6px] w-full pl-10 bg-_gray placeholder-gray-500"
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder="Search..."
      />
    </div>
  )
}

export default SearchBar
