<template>
  <button type="button" :disabled="isLoading" class="btn" :class="{
    'opacity-70': isLoading
  }" >
    <slot />
    <SVGLoading v-if="isLoading" class="h-[10px] w-[10px] inline text-gray-200 animate-spin dark:text-gray-600 ms-2" />
  </button>
</template>

<script setup lang="ts">
import SVGLoading from "@ASSETS/icons/loading-blue.svg"

withDefaults(defineProps<{ isLoading: boolean }>(), {
  isLoading: false
})
</script>
<script lang="ts">
import MyButton from "./MyButton.vue"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MyButton: typeof MyButton;
  }
}
</script>

<style scoped></style>