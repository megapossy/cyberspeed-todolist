<template>
  <form class="w-full px-8 py-2">
    <div class="flex flex-col items-center  py-2">

      <div class="relative z-0 w-full mb-5 group">
        <input type="email" name="title" id="title"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required />

        <label for="title"
          class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
      </div>


      <textarea id="message" rows="3"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-blue-600"
        placeholder="More details..."></textarea>
    </div>
    
    <div class="flex justify-end mt-4">
    <button type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Add</button>
    </div>

  </form>
</template>

<script setup lang="ts">

</script>

<style scoped></style>