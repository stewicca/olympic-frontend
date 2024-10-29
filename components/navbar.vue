<template>
  <div class="z-50 fixed top-0 w-full">
    <div v-if="!scrolling" class="overflow-hidden w-full h-8 md:h-12 max-w-[1920px] mx-auto" />

    <!-- Desktop -->
    <div :class="scrolling ? 'overflow-hidden w-full max-w-[1920px] mx-auto bg-imperialBlue transition-all duration-500' : 'overflow-hidden -translate-y-1/2 w-full max-w-[1920px] mx-auto md:bg-gradient-to-b from-imperialBlue/50 to-transparent'">
      <div class="layout flex items-center justify-between h-16 md:h-24">
        <nav class="flex items-center gap-12">

          <!-- Logo -->
          <div class="flex flex-col items-center justify-center transition-all duration-500">
            <NuxtLink to="/">
              <NuxtImg loading="lazy" src="logo.png" alt="Olympic" class="w-20 lg:w-28 h-auto transition-all duration-500" :class="{ 'scale-90 brightness-0 invert filter': scrolling }" />
            </NuxtLink>
          </div>

          <!-- Navigation -->
          <ul class="hidden lg:flex gap-8">
            <li v-for="(data, index) in navbarData" :key="index">

              <!-- Link if product -->
              <NuxtLink v-if="data.to === '/product'" :to="data.to" class="group text-white font-extrabold transition-all duration-500" :class="{ 'underline-active': isProduct }">
                {{ data.content }}
                <div class="w-0 group-hover:w-full group-[.underline-active]:w-full h-[1px] mx-auto bg-white transition-all duration-500" />
              </NuxtLink>

              <!-- Link except product -->
              <NuxtLink v-else :to="data.to" class="group text-white font-extrabold transition-all duration-500" active-class="underline-active">
                {{ data.content }}
                <div class="w-0 group-hover:w-full group-[.underline-active]:w-full h-[1px] mx-auto bg-white transition-all duration-500" />
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Hamburger -->
        <div class="grid lg:hidden place-content-center" :class="{ 'hamburger-toggle': isHamburgerOpen }" @click="toggleHamburger">
          <div
            class="before:-translate-y-2 after:translate-y-2 before:absolute after:absolute h-[0.15rem] before:h-[0.15rem] after:h-[0.15rem] w-7 before:w-7 after:w-7 rounded-full before:rounded-full after:rounded-full transition-all before:transition-all after:transition-all duration-500 before:duration-500 after:duration-500 before:content-[''] after:content-['']"
            :class="scrolling ? 'bg-white before:bg-white after:bg-white' : 'bg-imperialBlue before:bg-imperialBlue after:bg-imperialBlue'"
          />
        </div>

        <!-- Search -->
        <form class="relative hidden lg:block" @submit.prevent="$router.push(`/search?produk=${product}`)">
          <div class="pointer-events-none absolute flex inset-y-0 start-0 items-center ps-3">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="h-4 w-4">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input v-model="product" type="search" class="block w-full text-sm p-2 ps-10 text-gray-900 bg-white border border-imperialBlue rounded-full" placeholder="Masukkan pencarian..." />
        </form>
      </div>
    </div>

    <!-- Mobile -->
    <div class="z-50 absolute lg:hidden flex top-0 flex-col items-center gap-6 w-2/3 md:w-2/5 min-h-screen py-8 bg-white transition-all duration-500 ease-linear" :class="isHamburgerOpen ? 'left-0 opacity-100': '-left-96 opacity-0'">

      <!-- Logo -->
      <NuxtLink to="/">
        <NuxtImg loading="lazy" src="logo.png" alt="Olympic" class="w-auto h-24 transition-all duration-500" :class="isHamburgerOpen ? 'opacity-100' : '-z-50 opacity-0'" />
      </NuxtLink>

      <!-- Navigation -->
      <ul class="flex flex-col items-center justify-center gap-4">
        <li v-for="(data, index) in navbarData" :key="index">

          <!-- Link if product -->
          <NuxtLink v-if="data.to === '/product'" :to="data.to" class="text-imperialBlue text-xl uppercase transition-all duration-500" :class="isHamburgerOpen ? 'text-opacity-100' : '-z-50 text-opacity-0', { 'font-extrabold': isProduct }" @click="toggleHamburger">
            {{ data.content }}
          </NuxtLink>

          <!-- Link except product -->
          <NuxtLink v-else :to="data.to" class="text-imperialBlue text-xl uppercase transition-all duration-500" :class="isHamburgerOpen ? 'text-opacity-100' : '-z-50 text-opacity-0'" active-class="font-extrabold" @click="toggleHamburger">
            {{ data.content }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Contact -->
      <NuxtLink to="mailto:contact@olympicfurniture.co.id" class="text-imperialBlue hover:text-mustardBrown transition-all duration-500" :class="isHamburgerOpen ? 'text-opacity-100' : '-z-50 text-opacity-0'">
        contact@olympicfurniture.co.id
      </NuxtLink>
    </div>

    <!-- Blur -->
    <div class="bottom-0 left-0 right-0 top-0 z-40 min-h-screen w-full bg-black bg-opacity-40 bg-blend-multiply" :class="isHamburgerOpen ? 'absolute' : 'hidden'" @click="toggleHamburger" />
  </div>
</template>

<script lang="js" setup>
// Initialization
const product = ref("");
const route = useRoute();
const scrolling = ref(false);
const isHamburgerOpen = ref(false);

const handleScroll = () => {
  scrolling.value = window.scrollY > 50;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const toggleHamburger = () => {
  isHamburgerOpen.value = !isHamburgerOpen.value;
};

// Configuration product link active
const isProduct = computed(() => {
  const currentRoute = route.path;
  return (
    currentRoute.startsWith("/product") ||
    currentRoute.startsWith("/category") ||
    currentRoute.startsWith("/search")
  );
});

// Navbar data
const navbarData = [
  { to: "/", content: "Home" },
  { to: "/about", content: "Tentang" },
  { to: "/product", content: "Produk" },
  { to: "/blog", content: "Berita" },
  { to: "/contact", content: "Kontak" },
];
</script>
