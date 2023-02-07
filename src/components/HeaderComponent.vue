<template>
  <v-app-bar prominent>
    <v-app-bar-nav-icon
      absolute="true"
      class="hidden-md-and-up"
      @click="toggleDrawer"
    ></v-app-bar-nav-icon>

    <v-avatar
      class="hidden-sm-and-down ml-2"
      size="x-large"
      @click="$router.push('/')"
    >
      <v-img
        :src="require('../../public/assets/images/logoWhite.webp')"
        alt="Logo"
      ></v-img>
    </v-avatar>

    <nav class="hidden-sm-and-down">
      [ <router-link to="/">Home</router-link> |
      <router-link to="/learn-more">Learn More</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/media">Media</router-link> |
      <router-link to="/reviews">Reviews</router-link> ]
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

    <v-app-bar-title
      class="hidden-md-and-up"
      @click="$router.push('/')"
      ><v-avatar
        :image="require('../../public/assets/images/logo.png')"
        size="80"
      ></v-avatar
    ></v-app-bar-title>
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
    <v-list
      :lines="false"
      nav
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
      >
        <template #prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title
          @click="$router.push(item.to)"
          v-text="item.text"
        ></v-list-item-title>
      </v-list-item>
    </v-list>

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
</template>

<script>
  export default {
    name: 'HeaderComponent',
    data() {
      return {
        drawer: false,
        items: [
          {
            text: 'Home',
            to: '/',
            icon: 'mdi-home',
          },
          {
            text: 'About',
            to: '/about',
            icon: 'mdi-home',
          },
          {
            text: 'Learn More',
            to: '/learn-more',
            icon: 'mdi-home',
          },
          {
            text: 'Reviews',
            to: '/reviews',
            icon: 'mdi-home',
          },
          {
            text: 'Media',
            to: '/media',
            icon: 'mdi-home',
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
