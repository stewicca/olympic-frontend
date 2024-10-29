<template>
  <h1 class="sr-only">{{ metadata.data.meta_title }}</h1>
  <BlogCategories />
  <BlogCarousel :news="news.data" />
  <Blog :news="news.data" />

  <!-- Pagination -->
  <div class="w-fit mx-auto mb-12 lg:mb-16">
    <Pagination
      v-model.number="page"
      :query="true"
      :total="getTotalPages(news.data.total, limit)"
      :prev-show-count="getPagination()"
      :next-show-count="getPagination()"
      id-element="news"
    />
  </div>
</template>

<script lang="js" setup>
// Initialization
const Pagination = defineAsyncComponent(() => import("~/components/pagination.vue"));
const { getCurrentPage, getTotalPages, query } = usePagination();
const page = ref(getCurrentPage(true, 1));
const config = useRuntimeConfig();
const windowWidth = ref(0);
const route = useRoute();
const limit = 6;

// Fetching news data
const { data: news, refresh } = await useFetch("/uni/news", {
  baseURL: config.public.api,
  query: {
    application: 2,
    per_page: limit,
    page: page,
  },
});

// Fetching seo data
const { data: metadata } = await useFetch("/brands/seo", {
  baseURL: config.public.api,
  query: {
    application: 2,
    slug: "blog",
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

const getPagination = () => {
  return windowWidth.value >= 768 ? 3 : 2;
};

// Initialization page seo
useHead({
  title: metadata.value.data.meta_title,
  meta: [
    { name: "author", content: "Olympic" },
    { name: "description", content: metadata.value.data.meta_desc },
    { name: "keywords", content: metadata.value.data.keyword },
    { name: "robots", content: "all" },
    { property: "og:locale", content: "id" },
    { property: "og:title", content: metadata.value.data.meta_title },
    { property: "og:description", content: metadata.value.data.meta_desc },
    { property: "og:type", content: metadata.value.data.seo_type },
    { property: "og:url", content: `https://olympicfurniture.co.id${route.fullPath}` },
    { property: "og:image", content: "https://asset.olympicfurniture.co.id/BRAND/OLYMPIC/ASSET/og-furniture.png" },
    { name: "twitter:creator", content: "@OlympicFurnitur" },
    { name: "twitter:title", content: metadata.value.data.meta_title },
    { name: "twitter:description", content: metadata.value.data.meta_desc },
    { name: "twitter:site", content: "@OlympicFurnitur" },
    { name: "twitter:image", content: "https://asset.olympicfurniture.co.id/BRAND/OLYMPIC/ASSET/og-furniture.png" },
  ],
  htmlAttrs: { lang: "id" },
  link: [{ rel: "canonical", href: `https://olympicfurniture.co.id${route.fullPath}` }],
});
</script>
