<template>
  <div class="relative w-full lg:w-[75%]">
    
    <!-- Total -->
    <span class="absolute top-0 lg:-left-4 xl:-left-6 text-gray-500 text-sm md:text-base">
      Menampilkan <b v-text="products.data.total" class="text-black" /> produk untuk 

      <!-- If Desktop -->
      <b class="hidden lg:inline text-black">{{ props.title }}</b>

      <!-- If mobile -->
      <div class="inline">
        <button class="inline-flex lg:hidden items-center px-1 text-white bg-cetaecanBlue rounded" type="button" @click="toggleDropdown">
          {{ props.title }}
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" class="w-2.5 h-2.5 ms-3 transition-all duration-500" :class="{ 'rotate-180': isDropdownOpen }">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
      </div>
    </span>

    <!-- Mobile menu -->
    <div class="flex flex-col gap-2 w-full mt-10 p-4 bg-aliceBlue rounded-lg" :class="{ hidden: !isDropdownOpen, flex: isDropdownOpen }">

      <!-- All product -->
      <NuxtLink to="/product" class="w-fit hover:text-mustardBrown font-bold transition-all duration-100" exact-active-class="text-mustardBrown">Semua Produk</NuxtLink>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 w-full text-gray-500">
        <div v-for="data in props.categories" class="space-y-2">

          <!-- Parent -->
          <NuxtLink :to="'/category/' + data.slug" class="w-fit hover:text-mustardBrown font-bold transition-all duration-100" exact-active-class="text-mustardBrown">{{ data.name }}</NuxtLink>

          <!-- Children -->
          <div class="flex flex-col">
            <NuxtLink v-for="data in data.r_subs" :to="'/category/' + data.slug" class="w-fit hover:text-mustardBrown indent-2 transition-all duration-100" exact-active-class="text-mustardBrown">{{ data.name }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Products -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8 pt-8">
      <div v-for="data in products.data.results" :key="data.id" class="p-3">
        <div class="flex flex-col gap-1">

          <!-- Image -->
          <NuxtLink :to="'/product/' + data.slug">
            <NuxtImg loading="lazy" :src="'https://asset.olympicfurniture.co.id/' + data.images" :alt="data.name" class="w-full h-auto transition-all duration-500 hover:scale-110" />
          </NuxtLink>

          <!-- Desc -->
          <div class="flex flex-col gap-1 w-full">
            <NuxtLink :to="'/product/' + data.slug_category">
              <p class="text-imperialBlue text-xs font-bold">{{ data.category_name }}</p>
            </NuxtLink>
            <NuxtLink :to="'/product/' + data.slug">
              <h4 class="text-sm sm:text-base lg:text-lg font-bold">{{ data.judul_brand }}</h4>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mx-auto w-fit">
      <Pagination
        v-if="products.data.total"
        v-model.number="page"
        :query="true"
        :total="getTotalPages(products.data.total, limit)"
        :prev-show-count="getPagination()"
        :next-show-count="getPagination()"
      />
    </div>
  </div>
</template>

<script lang="js" setup>
// Initalization
const Pagination = defineAsyncComponent(() => import("~/components/pagination.vue"));
const { getCurrentPage, getTotalPages, query } = usePagination();
const props = defineProps(["title", "categories"]);
const page = ref(getCurrentPage(true, 1));
const config = useRuntimeConfig();
const isDropdownOpen = ref(false);
const windowWidth = ref(0);
const route = useRoute();
const limit = 12;

// Fetching product data
const { data: products, refresh } = await useFetch("/brands/product", {
  baseURL: config.public.api,
  query: {
    application: 2,
    page: page,
    per_page: limit,
    category: route.params.slug ?? "",
    cari: route.query.produk ?? "",
  },
});

// Watching page pagination
watch(
  () => query.value.page,
  async (value) => {
    if (!value) {
      page.value = 1;
    }
    await refresh();
  },
);

// Watching query produk
watchEffect(() => {
  refresh();
});

const getPagination = () => {
  return windowWidth.value >= 768 ? 3 : 2;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

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
</script>
