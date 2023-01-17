<template>
  <div class="review-page">
    <v-container>
      <v-row class="mt-8">
        <v-col>
          <h1>Reviews</h1>
        </v-col>
      </v-row>

      <v-container>
        <v-progress-circular
          v-if="!loaded"
          color="blue-lighten-3"
          indeterminate
          :size="120"
          :width="5"
        ></v-progress-circular>

        <v-carousel
          v-else
          show-arrows="hover"
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="(review, index) in reviewData"
            :key="index"
          >
            <div
              class="d-flex fill-height flex-column justify-center align-center"
            >
              <v-row>
                <v-col class="mt-auto mb-0"
                  ><div class="text-h6">
                    {{ review.content }}
                  </div>
                </v-col>
              </v-row>
              <v-row class="mt-0">
                <v-col
                  cols="12"
                  class="mb-6"
                >
                  <div class="text-subtitle-2">
                    "<span
                      v-for="(n, idx) in review.rating"
                      :key="idx"
                    >
                      <v-icon icon="mdi-star"></v-icon> </span
                    >"
                  </div>
                  <p>- {{ review.reviewerName.displayName }}</p>
                </v-col>
              </v-row>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-container>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'ReviewsPage',
    data() {
      return {
        reviewData: [],
        window: 0,
        loaded: false,
      };
    },
    mounted() {
      if (!this.reviewData.length) {
        this.fetchReviews();
      }
    },
    methods: {
      fetchReviews() {
        const url = `${process.env.VUE_APP_API_URL}&partnerId=${process.env.VUE_APP_PARTNER_ID}&nmlsId=${process.env.VUE_APP_NMLS_ID}&reviewLimit=10`;
        const request = axios.get(url);
        setTimeout(() => {
          request
            .then((res) => {
              this.reviewData = res.data.reviews;
              this.loaded = true;
            })
            .catch((e) => {
              console.log(e);
            });
        }, 2000);
      },
    },
  };
</script>
