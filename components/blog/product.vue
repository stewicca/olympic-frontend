<template>
  <Swiper
    :modules="[SwiperNavigation]"
    :slides-per-view="2"
    :space-between="5"
    :loop="true"
    :centered-slides="true"
    :breakpoints="{
      768: { slidesPerView: 3, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 10 },
      1280: { slidesPerView: 3, spaceBetween: 10 },
    }"
    :navigation="{
      prevEl: '.news-product-prev',
      nextEl: '.news-product-next',
    }"
    class="group relative w-full my-12"
  >
    <SwiperSlide v-for="data in props.products.data" :key="data.id" class="p-3">
      <div class="flex flex-col gap-1">

        <!-- Image -->
        <NuxtLink :to="'/product/' + data.slug">
          <NuxtImg loading="lazy" :src="'https://asset.olympicfurniture.co.id/' + data.images" :alt="data.name" class="w-full h-64 transition-all duration-500 hover:scale-110" />
        </NuxtLink>

        <!-- Desc -->
        <div class="flex flex-col gap-1 w-full">
          <NuxtLink :to="'/product/' + data.slug_category" class="block text-xs font-bold text-imperialBlue">{{ data.category_name }}</NuxtLink>
          <NuxtLink :to="'/product/' + data.slug" class="block text-sm sm:text-base lg:text-lg font-bold truncate">{{ data.judul_brand }}</NuxtLink>
        </div>
      </div>
    </SwiperSlide>

    <!-- Previous button -->
    <div class="bews-product-prev z-10 -translate-y-1/2 absolute flex lg:hidden lg:group-hover:flex top-1/2 left-0 items-center justify-center h-20 lg:h-24 text-white bg-imperialBlue/20 hover:bg-imperialBlue/50 rounded-r-lg cursor-pointer">
      <svg fill="#FFFFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" class="w-7 lg:w-8 h-7 lg:h-8">
        <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"></path>
      </svg>
    </div>

    <!-- Next button -->
    <div class="news-product-next z-10 -translate-y-1/2 absolute flex lg:hidden lg:group-hover:flex right-0 top-1/2 items-center justify-center h-20 lg:h-24 text-white bg-imperialBlue/20 hover:bg-imperialBlue/50 rounded-l-lg cursor-pointer">
      <svg fill="#FFFFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFFF" class="w-7 lg:w-8 h-7 lg:h-8">
        <path d="M419.3 264.8l-61.8 61.8L542.9 512 357.5 697.4l61.8 61.8L666.5 512z"></path>
      </svg>
    </div>
  </Swiper>
</template>

<script lang="js" setup>
// Initialization
const props = defineProps(["products"]);
</script>
