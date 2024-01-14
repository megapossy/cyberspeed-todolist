<template>
  <GroupFadeRight tag="ul"  class="divide-y divide-gray-200 px-4">
    <AnItem v-for="list in todolistStore.list" :item="list" :key="list.id" />
  </GroupFadeRight>
</template>

<script setup lang="ts">
import AnItem from "@CMPNTS/todo-list/the-list/an-item.vue"
import {useStore} from "@STORES/todolist"

const todolistStore = useStore();

</script>

<style scoped></style>