<template>
  <div class="lg:grid lg:grid-cols-3 max-w-[90%] xl:max-w-[80%] mx-auto mt-6 md:mt-24 lg:mt-28">

    <!-- Contact detail -->
    <div class="space-y-10 lg:space-y-20 px-6 py-10 bg-paleLavender">
      <div class="space-y-2 text-center">
        <h2 class="text-3xl xl:text-4xl font-semibold">Kontak Kami</h2>
        <p class="font-semibold">Kirim pertanyaan anda ke Contact Center kami</p>
      </div>
      <div class="flex flex-col gap-6">
        <NuxtLink v-for="(data, index) in contact" :to="data.url" :key="index" class="flex hover:text-mustardBrown xl:text-lg font-bold transition-all duration-500">
          <span v-html="data.icon" class="mr-4" />
          {{ data.linkTitle }}
        </NuxtLink>
      </div>
    </div>

    <!-- Contact form -->
    <div class="lg:col-span-2 space-y-4 py-8 md:p-8">
      <ContactFeedback :form-feedback="formFeedback" />
      <form class="flex flex-col md:grid md:grid-cols-2 gap-6" @submit.prevent="submitForm">
        <input v-model="data.name" type="text" placeholder="Name*" class="h-14 px-4 text-sm md:text-base font-bold border-2" />
        <input v-model="data.email" type="email" placeholder="Email*" class="h-14 px-4 text-sm md:text-base font-bold border-2" />
        <input v-model="data.subject" type="text" placeholder="Subject" class="h-14 px-4 text-sm md:text-base font-bold border-2" />
        <input v-model="data.phone" type="text" placeholder="Phone No" class="h-14 px-4 text-sm md:text-base font-bold border-2" />
        <textarea v-model="data.message" placeholder="Write your comments here" class="md:col-span-2 h-36 p-4 text-sm md:text-base font-bold border-2" />
        <button type="submit" class="col-span-2 w-52 mx-auto py-4 text-white text-sm md:text-base text-center font-bold bg-cetaecanBlue/50 hover:bg-imperialBlue rounded transition-all duration-500">{{ isLoading ? "LOADING..." : "KIRIM PESAN" }}</button>
      </form>
    </div>
  </div>

  <div class="h-96 xl:h-[500px] mt-12 lg:mt-16">
    <iframe class="h-full w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3959.058605911803!2d112.4623557!3d-7.1192072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77fa27c9dc5e41%3A0x3f07169f7937eed1!2sPT.%20Cahaya%20Bintang%20Olympic!5e0!3m2!1sid!2sid!4v1610097432911!5m2!1sid!2sid" frameborder="0" />
  </div>
</template>

<script lang="js" setup>
// Initialization
const data = ref({ name: "", email: "", subject: "", phone: "", message: "" });
const config = useRuntimeConfig();
const formFeedback = ref(null);
const isLoading = ref(false);
const success = ref(true);

// Handle submiting form
async function submitForm() {
  isLoading.value = true;
  formFeedback.value = null;

  if (
    !data.value.email.trim() ||
    !data.value.message.trim() ||
    !data.value.name.trim() ||
    !data.value.phone.trim() ||
    !data.value.subject.trim()
  ) {
    formFeedback.value = "incomplete";
    isLoading.value = false;
    return;
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(data.value.email.trim())) {
    formFeedback.value = "email";
    success.value = false;
    isLoading.value = false;
    return;
  }

  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(data.value.phone.trim())) {
    formFeedback.value = "phone";
    success.value = false;
    isLoading.value = false;
    return;
  }

  try {
    await $fetch("/brands/contact", {
      baseURL: config.public.api,
      method: "POST",
      body: JSON.stringify(data.value),
      query: {
        application: 2,
      },
    });

    success.value = true;
    formFeedback.value = "success";
    isLoading.value = false;
  } catch (error) {
    console.error(error);
    success.value = false;
    formFeedback.value = "error";
    isLoading.value = false;
  }
}

// Contact data
const contact = [
  {
    icon: "<svg height='200px' width='200px' version='1.1' id='_x32_' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve' fill='currentColor' class='w-4 h-auto inline'><path class='st0' d='M94.811,21.696c-35.18,22.816-42.091,94.135-28.809,152.262c10.344,45.266,32.336,105.987,69.42,163.165 c34.886,53.79,83.557,102.022,120.669,129.928c47.657,35.832,115.594,58.608,150.774,35.792 c17.789-11.537,44.218-43.058,45.424-48.714c0,0-15.498-23.896-18.899-29.14l-51.972-80.135 c-3.862-5.955-28.082-0.512-40.386,6.457c-16.597,9.404-31.882,34.636-31.882,34.636c-11.38,6.575-20.912,0.024-40.828-9.142 c-24.477-11.262-51.997-46.254-73.9-77.947c-20.005-32.923-40.732-72.322-41.032-99.264c-0.247-21.922-2.341-33.296,8.304-41.006 c0,0,29.272-3.666,44.627-14.984c11.381-8.392,26.228-28.286,22.366-34.242l-51.972-80.134c-3.401-5.244-18.899-29.14-18.899-29.14 C152.159-1.117,112.6,10.159,94.811,21.696z'></path></svg>",
    linkTitle: "+62 813-1511-5111",
    url: "https://wa.me/6281315115111",
  },
  {
    icon: "<svg version='1.0' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64' enable-background='new 0 0 64 64' xml:space='preserve' fill='#000000' class='w-4 h-auto inline'><path fill='currentColor' d='M32,34.934L63.617,10.34C62.984,8.965,61.613,8,60,8H4c-1.613,0-2.984,0.965-3.617,2.34L32,34.934z'></path><path fill='currentColor' d='M34.457,43.156C33.734,43.719,32.867,44,32,44s-1.734-0.281-2.457-0.844L0,20.18V52c0,2.211,1.789,4,4,4h56 c2.211,0,4-1.789,4-4V20.18L34.457,43.156z'></path></svg>",
    linkTitle: "contact@olympicfurniture.co.id",
    url: "mailto:contact@olympicfurniture.co.id",
  },
  {
    icon: "<svg version='1.1' id='_x32_' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve' fill='currentColor' class='w-4 h-auto inline'><path d='M256,0C159.969,0,82.109,77.859,82.109,173.906c0,100.719,80.016,163.688,123.297,238.719 C246.813,484.406,246.781,512,256,512s9.188-27.594,50.594-99.375c43.297-75.031,123.297-138,123.297-238.719 C429.891,77.859,352.031,0,256,0z M256,240.406c-36.734,0-66.516-29.781-66.516-66.5c0-36.75,29.781-66.531,66.516-66.531 s66.516,29.781,66.516,66.531C322.516,210.625,292.734,240.406,256,240.406z'></path></svg>",
    linkTitle: "Tambak Langon Indah No. 2 Surabaya",
    url: "https://maps.app.goo.gl/Mvy6nU5HBwrEvAJp9",
  },
];
</script>
