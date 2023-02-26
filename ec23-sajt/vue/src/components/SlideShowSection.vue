<template>
  <div class="flex flex-col md:flex-row mt-10 mb-10 max-w-7xl mx-auto">
    <div class="md:w-1/2 px-6 bg-opacity-30 bg-white omotac">
      <h1 class="text-5xl font-bold mb-6 font-condensed">Hakaton</h1>
      <p class="text-gray-700 text-xl leading-relaxed mb-6 font-condensed my-10">
        EESTech Challenge hakaton je 24-časovno inženjersko takmičenje koje će se održati <b> 24. i 25. marta </b> u prostorijama kompanije <b>Playstudios</b>. Na nivou lokalne runde se od takmičara očekuje da kreiraju igricu za mobilni uređaj. Pitch-ovanjem svoje ideje predstavnicima kompanije Playstudios biće odabran pobednik lokalne runde, odnosno tim koji će učestvovati na velikom evropskom finalu.

      </p>
    </div>
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
  </div>
</template>


  
  <script>
  import img1 from '../assets/slika1.jpeg';
  import img2 from '../assets/slika2.jpeg';
  import img3 from '../assets/slika3.jpeg';
  export default {
    name: "ProjectIntroduction",
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
    margin-left: 0;
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
  </style>
      <!-- <div id="test" class="my-5">
      <svg width="890" height="857" viewBox="0 0 890 857" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<mask id="mask0_32_147" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="447" y="1" width="281" height="336">
<path d="M582.329 3.1242C585.509 1.2031 589.491 1.2031 592.671 3.1242L722.534 81.5826C725.531 83.3934 727.363 86.64 727.363 90.1418V247.858C727.363 251.36 725.531 254.607 722.534 256.417L592.671 334.876C589.491 336.797 585.509 336.797 582.329 334.876L452.466 256.417C449.469 254.607 447.637 251.36 447.637 247.858V90.1417C447.637 86.64 449.469 83.3934 452.466 81.5826L582.329 3.1242Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_32_147)">
<rect x="-656" y="1" width="1529" height="860" fill="url(#pattern0)"/>
</g>
<mask id="mask1_32_147" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="305" y="260" width="280" height="336">
<path d="M439.817 262.141C443.003 260.21 446.997 260.21 450.183 262.141L579.613 340.581C582.603 342.393 584.43 345.636 584.43 349.133V506.867C584.43 510.364 582.603 513.607 579.613 515.419L450.183 593.859C446.997 595.79 443.003 595.79 439.817 593.859L310.387 515.419C307.397 513.607 305.57 510.364 305.57 506.867V349.133C305.57 345.636 307.397 342.393 310.387 340.581L439.817 262.141Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask1_32_147)">
<rect x="-656" y="1" width="1529" height="860" fill="url(#pattern1)"/>
</g>
<mask id="mask2_32_147" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="163" y="519" width="281" height="336">
<path d="M298.329 521.124C301.509 519.203 305.491 519.203 308.671 521.124L438.534 599.583C441.531 601.393 443.363 604.64 443.363 608.142V765.858C443.363 769.36 441.531 772.607 438.534 774.417L308.671 852.876C305.491 854.797 301.509 854.797 298.329 852.876L168.466 774.417C165.469 772.607 163.637 769.36 163.637 765.858V608.142C163.637 604.64 165.469 601.393 168.466 599.583L298.329 521.124Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask2_32_147)">
<rect x="-656" y="1" width="1529" height="860" fill="url(#pattern2)"/>
</g>
<mask id="mask3_32_147" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="21" y="260" width="280" height="336">
<path d="M155.817 262.141C159.003 260.21 162.997 260.21 166.183 262.141L295.613 340.581C298.603 342.393 300.43 345.636 300.43 349.133V506.867C300.43 510.364 298.603 513.607 295.613 515.419L166.183 593.859C162.997 595.79 159.003 595.79 155.817 593.859L26.387 515.419C23.3965 513.607 21.5699 510.364 21.5699 506.867V349.133C21.5699 345.636 23.3965 342.393 26.387 340.581L155.817 262.141Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask3_32_147)">
<rect x="-656" y="1" width="1529" height="860" fill="url(#pattern3)"/>
</g>
<mask id="mask4_32_147" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="589" y="260" width="280" height="336">
<path d="M723.817 262.141C727.003 260.21 730.997 260.21 734.183 262.141L863.613 340.581C866.603 342.393 868.43 345.636 868.43 349.133V506.867C868.43 510.364 866.603 513.607 863.613 515.419L734.183 593.859C730.997 595.79 727.003 595.79 723.817 593.859L594.387 515.419C591.397 513.607 589.57 510.364 589.57 506.867V349.133C589.57 345.636 591.397 342.393 594.387 340.581L723.817 262.141Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask4_32_147)">
<rect x="-656" y="1" width="1529" height="860" fill="url(#pattern4)"/>
</g>
<mask id="mask5_32_147" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="162" y="1" width="281" height="336">
<path d="M297.329 3.1242C300.509 1.2031 304.491 1.2031 307.671 3.1242L437.534 81.5826C440.531 83.3934 442.363 86.64 442.363 90.1418V247.858C442.363 251.36 440.531 254.607 437.534 256.417L307.671 334.876C304.491 336.797 300.509 336.797 297.329 334.876L167.466 256.417C164.469 254.607 162.637 251.36 162.637 247.858V90.1417C162.637 86.64 164.469 83.3934 167.466 81.5826L297.329 3.1242Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask5_32_147)">
<rect x="-656" y="1" width="1529" height="860" fill="url(#pattern5)"/>
</g>
<mask id="mask6_32_147" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="448" y="520" width="281" height="336">
<path d="M583.329 522.124C586.509 520.203 590.491 520.203 593.671 522.124L723.534 600.583C726.531 602.393 728.363 605.64 728.363 609.142V766.858C728.363 770.36 726.531 773.607 723.534 775.417L593.671 853.876C590.491 855.797 586.509 855.797 583.329 853.876L453.466 775.417C450.469 773.607 448.637 770.36 448.637 766.858V609.142C448.637 605.64 450.469 602.393 453.466 600.583L583.329 522.124Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask6_32_147)">
<rect x="-656" y="1" width="1529" height="860" fill="url(#pattern6)"/>
</g>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_32_147" transform="matrix(0.00070373 0 0 0.00125117 0 -0.000466426)"/>
</pattern>
<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_32_147" transform="matrix(0.00070373 0 0 0.00125117 0 -0.000466426)"/>
</pattern>
<pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_32_147" transform="matrix(0.00070373 0 0 0.00125117 0 -0.000466426)"/>
</pattern>
<pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_32_147" transform="matrix(0.00070373 0 0 0.00125117 0 -0.000466426)"/>
</pattern>
<pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_32_147" transform="matrix(0.00070373 0 0 0.00125117 0 -0.000466426)"/>
</pattern>
<pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_32_147" transform="matrix(0.00070373 0 0 0.00125117 0 -0.000466426)"/>
</pattern>
<pattern id="pattern6" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_32_147" transform="matrix(0.00070373 0 0 0.00125117 0 -0.000466426)"/>
</pattern>
<image id="image0_32_147" width="1421" height="800" xlink:href="../assets/slika1.jpg"/>
</defs>
</svg>
    </div> -->