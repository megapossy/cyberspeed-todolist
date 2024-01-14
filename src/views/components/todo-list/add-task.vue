<template>
  <form @submit.prevent="addTask()" class="w-full px-8 py-2">
    <div class="flex flex-col  items-center  py-2">
      <MyInput class="mb-5  w-full" v-model="title" label="Title" :error="errors?.title?.[0]" />
      <MyTextarea class="w-full" v-model="text" label="More details..." :error="errors?.text?.[0]" />
    </div>

    <div class="flex justify-end mt-4">
      <MyButton type="submit" :is-loading="ts.isLoading">
        Add
      </MyButton>

    </div>
    <p v-if="isApiErrorShown" class="mt-12 text-center text-xs text-red-600">
      Something went wrong, please try again.
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { type FieldConstraint, validateFields } from "@SRVCS/validate"
import { useStore } from "@STORES/todolist"
const ts = useStore();

const title = ref("")
const text = ref("")
const errors = ref<FieldConstraint>()
const isApiErrorShown = ref(false);

watch(title, () => errors.value?.title?.length ? errors.value.title = [] : null)
watch(text, () => errors.value?.text?.length ? errors.value.text = [] : null)


const addTask = async () => {

  // dont add if still loading
  if (ts.isLoading) return;

  isApiErrorShown.value = false;
  errors.value = validateFields([
    {
      field: "title",
      value: title.value
    },
    {
      field: "text",
      value: text.value
    }
  ])
  if (!errors.value) {
    try {
      // submit here
      await ts.fetch.addItem({ title: title.value, text: text.value })
      ts.fetch.refresh();

      text.value = ''
      title.value = ''
    } catch (error) {
      isApiErrorShown.value = true;
    }
  }
}

</script>

<style scoped></style>