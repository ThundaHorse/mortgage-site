<template>
  <div class="review-page">
    <h1>Review page</h1>
    <v-progress-circular
      v-if="!loaded"
      color="blue-lighten-3"
      indeterminate
      :size="120"
      :width="5"
    ></v-progress-circular>

    <v-container v-else>
      <v-window
        v-model="window"
        show-arrows="hover"
      >
        <v-window-item
          v-for="(review, index) in reviewData"
          :key="index"
        >
          <v-card
            variant="tonal"
            height="300"
          >
            <v-card-title>
              "<span
                v-for="(n, idx) in review.rating"
                :key="idx"
              >
                <v-icon icon="mdi-star"></v-icon> </span
              >"
            </v-card-title>
            <v-card-subtitle>
              By: {{ review.reviewerName.displayName }}
            </v-card-subtitle>

            <v-card-text class="align-center my-auto mx-4">
              "{{ review.content }}"
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
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
    created() {
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
