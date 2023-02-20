<template>
  <v-footer class="bg-grey-lighten-1 text-center d-flex flex-column">
    <div class="pt-4">
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        class="mx-2"
        :color="link.color"
        icon
      >
        <i :class="link.icon"></i>
      </v-btn>
    </div>

    <v-divider></v-divider>

    <div class="pt-4 text-left">
      This licensee is performing acts for which a real estate license is
      required. BCE Financial Corporation is licensed by the Georgia Department
      of Banking and Finance, Broker #60025; NMLS #1792105. Loan approval is not
      guaranteed and is subject to lender review of information. All loan
      approvals are conditional and all conditions must be met by borrower. Loan
      is only approved when lender has issued approval in writing and is subject
      to underwriting conditions. Specified rates may not be available for all
      borrowers. Rate subject to change with market conditions. BCE Financial
      Corporation is an Equal Opportunity Mortgage Broker/Lender. As a broker,
      BCE Financial Corporation is NOT individually approved by the FHA or HUD,
      but BCE Financial Corporation is allowed to originate FHA loans based on
      their relationships with FHA approved lenders.
    </div>

    <div>
      <v-avatar
        :image="require('../../public/assets/images/logo.png')"
        size="100"
      ></v-avatar>
    </div>
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
