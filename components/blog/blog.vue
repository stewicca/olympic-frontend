<template>
  <div class="layout relative grid md:grid-cols-2 xl:grid-cols-3 xl:gap-8 gap-4 w-full mt-12 lg:mt-16">
    <div id="news" class="absolute -top-20 md:-top-32" />

    <!-- News -->
    <NuxtLink v-for="data in props.news.data" :to="'/blog/' + data.slug" :key="data.id" class="group overflow-hidden h-72 xl:h-80 3xl:h-96 bg-gray-100 rounded shadow">
      <!-- Image -->
      <div class="relative h-3/4 w-full overflow-hidden">
        <NuxtImg loading="lazy" :src="'https://asset.olymplast.co.id/NEWS/' + data.image" class="absolute bottom-0 min-w-full h-full transition-all duration-500 saturate-50 group-hover:saturate-100 group-hover:scale-110" />
      </div>

      <!-- Desc -->
      <div class="h-1/4 px-4 py-2">
        <p class="text-xs 2xl:text-sm"><span>{{ data.r_uni_news_categories[0].name_id }}</span> · {{ data.date_indo }}</p>
        <h2 class="text-cetaecanBlue group-hover:text-imperialBlue lg:text-lg 3xl:text-2xl font-bold transition-all duration-500">{{ data.title }}</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="js" setup>
// Initialization
const props = defineProps(["news"]);
</script>
