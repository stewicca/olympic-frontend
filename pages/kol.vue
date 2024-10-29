<template>
  <h1 class="sr-only">Kol | Olympic Furniture</h1>
  <Kol />
</template>

<script lang="js" setup>
// Initialization
const route = useRoute();

// Initialization page seo
useHead({
  title: "Kol | Olympic Furniture",
  meta: [
    { name: "author", content: "Olympic" },
    { name: "description", content: "" },
    { name: "keywords", content: "" },
    { name: "robots", content: "all" },
    { property: "og:locale", content: "id" },
    { property: "og:title", content: "Kol | Olympic Furniture" },
    { property: "og:description", content: "" },
    { property: "og:type", content: "Website" },
    { property: "og:url", content: `https://olympicfurniture.co.id${route.fullPath}` },
    { property: "og:image", content: "https://asset.olympicfurniture.co.id/BRAND/OLYMPIC/ASSET/og-furniture.png" },
    { name: "twitter:creator", content: "@OlympicFurnitur" },
    { name: "twitter:title", content: "Kol | Olympic Furniture" },
    { name: "twitter:description", content: "" },
    { name: "twitter:site", content: "@OlympicFurnitur" },
    { name: "twitter:image", content: "https://asset.olympicfurniture.co.id/BRAND/OLYMPIC/ASSET/og-furniture.png" },
  ],
  htmlAttrs: { lang: "id" },
  link: [{ rel: "canonical", href: `https://olympicfurniture.co.id${route.fullPath}` }],
});
</script>
