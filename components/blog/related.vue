<template>
  <div class="layout w-full py-12 lg:py-16">

    <!-- Title -->
    <h2 class="max-w-lg lg:max-w-2xl mx-auto mb-6 lg:mb-8 text-imperialBlue text-2xl lg:text-3xl text-center font-extrabold">Artikel Terkait</h2>

    <!-- Article -->
    <Swiper
      :modules="[SwiperNavigation]"
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
      :breakpoints="{
        768: { slidesPerView: 2, spaceBetween: 20, loop: true },
        1024: { slidesPerView: 3, spaceBetween: 20, loop: true },
        1280: { slidesPerView: 3, spaceBetween: 30, loop: true },
      }"
      :navigation="{
        prevEl: '.related-prev',
        nextEl: '.related-next',
      }"
      class="group relative"
    >
      <SwiperSlide v-for="data in news.data.data.slice(1)" class="space-y-2">
        <NuxtLink :to="'/blog/' + data.slug">
          <NuxtImg loading="lazy" :src="'https://asset.olympicfurniture.co.id/NEWS/' + data.image" alt="" class="w-full rounded-md" />
        </NuxtLink>
        <div>
          <div class="flex items-center justify-between text-xs">
            <NuxtLink to="/"><span class="hover:text-mustardBrown font-bold">{{ data.r_uni_news_categories[0].name_id }}</span> •</NuxtLink>
            <p>{{ data.date_indo }}</p>
          </div>
          <NuxtLink :to="'/blog/' + data.slug">
            <h4 class="hover:text-mustardBrown font-semibold truncate">{{ data.title }}</h4>
          </NuxtLink>
        </div>
      </SwiperSlide>

      <!-- Previous button -->
      <div class="related-prev z-10 -translate-y-1/2 absolute flex lg:hidden lg:group-hover:flex top-1/2 left-0 items-center justify-center h-20 lg:h-24 text-white bg-imperialBlue/20 hover:bg-imperialBlue/50 rounded-r-lg cursor-pointer">
        <svg fill="#FFFFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" class="w-7 lg:w-8 h-7 lg:h-8">
          <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"></path>
        </svg>
      </div>

      <!-- Next button -->
      <div class="related-next z-10 -translate-y-1/2 absolute flex lg:hidden lg:group-hover:flex right-0 top-1/2 items-center justify-center h-20 lg:h-24 text-white bg-imperialBlue/20 hover:bg-imperialBlue/50 rounded-l-lg cursor-pointer">
        <svg fill="#FFFFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFFF" class="w-7 lg:w-8 h-7 lg:h-8">
          <path d="M419.3 264.8l-61.8 61.8L542.9 512 357.5 697.4l61.8 61.8L666.5 512z"></path>
        </svg>
      </div>
    </Swiper>
  </div>
</template>

<script lang="js" setup>
// Initialization
const props = defineProps(["category"]);
const config = useRuntimeConfig();

// Fetching latest article data
const { data: news } = await useFetch("/uni/news", {
  baseURL: config.public.api,
  query: {
    // category: props.category.toLowerCase().replace(/\s+/g, "-"),
    application: 2,
    per_page: 6,
    page: 1,
  },
});
</script>
