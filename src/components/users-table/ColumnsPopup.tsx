import React, { useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import { CheckIcon } from '@radix-ui/react-icons'
import useUsersTableStore from '../../store/useUsersTableStore.ts'
import SearchBar from '../SearchBar.tsx'
import { unavailable_to_disable } from '../../static/table-static.ts'
import { Button } from '@radix-ui/themes'
import SettingsIcons from '../../icons/SettingsIcon.tsx'

const PopoverDemo = () => {
  const { columns, setColumns } = useUsersTableStore()
  const [searchValue, setSearchValue] = useState<string>('')
  const [isSelected, setIsSelected] = useState(false)
  return (
    <Popover.Root onOpenChange={() => setIsSelected(!isSelected)}>
      <Popover.Trigger data-state={isSelected ? 'open' : 'closed'} asChild>
        <button //TODO move button code to Button component
          className={`p-1 rounded-full ${
            isSelected ? 'bg-_dark-gray' : 'bg-transparent'
          } bg-_dark-gray  hover:text-white inline-flex items-center`}
        >
          <SettingsIcons />
        </button>
      </Popover.Trigger>
      <Popover.Portal className={'relative'}>
        <Popover.Content
          sticky="always"
          className="relative top-4 right-12 rounded-xl p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <SearchBar value={searchValue} setValue={setSearchValue} />
          <div className="font-plex-sans mt-2 w-full flex flex-col gap-2.5 h-[250px] overflow-x-scroll">
            {columns
              .filter((c) => c.displayName.toLowerCase().includes(searchValue.trim().toLowerCase()))
              .map((column) => (
                <Button
                  variant="ghost"
                  key={column.displayName}
                  disabled={unavailable_to_disable.includes(column.displayName)}
                  onClick={() =>
                    setColumns(
                      columns.map((c) => {
                        if (c.displayName === column.displayName) {
                          c.isActive = !c.isActive
                        }
                        return c
                      })
                    )
                  }
                >
                  <div className={'flex justify-between w-full'}>
                    <span>{column.displayName}</span>
                    {column.isActive ? (
                      <CheckIcon className={'text-blue-600 mr-3.5'} width={24} height={24} />
                    ) : (
                      ''
                    )}
                  </div>
                </Button>
              ))}
            {!columns.filter((c) =>
              c.displayName.toLowerCase().includes(searchValue.trim().toLowerCase())
            ).length && <div className="text-gray-600">Not found...</div>}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default PopoverDemo
