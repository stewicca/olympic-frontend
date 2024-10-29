<template>
  <div class="layout w-full mb-12 lg:mb-16 mt-6 md:mt-24 lg:mt-28">

    <!-- Title -->
    <h2 class="max-w-lg lg:max-w-2xl mx-auto text-imperialBlue text-2xl lg:text-3xl text-center font-extrabold">Kualitas terbaik untuk keluarga indonesia</h2>

    <!-- Subtitle -->
    <h3 class="max-w-lg lg:max-w-2xl mx-auto mb-6 lg:mb-8 text-imperialBlue text-center text-xl">Semua yang sudah menggunakan produk Olympic Furniture</h3>

    <!-- Gallery -->
    <div class="columns-2 md:columns-3 lg:columns-4 xl:columns-5 3xl:columns-6 gap-4">
      <div v-for="data in endorsement.data.endorsements" :key="data.id" class="overflow-hidden break-inside-avoid mb-4 rounded border">
        <NuxtImg loading="lazy" :src="'https://asset.olympicfurniture.co.id/ENDORSEMENT/OLYMPIC/' + data.image_content" :alt="data.name" class="w-full h-auto" />
        <div class="px-4 py-2">
          <h3 class="text-center font-semibold">{{ data.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
// Initialization
const config = useRuntimeConfig();

// Fetching endorsement data
const { data: endorsement } = await useFetch("/brands/endorsement", {
  baseURL: config.public.api,
  query: {
    brand: "olympic",
  },
});
</script>

<style scoped>
.break-inside-avoid {
  break-inside: avoid;
}
</style>
