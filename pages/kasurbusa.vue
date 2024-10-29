<template>
  <div class="relative">
    <Swiper :modules="[SwiperEffectFade, SwiperAutoplay]" :effect="'fade'" :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true">
      <SwiperSlide>
        <div class="flex flex-col-reverse lg:flex-row justify-between pb-6 lg:pb-0 bg-[#29398D] bg-blue-dot bg-[length:10px_10px]">
          <div class="relative w-full h-80 md:h-96 lg:h-auto">
            <div class="absolute top-[5%] md:top-[12%] xl:top-[20%] right-1/2 translate-x-1/2 p-4 xl:p-6">
              <div class="p-4 bg-white rounded-full">
                <NuxtImg src="https://asset.olympicfurniture.co.id/IMAGES/LOGO/olympic-foam-r.webp" class="w-20 xl:w-28" />
              </div>
              <div class="-z-10 absolute inset-0 w-36 xl:w-48 h-36 xl:h-48 bg-gradient-to-r from-seaSerpent to-transparent rounded-full animate-spin-slow" />
            </div>
            <div class="flex flex-col items-center justify-center gap-1 w-full h-full translate-y-1/4">
              <p class="text-seaSerpent text-lg xl:text-xl text-center font-extrabold">Nikmati tidur pulas dengan</p>
              <NuxtImg src="https://asset.olympicfurniture.co.id/BRAND/MICROSITE/OLYMPIC/IMAGES/kasurnyaparajuara.webp" class="w-44 xl:w-56" />
            </div>
          </div>
          <NuxtImg src="https://asset.olympicfurniture.co.id/BANNER/olympic-foam-home.webp" class="lg:w-[65%] 2xl:min-w-[60%] h-auto" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="flex flex-col-reverse lg:flex-row justify-between pb-6 lg:pb-0 bg-[#29398D] bg-blue-dot bg-[length:10px_10px]">
          <div class="relative w-full h-80 md:h-96 lg:h-auto">
            <div class="absolute top-[5%] md:top-[12%] xl:top-[20%] right-1/2 translate-x-1/2 p-4 xl:p-6">
              <div class="p-4 bg-white rounded-full">
                <NuxtImg src="https://asset.olympicfurniture.co.id/IMAGES/LOGO/olympic-foam-r.webp" class="w-20 xl:w-28" />
              </div>
              <div class="-z-10 absolute inset-0 w-36 xl:w-48 h-36 xl:h-48 bg-gradient-to-r from-seaSerpent to-transparent rounded-full animate-spin-slow" />
            </div>
            <div class="flex flex-col items-center justify-center gap-1 w-full h-full translate-y-1/4">
              <p class="max-w-[90%] 2xl:max-w-2xl text-white text-lg xl:text-xl text-center text-balance font-semibold"><span class="font-extrabold">Dengan teknologi terbaru dari Jerman,</span> Kami menciptakan kasur busa yang beragam tingkat kenyamanannya dan berkualitas tinggi untuk tidur Anda dan Keluarga.</p>
            </div>
          </div>
          <NuxtImg src="https://asset.olympicfurniture.co.id/BANNER/olympic-sb-home2.webp" class="lg:w-[65%] 2xl:min-w-[60%] h-auto" />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="z-10 absolute left-28 bottom-0 w-2 xl:w-4 h-10 xl:h-16 bg-red-500 rounded-full translate-y-1/2 anim-x" />
  </div>

  <div class="overflow-hidden flex flex-col lg:flex-row">
    <video width="100%" autoplay muted loop class="lg:w-[60%]">
      <source src="https://asset.olympicfurniture.co.id/BRAND/MICROSITE/OLYMPIC/VIDEOS/mattress-in-the-box.webm" type="video/webm">
    </video>
    <div class="overflow-hidden lg:overflow-visible relative flex flex-col justify-center lg:justify-between items-center lg:items-start gap-1 lg:w-[40%] h-56 lg:h-auto p-4 md:p-10 xl:p-16 2xl:p-20 bg-slateGray">
      <div class="absolute -right-1/3 -bottom-1/3 w-72 xl:w-96 h-72 xl:h-96 bg-purpleNavy rounded-full anim-float" />
      <div class="absolute top-1/4 right-1/4 text-orangeYellow text-5xl xl:text-7xl font-extrabold rotate-45 anim-float">+</div>
      <div class="absolute left-0 bottom-1/4 w-20 xl:w-32 h-8 xl:h-12 border-[6px] border-red-500 rounded-full -translate-x-1/2 anim-y" />
      <p class="z-10 text-white text-2xl xl:text-4xl font-extrabold">COOL GEL TECHNOLOGY</p>
      <p class="z-10 text-white xl:text-lg text-center lg:text-start">Tidak perlu merasa gerah lagi, kini Anda bisa menikmati sensasi dingin menyejukkan saat tertidur di kasur busa kami. Selamat tidur nyenyak dan mimpi indah!</p>
    </div>
  </div>

  <div class="relative">
    <div class="z-10 absolute bottom-1/2 left-[5%] w-28 h-28 bg-orangeYellow rounded-full anim-float translate-y-1/2" />
    <div class="overflow-clip relative flex flex-col justify-center items-center gap-8 pt-12 pb-28 xl:pb-32 bg-[#29398D] bg-blue-dot bg-[length:10px_10px]">
      <div class="absolute bottom-[10%] right-[5%] flex flex-col gap-1 anim-x">
        <div class="flex gap-1">
          <span class="w-1 h-1 bg-[#BBB] rounded-full" />
          <span class="w-1 h-1 bg-[#BBB] rounded-full" />
          <span class="w-1 h-1 bg-[#BBB] rounded-full" />
          <span class="w-1 h-1 bg-[#BBB] rounded-full" />
        </div>
        <div class="flex gap-1">
          <span class="w-1 h-1 bg-[#BBB] rounded-full" />
          <span class="w-1 h-1 bg-[#BBB] rounded-full" />
          <span class="w-1 h-1 bg-[#BBB] rounded-full" />
          <span class="w-1 h-1 bg-[#BBB] rounded-full" />
        </div>
      </div>
      <p class="z-20 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-extrabold">REKOMENDASI KASUR BUSA</p>
      <div class="z-20 flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
        <NuxtImg src="https://asset.olympicfurniture.co.id/BANNER/OLYMPIC/kasurbusa-series-1.webp" class="md:h-48 lg:h-36 xl:h-48 3xl:h-64 rounded shadow-lg" />
        <NuxtImg src="https://asset.olympicfurniture.co.id/BANNER/OLYMPIC/kasurbusa-series-2.webp" class="md:h-48 lg:h-36 xl:h-48 3xl:h-64 rounded shadow-lg" />
      </div>
    </div>
    <div class="relative w-full h-80 md:h-72 lg:h-80 3xl:h-96 bg-azureishWhite">
      <MicrositeProductCarousel
        :class-name="'z-20 absolute bottom-0 w-full'"
        :api="'/brands/product'"
        :main-image="true"
        :query="{
          category: 'kasur-busa',
          application: 2,
          per_page: 10
        }"
      />
    </div>
  </div>

  <div>
    <MicrositeNewestArticle />
  </div>

  <div class="layout flex flex-col lg:flex-row lg:justify-between gap-2 pb-10">
    <div class="lg:w-[30%]">
      <p class="pt-5 text-xl lg:text-2xl font-extrabold">Frequently Asked Questions</p>
    </div>
    <div class="lg:w-[60%]">
      <MicrositeFaq />
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";

