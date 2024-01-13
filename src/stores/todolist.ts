import { defineStore } from 'pinia'
import { ref } from 'vue'

import { client } from '@SRVCS/supabase'

export type ListType = {
  id: number
  status: 'PENDING' | 'COMPLETED'
  title: string
  text: string
  user?: string
  created_at: string
}

export const useStore = defineStore('todolist', () => {
  const list = ref<ListType[]>()
  const isLoading = ref(false)

  const refresh = async () => {
    isLoading.value = true
    const { data, error } = await client
      .from('todos')
      .select()
      .order('created_at', { ascending: false })
    isLoading.value = false
    if (error) throw error
    list.value = data
  }

  const addItem = async (payload: { title: string; text: string }) => {
    isLoading.value = true
    const { error } = await client
      .from('todos')
      .insert([{ title: payload.title, text: payload.text }])
    isLoading.value = false
    if (error) throw error
  }

  const setItemStatus = async (id: number, status: ListType['status']) => {
    const { error } = await client.from('todos').update({ status: status }).eq('id', id)
    if (error) throw error
  }

  const deleteItem = async (id: number) => {
    const { error } = await client.from('todos').delete().eq('id', id)
    if (error) throw error
  }

  const fetch = {
    refresh,
    addItem,
    setItemStatus,
    deleteItem
  }

  const actions = {
    delete: (id: number) => {
      const fndIdx = list.value?.findIndex((el) => el.id === id)
      if (typeof fndIdx !== 'undefined' && fndIdx >= 0) list.value?.splice(fndIdx, 1)
    },
    setStatus: (id: number, status: ListType['status']) => {
      const fnd = list.value?.find((el) => el.id === id)
      if (fnd) fnd.status = status
    }
  }

  return { list, actions, isLoading, fetch }
})
