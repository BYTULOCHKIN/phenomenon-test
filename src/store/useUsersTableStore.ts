import { create } from 'zustand'
import { IUsersTableStore } from '../types/store'
import { getUsers } from '../service/api/dummy.ts'
import { COLUMNS } from '../static/table-static.ts'
import debounce from 'debounce-promise'
import { getLocalStorageColumns, getLocalStorageFilters } from '../utils/common.ts'

const debounceGetUsers = debounce(
  (searchValue: string, limit: number, skip: number) => getUsers(searchValue, limit, skip),
  300
)
const useTagsStore = create<IUsersTableStore>((set, get) => ({
  users: [],
  searchValue: '',
  setSearchValue: (searchValue) => set({ searchValue }),
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
  fetchUsers: async () => {
    const { users, skip, total } = await debounceGetUsers(
      get().searchValue,
      get().pagination.limit,
      get().pagination.skip
    )
    set({ users, pagination: { ...get().pagination, skip, total } })
  },
  setUsers: (users) => set({ users }),
  columns:
    getLocalStorageColumns() ||
    COLUMNS.map((c) => ({
      displayName: c,
      isActive: true,
      changeability: true
    })),
  pagination: {
    limit: getLocalStorageFilters().limit,
    skip: getLocalStorageFilters().skip,
    total: getLocalStorageFilters().total
  },
  setPagination: (pagination) => {
    set({ pagination })
  },
  setColumns: (columns) => set({ columns })
}))
export default useTagsStore
