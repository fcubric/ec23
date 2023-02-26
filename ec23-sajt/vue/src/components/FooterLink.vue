<template>
    <a href="/" class="ml-4 hover:text-gray-400">
      {{ label }}
    </a>
  </template>
  
  <script>
  export default {
    name: 'FooterLink',
    props: {
      label: {
        type: String,
        required: true
      }
    }
  }
  </script>
  