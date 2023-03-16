<template>
  <div class="container mx-auto my-8">
    <h2 class="text-lg sm:text-2xl font-bold mb-4 text-center hardcode font-condensed">Novosti</h2>
    <div class="flex justify-between items-center mb-4 sm:w-30">
      <button class="font-condensed-dugme text-white text-sm sm:text-base font-bold py-2 px-4 rounded-full mx-5" @click="prevNotification" :disabled="currentIndex === 0">&lt;</button>
      <div class="swiper-container ">
        <div class="swiper-wrapper">
          <div class="swiper-slide    md:w-1/2 lg:w-1/3 mr-4" v-for="(notification, index) in visibleNotifications" :key="index">
            <div class="border-blue-500 max-h-64 omotac border-2 rounded-lg p-4 h-full flex flex-col justify-between">
              <div>
                <h3 class="text-lg font-bold mb-2 opacity-100 font-condensed velicinaNaslova">{{ notification.title }}</h3>
                <p class="text-gray-700 mb-4 font-condensed hidden lg:block">{{ notification.explanation }}</p>
              </div>
              <div class="flex justify-between items-center">
                <router-link :to="endpointUrls[notification.endpoint].name" class="read-more-button">
                  <button class="font-condensed-dugme text-white text-sm sm:text-base font-bold py-2 px-4 rounded dugmePomeri">{{ buttonText }}</button>
                </router-link>
                <span class="font-condensed text-sm hidden sm:block">{{ notification.lecturer }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="swiper-button-next font-condensed-dugme text-white text-sm sm:text-base font-bold py-2 px-4 rounded-full mx-10" @click="nextNotification" :disabled="currentIndex === notifications.length - 1 || (currentIndex + 2) >= notifications.length">&gt;</button>
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
        buttonText: 'Pročitaj više',
        endpointUrls: this.endpointUrls,
      };
    },
    mounted() {
      this.updateVisibleNotifications();
    },
    methods: {
        updateVisibleNotifications() {
    if (this.currentIndex === 0 && (this.notifications.length < 2 || this.notifications.length % 2 !== 0)) {
      this.visibleNotifications = [...this.notifications.slice(0, 2)];
    } else if (this.currentIndex === 0) {
      const start = this.currentIndex;
      const end = start + 2;
      this.visibleNotifications = [...this.notifications.slice(start, end), ...this.notifications.slice(0, start)];
    } else {
      const start = this.currentIndex;
      const end = start + 2;
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
  width: 50%;
  
}

.omotac{
  background-color: rgba(255,255,255,0.5);
}

.font-condensed {
    font-family: "Roboto Condensed", sans-serif;
    color: white;
  }

.font-condensed-dugme{
  background-color: #113B60CC;
  font-family: "Roboto Condensed", sans-serif;
}

.font-condensed-dugme:hover{
  background-color:#3B6B8E;
}

@media(max-width: 640px) {
  .container{
  width:50%;
  margin-right:50%;
}
}
@media screen and (max-width: 640px) {
  .velicinaNaslova{
    font-size: 0.8rem; /* 48px */
    line-height: 1;
  }

  .swiper-slide{
    height:70%;
  }

  .velicinaTeksta{
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
  }
  
  .dugmePomeri{
    margin-left:-10px !important;
  }

  .hardcode{
    margin-left:150px;
  }
}

</style>