import React, { useEffect, useState } from 'react'
import Button from '@atlaskit/button'
import Textfield from '@atlaskit/textfield'
import useUsersTableStore from '../store/useUsersTableStore.ts'
import SelectValuePerPage from './SelectValuePerPage.tsx'
import BackIcon from '../icons/BackIcon.tsx'
import NextIcon from '../icons/NextIcon.tsx'
import FullNextIcon from '../icons/FullNextIcon.tsx'
import FullBackIcon from '../icons/FullBackIcon.tsx'

const Pagination = () => {
  const { pagination, setPagination } = useUsersTableStore()
  const [pageValue, setPageValue] = useState<number>(pagination.skip / +pagination.limit + 1)

  const lastPage = Math.ceil(pagination.total / pagination.limit)

  useEffect(() => {
    setPagination({
      ...pagination,
      skip: pageValue !== 0 ? (+pageValue - 1) * pagination.limit : 0
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
            appearance="subtle"
            isDisabled={pageValue < 1 || pageValue === 1}
            onClick={() => {
              setPageValue(1)
            }}
            iconBefore={
              <FullBackIcon fill={pageValue < 1 || pageValue === 1 ? '#C8CFD5' : '#687684'} />
            }
            spacing={'compact'}
          />

          <Button
            role="button"
            appearance="subtle"
            isDisabled={pageValue < 1 || pageValue === 1}
            iconBefore={
              <BackIcon fill={pageValue < 1 || pageValue === 1 ? '#C8CFD5' : '#687684'} />
            }
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
            appearance="subtle"
            aria-pressed="false"
            iconBefore={
              <NextIcon
                fill={
                  pageValue === Math.ceil(pagination.total / pagination.limit) ||
                  pageValue > Math.ceil(pagination.total / pagination.limit)
                    ? '#C8CFD5'
                    : '#687684'
                }
              />
            }
            isDisabled={
              pageValue === Math.ceil(pagination.total / pagination.limit) ||
              pageValue > Math.ceil(pagination.total / pagination.limit)
            }
            onClick={() => {
              setPageValue((prev) => prev + 1)
            }}
            spacing={'compact'}
          />

          <Button
            role="button"
            appearance="subtle"
            onClick={() => {
              setPageValue(Math.ceil(pagination.total / pagination.limit))
            }}
            isDisabled={
              pageValue === Math.ceil(pagination.total / pagination.limit) ||
              pageValue > Math.ceil(pagination.total / pagination.limit)
            }
            iconBefore={
              <FullNextIcon
                fill={
                  pageValue === Math.ceil(pagination.total / pagination.limit) ||
                  pageValue > Math.ceil(pagination.total / pagination.limit)
                    ? '#C8CFD5'
                    : '#687684'
                }
              />
            }
            className={'p-1'}
            spacing={'compact'}
          />
        </div>
      </div>
    </div>
  )
}

export default Pagination
