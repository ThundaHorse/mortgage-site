<template>
  <v-layout>
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
  };
</script>
