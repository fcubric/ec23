<template>
  <h2 class="text-2xl font-bold mb-4 text-center font-condensed opacity-100">Sponzori</h2>
  <div class="max-w-screen-lg mx-auto py-8 px-8  bg-white omotac rounded-lg mb-8">
      <div class="grid grid-cols-1 gap-8 ml-15 opacity-100">
        <a href="https://www.playstudios.com/">
          <img src="../assets/pslogo.png" width="100" height="100" alt="Generalni pokrovitelj" class=" object-contain transition-all duration-300 hover:scale-110">
        </a>
      </div>
  </div>
  <div class="max-w-screen-lg mx-auto py-8 w-70 bg-white omotac rounded-lg">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 ml-15 opacity-100">
      <template v-for="(sponsor, index) in sponsors">
        <a v-if="sponsor.url && sponsor.logo" :key="sponsor.name" :href="sponsor.url" class="flex items-center justify-center h-20 sm:h-24">
          <img :src="sponsor.logo" :alt="sponsor.name" class="w-full h-full object-contain transition-all duration-300 hover:scale-110">
        </a>
        <div v-else :key="`sponsor-${index}`" class="flex items-center justify-center h-20 sm:h-24">
          <div v-if="sponsor.logo" class="w-full h-full object-contain transition-all duration-300 hover:scale-110">
            <img :src="sponsor.logo" :alt="sponsor.name">
          </div>
          <div v-else>
            {{ sponsor.name }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/etf_logo.png'
import img2 from '../assets/Yettel_logo.png'
import img3 from '../assets/pslogo.png'
import img4 from '../assets/mozzartlogo.png'
export default {
  data() {
    return {
      sponsors: [
        {
          name: "",
          logo: null,
          url: null
        },
        {
          name: "Yettel",
          logo: img2,
          url: 'https://www.yettel.rs/'
        },
        {
          name: "",
          logo: null,
          url: null
        },
        {
          name: "ETF",
          logo: img1,
          url: 'https://www.etf.bg.ac.rs/'
        },
        {
          name: "Mozzart",
          logo: img4,
          url: 'https://www.mozzartbet.com/sr#/'
        },
        {
          name: "",
          logo: null,
          url: null
        },
        {
          name: "",
          logo: null,
          url: null
        },
        {
          name: "",
          logo: null,
          url: null
        }
      ]
    };
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}

.font-condensed{
  color: white;
  font-family: "Roboto Condensed", sans-serif;
}

/* center the component horizontally */
@media (min-width: 640px) {
  .w-70 {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}

.bg-white {
  background-color: #fff;
}

.omotac{
  background-color: rgba(255,255,255,0.5);
}

.opacity-25 {
  opacity: 0.25;
}

.rounded-lg {
  border-radius: 0.5rem;
}
</style>
