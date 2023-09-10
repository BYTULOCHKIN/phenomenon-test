import React, { useEffect, useState } from 'react'
import Button from '@atlaskit/button'
import Textfield from '@atlaskit/textfield'
import useUsersTableStore from '../store/useUsersTableStore.ts'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon
} from '@radix-ui/react-icons'
import SelectValuePerPage from './SelectValuePerPage.tsx'

const Pagination = () => {
  const { pagination, setPagination } = useUsersTableStore()
  const [pageValue, setPageValue] = useState<number>(pagination.skip / +pagination.limit + 1)

  const lastPage = Math.ceil(pagination.total / pagination.limit)

  useEffect(() => {
    setPagination({
      ...pagination,
      skip: (+pageValue - 1) * pagination.limit
    })
  }, [pageValue])
  return (
    <div
      className={
        "p-2 flex items-center justify-between bg-white  border-[1px] border-gray-100' rounded-bl-lg rounded-br-lg"
      }
    >
      <div className=" flex items-center justify-between">
        <div className="flex justify-center items-center text-center">
          <SelectValuePerPage />
          <div className="whitespace-nowrap flex justify-center items-center text-center text-xs font-plex-sans text-gray-600 font-semibold	ml-1 ">
            ITEMS PER PAGE
          </div>
        </div>
      </div>
      <div className={'flex'}>
        <div className="whitespace-nowrap flex justify-center items-center text-center text-xs font-plex-sans text-gray-600 font-semibold	mr-1 ">
          {pagination.skip +
            1 +
            '-' +
            (pagination.skip + pagination.limit > pagination.total
              ? pagination.total
              : pagination.skip + pagination.limit)}
          {' of ' + pagination.total}
        </div>
        <div className={'flex items-center gap-1'}>
          <Button
            role="button"
            isDisabled={pageValue === 1}
            onClick={() => {
              setPageValue(1)
            }}
            iconBefore={<DoubleArrowLeftIcon />}
            spacing={'compact'}
          />
          <Button
            role="button"
            isDisabled={pageValue === 1}
            iconBefore={<ChevronLeftIcon />}
            onClick={() => {
              setPageValue((prev) => prev - 1)
            }}
            spacing={'compact'}
          />
          <Textfield
            onInput={(e) => {
              let newValue = (e.target as HTMLInputElement).value.replace(/[^0-9]/g, '')
              if (parseInt(newValue, 10) > lastPage) {
                newValue = lastPage.toString()
              }
              setPageValue(+newValue)
            }}
            onBlur={(e) => {
              let newValue = (e.target as HTMLInputElement).value
              if (parseInt(newValue, 10) > lastPage) {
                newValue = lastPage.toString()
              }
              if (parseInt(newValue, 10) < 1) {
                newValue = '1'
              }
              setPageValue(+newValue)
            }}
            value={pageValue}
            isMonospaced
            style={{ textAlign: 'center', width: '40px' }}
          />
          <Button
            role="button"
            aria-pressed="false"
            iconBefore={<ChevronRightIcon />}
            isDisabled={
              pageValue === Math.ceil(pagination.total / pagination.limit) ||
              pageValue > Math.ceil(pagination.total / pagination.limit)
            }
            onClick={() => {
              setPageValue((prev) => prev + 1)
              // setPagination({ ...pagination, skip: pagination.skip + pagination.limit })
            }}
            spacing={'compact'}
          />

          <Button
            role="button"
            onClick={() => {
              setPageValue(Math.ceil(pagination.total / pagination.limit))
            }}
            isDisabled={
              pageValue === Math.ceil(pagination.total / pagination.limit) ||
              pageValue > Math.ceil(pagination.total / pagination.limit)
            }
            iconBefore={<DoubleArrowRightIcon />}
            className={'p-1'}
            spacing={'compact'}
          />
        </div>
      </div>
    </div>
  )
}

export default Pagination
