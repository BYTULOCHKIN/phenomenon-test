import React, { useEffect, useState } from 'react'
import './index.css'
import '@radix-ui/themes/styles.css'
import SearchBar from './components/SearchBar.tsx'
import { MainTable } from './components/Table.tsx'
import useUsersTableStore from './store/useUsersTableStore.ts'
import { Theme } from '@radix-ui/themes'
import Status from './components/Status.tsx'
import Pagination from './components/Pagination.tsx'

function App() {
  const {
    users,
    columns,
    fetchUsers,
    pagination,
    searchValue,
    setSearchValue,
    isLoading,
    setIsLoading
  } = useUsersTableStore()
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsError(false)
    setIsLoading(true)

    fetchUsers()
      .catch(() => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [pagination.limit, pagination.skip, searchValue])

  useEffect(() => {
    localStorage.setItem('tableFilters', JSON.stringify({ ...pagination, columns }))
  }, [pagination.limit, pagination.skip, columns])

  return (
    <div className="font-plex-sans p-10">
      <Theme>
        <SearchBar value={searchValue} setValue={setSearchValue} />
        <div className={'font-plex-sans mt-5 bg-gray-100 rounded-lg rounded-br-lg'}>
          <div className={'h-[500px] flex justify-center items-center'}>
            {isError && <Status status={'error'} />}
            {isLoading && <Status status={'loading'} />}
            {!users.length && !isLoading && <Status status={'not_found'} />}
            {!isLoading && users.length > 0 && !isError && (
              <MainTable users={users} columns={columns} />
            )}
          </div>
          <Pagination />
        </div>
      </Theme>
    </div>
  )
}

export default App
