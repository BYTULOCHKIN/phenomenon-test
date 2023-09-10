import { Pagination } from '../types/store'

export const formatDate = (input: string) => {
  const [year, month, day] = input.split('-')
  return `${day}.${month}.${year}`
}
export const capitalizeFirstLetter = (str: string) => {
  if (!str) {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getLocalStorageFilters = (): Pagination => {
  const savedFilters = localStorage.getItem('tableFilters')
  if (savedFilters) {
    const { limit, skip, total } = JSON.parse(savedFilters)
    return {
      limit,
      skip,
      total
    }
  }
  return {
    limit: 10,
    skip: 0,
    total: 0
  }
}
