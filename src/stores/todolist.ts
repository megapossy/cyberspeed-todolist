import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('todolist', () => {
  const list = ref(0)
  
  return { list }
})
