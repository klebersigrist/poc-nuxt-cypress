<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div
          v-if="catfacts.fact"
          data-test-id="box-cat-facts"
        >
          <h1 class="mt-5">
            Cat Facts:
          </h1>
          <div class="alert alert-primary mt-5" role="alert">
            {{ catfacts.fact }}
          </div>
        </div>
        <div v-else>
          <h1 class="mt-5">
            Ops... Error getting cat facts!
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',

  data: () => ({
    catfacts: {},
  }),

  async fetch() {
    try {
      this.catfacts = await this.$axios.$get(`${process.env.CAT_FACTS_URL}/fact`);
    } catch (error) {
      this.catfacts = {};
    }
  },

  fetchOnServer: true,
})
</script>
