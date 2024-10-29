<template>
  <div class="layout w-full mb-6 lg:mb-12 mt-6 md:mt-24 lg:mt-28">
    <div class="flex">
      <div class="group col-span-12 space-y-5 w-full px-8">

        <!-- Title -->
        <h3 class="px-2 text-black text-2xl md:text-3xl font-bold">Author di Olympic Furniture</h3>
        <hr class="w-1/4 group-hover:w-full border-t-2 border-imperialBlue rounded-full transition-all duration-500" />
        
        <!-- Author -->
        <div class="overflow-hidden flex gap-2 w-full bg-gray-50 rounded-lg">

          <!-- Image -->
          <div class="flex-none">
            <NuxtImg loading="lazy" :src="author.data.image" alt="" width="300" height="300" class="w-24 h-24 mx-auto" />
          </div>

          <!-- Detail -->
          <div class="flex flex-col justify-center content-between">
            <span class="text-lg font-bold">{{ author.data.name }}</span>
            <span>{{ author.data.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

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

// Fetching author data
const { data: author } = await useFetch(`/uni/news/author/${route.params.auth}`, {
  baseURL: config.public.api,
  query: {
    application: 2,
  },
});

// Fetching news data
const { data: news, refresh } = await useFetch("/uni/news", {
  baseURL: config.public.api,
  query: {
    application: 2,
    auth: route.params.auth,
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
  title: author.value.data.name + ", Author at Olympic Furniture",
  meta: [
    { name: "author", content: "Olympic Furniture" },
    { name: "description", content: author.value.data.desc },
    { name: "keywords", content: "" },
    { name: "robots", content: "all" },
    { property: "og:locale", content: "id" },
    { property: "og:title", content: author.value.data.name + ", Author at Olympic Furniture" },
    { property: "og:description", content: author.value.data.desc },
    { property: "og:type", content: "Website" },
    { property: "og:url", content: `https://olympicfurniture.co.id${route.fullPath}` },
    { property: "og:image", content: author.value.data.image },
    { name: "twitter:creator", content: "@OlympicFurnitur" },
    { name: "twitter:title", content: author.value.data.name + ", Author at Olympic Furniture" },
    { name: "twitter:description", content: author.value.data.desc },
    { name: "twitter:site", content: "@OlympicFurnitur" },
    { name: "twitter:image", content: author.value.data.image },
  ],
  htmlAttrs: { lang: "id" },
  link: [{ rel: "canonical", href: `https://olympicfurniture.co.id${route.fullPath}` }],
});
</script>
