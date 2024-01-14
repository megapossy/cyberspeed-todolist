<template>
  <div class="flex" :class="{
    disabled: isLoading
  }" @click="deleteItem()">
    <SVGTrash01 class="text-red-500" />
    <span class="ms-3">Delete Item</span>
    <SVGLoading v-if="isLoading"
      class="h-[10px] w-[10px] inline text-gray-200 animate-spin dark:text-gray-600 ms-2 mt-1" />
  </div>
</template>

<script setup lang="ts">
import hlprs from "@UTILS/helpers"
import SVGLoading from "@ASSETS/icons/loading-blue.svg"
import SVGTrash01 from '@ASSETS/icons/trash-01.svg'
import { type ListType, useStore } from "@STORES/todolist"
import { type ComputedRef, inject, ref, nextTick } from 'vue';
const ts = useStore();

const isLoading = ref(false)

const item = inject<ComputedRef<ListType>>('item')

const emits = defineEmits<{
  'item-deleted': []
}>()

const deleteItem = async () => {
  // dont delete if still loading
  if (isLoading.value) return;

  try {
    isLoading.value = true;
    if (item?.value?.id) {
      await ts.fetch.deleteItem(item.value.id)
      emits('item-deleted')
      // await hlprs.huwaits(0)
      await nextTick()
      ts.actions.delete(item?.value?.id)
    }
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false;
  }
}

</script>

<style lang="scss" scoped>
.disabled {
  opacity: 0.7;
  cursor: not-allowed;

  svg {
    opacity: 1;
  }
}
</style>