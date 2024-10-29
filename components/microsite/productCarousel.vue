<template>
  <div :class="props.className">
    <div class="layout w-full pb-10">
      <!-- Product carousel -->
      <Swiper
        :modules="[SwiperNavigation]"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :breakpoints="{
          768: { slidesPerView: 3, spaceBetween: 10, loop: true },
          1024: { slidesPerView: 3, spaceBetween: 10, loop: true },
          1440: { slidesPerView: 4, spaceBetween: 50, loop: true },
        }"
        :navigation="{
          prevEl: '.product-prev',
          nextEl: '.product-next',
        }"
        class="group relative"
        data-aos="zoom-in"
      >
        <SwiperSlide v-for="data in products.data.results" :key="data.id" class="p-3">
          <div class="flex flex-col gap-1">

            <!-- Product image -->
            <NuxtLink :to="'/product/' + data.slug">
              <NuxtImg loading="lazy" :src="props.mainImage ? 'https://asset.olympicfurniture.co.id/PRODUCT/' + data.main_image : 'https://asset.olympicfurniture.co.id/' + data.images" :alt="data.name" class="w-[85%] md:w-full h-auto mx-auto transition-all duration-500 hover:scale-110" />
            </NuxtLink>

            <!-- Product desc -->
            <div class="flex w-full flex-col gap-4">
              <NuxtLink :to="'/product/' + data.slug" class="text-spaceCadet text-base sm:text-lg lg:text-xl text-center font-bold">{{ data.name }}®</NuxtLink>
              <p class="lg:w-[85%] mx-auto text-spaceCadet text-center text-balance font-semibold">Kasur busa dengan keindahan dan keawetan, pilihan utama untuk tidur nyaman yang juga bergaya.</p>
              <button class="w-[85%] md:w-full mx-auto py-1 bg-orangeYellow rounded">Selengkapnya</button>
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
const props = defineProps(["className", "api", "query", "mainImage"]);

// Fetching product data
const { data: products } = await useFetch(props.api, {
  baseURL: config.public.api,
  query: props.query,
});
</script>
