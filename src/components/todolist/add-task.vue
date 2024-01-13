<template>
  <form @submit.prevent="addTask()" class="w-full px-8 py-2">
    <div class="flex flex-col  items-center  py-2">

      <div class="mb-5  w-full">
        <div class="relative z-0 w-full group">
          <input v-model="title" type="text" name="title" id="title"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            :class="[errors?.title?.length ? '!text-red-600 !border-red-300 focus:!border-red-600' : '']"
            placeholder=" " />

          <label for="title"
            class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            :class="[errors?.title?.length ? '!text-red-600 peer-focus:!text-red-600' : '']">Title</label>
        </div>
        <p v-if="errors?.title?.length" class="mt-2 text-xs text-red-600">
          {{ errors?.title[0] }}
        </p>
      </div>

      <div class=" w-full">
        <textarea id="text" v-model="text" rows="3"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-blue-600"
          :class="[errors?.text?.length ? '!text-red-600 !border-red-300 focus:!outline-red-600 !outline-red-600' : '']"
          placeholder="More details..."></textarea>
        <p v-if="errors?.text?.length" class="mt-2 text-xs text-red-600">
          {{ errors?.text?.[0] }}
        </p>
      </div>
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