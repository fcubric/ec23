<template>
  <div class="particles">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: '#036cad',
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
            mode: 'bounce'
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 10,
          },
        },
        detectRetina: true,
      }"
    />
    <div id="particles-js">
    <div class="flex flex-col min-h-screen ">
      <NavBar class="fixed top-0 z-50 w-full border-b-2 border-blue-300" id="nb" />
      <CountdownTimer class="my-8 mt-24"></CountdownTimer>
      <SlideShowSection id="slideshow" class="my-8 " />
      <Slideshow2></Slideshow2>
      <!-- <LatestNews id="news" class="my-8" :news="news" />  -->
      <Tabela class="my-8 mb-24" />
      <ProjectHeadline id="introduction" class="my-8" />
      <Sponsors id="sponsors" class="my-10"></Sponsors>
      <div class="flex-grow"></div> <!-- push footer to bottom -->
      <Footer id="contact" class="w-full mt-8" />
    </div>
  </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import SlideShowSection from '../components/SlideShowSection.vue';
import ProjectHeadline from '../components/ProjectHeadline.vue';
import LatestNews from '../components/LatestNews.vue';
import Footer from '../components/Footer.vue';
import Sponsors from '../components/Sponsors.vue';
import CountdownTimer from '../components/Timer.vue'
import Tabela from '../components/Tabela.vue';
import Slideshow2 from '../components/Slideshow2.vue'
import { loadFull } from "tsparticles";


export default {
  name: 'App',
  components: {
    NavBar,
    SlideShowSection,
    Slideshow2,
    ProjectHeadline,
    LatestNews,
    Footer,
    Sponsors,
    CountdownTimer,
    Tabela,

  }, 
  data() {
    return {
      particlesInit: null,
      particlesLoaded: null,
    };
  },
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      this.particlesInit = async (main) => {
        // Load the full tsParticles library, which includes all the features you need
        await loadFull(main);
      };
      this.particlesLoaded = (container) => {
        console.log('particles.js loaded');
      };
    },
  },
  
}
</script>

<style scoped>
.particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
