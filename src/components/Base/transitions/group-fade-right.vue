<template>
  <TransitionGroup
    name="faderight-group"
    tag="div"
    class="faderight-group-container"
    :style="style"
  >
    <slot />
  </TransitionGroup>
</template>

<script lang="ts" setup>
defineProps({
  style: {
    type: Object,
    default: () => ({
      overflow: "visible",
    }),
  },
});
</script>

<style lang="scss">
/* 
not scoped because slotted components are rendered 
outside of this transition component
which this transition component may have no control or effect
*/

.faderight-group-container {
  position: relative;
  padding: 0;
  margin: 0;
  /* overflow: visible; */
  /* overflow: hidden; */
}

/* 1. declare transition */
.faderight-group-move,
.faderight-group-enter-active,
.faderight-group-leave-active {
  transition: all 0.5s ease;
}

/* 2. declare enter from and leave to state */
.faderight-group-enter-from,
.faderight-group-leave-to {
  /* opacity: 0; */
  transform: translate(100%);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.faderight-group-leave-active {
  position: absolute;
}
</style>
