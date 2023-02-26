<template>
	<body>
	<nav class="relative px-4 py-4 flex justify-between items-center bg-[#113B60]">
		<a class="text-3xl font-bold leading-none" href="#">
			<img src="./../assets/ecLogo2.png" height="80" width="80">
		</a>
		<div class="lg:hidden">
			<button class="navbar-burger flex items-center text-blue-600 p-3">
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
			<li> <router-link to="/" @click="scrollToTarget('slideshow')" class="text-sm font-condensed hover:text-gray-500">Početak</router-link></li>
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><router-link to="/" @click="scrollToTarget('introduction')" class="text-sm font-condensed hover:text-gray-500">O Projektu</router-link></li>
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><router-link to="/" @click="scrollToTarget('news')" class="text-sm font-condensed hover:text-gray-500" >Obaveštenja</router-link></li>
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><router-link to="/" @click="scrollToTarget('sponsors')" class="text-sm font-condensed hover:text-gray-500">Sponzori</router-link></li>
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><router-link to="/" @click="scrollToTarget('contact')" class="text-sm font-condensed hover:text-gray-500">Kontakt</router-link></li>
		</ul>
		<router-link to="/prijava" class="hidden lg:inline-block py-2 px-6 font-condensed-dugme  hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Prijavi se</router-link>
	</nav>
	<div class="navbar-menu relative z-50 hidden">
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8">
				<a class="mr-auto text-3xl font-bold leading-none" href="#">
					<img src="./../assets/ecLogo.png" height="100" width="100">
				</a>
				<button class="navbar-close">
					<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li class="mb-1">
						<router-link to="/" @click="scrollToTarget('slideshow')" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >Početna</router-link>
					</li>
					<li class="mb-1">
						<router-link to="/" @click="scrollToTarget('introduction')" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">O Projektu</router-link>
					</li>
					<li class="mb-1">
						<router-link to="/" @click="scrollToTarget('news')" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Obaveštenja</router-link>
					</li>
					<li class="mb-1">
						<router-link to="/" @click="scrollToTarget('sponsors')" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Sponzori</router-link>
					</li>
					<li class="mb-1">
						<router-link to="/" @click="scrollToTarget('contact')" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Kontakt</router-link>
					</li>
				</ul>
			</div>
			<div class="mt-auto">
				<div class="pt-6">
					<router-link to="/prijava" class="block font-condensed-dugme px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" >Prijavi se</router-link>
				</div>
				<p class="my-4 text-xs text-center text-gray-400">
				
				</p>
			</div>
		</nav>
	</div>
</body>
  </template>
  
  <script>
export default {
  mounted() {
    // Burger menus
    const burger = this.$el.querySelectorAll('.navbar-burger');
    const menu = this.$el.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
      for (let i = 0; i < burger.length; i++) {
        burger[i].addEventListener('click', function() {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    // close
    const close = this.$el.querySelectorAll('.navbar-close');
    const backdrop = this.$el.querySelectorAll('.navbar-backdrop');

    if (close.length) {
      for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function() {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    if (backdrop.length) {
      for (let i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener('click', function() {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }
  },
  methods: {
    scrollToTarget(id) {
      const targetElement = document.getElementById(id);
      const navBar = document.getElementById("nb");
      let navBarHeight = 0;
      if (navBar) navBarHeight = navBar.offsetHeight;
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - navBarHeight, behavior: 'smooth' });
      }
    },
  },
};
</script>


  <style scoped>
.font-condensed-dugme{
  background-color: #113b60;
  font-family: "Roboto Condensed", sans-serif;
}

.font-condensed-dugme:hover{
  background-color:#3B6B8E;
}

.font-condensed {
    font-family: "Roboto Condensed", sans-serif;
    color: white;
  }

</style>