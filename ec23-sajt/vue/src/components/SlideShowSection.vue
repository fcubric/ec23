<template>
    <div class="flex flex-col md:flex-row mt-10 mb-10 max-w-7xl mx-auto">
      <div class="md:w-1/2 px-6">
        <h2 class="text-2xl font-bold mb-6 text-navy">Ovde smislite neki zanimljivi naslov</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan sollicitudin felis. Donec ut elementum odio. Morbi semper bibendum diam, ac placerat nulla ultricies eget. Duis malesuada commodo eros eu tincidunt. Sed sit amet ipsum id nibh congue molestie. Proin maximus, enim eu auctor tincidunt, sapien augue placerat arcu, sed commodo leo risus ut mauris.
        </p>
        <router-link to="/prijava" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Prijavi se
        </router-link>
      </div>
      <div class="md:w-1/2 px-6">
        <div class="relative h-64">
          <div
            v-for="(image, index) in images"
            :key="index"
            :class="[
              'absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000',
              index === currentImage ? 'opacity-100' : 'opacity-0'
            ]"
            :style="{ backgroundImage: `url(${image.url})` }"
          ></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProjectIntroduction",
    data() {
      return {
        images: [
          {
            url: "https://picsum.photos/200/300",
          },
          {
            url: "https://picsum.photos/200/300",
          },
          {
            url: "https://picsum.photos/200/300",
          },
        ],
        currentImage: 0,
        timer: null,
      };
    },
    mounted() {
      this.startTimer();
    },
    methods: {
      startTimer() {
        this.timer = setInterval(() => {
          this.currentImage = (this.currentImage + 1) % this.images.length;
        }, 5000);
      },
    },
  };
  </script>
  
  <style scoped>
  .text-navy {
    color: #001f3f;
  }
  </style>
  