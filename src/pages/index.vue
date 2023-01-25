<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="mt-5">
          Cat Facts:
        </h1>
        <div
          v-if="catfacts.fact"
        >
          <div
            class="alert alert-primary mt-5"
            role="alert"
            data-test-id="box-cat-facts"
          >
            {{ catfacts.fact }}
          </div>
        </div>
        <div v-else>
          <div
            class="alert alert-danger mt-5"
            role="alert"
            data-test-id="alert-cat-facts-error"
          >
            Ops... Error getting cat facts!
          </div>
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
