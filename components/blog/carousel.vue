<template>
  <div class="w-full max-w-[98%] mx-auto">
    <Swiper
      :slides-per-view="2"
      :space-between="10"
      :breakpoints="{
        768: { slidesPerView: 3, spaceBetween: 10 },
        1024: { slidesPerView: 4, spaceBetween: 10 },
        1280: { slidesPerView: 5, spaceBetween: 10 },
        1440: { slidesPerView: 5, spaceBetween: 20 },
        1920: { slidesPerView: 6, spaceBetween: 30 },
      }"
    >
      <SwiperSlide v-for="data in props.news.data" :key="data.id" :style="{ 'background-image': `url('${data.image_url}')` }" class="overflow-hidden relative w-full min-h-52 sm:min-h-56 md:min-h-64 xl:min-h-72 px-2 py-4 text-white text-center text-pretty bg-cover bg-center rounded">
        <div class="-z-10 absolute top-0 left-0 w-full h-full bg-[#B6AA7A]/75" />
        <p class="w-fit mx-auto mt-2 md:mt-4 xl:mt-6 px-4 py-1 text-sm md:text-base bg-cetaecanBlue/50 hover:bg-cetaecanBlue rounded hover:cursor-pointer">{{ data.r_uni_news_categories[0].name_id }}</p>
        <h3 class="mt-2 xl:mt-4 text-base md:text-lg xl:text-xl font-bold">{{ data.title }}</h3>
        <p class="translate-x-1/2 absolute right-1/2 bottom-5 md:bottom-10 text-sm md:text-base">{{ data.date_indo }}</p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="js" setup>
// Initialization
const props = defineProps(["news"]);
</script>
