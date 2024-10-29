<template>
  <div class="bg-ghostWhite">
    <div class="layout w-full py-12 lg:py-16">

      <!-- Title -->
      <h2 class="max-w-lg lg:max-w-2xl mx-auto text-imperialBlue text-2xl lg:text-3xl text-center font-extrabold">Kualitas terbaik untuk keluarga indonesia</h2>

      <!-- Subtitle -->
      <h3 class="max-w-lg lg:max-w-2xl mx-auto mb-6 lg:mb-8 text-imperialBlue text-xl text-center">Semua yang sudah menggunakan produk Olympic Furniture</h3>
      <Swiper
        :modules="[SwiperNavigation]"
        :slides-per-view="2"
        :space-between="10"
        :loop="true"
        :navigation="{
          prevEl: '.kol-prev',
          nextEl: '.kol-next',
        }"
        :breakpoints="{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }"
        class="group relative"
        data-aos="zoom-in-left"
      >
        <!-- Kol -->
        <SwiperSlide v-for="data in endorsement.data.endorsements" :key="data.id" class="overflow-hidden rounded-md">

          <!-- Image -->
          <NuxtLink to="/kol" class="overflow-hidden relative block w-full h-36 sm:h-48 md:h-60">
            <NuxtImg :src="'https://asset.olympicfurniture.co.id/ENDORSEMENT/OLYMPIC/' + data.image_content" class="absolute bottom-0 w-full h-auto transition-all duration-500 hover:scale-125" />
          </NuxtLink>

          <!-- Desc -->
          <div class="relative py-2 md:py-4 bg-eggShell">
            <NuxtImg v-if="data.image_user" loading="lazy" :src="'https://asset.olympicfurniture.co.id/ENDORSEMENT/OLYMPIC/' + data.image_user" alt="" class="-translate-y-1/2 absolute hidden md:block top-0 left-5 w-14 h-14 rounded-full" />
            <p class="text-imperialBlue md:text-lg text-center font-semibold">{{ data.name }}</p>
          </div>
        </SwiperSlide>

        <!-- Previous button -->
        <div class="kol-prev z-10 -translate-y-1/2 absolute flex lg:hidden lg:group-hover:flex top-1/2 left-0 items-center justify-center h-20 lg:h-24 text-white bg-imperialBlue/20 hover:bg-imperialBlue/50 rounded-r-lg cursor-pointer">
          <svg fill="#FFFFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" class="w-7 lg:w-8 h-7 lg:h-8">
            <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"></path>
          </svg>
        </div>

        <!-- Next button -->
        <div class="kol-next z-10 -translate-y-1/2 absolute flex lg:hidden lg:group-hover:flex right-0 top-1/2 items-center justify-center h-20 lg:h-24 text-white bg-imperialBlue/20 hover:bg-imperialBlue/50 rounded-l-lg cursor-pointer">
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

// Fetching endorsement data
const { data: endorsement } = await useFetch("/brands/endorsement", {
  baseURL: config.public.api,
  query: {
    brand: "olympic",
  },
});
</script>
