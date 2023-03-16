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
                distance: 20,
                duration: 0.2,
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
      <div id="particles-js" class="flex flex-col min-h-screen">
  <div class="flex-grow">
    <div class="page-content flex flex-col mt-20 mb-8">
      <NavBar class="fixed top-0 z-50 w-full border-b-2 border-blue-300" />
      <LectureDetails 
        lectureTitle="Edukacione igre"
        lectureDescription="U predavanju se radi o pitanju šta je to igra i igranje iste uopšteno. Glavna reč biće o edukacionim igrama. Takođe će se obraditi i primeri. "
        lecturerName="Igor Sabo"
        :lecturerImage="lecture.lecturerImage"
        lecturerBio="Igor Sabo rođen je 30. aprila 1990. godine u Beogradu. Završio je osnovne i master studije Univerziteta Metropolitan gde je takođe upisao i doktorske studije.  Sada radi kao asistent na Univerzitetu Metropolitan.  "
        class="mt-8"
      />
    </div>
  </div>
  <Footer  class=" w-full mt-auto" />
</div>

    </div>
  </template>
  
  <script>
  import LectureDetails from './../components/Profil.vue'
  import NavBar from './../components/NavBar.vue'
  import Footer from '../components/Footer.vue';
  import { loadFull } from "tsparticles";
  import img2 from './../assets/igor-sabo.jpg';
  export default {
    name: "App",
    components: {
        NavBar,
        LectureDetails,
        Footer
    },data() {
    return {
      particlesInit: null,
      particlesLoaded: null,
      lecture: {
        lecturerImage: img2,
      },
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

  