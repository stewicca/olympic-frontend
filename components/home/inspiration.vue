<template>
  <div class="bg-ghostWhite2">
    <div class="layout w-full py-12 lg:py-16">

      <!-- Title -->
      <h2 class="max-w-lg lg:max-w-2xl mx-auto mb-6 lg:mb-8 text-imperialBlue text-2xl lg:text-3xl text-center font-extrabold">Berbagai inspirasi ruangan untuk menyempurnakan isi rumah</h2>
      <div class="flex flex-col lg:flex-row gap-6">

        <!-- Inspirasi -->
        <Swiper
          :modules="[SwiperPagination]"
          :pagination="true"
          :loop="true"
          class="w-full lg:min-w-[66.666667%]"
          data-aos="zoom-in-right"
        >
          <SwiperSlide v-for="data in validInspirasi" :key="data.id">
            <NuxtImg loading="lazy" :src="'https://asset.olympicfurniture.co.id/INSPIRASI/' + data.image" alt="" class="w-full h-full rounded-md saturate-50 hover:saturate-100" />
          </SwiperSlide>
        </Swiper>

        <!-- Series -->
        <div class="grid grid-cols-2 lg:grid-cols-1 gap-6 w-full" data-aos="zoom-in-left">

          <!-- EIRA -->
          <NuxtLink to="/series/eira" class="relative lg:saturate-50 lg:hover:saturate-100">
            <NuxtImg loading="lazy" src="https://asset.olympicfurniture.co.id/BRAND/SERIES/eira/eira-series.webp" alt="" class="w-full lg:h-full rounded-md" />
            <button class="lg:absolute bottom-3 left-5 w-full lg:w-fit px-4 py-1 text-white text-center lg:text-start bg-cetaecanBlue/70 hover:bg-cetaecanBlue/100 rounded-md">EIRA SERIES</button>
          </NuxtLink>

          <!-- RUBIK -->
          <NuxtLink to="/" class="relative saturate-50 hover:saturate-100">
            <NuxtImg loading="lazy" src="https://asset.olympicfurniture.co.id/BRAND/SERIES/eira/eira-series.webp" alt="" class="w-full lg:h-full rounded-md" />
            <button class="lg:absolute bottom-3 left-5 w-full lg:w-fit px-4 py-1 text-white text-center lg:text-start bg-cetaecanBlue/70 hover:bg-cetaecanBlue/100 rounded-md">RUBIK SERIES</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
// Initialization
const config = useRuntimeConfig();

// Fetching inspirasi data
const { data: inspirasi } = await useFetch("/uni/inspiration", {
  baseURL: config.public.api,
  query: {
    brand: "olympic",
  },
});

// Filter items with null category
const validInspirasi = inspirasi.value.data.results.filter(
  (data) => data.category === null,
);
</script>
