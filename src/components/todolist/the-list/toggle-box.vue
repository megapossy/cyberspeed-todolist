<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer">
    <div
      class="toggle-box peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-blue-600">
    </div>
    <slot />
  </label>
</template>

<script setup lang="ts">
// defineProps<{ title: string }>()
</script>

<style lang="scss" scoped>
.toggle-box {
  @apply w-11 h-6 bg-gray-200 rounded-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all;
}
</style>