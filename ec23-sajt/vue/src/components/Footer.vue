<template>
    <footer class="bg-[#113B60] text-white font-sans">
        <div class="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between py-4">
        <div class="flex flex-col mb-2 md:mb-0 md:flex-row md:items-center">
          <ul class="mb-2 md:mb-0 md:mr-10 flex flex-col md:flex-row">
            <li class="mb-2 md:mb-0 md:mr-4">
              <router-link to="/" @click="scrollToTarget('slideshow')" class="text-sm hover:text-blue-500">Početak</router-link>
            </li>
            <li class="mb-2 md:mb-0 md:mr-4">
              <router-link to="/" @click="scrollToTarget('introduction')" class="text-sm hover:text-blue-500">O projektu</router-link>
            </li>
            <li class="mb-2 md:mb-0 md:mr-4">
              <router-link to="/" @click="scrollToTarget('news')" class="text-sm hover:text-blue-500">Obaveštenja</router-link>
            </li>
            <li class="mb-2 md:mb-0 md:mr-4">
              <router-link to="/" @click="scrollToTarget('sponsors')" class="text-sm hover:text-blue-500">Sponzori</router-link>
            </li>
            <li class="mb-2 md:mb-0 md:mr-4">
              <router-link to="/" @click="scrollToTarget('s')" class="text-sm hover:text-blue-500">Kontakt</router-link>
            </li>
            <li class="mb-2 md:mb-0 md:mr-4">
              <router-link to="/prijava"  class="text-sm hover:text-blue-500">Prijavi se</router-link>
            </li>
            
          </ul>
          <a href="https://www.instagram.com/eestech_challenge_belgrade/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/iglogo.png" alt="Instagram" class="w-3 h-3">
          </a>
        </div>
        <div>
          <img src="../assets/ecLogo2.png" alt="Project Logo" class="w-16">
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    methods: {
    scrollToTarget(id) {
      const targetElement = document.getElementById(id)
	  const navBar = document.getElementById("nb");
	  var navBarHeight=0;
	  if(navBar) navBarHeight = navBar.offsetHeight;
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - navBarHeight, behavior: 'smooth' })
      }
    }
  }
}
  </script>
  