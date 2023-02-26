<template>
  <div class="max-w-screen-lg mx-auto py-8 w-70 bg-white opacity-25 rounded-lg">
    <h2 class="text-2xl font-bold mb-4 text-center font-condensed opacity-100">Sponsors</h2>
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
import img1 from '../assets/ecLogo.png'
import img2 from '../assets/ecLogo2.png'
export default {
  data() {
    return {
      sponsors: [
        {
          name: "Sponsor 1",
          logo: img1,
          url: 'https://www.google.com'
        },
        {
          name: "Sponsor 2",
          logo: null,
          url: null
        },
        {
          name: "Sponsor 3",
          logo: null,
          url: null
        },
        {
          name: "Sponsor 4",
          logo: null,
          url: null
        },
        {
          name: "Sponsor 5",
          logo: null,
          url:  null
        },
        {
          name: "Sponsor 6",
          logo: null,
          url: null
        },
        {
          name: "Sponsor 7",
          logo: null,
          url: null
        },
        {
          name: "Sponsor 8",
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

.opacity-25 {
  opacity: 0.25;
}

.rounded-lg {
  border-radius: 0.5rem;
}
</style>
