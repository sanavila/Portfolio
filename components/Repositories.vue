<template>
  <aside>
    <section class="is-flex is-flex-wrap-wrap is-justify-content-center">
      <nav
        class="card"
        v-for="(repo, index) of repoList"
        :key="`repo_${index}`"
      >
        <a
          :href="repo.html_url"
          role="link"
          rel="search external"
          :aria-label="repo.description"
          target="_blank"
        >
          <img
            :src="`https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/logo.webp`"
            @error="defaultLogo"
            width="200px"
            :alt="repo.name.replaceAll('_', ' ')"
            :title="repo.name.replaceAll('_', ' ')"
          />
        </a>
      </nav>
      <template v-if="isLoad">
        <nav class="card" 
          v-for="index of 15"
          :key="`repo_${index}`">

          <b-skeleton
            width="200px"
            height="200px"
          />
        </nav>
      </template>
    </section>
  </aside>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Repositories",
  data() {
    return {
      isLoad: false,
    };
  },
  computed: {
    ...mapGetters({
      repoList: "getRepoList",
    }),
  },
  methods: {
    ...mapActions({
      listRequest: "repoListRequestAction",
    }),
    async loadRepoList() {
      this.isLoad = true;
      await this.listRequest();
      this.isLoad = false;
    },
    defaultLogo(event) {
      event.target.src = require("@/assets/images/default.webp");
    },
  },
  beforeMount() {
    this.loadRepoList();
  },
};
</script>
<style lang="scss" scoped>
section {
  gap: 1rem;
}
nav.card {
  max-height: 200px;
}
</style>
