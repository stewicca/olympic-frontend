<template>
  <footer class="w-full max-w-[1920px] mx-auto bg-gray-100 border-t-4 border-imperialBlue">
    <div class="layout flex flex-wrap justify-between gap-6 w-full py-8">
      <div v-for="(data, index) in footerData" :key="index" class="space-y-3">

        <!-- Title -->
        <span class="text-lg lg:text-xl font-bold">{{ data.title }}</span>
        <ul class="flex flex-col gap-1 max-w-96 text-sm lg:text-base">

          <!-- Footer except instagram -->
          <li v-if="data.title != 'Instagram OlympicFurniture'" v-for="(link, index) in data.links" :key="index">

            <!-- Link if have title -->
            <NuxtLink v-if="link.title" :to="link.url" class="text-gray-500 hover:text-imperialBlue">

              <!-- Icon (must svg element) -->
              <span v-if="link.icon" v-html="link.icon" class="mr-1" />
              {{ link.title }}
            </NuxtLink>

            <!-- Link if image -->
            <NuxtLink v-else :to="link.url">
              <NuxtImg loading="lazy" :src="link.image" :alt="link.alt" class="w-28 h-auto" />
            </NuxtLink>
          </li>

          <!-- Instagram -->
          <li v-else>
            <Swiper :slides-per-view="3" :loop="true" class="w-72 md:w-auto">
              <SwiperSlide v-for="(link, index) in data.links" :key="index">
                <NuxtImg loading="lazy" :src="link.image" :alt="link.alt" class="w-20 md:w-28 h-28 md:h-36" />
              </SwiperSlide>
            </Swiper>
          </li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="layout flex flex-col items-center justify-center w-full h-20 border-t-2">
      <p class="text-gray-400 font-semibold">
        © <NuxtLink to="/">OLYMPIC FURNITURE</NuxtLink>. All Right Reserved
      </p>
    </div>
  </footer>
</template>

<script lang="js" setup>
// Initialization
const config = useRuntimeConfig();

// Fetching instagram images
const { data: ig } = await useFetch("/brands/imagesig", {
  baseURL: config.public.api,
  query: {
    application: 2,
  },
});

// Footer data
const footerData = [
  {
    title: "Informasi",
    links: [
      { title: "Tentang", url: "/about" },
      { title: "Produk", url: "/product" },
      { title: "Springbed", url: "/" },
      { title: "Kasur Busa", url: "/" },
      { title: "Berita", url: "/blog" },
      { title: "Kontak", url: "/contact" },
    ],
  },
  {
    title: "Layanan Kami",
    links: [
      { title: "Menjadi Mitra", url: "https://mitraolympic.co.id/" },
      {
        image: "https://asset.olympicfurniture.co.id/IMAGES/BUTTON/button-katalog-merah.webp",
        alt: "Download Product Catalog",
        url: "https://page.olympicfurniture.co.id/katalog/",
      },
    ],
  },
  {
    title: "Lokasi Kami",
    links: [
      {
        icon: "<svg height='200px' width='200px' version='1.1' id='_x32_' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve' fill='currentColor' class='w-4 h-auto inline'><path class='st0' d='M94.811,21.696c-35.18,22.816-42.091,94.135-28.809,152.262c10.344,45.266,32.336,105.987,69.42,163.165 c34.886,53.79,83.557,102.022,120.669,129.928c47.657,35.832,115.594,58.608,150.774,35.792 c17.789-11.537,44.218-43.058,45.424-48.714c0,0-15.498-23.896-18.899-29.14l-51.972-80.135 c-3.862-5.955-28.082-0.512-40.386,6.457c-16.597,9.404-31.882,34.636-31.882,34.636c-11.38,6.575-20.912,0.024-40.828-9.142 c-24.477-11.262-51.997-46.254-73.9-77.947c-20.005-32.923-40.732-72.322-41.032-99.264c-0.247-21.922-2.341-33.296,8.304-41.006 c0,0,29.272-3.666,44.627-14.984c11.381-8.392,26.228-28.286,22.366-34.242l-51.972-80.134c-3.401-5.244-18.899-29.14-18.899-29.14 C152.159-1.117,112.6,10.159,94.811,21.696z'></path></svg>",
        title: "+62 813-1511-5111",
        url: "https://wa.me/6281315115111",
      },
      {
        icon: "<svg version='1.0' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64' enable-background='new 0 0 64 64' xml:space='preserve' fill='#000000' class='w-4 h-auto inline'><path fill='currentColor' d='M32,34.934L63.617,10.34C62.984,8.965,61.613,8,60,8H4c-1.613,0-2.984,0.965-3.617,2.34L32,34.934z'></path><path fill='currentColor' d='M34.457,43.156C33.734,43.719,32.867,44,32,44s-1.734-0.281-2.457-0.844L0,20.18V52c0,2.211,1.789,4,4,4h56 c2.211,0,4-1.789,4-4V20.18L34.457,43.156z'></path></svg>",
        title: "contact@olympicfurniture.co.id",
        url: "mailto:contact@olympicfurniture.co.id",
      },
      {
        icon: "<svg version='1.1' id='_x32_' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve' fill='currentColor' class='w-4 h-auto inline'><path d='M256,0C159.969,0,82.109,77.859,82.109,173.906c0,100.719,80.016,163.688,123.297,238.719 C246.813,484.406,246.781,512,256,512s9.188-27.594,50.594-99.375c43.297-75.031,123.297-138,123.297-238.719 C429.891,77.859,352.031,0,256,0z M256,240.406c-36.734,0-66.516-29.781-66.516-66.5c0-36.75,29.781-66.531,66.516-66.531 s66.516,29.781,66.516,66.531C322.516,210.625,292.734,240.406,256,240.406z'></path></svg>",
        title: "Tambak Langon Indah No. 2 Surabaya",
        url: "https://maps.app.goo.gl/Mvy6nU5HBwrEvAJp9",
      },
    ],
  },
  {
    title: "Instagram OlympicFurniture",
    links: ig.value.data.results,
  },
];
</script>
