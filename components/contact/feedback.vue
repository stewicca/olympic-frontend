<template>
  <div v-if="formFeedback === 'error'" class="block w-full mt-4 p-3 text-white bg-red-500">
    Telah terjadi kesalahan!
  </div>

  <div v-else-if="formFeedback === 'success'" class="block w-full mt-4 p-3 text-white bg-green-500">
    Pesan anda telah terkirim!
  </div>

  <div v-else-if="formFeedback === 'incomplete'" class="block w-full mt-4 p-3 text-white bg-red-500">
    Pastikan semua kolom terisi.
  </div>

  <div v-else-if="formFeedback === 'email'" class="block w-full mt-4 p-3 text-white bg-red-500">
    Pastikan email benar!
  </div>

  <div v-else-if="formFeedback === 'phone'" class="block w-full mt-4 p-3 text-white bg-red-500">
    Pastikan no hp benar!
  </div>
</template>

<script lang="js" setup>
const props = defineProps(["formFeedback"]);
</script>
