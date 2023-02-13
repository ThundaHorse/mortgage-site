<template>
  <div class="home">
    <!-- Hero Intro -->
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
      <div
        class="d-flex fill-height justify-space-between v-container text-white mt-4 mb-4"
      >
        <v-row no-gutters>
          <v-col
            :cols="cols[1]"
            class="my-auto px-2"
          >
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, hic
              eos nihil vero, fugiat repellendus sunt accusantium exercitationem
              nostrum explicabo eaque maiores, quis aperiam accusamus
              praesentium suscipit ipsa commodi. Quam.
            </h3>

            <v-avatar
              :image="require('../../public/assets/images/avatarNoBg.webp')"
              class="hero_avatar my-auto hidden-md-and-up"
              size="200"
            />
          </v-col>

          <v-col
            :cols="cols[0]"
            class="mr-0 d-flex"
          >
            <div class="hero-personal d-flex align-items-end justify-end">
              <v-avatar
                :image="require('../../public/assets/images/avatarNoBg.webp')"
                class="hero_avatar my-auto hidden-sm-and-down"
                size="400"
              />

              <div
                class="hero-personal-message d-flex align-items-start flex-column justify-content-center"
              >
                <p class="subheading hidden-sm-and-down font-weight-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perspiciatis facilis eius aliquid quidem placeat ipsa fuga
                  voluptate reprehenderit debitis officia quod sunt, voluptatum.
                </p>
              </div>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            corrupti blanditiis. Ipsam aperiam labore, voluptatum quos iusto
            amet est blanditiis illum maiores reprehenderit rem expedita
            repellendus reiciendis. Iure, alias vel.
          </h1>

          <h3 class="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            corrupti blanditiis. Ipsam aperiam labore, voluptatum quos iusto
            amet est blanditiis illum maiores reprehenderit rem expedita
            repellendus reiciendis. Iure, alias vel.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        accusamus. Vitae est, quos quae perspiciatis rem quisquam accusamus
        exercitationem explicabo hic dolor voluptatum! Atque aliquam sunt cumque
        necessitatibus suscipit fugiat! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur, accusamus. Vitae est, quos quae
        perspiciatis rem quisquam accusamus exercitationem explicabo hic dolor
        voluptatum! Atque aliquam sunt cumque necessitatibus suscipit fugiat!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        accusamus. Vitae est, quos quae perspiciatis rem quisquam accusamus
        exercitationem explicabo hic dolor voluptatum! Atque aliquam sunt cumque
        necessitatibus suscipit fugiat!
      </p>

      <v-divider inset></v-divider>

      <p class="mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        accusamus. Vitae est, quos quae perspiciatis rem quisquam accusamus
        exercitationem explicabo hic dolor voluptatum! Atque aliquam sunt cumque
        necessitatibus suscipit fugiat!
      </p>

      <p class="mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        accusamus. Vitae est, quos quae perspiciatis rem quisquam accusamus
        exercitationem explicabo hic dolor voluptatum! Atque aliquam sunt cumque
        necessitatibus suscipit fugiat! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur, accusamus. Vitae est, quos quae
        perspiciatis rem quisquam accusamus exercitationem explicabo hic dolor
        voluptatum! Atque aliquam sunt cumque necessitatibus suscipit fugiat!
      </p>
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
