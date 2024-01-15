<template>
  <main class="w-full">
    <div class="container mx-auto w-full p-2 sm:pt-20 flex justify-center items-start">
      <TodoList class="w-full" />
    </div>
  </main>
</template>

<script setup lang="ts">
import TodoList from "@CMPNTS/todo-list/todo-list.vue"
</script>

<style scoped></style>