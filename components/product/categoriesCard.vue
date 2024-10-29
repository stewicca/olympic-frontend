<template>
  <div class="layout hidden lg:grid grid-cols-4 gap-4 w-full my-12 lg:my-16">
    <NuxtLink v-for="data in categories" :to="'/category/' + data.slug" :key="data.id" class="group relative flex block items-center w-full h-24 px-4 xl:px-6 bg-eggShell rounded-md">
      <p class="w-1/2 my-auto text-cetaecanBlue/50 group-hover:text-red-900 text-lg xl:text-xl font-extrabold transition-all duration-500">{{ data.name }}</p>
      <NuxtImg loading="lazy" :src="'https://asset.olympicfurniture.co.id/' + data.image" alt="" class="z-10 absolute right-2 xl:right-5 w-auto h-full transition-all duration-500 group-hover:scale-150" />
    </NuxtLink>
  </div>
</template>

<script lang="js" setup>
// Initialization
const props = defineProps(["categories"]);
</script>
