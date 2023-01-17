<template>
  <v-layout :full-height="true">
    <HeaderComponent />
    <v-main>
      <v-container
        fluid
        class="pa-0"
      >
        <router-view />
      </v-container>
      <FooterComponent />
    </v-main>
  </v-layout>
</template>

<script>
  import { FooterComponent, HeaderComponent } from './components/index';

  export default {
    name: 'App',
    components: {
      FooterComponent,
      HeaderComponent,
    },
    beforeMount() {
      window.addEventListener('load', this.onLoad);
      window.addEventListener('beforeunload', this.onUnload);
    },
    beforeUnmount() {
      window.removeEventListener('load', this.onLoad);
      window.removeEventListener('beforeunload', this.onUnload);
    },
    methods: {
      // eslint-disable-next-line no-unused-vars
      onLoad(e) {
        window.localStorage.setItem('fetchedReviews', []);
      },
      // eslint-disable-next-line no-unused-vars
      onUnload(e) {
        window.localStorage.removeItem('fetchedReviews');
      },
    },
  };
</script>
