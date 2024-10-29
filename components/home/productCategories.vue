<template>
  <div class="layout w-full py-12 lg:py-16">

    <!-- Title -->
    <h2 class="max-w-[50%] mb-6 lg:mb-8 text-imperialBlue text-2xl lg:text-3xl font-extrabold">
      Kategori Produk
    </h2>

    <!-- Categories -->
    <div class="grid lg:grid-cols-2 gap-8">
      <div v-for="data in category.data" class="group overflow-hidden relative flex items-center h-48 lg:h-44 xl:h-60 pl-8 md:pl-10 xl:pl-12 bg-eggShell rounded-lg">
        <div class="absolute top-0 right-0 bottom-0 w-full group-hover:w-0 h-full bg-aliceBlue transition-all duration-500" />

        <!-- Image -->
        <NuxtImg loading="lazy" :src="'https://asset.olympicfurniture.co.id/' + data.image" :alt="data.meta_title" class="-translate-y-1/2 absolute top-1/2 right-0 md:right-10 lg:-right-5 xl:-right-0 w-36 md:w-60 lg:w-64 xl:w-96 transition-all duration-500 group-hover:scale-90 lg:group-hover:scale-50 contrast-75 group-hover:contrast-100" />
        <div class="z-10 xl:max-w-[270px] lg:max-h-0 lg:group-hover:max-h-40 text-pretty transition-all duration-500">

          <!-- Parent -->
          <NuxtLink :to="'/category/' + data.slug" class="-translate-y-1/2 block text-cetaecanBlue text-xl md:text-2xl xl:text-3xl font-bold">{{ data.name }}</NuxtLink>

          <!-- Children -->
          <div class="lg:overflow-hidden grid grid-cols-2 gap-2 lg:max-h-0 lg:group-hover:max-h-40 transition-all duration-500">
            <NuxtLink v-for="child in data.r_subs" :to="'/category/' + child.slug" :key="child.id" class="hover:text-mustardBrown text-xs md:text-base font-semibold">{{ child.name }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
// Initialization
const config = useRuntimeConfig();

// Fetching category data
const { data: category } = await useFetch("/uni/category", {
  baseURL: config.public.api,
  query: {
    app: 2,
  },
});
</script>
