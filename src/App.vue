<template>
  <v-layout>
    <v-app-bar prominent>
      <v-app-bar-nav-icon
        absolute="true"
        class="hidden-md-and-up"
        @click="toggleDrawer"
      ></v-app-bar-nav-icon>

      <v-icon
        class="hidden-sm-and-down ml-4"
        icon="md:supervisor_account"
        size="x-large"
      ></v-icon>

      <nav class="hidden-sm-and-down">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>

      <template #append>
        <v-btn
          class="hidden-sm-and-down"
          variant="outlined"
          color="primary"
          href="https://www.blink.mortgage/app/signup/p/bcefinancialcorporation/dannypark?campaign=dannypark"
          target="_blank"
        >
          Mortgage Application
        </v-btn>
      </template>

      <v-app-bar-title class="hidden-md-and-up">Title</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      id="nav-drawer"
      v-model="drawer"
      location="left"
      temporary
      :class="{
        'w-100': $vuetify.display.smAndDown,
        'w-50': $vuetify.display.mdAndUp,
      }"
    >
      <v-list :items="items"></v-list>

      <template #append>
        <v-btn
          class="mb-6"
          variant="outlined"
          color="primary"
          href="https://www.blink.mortgage/app/signup/p/bcefinancialcorporation/dannypark?campaign=dannypark"
          target="_blank"
        >
          Mortgage Application
        </v-btn>
      </template>
    </v-navigation-drawer>

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
  import FooterComponent from './components/FooterComponent.vue';

  export default {
    name: 'App',
    components: {
      FooterComponent,
    },
    data() {
      return {
        drawer: false,
        items: [
          {
            title: 'Foo',
            value: 'foo',
          },
          {
            title: 'Bar',
            value: 'bar',
          },
          {
            title: 'Fizz',
            value: 'fizz',
          },
          {
            title: 'Buzz',
            value: 'buzz',
          },
        ],
      };
    },
    methods: {
      toggleDrawer(e) {
        e.preventDefault();
        this.drawer = !this.drawer;
      },
    },
  };
</script>
