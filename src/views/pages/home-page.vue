<template>
  <main class="w-full">
    <div class="container mx-auto w-full p-2 sm:py-20 flex justify-center items-start">
      <FadeUp>
        <TodoList v-show="isShown" class="w-full" />
      </FadeUp>
    </div>
  </main>
</template>

<script setup lang="ts">
import helpers from "@UTILS/helpers";
import TodoList from "@CMPNTS/todo-list/todo-list.vue"
import { onMounted, ref } from "vue";

const isShown = ref(false)

onMounted(async () => {
  await helpers.huwaits(500)
  isShown.value = true
})

</script>

<style scoped></style>