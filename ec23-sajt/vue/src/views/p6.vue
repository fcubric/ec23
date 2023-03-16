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
      lectureTitle="Izrada Tower Defense prototipa za 30 minunuta"
      lectureDescription="Na ovom predavanju imaćete prilike da vidite kako se kreira prototip igre, korak po korak, za 30 minuta. Kroz 11 ključnih faza, kreiraćemo osnovne elemente igre - okruženje, kretanje, putanje, neprijatelje i talase neprijatelja, tornjeve, detekciju, nišan, pucanje i pogađanje, pobedu i poraz. Ova praktična demonstracija idealna je za sve koji žele naučiti kako se za kratko vreme mogu postaviti osnove jedne igre, kao i koji su najvažniji elementi kako bi igra bila uspešna."
      lecturerName="Zoran Trandafilović"
      :lecturerImage="lecture.lecturerImage"
      lecturerBio="Zoran Trandafilović je inženjer elektrotehnike i računarstva koji se bavi programiranjem igara već više od 30 godina. Svoju prvu igru je napravio u srednjoj školi, na Spectrumu ZX, a zatim je portovana na Atari. Ima više od 10 godina iskustva u oblasti 3D komputerske animacije i postprodukcije. Zoran je u svojoj bogatoj karijeri imao prilike da se bavi razvojem TOS aplikacija, Flash igara, animacijom u igrama, strateškim i multiplayer igrama (Will of Steel, Alliance future combat, Awakening of Heroes i mnoge druge). Osim programiranja, Zoran voli i da prenosi znanje drugima, pa je radio i kao predavač na Visokoj školi elektrotehnike i računarstva. Deo je Playstudios ekipe preko godinu dana, gde radi na poziciji Frontend developera na igri POP!Slots. U slobodno vreme se bavi dragon boat veslanjem (kineska drevna disciplina sa 20 ljudi u čamcu)."
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
  import img1 from '../assets/zt.png';
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
        lecturerImage: img1,
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

  