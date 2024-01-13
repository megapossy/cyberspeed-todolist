<template>
  <div class="relative cursor-pointer" @click="isShown = true">
    <SVGDotsVertical class="text-gray-600" />
    <FadeUp>
      <div v-show="isShown" ref="menu" class="menu">
        <DeleteItem @item-deleted="isShown=false" /> 
      </div>
    </FadeUp>
  </div>
</template>

<script setup lang="ts">
import SVGDotsVertical from '@ASSETS/icons/dots-vertical.svg'
import DeleteItem from '@CMPNTS/todolist/the-list/delete-item.vue'
import { onClickOutside } from "@vueuse/core"
import { ref } from 'vue';

const isShown = ref(false)
const menu = ref<HTMLElement>()
onClickOutside(menu, event => {
  isShown.value = false
})


</script>

<style lang="scss" scoped>
.menu {
  @apply border border-2 rounded-lg p-4 absolute top-0 right-0 bg-white flex text-nowrap;

}
</style>