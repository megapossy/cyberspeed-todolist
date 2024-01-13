<template>
  <li class="py-4">
    <div class="flex items-center w-full">
      <ToggleBox @click="toggle()" :model-value="isToggled" :is-loading="isLoading">
        <span class="ms-3 text-xl font-medium text-gray-900 dark:text-gray-300" :class="{ strike: isToggled }">
          {{ $props.item.title }}
        </span>
      </ToggleBox>
      <ItemMenu class="ms-auto" />
    </div>
    <p v-if="$props.item.text" class="m-4 text-gray-500 max-w-96" :class="{
      'opacity-40': isToggled
    }">
      {{ $props.item.text }}
    </p>
    <div class="flex justify-end mt-3">
      <p class="text-sm font-light text-gray-500 mx-2">{{ date }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import ItemMenu from "@CMPNTS/todolist/the-list/item-menu.vue"
import ToggleBox from "@CMPNTS/todolist/the-list/toggle-box.vue"
import type { ListType } from "@STORES/todolist"
import { computed, provide, ref } from "vue";
import { format as formatDate } from "@UTILS/date";
import { useStore } from "@STORES/todolist"

const ts = useStore();

const props = defineProps<{
  item: ListType
}>()

provide('item', computed(() => props.item))

const isToggled = computed(() => props.item.status === 'COMPLETED')
const isLoading = ref(false)

const date = computed(() => formatDate(props.item.created_at))

const toggle = async () => {
  isLoading.value = true;
  const status = props.item.status === 'COMPLETED' ? 'PENDING' : 'COMPLETED'
  try {
    await ts.fetch.setItemStatus(props.item.id, status)
    ts.actions.setStatus(props.item.id, status)
  } catch (er) {
    console.error(er)
  } finally {
    isLoading.value = false;
  }
}

</script>

<style lang="scss" scoped>
@keyframes strike {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

.strike {
  position: relative;
  opacity: 0.6;
}

.strike::after {
  content: ' ';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: black;
  animation-name: strike;
  animation-duration: 400ms;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
</style>