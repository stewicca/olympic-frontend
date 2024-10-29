<template>
  <h1 class="sr-only">{{ metadata.data.meta_title }}</h1>
  <AboutHeader />
  <AboutOurHistory />
  <AboutSeparator />
  <AboutVisionMission />
</template>

<script lang="js" setup>
// Initialization
const config = useRuntimeConfig();
const route = useRoute();

// Fetching seo data
const { data: metadata } = await useFetch("/brands/seo", {
  baseURL: config.public.api,
  query: {
    application: 2,
    slug: "about",
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
