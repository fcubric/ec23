<template>
  <div class="flex flex-col items-center container">
    <h2 class="text-3xl font-bold text-center mb-4 text-blue-500 font-condensed">{{ title }}</h2>
    <div class="flex justify-center items-center mb-8">
      <div class="flex flex-col justify-center items-center mr-4">
        <div class="font-bold text-5xl text-blue-500 font-condensed">{{ days }}</div>
        <div class="text-xs text-gray-400 font-condensed">Dana</div>
      </div>
      <div class="flex flex-col justify-center items-center mr-4">
        <div class="font-bold text-5xl text-blue-500 font-condensed">{{ hours }}</div>
        <div class="text-xs text-gray-400 font-condensed">Sati</div>
      </div>
      <div class="flex flex-col justify-center items-center mr-4">
        <div class="font-bold text-5xl text-blue-500 font-condensed">{{ minutes }}</div>
        <div class="text-xs text-gray-400 font-condensed">Minuta</div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="font-bold text-5xl text-blue-500 font-condensed">{{ seconds }}</div>
        <div class="text-xs text-gray-400 font-condensed">Sekundi</div>
      </div>
    </div>
    <button class="  text-white font-bold py-2 px-4 rounded-full font-condensed-dugme" @click="$router.push('/prijava')">Prijavi se</button>
  </div>
</template>


<script>
export default {
  name: "Countdown",
  data() {
    return {
      title: "Do zatvaranja prijava ostalo je još",
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    };
  },
  mounted() {
    this.setCountdown();
    setInterval(() => {
      this.setCountdown();
    }, 1000);
  },
  methods: {
    setCountdown() {
      const endDate = new Date("2023-03-19T00:00:00Z");
      const currentDate = new Date();
      let totalSeconds = (endDate - currentDate) / 1000;

      if (totalSeconds < 0) {
        totalSeconds = 0;
      }

      const days = Math.floor(totalSeconds / 86400);
      totalSeconds %= 86400;

      const hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = Math.floor(totalSeconds % 60);

      this.countdown = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }
  },
  computed: {
    days() {
      return this.countdown.days < 10 ? "0" + this.countdown.days : this.countdown.days;
    },
    hours() {
      return this.countdown.hours < 10 ? "0" + this.countdown.hours : this.countdown.hours;
    },
    minutes() {
      return this.countdown.minutes < 10 ? "0" + this.countdown.minutes : this.countdown.minutes;
    },
    seconds() {
      return this.countdown.seconds < 10 ? "0" + this.countdown.seconds : this.countdown.seconds;
    }
  }
};
</script>

<style scoped>
/* Add styles as desired */
/* Countdown Container */
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Countdown Title */
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
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

/* Countdown Timer */
.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}

.timer__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
}

.timer__value {
  font-size: 48px;
  font-weight: bold;
}

.timer__label {
  font-size: 16px;
  color: #999999;
  text-transform: uppercase;
}

/* Countdown Button */
.button {
  background-color: #0069d9;
  color: #ffffff;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
}

.container:hover {
  transform: scale(1.2);
  transition: transform 0.5s ease-in-out;
}

.container {
  max-width: 70%;
  transition: transform 0.5s ease-in-out;
  margin-left:15%;
}

.button:hover {
  background-color: #00457c;
}
</style>