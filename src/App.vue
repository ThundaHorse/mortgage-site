<template>
  <v-app>
    <v-app-bar>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </v-app-bar>

    <v-main>
      <HeaderComponentVue />

      <router-view />
    </v-main>

    <FooterComponent />
  </v-app>
</template>

<script>
  import FooterComponent from './components/FooterComponent.vue';
  import HeaderComponentVue from './components/HeaderComponent.vue';

  export default {
    name: 'App',
    components: {
      FooterComponent,
      HeaderComponentVue,
    },
  };
</script>