let ctx;
let ctxX;
let ctxY;

onMounted(() => {
  ctx = gsap.utils.toArray(".anim-float").forEach(tween => {
    tweenProperty(tween, "scale", 0.5, 2);
    tweenProperty(tween, "x", -200, 200);
    tweenProperty(tween, "y", -30, 30);
  });

  function tweenProperty(target, prop, min, max) {
    const randomDur = gsap.utils.random(5, 6, 0.2, true);
    const randomDelay = gsap.utils.random(0.6, 2, 0.2, true);
    gsap.to(target, {
      [prop]: gsap.utils.random(min, max),
      duration: randomDur(),
      delay: randomDelay(),
      ease: "none",
      onComplete: tweenProperty,
      onCompleteParams: [target, prop, min, max],
    });
  };

  ctxX = gsap.utils.toArray(".anim-x").forEach(tween => {
    tweenPropertyX(tween, "scale", 0.5, -1);
    tweenPropertyX(tween, "x", -100, 100);
  });

  function tweenPropertyX(target, prop, min, max) {
    const randomDur = gsap.utils.random(5, 6, 0.2, true);
    const randomDelay = gsap.utils.random(0.6, 2, 0.2, true);
    gsap.to(target, {
      [prop]: gsap.utils.random(min, max),
      duration: randomDur(),
      delay: randomDelay(),
      ease: "none",
      onComplete: tweenPropertyX,
      onCompleteParams: [target, prop, min, max],
    });
  };

  ctxY = gsap.utils.toArray(".anim-y").forEach(tween => {
    tweenPropertyY(tween, "scale", 0.5, -1);
    tweenPropertyY(tween, "y", -100, 100);
  });

  function tweenPropertyY(target, prop, min, max) {
    const randomDur = gsap.utils.random(5, 6, 0.2, true);
    const randomDelay = gsap.utils.random(0.6, 2, 0.2, true);
    gsap.to(target, {
      [prop]: gsap.utils.random(min, max),
      duration: randomDur(),
      delay: randomDelay(),
      ease: "none",
      onComplete: tweenPropertyY,
      onCompleteParams: [target, prop, min, max],
    });
  };
});

onUnmounted(() => {
  ctx.revert();
  ctxX.revert();
  ctxY.revert();
});
</script>