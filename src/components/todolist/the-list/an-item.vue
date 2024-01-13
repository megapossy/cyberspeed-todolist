<template>
  <li class="py-4">
    <div class="flex items-center w-full">
      <input id="todo1" name="todo1" type="checkbox"
        class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
      <label for="todo1" class="ml-3 block text-gray-900">
        <span class="text-lg font-medium">Finish project proposal</span>
      </label>
      <ItemMenu class="ms-auto" />
    </div>
    <p class="m-4 text-gray-500">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
      voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
      velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
      enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
      consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
      vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <div class="flex justify-end">
      <p class="text-sm font-light text-gray-500 mx-2">Created 4/Jan/2023</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import ItemMenu from "@CMPNTS/todolist/the-list/item-menu.vue"

</script>

<style scoped></style>