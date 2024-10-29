<template>
  <div class="relative">
    <div class="z-10 absolute bottom-0 flex justify-evenly w-full h-24 bg-darkSienna/50">
      <div class="flex gap-2 items-center">
        <NuxtImg src="https://asset.olympicfurniture.co.id/BRAND/MICROSITE/OLYMPIC/IMAGES/fitur-ispa.webp" class="w-16 h-auto" />
        <span class="text-white">Official Member of ISPA</span>
      </div>
      <div class="flex gap-2 items-center">
        <NuxtImg src="https://asset.olympicfurniture.co.id/BRAND/MICROSITE/OLYMPIC/IMAGES/fitur-prime-knit.webp" class="w-16 h-auto" />
        <span class="text-white">Prime Knit Quality</span>
      </div>
      <div class="flex gap-2 items-center">
        <NuxtImg src="https://asset.olympicfurniture.co.id/BRAND/MICROSITE/OLYMPIC/IMAGES/fitur-encasement.webp" class="w-16 h-auto" />
        <span class="text-white">Reinforced Mattress Encasement</span>
      </div>
    </div>
    <Swiper :modules="[SwiperEffectFade, SwiperAutoplay]" :effect="'fade'" :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true">
      <SwiperSlide>
        <div class="flex flex-col-reverse lg:flex-row justify-between pb-6 lg:pb-0 bg-shadowBlue">
          <div class="relative w-full h-80 md:h-96 lg:h-auto">
            <div class="z-10 absolute right-0 top-0 w-60 xl:w-72 h-60 xl:h-72 border-white/10 border-[50px] rounded-full -translate-y-1/2 anim-float" />
            <div class="z-20 absolute top-[5%] md:top-[12%] xl:top-[20%] right-1/2 translate-x-1/2 p-4 xl:p-6">
              <div class="p-4 bg-white rounded-full">
                <NuxtImg src="https://asset.olympicfurniture.co.id/IMAGES/LOGO/olympic-foam-r.webp" class="w-20 xl:w-28" />
              </div>
              <div class="-z-10 absolute inset-0 w-36 xl:w-48 h-36 xl:h-48 bg-gradient-to-r from-darkSienna to-transparent rounded-full animate-spin-slow" />
            </div>
            <div class="flex flex-col items-center justify-center gap-1 w-full h-full translate-y-1/4">
              <p class="text-white text-lg xl:text-xl text-center font-extrabold">SELAMAT DATANG DI DUNIA</p>
              <NuxtImg src="https://asset.olympicfurniture.co.id/BRAND/MICROSITE/OLYMPIC/IMAGES/bangunpenuhsemangat.webp" class="w-44 xl:w-56" />
            </div>
          </div>
          <NuxtImg src="https://asset.olympicfurniture.co.id/BANNER/olympic-sb-home.webp" class="lg:w-[65%] 2xl:min-w-[60%] h-auto" />
        </div>
      </SwiperSlide>
    </Swiper>
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