<template>
  <div class="bg-ghostWhite2">
    <div class="layout w-full py-12 lg:py-16">

      <!-- Title -->
      <h2 class="max-w-lg lg:max-w-2xl mx-auto mb-6 lg:mb-8 text-imperialBlue text-2xl lg:text-3xl text-center font-extrabold">Temukan Springbed dan Busa Terbaik untuk kenyamanan tidur</h2>
      <div class="grid lg:grid-cols-2 gap-8">

        <!-- Kasur busa -->
        <NuxtLink to="/kasurbusa" class="group overflow-hidden relative flex items-center h-32 md:h-48 lg:h-44 xl:h-60 pl-6 md:pl-10 lg:pl-6 xl:pl-12 bg-eggShell rounded-lg" data-aos="zoom-in-right">
          <div class="absolute top-0 right-0 bottom-0 w-full group-hover:w-0 h-full bg-aliceBlue transition-all duration-500" />

          <!-- Image -->
          <NuxtImg loading="lazy" src="https://asset.olympicfurniture.co.id/BANNER/olympic-banner-home-foam.webp" alt="" class="absolute right-0 w-auto h-full transition-all duration-500" />

          <!-- Title -->
          <h4 class="z-10 text-imperialBlue group-hover:text-mustardBrown text-xl md:text-3xl lg:text-2xl xl:text-4xl font-extrabold transition-all duration-500">KASUR BUSA</h4>
        </NuxtLink>

        <!-- Springbed -->
        <NuxtLink to="/springbed" class="group overflow-hidden relative flex items-center h-32 md:h-48 lg:h-44 xl:h-60 pl-10 lg:pl-6 xl:pl-12 bg-eggShell rounded-lg" data-aos="zoom-in-left">
          <div class="absolute bottom-0 right-0 top-0 h-full w-full bg-aliceBlue transition-all duration-500 group-hover:w-0" />

          <!-- Image -->
          <NuxtImg loading="lazy" src="https://asset.olympicfurniture.co.id/BANNER/olympic-banner-home-springbed.webp" alt="" class="absolute right-0 w-auto h-full transition-all duration-500" />

          <!-- Title -->
          <h4 class="z-10 text-imperialBlue group-hover:text-mustardBrown text-xl md:text-3xl lg:text-2xl xl:text-4xl font-extrabold transition-all duration-500">SPRINGBED</h4>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
