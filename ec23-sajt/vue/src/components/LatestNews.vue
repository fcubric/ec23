<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl leading-9 font-extrabold text-gray-900 text-center mb-10">Obaveštenja</h2>
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <div class="border border-navy-blue rounded-lg shadow-md p-4 w-full md:w-1/3">
          <h3 class="text-lg font-medium text-navy-blue mb-2">News title 1</h3>
          <p class="text-gray-700 mb-4">Short description of the news item goes here.</p>
          <router-link class="flex justify-end text-navy-blue font-medium" to="/news/1">See More</router-link>
        </div>
        <div class="border border-navy-blue rounded-lg shadow-md p-4 w-full md:w-1/3">
          <h3 class="text-lg font-medium text-navy-blue mb-2">News title 2</h3>
          <p class="text-gray-700 mb-4">Short description of the news item goes here.</p>
          <router-link class="flex justify-end text-navy-blue font-medium" to="/news/2">See More</router-link>
        </div>
        <div class="border border-navy-blue rounded-lg shadow-md p-4 w-full md:w-1/3">
          <h3 class="text-lg font-medium text-navy-blue mb-2">News title 3</h3>
          <p class="text-gray-700 mb-4">Short description of the news item goes here.</p>
          <router-link class="flex justify-end text-navy-blue font-medium" to="/news/3">See More</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NewsSection",
    data() {
      return {
        newsList: [
          {
            title: "Title 1",
            shortDescription: "Short description for title 1",
          },
          {
            title: "Title 2",
            shortDescription: "Short description for title 2",
          },
          {
            title: "Title 3",
            shortDescription: "Short description for title 3",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
    .border-navy-blue {
      border-color: #2c3e50;
    }
  
    @media (max-width: 767px) {
      .md\:flex-row {
        flex-direction: column;
      }
      .md\:-mx-2 {
        margin-left: -0.5rem;
        margin-right: -0.5rem;
      }
      .md\:w-1\/3 {
        width: 100%;
      }
    }
  </style>
  