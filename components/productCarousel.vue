<template>
  <div :class="props.className">
    <div class="layout w-full py-12 lg:py-16">
      <div class="flex items-center justify-between mb-6 lg:mb-8">

        <!-- Title -->
        <h2 class="max-w-[50%] text-imperialBlue text-2xl lg:text-3xl font-extrabold">{{ props.title }}</h2>

        <!-- Lihat lainnya -->
        <NuxtLink :to="props.link" class="flex text-imperialBlue hover:text-mustardBrown text-lg font-semibold cursor-pointer">
          Lihat lainnya
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-auto w-6">
            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </NuxtLink>
      </div>

      <!-- Product carousel -->
      <Swiper
        :modules="[SwiperNavigation]"
        :slides-per-view="2"
        :space-between="10"
        :loop="true"
        :navigation="{
          prevEl: '.product-prev',
          nextEl: '.product-next',
        }"
        :breakpoints="{
          768: { slidesPerView: 3, spaceBetween: 10, loop: true },
          1024: { slidesPerView: 4, spaceBetween: 10, loop: true },
          1280: { slidesPerView: 5, spaceBetween: 50, loop: true },
        }"
        class="group relative"
        data-aos="zoom-in"
      >
        <SwiperSlide v-for="data in products.data.results" :key="data.id" class="p-3">
          <div class="flex flex-col gap-1">

            <!-- Product image -->
            <NuxtLink :to="'/product/' + data.slug">
              <NuxtImg loading="lazy" :src="props.mainImage ? 'https://asset.olympicfurniture.co.id/PRODUCT/' + data.main_image : 'https://asset.olympicfurniture.co.id/' + data.images" :alt="data.name" class="w-full h-auto transition-all duration-500 hover:scale-110" />
            </NuxtLink>

            <!-- Product desc -->
            <div class="flex w-full flex-col gap-1">
              <NuxtLink :to="'/product/' + data.slug_category" class="text-imperialBlue text-xs font-bold">{{ data.category_name }}</NuxtLink>
              <NuxtLink :to="'/product/' + data.slug" class="text-sm sm:text-base lg:text-lg font-bold">{{ data.judul_brand }}</NuxtLink>
            </div>
          </div>
        </SwiperSlide>

        <!-- Previous button -->
        <div class="product-prev z-10 -translate-y-1/2 absolute flex lg:hidden lg:group-hover:flex top-1/2 left-0 items-center justify-center h-20 lg:h-24 text-white bg-imperialBlue/20 hover:bg-imperialBlue/50 rounded-r-lg cursor-pointer">
          <svg fill="#FFFFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" class="w-7 lg:w-8 h-7 lg:h-8">
            <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"></path>
          </svg>
        </div>

        <!-- Next button -->
        <div class="product-next z-10 -translate-y-1/2 absolute flex lg:hidden lg:group-hover:flex right-0 top-1/2 items-center justify-center h-20 lg:h-24 text-white bg-imperialBlue/20 hover:bg-imperialBlue/50 rounded-l-lg cursor-pointer">
          <svg fill="#FFFFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFFF" class="w-7 lg:w-8 h-7 lg:h-8">
            <path d="M419.3 264.8l-61.8 61.8L542.9 512 357.5 697.4l61.8 61.8L666.5 512z"></path>
          </svg>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script lang="js" setup>
// Initialization
const config = useRuntimeConfig();
const props = defineProps(["title", "className", "link", "api", "query", "mainImage"]);

// Fetching product data
const { data: products } = await useFetch(props.api, {
  baseURL: config.public.api,
  query: props.query,
});
</script>
