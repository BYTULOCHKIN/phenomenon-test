import React from 'react'
import { Select } from '@radix-ui/themes'
import useUsersTableStore from '../store/useUsersTableStore.ts'

const SelectValuePerPage = () => {
  const { pagination, setPagination } = useUsersTableStore()
  return (
    <Select.Root
      defaultValue={pagination.limit.toString()}
      onValueChange={(val) => setPagination({ ...pagination, limit: +val })}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="10">10</Select.Item>
        <Select.Item value="20">20</Select.Item>
        <Select.Item value="50">50</Select.Item>
      </Select.Content>
    </Select.Root>
  )
}

export default SelectValuePerPage
