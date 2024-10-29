<template>
  <div class="hidden lg:block space-y-2 lg:w-[25%]">

    <!-- Title -->
    <span class="text-gray-500 text-2xl font-bold">Kategori</span>

    <!-- Categories -->
    <div class="flex flex-col gap-3 text-gray-500">

      <!-- All product -->
      <NuxtLink to="/product" class="w-fit hover:text-mustardBrown font-bold transition-all duration-100" exact-active-class="text-mustardBrown">Semua Produk</NuxtLink>
      <div v-for="data in props.categories" class="space-y-2">

        <!-- Parent -->
        <NuxtLink :to="'/category/' + data.slug" class="w-fit hover:text-mustardBrown font-bold transition-all duration-100" exact-active-class="text-mustardBrown">{{ data.name }}</NuxtLink>

        <!-- Children -->
        <div class="flex flex-col">
          <NuxtLink v-for="data in data.r_subs" :to="'/category/' + data.slug" class="w-fit hover:text-mustardBrown indent-2 transition-all duration-100" exact-active-class="text-mustardBrown text-bold">{{ data.name }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
// Initialization
const props = defineProps(["categories"]);
</script>
