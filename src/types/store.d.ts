import { Users } from './user'

interface IUsersTableStore {
  users: Users
  fetchUsers: () => Promise<void>
  setUsers: (users: Users) => void
  columns: ColumnsStore[]
  setColumns: (columns: ColumnsStore[]) => void
  pagination: Pagination
  setPagination: (pagination: Pagination) => void
  searchValue: string
  setSearchValue: (value: string) => void
  isLoading: boolean
  setIsLoading: (val: boolean) => void
}

interface ColumnsStore {
  displayName: string
  isActive: boolean
  changeability: boolean
}

interface Pagination {
  limit: number
  skip: number
  total: number
}
