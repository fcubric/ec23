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
      lectureTitle="Performansni problemi i rad u Real Time okruzenju na mobilnim aplikacijama."
      lectureDescription="Razvoj mobilnih igara je zanimljiv poduhvat koji stabilno stoji jednom nogom u šou
biznisu, jednom u nauci i tehnologiji i jednom u nekoj mističnoj magli kroz koju
malo ko može da vidi. Marko je 10 godina u industriji koja postoji tek nešto duže
i tokom tog vremena je radio na razvoju novih igara, unapređivanju već uspešnih
igara, razvijanju proizvoda za interne potrebe kompanija i, od skoro, razvijanju
proizvoda za otvoreno tržište i to kao Data Scientist, pomalo kao Game Designer i
pomalo kao Product Owner. U svojoj prezentaciji će proći kroz iskustva koja su
oblikovala njegove ideje o dizajnu proizvoda."
      lecturerName="Marko Jevremović"
      :lecturerImage="lecture.lecturerImage"
      lecturerBio="Marko se bavi igrama, naukom i naukom o (podacima u) igrama. Na neki drugi način,
igrama se bavi već 30 godina. Trenutno je suosnivač startapa koji razvija analitiku
za igre, pre toga je vodio tim za analitiku i AI u kompaniji Two Desperados. Pre
toga je dugo vremena radio u Nordeusu na polju analitike i Data Science-a, ali se
pomalo oprobao i u dizajnu ekonomije i sistema."
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
  import img1 from '../assets/mj.jpg';
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

  