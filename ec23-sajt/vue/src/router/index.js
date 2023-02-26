import { createRouter, createWebHistory } from "vue-router";
import Prijava from '../views/Prijava.vue'
import Landing from '../views/Landing.vue'
import ProjectIntroduction from '../components/SlideShowSection.vue'

const routes = [
  {
    path: '/prijava',
    name: 'Prijava',
    component: Prijava
  },
  {
    path: '/',
    name: 'Pocetna',
    component: Landing
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
