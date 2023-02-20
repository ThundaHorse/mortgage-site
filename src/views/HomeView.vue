<template>
  <div class="home">
    <!-- Hero Intro -->
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white mt-4"
      >
        <v-row no-gutters>
          <v-col
            :cols="cols[1]"
            class="my-auto px-4"
          >
            <h2>Hi, I'm Danny Park!</h2>

            <br />

            <h3>
              Are you are in need of a mortgage broker who has a deep
              understanding of the lending process and a commitment to helping
              you achieve your financial goals?
            </h3>
          </v-col>

          <v-col
            :cols="cols[0]"
            class="mr-0 d-flex"
          >
            <v-img
              :aspect-ratio="16 / 9"
              class="float-right"
              width="300"
              :src="require('../../public/assets/images/danny-full-body.webp')"
              alt="headshot"
            ></v-img>

            <div class="portrait-wrapper hidden-sm-and-down">
              <p class="subheading">
                Danny Park is a talented and experienced mortgage broker who has
                a passion for helping people achieve their dreams of
                homeownership.
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-parallax>

    <v-divider></v-divider>

    <!-- Meaningful content -->
    <div class="meaningful-content my-10 mx-4">
      <v-row>
        <v-col
          class="my-auto"
          cols="12"
        >
          <h1>
            Danny is also known for his commitment to his clients. He takes the
            time to listen to their needs and concerns and works tirelessly to
            find the best possible solutions for their unique financial
            situations. Whether his clients are first-time homebuyers or
            seasoned real estate investors, Danny treats each one with the same
            level of care and attention, making sure that they feel confident
            and informed every step of the way.
          </h1>

          <h3 class="mt-4">
            With his fluency in both English and Korean, Danny is able to
            effectively communicate with clients from a wide range of
            backgrounds, which has helped him to establish strong relationships
            in multiple communities. He is a trusted advisor to many, and his
            reputation for honesty, integrity, and professionalism has earned
            him a loyal following.
          </h3>
        </v-col>

        <v-spacer></v-spacer>

        <v-col
          class="my-auto mb-6 mt-6"
          :cols="cols[3]"
        >
          <v-avatar
            color="surface-variant"
            size="100"
          ></v-avatar>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            corrupti blanditiis. Ipsam aperiam labore, voluptatum quos iusto
            amet est blanditiis illum maiores reprehenderit rem expedita
            repellendus reiciendis. Iure, alias vel.
          </p>
        </v-col>

        <v-col
          class="my-auto mb-6"
          :cols="cols[3]"
        >
          <v-avatar
            color="surface-variant"
            size="100"
          ></v-avatar>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            corrupti blanditiis. Ipsam aperiam labore, voluptatum quos iusto
            amet est blanditiis illum maiores reprehenderit rem expedita
            repellendus reiciendis. Iure, alias vel.
          </p>
        </v-col>

        <v-col
          class="my-auto mb-6"
          :cols="cols[3]"
        >
          <v-avatar
            color="surface-variant"
            size="100"
          ></v-avatar>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            corrupti blanditiis. Ipsam aperiam labore, voluptatum quos iusto
            amet est blanditiis illum maiores reprehenderit rem expedita
            repellendus reiciendis. Iure, alias vel.
          </p>
        </v-col>
      </v-row>
    </div>

    <v-divider></v-divider>

    <!-- Outro -->
    <div class="home-outro my-12 mx-4">
      <h1>Some outro</h1>

      <v-spacer></v-spacer>

      <p class="mb-4">
        Danny got his start in the financial industry more than a decade ago as
        a commercial loan underwriter and has since built a reputation as one of
        the most knowledgeable and reliable mortgage brokers in the field. His
        deep understanding of the lending process and his ability to navigate
        the complexities of the mortgage industry have helped countless clients
        secure the financing they need to purchase their first home, refinance
        their existing mortgage, or invest in real estate.
      </p>

      <v-divider inset></v-divider>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    computed: {
      cols() {
        const { mdAndUp, smAndDown } = this.$vuetify.display;
        return mdAndUp
          ? [6, 6, 8, 4]
          : smAndDown
          ? [12, 12, 12, 12]
          : [6, 6, 8, 4];
      },
    },
  };
</script>
