<template>
  <h1 class="sr-only">{{ route.params.tag }} | Olympic Furniture</h1>
  <p class="max-w-[90%] mx-auto mt-6 md:mt-24 lg:mt-28 text-cetaecanBlue text-2xl lg:text-3xl 2xl:text-4xl font-bold underline underline-offset-8">{{ route.params.tag }}</p>
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
    tags: route.params.tag,
    per_page: limit,
    page: page,
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
  title: route.params.tag + " | Olympic Furniture",
  meta: [
    { name: "author", content: "Olympic" },
    { name: "description", content: route.params.tag },
    { name: "keywords", content: "" },
    { name: "robots", content: "all" },
    { property: "og:locale", content: "id" },
    { property: "og:title", content: route.params.tag + " | Olympic Furniture" },
    { property: "og:description", content: route.params.tag },
    { property: "og:type", content: "Website" },
    { property: "og:url", content: `https://olympicfurniture.co.id${route.fullPath}` },
    { property: "og:image", content: "https://asset.olympicfurniture.co.id/BRAND/OLYMPIC/ASSET/og-furniture.png" },
    { name: "twitter:creator", content: "@OlympicFurnitur" },
    { name: "twitter:title", content: route.params.tag + " | Olympic Furniture" },
    { name: "twitter:description", content: route.params.tag },
    { name: "twitter:site", content: "@OlympicFurnitur" },
    { name: "twitter:image", content: "https://asset.olympicfurniture.co.id/BRAND/OLYMPIC/ASSET/og-furniture.png" },
  ],
  htmlAttrs: { lang: "id" },
  link: [{ rel: "canonical", href: `https://olympicfurniture.co.id${route.fullPath}` }],
});
</script>
