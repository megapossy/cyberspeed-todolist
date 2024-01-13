import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { client } from '@SRVCS/supabase'

export type ListType = {
  id:number,
  status: 'PENDING' | 'COMPLETED',
  title: string,
  text: string,
  user?:string,
  created_at: string,
}

export const useStore = defineStore('todolist', () => {
  const list = ref<ListType[]>()
  const isLoading = ref(false)

  const refresh = async () => {
    isLoading.value = true;
    const { data, error } = await client.from('todos').select()
    isLoading.value = false;
    if (error) throw error
    list.value = data
  }

  return { list, refresh, isLoading }
})
