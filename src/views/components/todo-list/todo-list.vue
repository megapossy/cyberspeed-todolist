<template>
  <div class="max-w-xl sm:min-w-[370px] bg-white shadow-lg rounded-lg overflow-hidden ">
    <div class="flex justify-between px-4 py-2">
      <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>

      <button @click="ts.fetch.refresh()" type="button"
        class="flex justify-center items-center text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center ">
        <SVGRefresh v-if="!ts.isLoading" class="h-[10px] w-[10px]" />
        <SVGLoading v-else class="h-[10px] w-[10px] inline text-gray-200 animate-spin dark:text-gray-600" />
        <span class="sr-only">Icon description</span>
      </button>

    </div>
    <AddTask class="mb-12" />
    <TheList />
  </div>
</template>

<script setup lang="ts">
import AddTask from "@CMPNTS/todo-list/add-task.vue"
import TheList from "@CMPNTS/todo-list/the-list.vue"

import SVGRefresh from "@ASSETS/icons/refresh-cw-01.svg"
import SVGLoading from "@ASSETS/icons/loading-blue.svg"

import { useStore } from "@STORES/todolist"
import { onMounted } from "vue"
onMounted(() => {
  ts.fetch.refresh()
})

const ts = useStore();


</script>

<style lang="scss" scoped></style>