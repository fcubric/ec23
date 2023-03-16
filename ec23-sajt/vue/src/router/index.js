import { createRouter, createWebHistory } from "vue-router";
import Prijava from '../views/Prijava.vue'
import Landing from '../views/Landing.vue'
import p1 from '../views/p1.vue'
import p2 from '../views/p2.vue'
import p3 from '../views/p3.vue'
import p4 from '../views/p4.vue'
import p5 from '../views/p5.vue'
import p6 from '../views/p6.vue'
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
  { path: '/predavanje1',
    name: 'predavanje1',
    component : p1
  },
  { path: '/predavanje2',
    name: 'predavanje2',
    component : p2
  },
  {path: '/predavanje3',
  name: 'predavanje3',
  component:p3,

},

  {
    path:'/predavanje4',
    name: 'predavanje4',
    component: p4
  },
  {
    path:'/predavanje5',
    name: 'predavanje5',
    component: p5
  },
  {
    path:'/predavanje6',
    name: 'predavanje6',
    component: p6
  }

  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from, next) => {
  // Scroll to the top of the page on route change
  window.scrollTo(0, 0);
  next();
});

export default router;
