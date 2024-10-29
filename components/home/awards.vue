<template>
  <div class="bg-ghostWhite">
    <div class="layout flex items-center justify-center w-full py-12 lg:py-16">
      <NuxtImg loading="lazy" v-for="data in awards.data.results" :src="'https://asset.olympicfurniture.co.id/' + data.image_desktop" alt="" class="w-28 md:w-52 xl:w-60 h-auto transition-all duration-500 hover:scale-110" />
    </div>
  </div>
</template>

<script lang="js" setup>
// Initialization
const config = useRuntimeConfig();

// Fetching awards data
const { data: awards } = await useFetch("/brands/banners", {
  baseURL: config.public.api,
  query: {
    application: 2,
    name: "award",
  },
});
</script>
