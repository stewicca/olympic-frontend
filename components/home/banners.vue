<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectFade, SwiperPagination, SwiperNavigation]"
    :autoplay="{ delay: 6000, disableOnInteraction: true }"
    :effect="'fade'"
    :loop="true"
    :navigation="{
      prevEl: '.banner-prev',
      nextEl: '.banner-next',
    }"
    class="group relative"
  >
    <SwiperSlide v-for="data in banners.data.results" :key="data.id">
      <NuxtLink :to="data.external_link">
        <NuxtImg loading="lazy" :src="getImageUrl(data)" :alt="data.alt_text" class="w-full sm:w-auto lg:w-full h-auto sm:h-80 lg:h-auto mx-auto shadow-xl cursor-pointer" />
      </NuxtLink>
    </SwiperSlide>

    <!-- Previous button -->
    <div class="banner-prev z-10 -translate-y-1/2 absolute flex lg:hidden lg:group-hover:flex top-1/2 left-0 items-center justify-center h-20 lg:h-24 text-white bg-imperialBlue/20 hover:bg-imperialBlue/50 rounded-r-lg cursor-pointer">
      <svg fill="#FFFFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" class="w-7 lg:w-8 h-7 lg:h-8">
        <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"></path>
      </svg>
    </div>

    <!-- Next button -->
    <div class="banner-next z-10 -translate-y-1/2 absolute flex lg:hidden lg:group-hover:flex right-0 top-1/2 items-center justify-center h-20 lg:h-24 text-white bg-imperialBlue/20 hover:bg-imperialBlue/50 rounded-l-lg cursor-pointer">
      <svg fill="#FFFFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFFF" class="w-7 lg:w-8 h-7 lg:h-8">
        <path d="M419.3 264.8l-61.8 61.8L542.9 512 357.5 697.4l61.8 61.8L666.5 512z"></path>
      </svg>
    </div>
  </Swiper>
</template>

<script lang="js" setup>
// Initialiization
const config = useRuntimeConfig();
const windowWidth = ref(0);

// Fetching banner data
const { data: banners } = await useFetch("/brands/banners", {
  baseURL: config.public.api,
  query: {
    application: 2,
  },
});

onMounted(() => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", updateWindowWidth);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
  }
});

function updateWindowWidth() {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
}

const getImageUrl = (data) => {
  return windowWidth.value > 768
    ? "https://asset.olympicfurniture.co.id/" + data.image_desktop
    : "https://asset.olympicfurniture.co.id/" + data.image_mobile;
};
</script>
