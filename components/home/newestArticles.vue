<template>
  <div class="layout w-full py-12 lg:py-16">
    <div class="flex items-center justify-between mb-6 lg:mb-8">

      <!-- Title -->
      <h2 class="max-w-[50%] text-imperialBlue text-2xl lg:text-3xl font-extrabold">Artikel Terbaru</h2>

      <!-- Lihat lainnya -->
      <NuxtLink to="/blog" class="flex text-imperialBlue hover:text-mustardBrown text-lg font-semibold cursor-pointer">
        Lihat lainnya
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-auto w-6">
          <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </NuxtLink>
    </div>

    <div class="lg:flex lg:gap-4 w-full" data-aos="zoom-in">

      <!-- Most newest -->
      <div class="overflow-hidden relative hidden lg:block w-2/5 rounded-md">

        <!-- Image -->
        <NuxtLink :to="'/blog/' + articles.data.data[0].slug">
          <NuxtImg loading="lazy" :src="'https://asset.olympicfurniture.co.id/NEWS/' + articles.data.data[0].image" class="absolute bottom-0 min-w-full h-full" />
        </NuxtLink>

        <!-- Desc -->
        <div class="absolute flex bottom-0 flex-col justify-center w-full h-24 xl:h-28 px-6 text-white bg-black/50">

          <!-- Category -->
          <NuxtLink to="/" class="text-xs xl:text-sm">
            <span class="hover:text-mustardBrown font-bold">{{ articles.data.data[0].r_uni_news_categories[0].name_id }}</span> •
          </NuxtLink>

          <!-- Title -->
          <NuxtLink :to="'/blog/' + articles.data.data[0].slug">
            <h4 class=" hover:text-mustardBrown xl:text-lg font-semibold truncate">{{ articles.data.data[0].title }}</h4>
          </NuxtLink>

          <!-- Writer & date -->
          <div class="flex items-center justify-between text-sm xl:text-base font-semibold">
            <p>{{ articles.data.data[0].seo_2 }}</p>
            <p>{{ articles.data.data[0].date_indo }}</p>
          </div>
        </div>
      </div>

      <!-- Articles -->
      <div class="lg:w-3/5">
        <Swiper
          :modules="[SwiperPagination]"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :pagination="{
            el: '.custom-pagination',
          }"
          :breakpoints="{
            450: { slidesPerView: 2, spaceBetween: 20, loop: true },
          }"
        >
          <SwiperSlide v-for="data in articles.data.data.slice(1)" class="space-y-2">

            <!-- Image -->
            <NuxtLink :to="'/blog/' + data.slug">
              <NuxtImg :src="'https://asset.olympicfurniture.co.id/NEWS/' + data.image" class="w-full rounded-md" />
            </NuxtLink>
            <div>

              <!-- Category & date -->
              <div class="flex items-center justify-between text-xs">
                <NuxtLink to="/">
                  <span class="hover:text-mustardBrown font-bold">{{ data.r_uni_news_categories[0].name_id }}</span> •
                </NuxtLink>
                <p>{{ data.date_indo }}</p>
              </div>

              <!-- Title -->
              <NuxtLink :to="'/blog/' + data.slug">
                <h4 class="hover:text-mustardBrown font-semibold truncate">{{ data.title }}</h4>
              </NuxtLink>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="custom-pagination space-x-2 text-center" />
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
// Initialization
const config = useRuntimeConfig();

// Fetching article data
const { data: articles } = await useFetch("/uni/news", {
  baseURL: config.public.api,
  query: {
    application: 2,
    per_page: 6,
    page: 1,
  },
});
</script>
