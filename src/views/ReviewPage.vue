<template>
  <div class="review-page">
    <v-container>
      <v-row>
        <v-col>
          <h1>Reviews</h1>
        </v-col>
      </v-row>

      <v-container
        class="p-0"
        fluid
      >
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
            <div class="text-subtitle-2">
              "<span
                v-for="(n, idx) in review.rating"
                :key="idx"
              >
                <v-icon icon="mdi-star"></v-icon> </span
              >"
            </div>
            <p>
              - <b>{{ review.reviewerName.displayName }}</b>
            </p>
            <div class="d-flex h-auto flex-column justify-center align-center">
              <v-row>
                <v-col class="mb-0"
                  ><p>
                    {{ review.content }}
                  </p>
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
      this.fetchReviews();
    },
    methods: {
      fetchReviews() {
        const url = `${process.env.VUE_APP_API_URL}&partnerId=${process.env.VUE_APP_PARTNER_ID}&nmlsId=${process.env.VUE_APP_NMLS_ID}&reviewLimit=10`;
        const request = axios.get(url);
        const cachedReviews = JSON.parse(
          localStorage?.getItem('fetchedReviews')
        );
        if (cachedReviews) {
          this.reviewData = cachedReviews;
          this.loaded = true;
        } else {
          this.loaded = false;
          this.reviewData = [];

          setTimeout(() => {
            request
              .then((res) => {
                this.reviewData = res.data.reviews;
                this.loaded = true;
                localStorage.setItem(
                  'fetchedReviews',
                  JSON.stringify(res.data.reviews)
                );
              })
              .catch((e) => {
                console.log(e);
                this.loaded = false;
                localStorage.clear();
              });
          }, 1000);
        }
      },
    },
  };
</script>
