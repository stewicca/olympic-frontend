<template>
  <div class="w-full max-w-[90%] md:max-w-[80%] mx-auto py-12 lg:py-16">

    <!-- Title -->
    <h2 class="max-w-lg text-imperialBlue text-2xl lg:max-w-2xl lg:text-3xl font-extrabold">Our History</h2>

    <!-- Subtitle -->
    <h3 class="max-w-lg lg:max-w-2xl text-xl font-semibold mb-6 lg:mb-8">Furniturenya Keluarga Indonesia</h3>

    <div class="flex flex-col xl:flex-row gap-6">

      <!-- About -->
      <div class="flex flex-col text-justify gap-6 xl:w-3/5 md:text-lg lg:text-xl">
        <p v-for="(data, index) in aboutData" :key="index">{{ data }}</p>
      </div>

      <!-- Portfolio -->
      <div class="grid grid-cols-2 xl:grid-cols-2 xl:grid-rows-4 lg:grid-cols-4 gap-4 lg:gap-6 xl:w-2/5">
        <div v-for="(data, index) in portfolio" :key="index" class="lg:row-span-2 flex flex-col items-center justify-center gap-4 h-36 xl:h-48 border-2 border-imperialBlue rounded-md">
          <p v-html="data.content" class="text-imperialBlue text-2xl md:text-4xl xl:text-6xl font-bold" />
          <p class="text-sm md:text-base xl:text-lg text-center font-semibold">{{ data.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
const aboutData = [
  "OLYMPIC adalah brand furniture knockdown rumah tangga berskala nasional yang menjadi pilihan “Furniture Keluarga Indonesia”. Olympic memberikan solusi inspirasi rumah idaman mulai dari ruang tamu, ruang keluarga, kamar tidur, dan dapur.",
  "Perabot rumah tangga dengan bahan baku Engineered Wood seperti Particle Board, MDF, dan Plywood yang diproduksi oleh PT. Cahaya Bintang Olympic.",
  "Perusahaan ini didirikan pada tahun 1983 di kota Bogor dan melakukan ekspansi pada tahun 2018 ke kabupaten Lamongan dengan jumlah karyawan saat ini mencapai lebih dari 1.000 orang.",
  "PT. Cahaya Bintang Olympic, merupakan anak perusahaan dari PT. Graha Multi Bintang sebagai holding company yang memegang merek-merek furniture ternama Nasional, sebagai bagian dari Olympic Furniture Group.",
  "Bagi Olympic, rumah merupakan tempat ternyaman bagi setiap anggota keluarga dalam menghabiskan sebagian besar waktu nya. Tempat berbagi cinta, tempat melepaskan lelah, dan tempat yang selalu dirindukan sehingga faktor-faktor tersebut menjadi perhatian dan prioritas kami.",
  "Kami pun berkomitmen dan memiliki visi yaitu untuk selalu menyediakan produk terbaik dengan desain minimalis dan modern dengan beragam corak, sehingga dapat menemani dan menghangatkan rumah keluarga Indonesia dengan sentuhan perabotan yang memukau dan harga terjangkau.",
];

const portfolio = [
  { content: "40<sub>+</sub>", desc: "Tahun Pengalaman" },
  { content: "30<sub>K</sub>", desc: "Happy Customers" },
  { content: "15<sub>+</sub>", desc: "Award Winner" },
  { content: "100<sub>%</sub>", desc: "Products Guaranteed" },
];
</script>
