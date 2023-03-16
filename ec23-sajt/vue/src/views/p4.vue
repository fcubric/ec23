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
      lectureDescription="Možda na prvi pogled izgleda jednostavno napraviti mobilnu aplikaciju, ali ona se sastoji od preko 150 ekrana i sa dosta klijentske logike. Problemi nastaju kada je potrebno da aplikacija funkcioniše na ograničenom hardveru, mreži ili se pojavi preveliki broj korisnika u sistemu (preko 100.000 korisnika paralelno). A u ovom predavanju ćemo vam prezentovati kako smo mi, u Mozzart IT-ju, rešavali ove probleme u realnom okruženju."
      lecturerName="Dejan Marković"
      :lecturerImage="lecture.lecturerImage"
      lecturerBio="Rođen u Čačku 1991. godine gde je pohađao gimnaziju. Elektrotehnički fakultet završio je u Beogradu (osnovne i master studije) kao inženjer elektrotehnike i računarstva. Sa Mozzart kompanijom se upoznao na JobFairu na Elektrotehničkom fakultetu, gde je osvojio prvu nagradu na kvizu poznavanja programiranja. Nakon toga je usledio intervju i posao. Deo Mozzart tima je više od osam godina i tu je pronašao sve što je ikada tražio – rad u složenom, visoko distribuiranom sistemu koji živi 24/7, aktivno učešće u razvoju od definisanja zahteva do implementacije i testiranja, priliku da svoj kod vrlo brzo vidi u produkciji i da ga koriste milioni ljudi na tri kontinenta. Oženjen je i otac jednog deteta."
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
  import img1 from '../assets/dm.jpg';
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

  