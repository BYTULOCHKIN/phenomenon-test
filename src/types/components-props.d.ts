import { Users } from './user'
import { ColumnsStore } from './store'

export interface UsersTableProps {
  users: Users
  columns: ColumnsStore[]
}

export interface GeneralInfoProps {
  bloodGroup: string
  height: string
  weight: string
  hairColor: string
}

interface SvgIconProps {
  width?: string
  height?: string
  fill?: string
  className?: string
}

export interface StatusProps {
  status?: 'error' | 'loading' | 'not_found'
}

export interface GenderProps {
  gender: string
}
