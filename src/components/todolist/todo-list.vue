<template>
  <div class="container">
    <div class="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-16">
      <div class="px-4 py-2">
        <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
      </div>

      <AddTask class="mb-12" />
      <TheList />

    </div>
  </div>
</template>

<script setup lang="ts">
import AddTask from "@CMPNTS/todolist/add-task.vue"
import TheList from "@CMPNTS/todolist/the-list.vue"

</script>

<style lang="scss" scoped>
</style>