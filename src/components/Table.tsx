import React, { FC, useEffect } from 'react'
import { Table } from '@radix-ui/themes'
import { UsersTableProps } from '../types/components-props'

import { capitalizeFirstLetter, formatDate } from '../utils/common.ts'
import GeneralInfo from './users-table/Generalnfo.tsx'
import PopoverDemo from './users-table/ColumnsPopup.tsx'
import UserAvatar from './users-table/UserAvatar.tsx'
import useUsersTableStore from '../store/useUsersTableStore.ts'
import Status from './Status.tsx'

export const MainTable: FC<UsersTableProps> = ({ users, columns }) => {
  const { isLoading } = useUsersTableStore()

  useEffect(() => {
    const element = document.getElementById('users-table') as HTMLElement
    let parent = element?.parentNode as HTMLElement

    while (parent) {
      if (parent.nodeName === 'TABLE') {
        parent.style.overflow = 'visible'
      }
      parent = parent.parentNode as HTMLElement
    }
  }, [])

  return (
    <>
      <Table.Root variant="surface" className={' h-[500px] w-full overflow-x-auto'}>
        <Table.Header className="h-9">
          <Table.Row className="child:border-r child:!bg-gray-100 last:border-0 !border-gray-300 whitespace-nowrap child:text-slate-600 child:font-plex-sans">
            {columns
              .filter((c) => c.isActive)
              .map((column, index) => (
                <Table.ColumnHeaderCell
                  key={column.displayName}
                  id={index === 0 ? 'users-table' : undefined}
                  className={
                    index === 0
                      ? 'sticky left-0 top-0 z-20 '
                      : '' + 'sticky top-0 z-10  last:border-r-0 '
                  }
                >
                  {column.displayName}
                </Table.ColumnHeaderCell>
              ))}
            <Table.ColumnHeaderCell className="last:border-r-0 ">
              <PopoverDemo />
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className={'rounded'}>
          {users.map((user) => (
            <Table.Row
              className={'child:border-r border-gray-300 whitespace-nowrap'}
              key={user.email}
            >
              {
                <Table.RowHeaderCell className={'sticky flex items-center left-0 z-1 !bg-white'}>
                  <UserAvatar src={user.image} />
                  <div className={'ml-2  text-xs font-plex-sans text-gray-900 font-medium'}>
                    {user.firstName} {user.lastName}
                  </div>
                </Table.RowHeaderCell>
              }
              {columns.find((c) => c.displayName === 'Birthday')?.isActive ? (
                <Table.Cell className="whitespace-nowrap">
                  {formatDate(user.birthDate)} ({user.age} years old)
                </Table.Cell>
              ) : null}
              {columns.find((c) => c.displayName === 'Gender')?.isActive ? (
                <Table.Cell aria-multiline={false}>{capitalizeFirstLetter(user.gender)}</Table.Cell>
              ) : null}
              <Table.Cell>{user.email}</Table.Cell>
              {columns.find((c) => c.displayName === 'Phone')?.isActive ? (
                <Table.Cell>{user.phone}</Table.Cell>
              ) : null}
              <Table.Cell>{user.username}</Table.Cell>
              {columns.find((c) => c.displayName === 'General info')?.isActive ? (
                <Table.Cell>
                  <GeneralInfo
                    height={user.height.toString()}
                    bloodGroup={user.bloodGroup}
                    hairColor={user.hair.color}
                    weight={user.weight.toString()}
                  />
                </Table.Cell>
              ) : null}
              {columns.find((c) => c.displayName === 'Domain')?.isActive ? (
                <Table.Cell>{user.domain}</Table.Cell>
              ) : null}
              {columns.find((c) => c.displayName === 'IP')?.isActive ? (
                <Table.Cell>{user.ip}</Table.Cell>
              ) : null}
              {columns.find((c) => c.displayName === 'MAC IP')?.isActive ? (
                <Table.Cell>{user.macAddress}</Table.Cell>
              ) : null}
              {columns.find((c) => c.displayName === 'Address')?.isActive ? (
                <Table.Cell>{user.address.address}</Table.Cell>
              ) : null}
              {columns.find((c) => c.displayName === 'Bank')?.isActive ? (
                <Table.Cell>{capitalizeFirstLetter(user.bank.cardType)}</Table.Cell>
              ) : null}
              {columns.find((c) => c.displayName === 'University')?.isActive ? (
                <Table.Cell>{user.university}</Table.Cell>
              ) : null}
              {columns.find((c) => c.displayName === 'Company')?.isActive ? (
                <Table.Cell>{user.company.name}</Table.Cell>
              ) : null}
              {columns.find((c) => c.displayName === 'EIN')?.isActive ? (
                <Table.Cell>{user.ein}</Table.Cell>
              ) : null}
              {columns.find((c) => c.displayName === 'SSN')?.isActive ? (
                <Table.Cell>{user.ssn}</Table.Cell>
              ) : null}
              <Table.Cell className={'!border-r-0'}></Table.Cell>
            </Table.Row>
          ))}
          {isLoading && (
            <tr className={'flex justify-center items-center'}>
              <td>
                <Status status={'loading'} />
              </td>
            </tr>
          )}
        </Table.Body>
      </Table.Root>
      {/*<div className="p-5 flex items-center justify-between">*/}
      {/*  <div className="flex justify-center items-center text-center">*/}
      {/*    <SelectValuePerPage />*/}
      {/*    <div className="whitespace-nowrap flex justify-center items-center text-center text-xs font-plex-sans text-gray-600 font-semibold	ml-1 ">*/}
      {/*      ITEMS PER PAGE*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  )
}
