<template>
    <div class="container mx-auto my-8">
      <h2 class="text-2xl font-bold mb-4 text-center font-condensed">Novosti</h2>
      <div class="flex justify-between items-center mb-4">
        <button class="swiper-button-prev  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-5" @click="prevNotification" :disabled="currentIndex === 0">&lt;</button>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide w-1/3 mr-4" v-for="(notification, index) in visibleNotifications" :key="index">
              <div class="border-blue-500 border-2 rounded-lg p-4 h-full">
                <h3 class="text-lg font-bold mb-2 font-condensed">{{ notification.title }}</h3>
                <p class="text-gray-700 mb-4 font-condensed">{{ notification.explanation }}</p>
                <router-link :to="endpointUrls[notification.endpoint].name" class="read-more-button">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{{ buttonText }}</button>
            </router-link>
              </div>
            </div>
          </div>
        </div>
        <button class="swiper-button-next bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-10" @click="nextNotification" :disabled="currentIndex === notifications.length - 1 || (currentIndex + 3) >= notifications.length">&gt;</button>
      </div>
    </div>
  </template>
  

  <script>
  import Swiper from 'swiper';
  import 'swiper/css';
  
  export default {
    name: 'NotificationCarousel',
    props: {
      notifications: {
        type: Array,
        required: true,
      },
      endpointUrls: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        currentIndex: 0,
        visibleNotifications: [],
        buttonText: 'Procitaj vise',
        endpointUrls: this.endpointUrls,
      };
    },
    mounted() {
      this.updateVisibleNotifications();
    },
    methods: {
        updateVisibleNotifications() {
    if (this.currentIndex === 0 && (this.notifications.length < 3 || this.notifications.length % 3 !== 0)) {
      this.visibleNotifications = [...this.notifications.slice(0, 3)];
    } else if (this.currentIndex === 0) {
      const start = this.currentIndex;
      const end = start + 3;
      this.visibleNotifications = [...this.notifications.slice(start, end), ...this.notifications.slice(0, start)];
    } else {
      const start = this.currentIndex;
      const end = start + 3;
      this.visibleNotifications = this.notifications.slice(start, end);
    }
  },
  prevNotification() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.notifications.length - 1;
    } else {
      this.currentIndex -= 1;
    }
    this.updateVisibleNotifications();
  },
  nextNotification() {
    if (this.currentIndex === this.notifications.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    this.updateVisibleNotifications();
  },
    },
  };
  </script>
  



<style>
.swiper-container {
  width: 100%;
  height: 300px;
}

.swiper-slide {
  width: 33.33%;
}

.font-condensed {
    font-family: "Roboto Condensed", sans-serif;
  }

</style>