<template>
  <h1 class="sr-only">{{ metadata.data.meta_title }}</h1>
  <HomeBanners />
  <HomeProductCategories />
  <ProductCarousel
    :class-name="'bg-ghostWhite'"
    :title="'Produk Terbaru'"
    :api="'/brands/product'"
    :link="'/product'"
    :query="{
      application: 2,
      per_page: 10,
      terbaru: 1
    }"
  />
  <HomeOlympicBed />
  <ProductCarousel
    :title="'Pilihan Springbed dan Busa'"
    :link="'/category/kasur-sofa'"
    :class-name="'bg-aliceBlue'"
    :api="'/brands/product'"
    :main-image="true"
    :query="{
      category: 'kasur-busa',
      application: 2,
      per_page: 10
    }"
  />
  <HomeInspiration />
  <HomeKol />
  <HomeNewestArticles />
  <HomeAwards />
</template>

<script lang="js" setup>
// Initialization
const config = useRuntimeConfig();

// Fetching seo data
const { data: metadata } = await useFetch("/brands/seo", {
  baseURL: config.public.api,
  query: {
    application: 2,
    slug: "/",
  },
});

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
    { property: "og:url", content: "https://olympicfurniture.co.id" },
    { property: "og:image", content: "https://asset.olympicfurniture.co.id/BRAND/OLYMPIC/ASSET/og-furniture.png" },
    { name: "twitter:creator", content: "@OlympicFurnitur" },
    { name: "twitter:title", content: metadata.value.data.meta_title },
    { name: "twitter:description", content: metadata.value.data.meta_desc },
    { name: "twitter:site", content: "@OlympicFurnitur" },
    { name: "twitter:image", content: "https://asset.olympicfurniture.co.id/BRAND/OLYMPIC/ASSET/og-furniture.png" },
  ],
  htmlAttrs: { lang: "id" },
  link: [{ rel: "canonical", href: "https://olympicfurniture.co.id" }],
});
</script>
