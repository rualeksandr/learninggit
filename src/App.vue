<template>
  <v-app>
    <the-header/>
    <the-content/>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheContent from './components/TheContent.vue';

export default {
  name: 'App',

  components: {
    TheHeader,
    TheContent,
  },

  data: () => ({
    //
  }),
};
</script>
