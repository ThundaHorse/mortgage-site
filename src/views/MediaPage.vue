<template>
  <div class="media-page">
    <v-container class="mt-8">
      <h1>Media Page</h1>

      <v-item-group multiple>
        <v-container>
          <v-row>
            <v-col
              v-for="n in 3"
              :key="n"
              cols="12"
              md="4"
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
                      {{ isSelected ? 'Selected' : 'Click Me!' }}
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
              v-for="n in 3"
              :key="n"
              cols="12"
              md="4"
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
                      {{ isSelected ? 'Selected' : 'Click Me!' }}
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>

      <v-card
        max-width="400"
        class="mx-auto"
      >
        <v-container class="pa-1">
          <v-item-group
            v-model="selection"
            multiple
          >
            <v-row>
              <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="12"
                md="6"
              >
                <v-item v-slot="{ isSelected, toggle }">
                  <v-img
                    :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
                    height="150"
                    class="text-right pa-2"
                    @click="toggle"
                  >
                    <v-btn
                      :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"
                    ></v-btn>
                  </v-img>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'MediaPage',
    data() {
      return {
        items: [
          {
            src: 'backgrounds/bg.jpg',
          },
          {
            src: 'backgrounds/md.jpg',
          },
          {
            src: 'backgrounds/bg-2.jpg',
          },
          {
            src: 'backgrounds/md2.jpg',
          },
        ],
        selection: [],
      };
    },
  };
</script>
