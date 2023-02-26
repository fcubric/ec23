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
          title: 'Notification 1',
          explanation: 'This is notification 1.',
          endpoint: 'endpoint-1',
        },
        {
          title: 'Notification 2',
          explanation: 'This is notification 2.',
          endpoint: 'endpoint-2',
        },
        {
          title: 'Notification 3',
          explanation: 'This is notification 3.',
          endpoint: 'endpoint-3',
        },
        {
          title: 'Notification 4',
          explanation: 'This is notification 4.',
          endpoint: 'endpoint-4',
        },
      ],
      endpointUrls: {
        'endpoint-1': { name: 'Endpoint1' },
        'endpoint-2': { name: 'Endpoint2' },
        'endpoint-3': { name: 'Endpoint3' },
        'endpoint-4': { name: 'Endpoint4' },
      },
    };
  },
};
</script>
