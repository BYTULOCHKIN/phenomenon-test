import axios from 'axios'

export const getUsers = async (searchValue: string, limit: number, skip: number) => {
  const { data } = await axios.get<never>(
    `https://dummyjson.com/users/search?q=${searchValue.trim()}&limit=${limit}&skip=${skip}`
  )

  return data
}
