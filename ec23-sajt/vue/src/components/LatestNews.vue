<template>
  <div>
    <notification-carousel :endpointUrls="endpointUrls" :notifications="notifications" />
  </div>
</template>

<script>
import NotificationCarousel from '../components/News.vue';
import { RouterLink } from 'vue-router';

export default {
  name: 'App',
  components: {
    NotificationCarousel,
    RouterLink,
  },
  data() {
    return {
      notifications: [
        
        {
          title: 'KOME I KAKO? - najvažnija pitanja za razvoj aplikacije kao biznis alata',
          explanation: 'Šta su preduslovi uspeha jedne kompanije koja želi da razvije novu ili unapredi postojeću aplikaciju za kupce? Predavanje daje odgovor na ova pitanja i približava ključne principe za uspeh jednog ovakvog proizvoda. ',
          endpoint: 'endpoint-1',
          lecturer: 'Jelena Uzelac Vasić'
          
        },  
        {
          title: 'Šta razvoj mobilnih igara može da nas nauči za razvoj boljih proizvoda?',
          explanation: 'Razvoj mobilnih igara je zanimljiv poduhvat koji stabilno stoji jednom nogom u šou biznisu, jednom u nauci i tehnologiji i jednom u nekoj mističnoj magli kroz koju malo ko može da vidi.',
          endpoint: 'endpoint-2',
          lecturer: 'Marko Jevremović'
        },
        {
          title: 'Izrada Tower Defense prototipa za 30 minuta',
          explanation: 'Na ovom predavanju imaćete prilike da vidite kako se kreira prototip igre, korak po korak, za 30 minuta.',
          endpoint: 'endpoint-3',
          lecturer: 'Zoran Trandafilović'
        },
        {
          title: 'Performansni problemi i rad u realtime okruženju na mobilnim aplikacijama',
          explanation: 'Možda na prvi pogled izgleda jednostavno napraviti mobilnu aplikaciju, ali ona se sastoji od preko 150 ekrana i sa dosta klijentske logike.',
          endpoint: 'endpoint-4',
          lecturer: 'Dejan Marković'
        },
        {
          title: 'Radionica: Izrada trkačke igre',
          explanation: 'Uvod u Unity 3D, bavljenje osnovama fizike i izrada male trkačke igre. Radi se u Unity 2020. Neophodno je da učesnici konferencije ponesu svoje laptopove kako bi pratili radionicu. ',
          endpoint: 'endpoint-5',
          lecturer: 'Igor Sabo'
        },
        {
          title: 'Edukacione igre',
          explanation: 'U predavanju se radi o pitanju šta je to igra i igranje iste uopšteno. Glavna reč biće o edukacionim igrama. Takođe će se obraditi i primeri.',
          endpoint: 'endpoint-6',
          lecturer: 'Igor Sabo'
        },
      ],
      endpointUrls: {
        'endpoint-1': { name: 'predavanje1' },
        'endpoint-2': { name: 'predavanje5' },
        'endpoint-3': { name: 'predavanje6' },
        'endpoint-4': { name: 'predavanje4' },
        'endpoint-5': {name:'predavanje3'},
        'endpoint-6': {name:'predavanje2'}
      },
    };
  },
};
</script>
