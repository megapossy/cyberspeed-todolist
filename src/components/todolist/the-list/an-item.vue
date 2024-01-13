<template>
  <li class="py-4">
    <div class="flex items-center w-full">
      <ToggleBox>
        <span class="ms-3 text-xl font-medium text-gray-900 dark:text-gray-300">{{ $props.item.title }}
        </span>
      </ToggleBox>
      <ItemMenu class="ms-auto" />
    </div>
    <p class="m-4 text-gray-500">
      {{ $props.item.title }}
    </p>
    <div class="flex justify-end">
      <p class="text-sm font-light text-gray-500 mx-2">Created {{ $props.item.created_at }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import ItemMenu from "@CMPNTS/todolist/the-list/item-menu.vue"
import ToggleBox from "@CMPNTS/todolist/the-list/toggle-box.vue"
import type { ListType } from "@STORES/todolist"

defineProps<{
  item: ListType
}>()

</script>

<style lang="scss" scoped></style>