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
  <div>
    <NavBar/>
    <div class=" min-h-screen flex flex-col justify-center items-center">
      <h1 class="text-3xl font-bold mb-6 font-condensedd2 mt-4">
        Prijavi se za Eestech Challenge!
      </h1>
      <div class="max-w-md w-full">
        <div class=" mt-6 p-4 wrap rounded-lg  opacity-80">
          <h2 class="text-lg font-medium mb-4 font-condensedd">Napomene</h2>
          <ul class="list-disc list-inside">
            <li class="mb-2 font-condensedd">Potrebno je da ponesete vaše laptopove, kao i sve što će vam biti potrebno tokom 24 sata  takmičenja.</li>
            <li class="mb-2 font-condensedd">Timovi mogu imati 3 člana, svako od članova tima treba da pošalje prijavu sa istim imenom tima.</li>
            <li class="mb-2 font-condensedd">Ukoliko se prijavljujete individualno, čekirajte odgovarajuću opciju, a polje za ime tima ostavite prazno. Timovi će biti oformljeni po redosledu prijavljivanja.</li>
            <li class="mb-2 font-condensedd">CV je moguce naknadno poslati na mejl eestech2022@gmail.com do 19. marta</li>
            <li class="mb-2 font-condensedd">CV nije neophodno poslati ako se prijavljujete samo za konferenciju, dok je za hakaton neophodan.</li>
            <!-- <li class="mb-2 font-condensedd">Generalni pokrovitelj je najavio da je moguće da 24h neće biti dovoljno za izradu zadatka, te vam otkrivamo mehaniku igrice:.</li> -->
            
          </ul>
        </div>
        <ApplicationForm class="bg-white mt-6" />
      </div>
    </div>
    <Footer></Footer>
  </div>
  </div>
</template>

  
  <script>
  import ApplicationForm from "./../components/ApplicationForm.vue";
  import NavBar from '../components/NavBar.vue';
  import Footer from '../components/Footer.vue';
  import kolo from '../assets/kolo.png'
  import { loadFull } from "tsparticles";
  export default {
    name: "App",
    components: {
        ApplicationForm,
        NavBar,
        Footer
    },data() {
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
  
  <style>
  label {
    color: #4a5568;
    font-weight: 500;
  }

  .wrap{
    background-color: rgb(255,255,255);
  }

  .font-condensedd {
    font-family: "Roboto Condensed", sans-serif;
    color: #113B60CC;
  }

  .font-condensedd2 {
    font-family: "Roboto Condensed", sans-serif;
    color: white;
  }
  
  input:focus {
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
  }
  </style>
  