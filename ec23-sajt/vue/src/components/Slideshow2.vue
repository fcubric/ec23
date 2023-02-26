<template>
    <div class="flex flex-col md:flex-row mt-10 mb-10 max-w-7xl mx-auto">
      <div class="md:w-1/2 px-6">
        <div class="relative h-96" style="width: 100%;">
          <div
            v-for="(image, index) in images"
            :key="index"
            :class="[
              'absolute inset-0 h-full w-full transition-opacity duration-1000',
              index === currentImage ? 'opacity-100' : 'opacity-0'
            ]"
            :style="{ backgroundImage: `url(${image.url})`, backgroundSize: 'cover', backgroundPosition: 'center center', objectFit: 'cover' }"
          ></div>
        </div>
      </div>
      <div class="md:w-1/2 px-6 bg-opacity-30 bg-white omotac">
        <h1 class="text-5xl font-bold mb-6 font-condensed">Informacije o  konferenciji</h1>
        <p class="text-gray-700 text-xl leading-relaxed mb-6 font-condensed my-10">
            EESTech Challenge konferencija će se održati uživo 14. i 15. marta na Elektrotehničkom fakultetu u Beogradu. U okviru ova dva dana učesnici će imati priliku da prisustvuju predavanjima i interaktivnim radionicama koji će im približiti ovogodišnju temu. Stručni predavači će sa budućim inženjerima diskutovati o game development-u, analitici i teoriji igara, brendiranju… ali i raditi sa njima u popularnim game development alatima.

        </p>
      </div>
    </div>
  </template>
  
  <script>
  import img1 from '../assets/slika4.jpg';
  import img2 from '../assets/slika5.jpg';
  import img3 from '../assets/slika6.jpg';
  export default {
    name: "Slideshow2",
    data() {
      return {
        images: [
          {
            url: img1,
          },
          {
            url: img2,
          },
          {
            url: img3,
          },
        ],
        currentImage: 0,
        timer: null,
      };
    },
    mounted() {
      this.startTimer();
    },
    methods: {
      startTimer() {
        this.timer = setInterval(() => {
          this.currentImage = (this.currentImage + 1) % this.images.length;
        }, 5000);
      },
    },
  };
  </script>
  
  <style scoped>
  .text-navy {
    color: #001f3f;
  }
  
  .omotac {
    border-radius: 10px;
    padding-top:2%;
  }
  
  @media screen and (min-width: 768px) {
    .omotac {
      width: 60%;
      margin-left: auto;
    }
  }
  
  @media screen and (min-width: 768px) {
    .velicinaNaslov{
      font-size: 3rem; /* 48px */
      line-height: 1;
    }
  
    .velicinaTekst{
      font-size: 1.25rem; /* 20px */
      line-height: 1.75rem; /* 28px */
    }
  }
  
  .font-condensed {
    font-family: "Roboto Condensed", sans-serif;
    color: WHITE;
  }

  /* Left align the image on smaller screens */
  @media (max-width: 768px) {
    .project-image {
      width: 100%;
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
  /* Right align the text on smaller screens */
  @media (max-width: 768px) {
    .project-text {
      width: 100%;
      margin-left: 0;
    }
  }
  /* The container that holds both the image and text */
  .project-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
  /* Style the image and its container */
  .project-image-container {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .project-image {
    width: 80%;
    height: 80%;
    object-fit: cover;
    border-radius: 10px;
  }
  /* Style the text and its container */
  .project-text-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #F3F4F6;
    border-radius: 10px;
  }
  .project-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #4B5563;
    margin-bottom: 1.5rem;
  }
  .project-description {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #6B7280;
    margin-bottom: 2rem;
  }
  .project-link {
    font-size: 1.25rem;
    font-weight: bold;
    color: #2563EB;
  }
</style>