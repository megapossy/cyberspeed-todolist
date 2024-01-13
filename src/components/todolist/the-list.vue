<template>
  <ul class="divide-y divide-gray-200 px-4">
    <AnItem v-for="i in 5" :key="i" />
  </ul>
</template>

<script setup lang="ts">
import AnItem from "@CMPNTS/todolist/the-list/an-item.vue"

</script>

<style scoped></style>