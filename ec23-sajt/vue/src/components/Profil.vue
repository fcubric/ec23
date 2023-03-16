<template>
    <div class="flex justify-center">
      <div class="flex flex-col items-center mt-8 w-8/12 sm:w-full omotac">
        <img class="rounded-full h-64 w-64 object-cover mt-2" :src="lecturerImage" alt="Lecturer image">
        <div class="text-center mt-4">
          <h2 class="text-2xl font-bold font-condensed">{{ lectureTitle }}</h2>
          <p class="text-lg font-condensed mx-12 mt-2">{{ lectureDescription }}</p>
        </div>
        <hr class="my-4 w-5/6 border-b-2 border-gray-300">
        <div class="text-center mt-4">
          <h3 class="text-lg font-bold font-condensed ">{{ lecturerName }}</h3>
          <p class="text-md font-condensed mx-12 mt-2">{{ lecturerBio }}</p>
        </div>
        <hr class="my-4 w-5/6 border-b-2 border-gray-300">
      </div>
    </div>
  </template>
  
  
  
  
  
  

  
  <script>
    import img2 from './../assets/slika3.jpg';
  export default {
    props: {
      lectureTitle: {
        type: String,
        required: true
      },
      lectureDescription: {
        type: String,
        required: true
      },
      lecturerName: {
        type: String,
        required: true
      },
      lecturerImage: {
        type: String,
        required: true
      },
      lecturerBio: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style  scoped>
  .font-condensed {
    font-family: "Roboto Condensed", sans-serif;
    color: #113B60CC;
  }

  @media screen and (max-width: 640px) {
  .omotac {
    width: 100% !important;
  }
}

  .omotac{
  background-color: rgba(255,255,255,0.5);
  border-radius: 2px;
  width:70%;
}

  </style>