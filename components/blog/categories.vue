<template>
  <div class="layout w-full md:mt-24 py-10">
    <Swiper
      :slides-per-view="2"
      :space-between="10"
      :breakpoints="{
        768: { slidesPerView: 4, spaceBetween: 10 },
        1024: { slidesPerView: 6, spaceBetween: 10 },
        1280: { slidesPerView: 7, spaceBetween: 10 },
      }"
    >
      <SwiperSlide v-for="data in categories.data" :key="data.id">
        <NuxtLink :to="'/blog/cat/' + data.slug" class="flex items-center px-4 py-6 text-white text-sm uppercase bg-cetaecanBlue/60 hover:bg-cetaecanBlue rounded">{{ data.name_id }}</NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="js" setup>
// Initialization
const config = useRuntimeConfig();

// Fetching categories data
const { data: categories } = await useFetch("/uni/news/categories", {
  baseURL: config.public.api,
  query: {
    application: 2,
  },
});
</script>
