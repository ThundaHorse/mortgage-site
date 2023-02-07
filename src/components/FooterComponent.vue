<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row
      class="my-12"
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        class="mx-2"
        :color="link.color"
        icon
      >
        <i :class="link.icon"></i>
      </v-btn>
      <v-col
        class="text-center mt-4"
        cols="12"
      >
        <v-avatar
          :image="require('../../public/assets/images/logo.png')"
          size="100"
        ></v-avatar>
        - 2023
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'FooterComponent',
    data() {
      return {
        links: [
          {
            name: 'Facebook',
            icon: 'fab fa-facebook-f fa-lg',
            color: 'blue-lighten-2',
          },
          {
            name: 'Instagram',
            icon: 'fab fa-instagram fa-lg',
            color: 'purple-lighten-1',
          },

          {
            name: 'Email',
            icon: 'fas fa-envelope fa-lg',
            color: 'green-lighten-4',
          },
          {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin fa-lg',
            color: 'blue-lighten-1',
          },
        ],
      };
    },
  };
</script>
