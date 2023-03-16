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
      lectureTitle="KOME i KAKO? - najvažnija pitanja za razvoj aplikacije kao biznis alata"
      lectureDescription="U sve većoj ekspanziji različitih vrsta aplikacija, svaki korisnik biva manje ili više preplavljen, manje ili više uspeva da shvati vrednost koju mu ista nudi i na osnovu toga, razvija ili ne razvija odnos sa tom aplikacijom. U poslovnom kontekstu, igra je još zahtevnija i oštrija, pa ukoliko aplikacija jasno ne pokazuje koju ljudsku potrebu zadovoljava, ne uzima se ni u razmatranje kao kandidat da stvori lojalne korisnike. Šta su preduslovi uspeha jedne kompanije koja želi da razvije novu ili unapredi postojeću aplikaciju za kupce? Da li bolja tehnologija, više gejmifikacije, više programera ili nešto četvrto? Predavanje daje odgovor na ova pitanja i približava ključne principe za uspeh jednog ovakvog proizvoda. "
      lecturerName="Jelena Uzelac Vasić"
      :lecturerImage="lecture.lecturerImage"
      lecturerBio="Jelena ima 15 godina iskustva u radu na razvoju kompanija, brendova, timova i pojedinaca. Magistar ekonomije i doktorand na Ekonomskom Fakultetu Univerziteta u Beogradu, sertifikovani executive coach Akademije za executive coaching iz Velike Britanije (www.aoec.com), sa dodatnim edukacijama iz domena poslovne strategije, inovacija i organizacionog i ljudskog razvoja. Profesor na fakultetu FMK Univerziteta Singidunum, gde inspirisana studentima i deljenjem znanja i perspektiva, želi da da lični doprinos novom načinu obrazovanja i razvoja mladih. Autor je jedinstvene metodologije za razvoj organizacija i pojedinaca - What’s Next? 5th element of Change. Predavač, kolumnista i pisac stručnih i manje stručnih štiva. Njene ključne teme i oblasti su: change kao ključna strateška promena – biznisa, timova, pojedinaca; strategija razvoja biznisa i procesa promena (next level strategija); change organizaciona kultura; lični razvoj lidera; coaching kao novi stil liderstva; komunikacijske i prezentacijske veštine."
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
  import img1 from '../assets/juv.jpg';
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

  