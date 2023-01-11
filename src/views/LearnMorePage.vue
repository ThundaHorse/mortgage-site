<template>
  <div class="learn-more-page">
    <!-- Learn More Intro -->
    <div id="intro-image"></div>
    <div id="intro">
      <v-row>
        <v-col
          class="my-auto"
          cols="12"
        >
          <h1 class="mt-4">Blurb #1</h1>

          <br />

          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            autem quidem doloremque! Et sed iusto quis architecto incidunt,
            accusamus, quisquam blanditiis consequatur esse qui eos nobis enim
            inventore aperiam tenetur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur autem quidem doloremque! Et sed iusto
            quis architecto incidunt, accusamus, quisquam blanditiis consequatur
            esse qui eos nobis enim inventore aperiam tenetur?
          </h3>

          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            autem quidem doloremque! Et sed iusto quis architecto incidunt,
            accusamus, quisquam blanditiis consequatur esse qui eos nobis enim
            inventore aperiam tenetur?
          </h3>
        </v-col>
      </v-row>
    </div>

    <v-divider></v-divider>

    <!-- Learn More Section 2 -->
    <div
      id="knowledge-section-1"
      class="mx-6"
    >
      <v-container>
        <v-row>
          <v-col :cols="cols[3]">
            <div id="image-placeholder"></div>
          </v-col>

          <v-col
            class="my-auto"
            :cols="cols[2]"
          >
            <v-item-group multiple>
              <v-container>
                <v-row>
                  <v-col
                    v-for="n in 2"
                    :key="n"
                    cols="12"
                    md="6"
                  >
                    <v-item v-slot="{ isSelected, toggle }">
                      <v-card
                        :color="isSelected ? 'primary' : ''"
                        class="d-flex align-center"
                        dark
                        height="200"
                        @click="toggle"
                      >
                        <v-scroll-y-transition>
                          <div class="text-h3 flex-grow-1 text-center">
                            <v-avatar
                              color="surface-variant"
                              size="80"
                            ></v-avatar>
                            {{ isSelected ? 'Selected' : 'Lorem Ipsum' }}
                          </div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>

            <v-item-group multiple>
              <v-container>
                <v-row>
                  <v-col
                    v-for="n in 2"
                    :key="n"
                    cols="12"
                    md="6"
                  >
                    <v-item v-slot="{ isSelected, toggle }">
                      <v-card
                        :color="isSelected ? 'primary' : ''"
                        class="d-flex align-center"
                        dark
                        height="200"
                        @click="toggle"
                      >
                        <v-scroll-y-transition>
                          <div class="text-h3 flex-grow-1 text-center">
                            {{ isSelected ? 'Selected' : 'Ipsum Lorem' }}
                            <v-avatar
                              color="surface-variant"
                              size="80"
                            ></v-avatar>
                          </div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-col>
        </v-row>

        <v-divider inset></v-divider>
      </v-container>
    </div>

    <!-- Learn More Outro -->
    <div
      id="outro"
      class="d-flex"
    >
      <v-row class="my-auto">
        <v-col cols="12">
          <h1>Outro content</h1>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LearnMorePage',
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
