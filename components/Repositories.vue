<template>
  <aside>
    <h1 class="is-size-1 is-flex is-justify-content-center">
      Conheça meus projetos
    </h1>
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
            v-if="repo.language !== 'Vue'"
            :src="`https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/logo.webp`"
            @error="(event) => defaultLogo(event, repo)"
            width="200px"
            :alt="repo.name.replaceAll('_', ' ')"
            :title="repo.name.replaceAll('_', ' ')"
          />
          <Logo
            v-else
            :name="repo.name.replaceAll('_', ' ')"
            :images="[require('@/assets/logos/logoVue.png')]"
            :title="repo.name.replaceAll('_', ' ')"
            titleColor="rgb(72 199 142)"
            barColor="rgb(72 199 142)"
            class="logo"
          />
        </a>
      </nav>
      <nav
        class="card"
        v-show="isLoad"
        v-for="index of 15"
        :key="`repo_load_${index}`"
      >
        <b-skeleton width="200px" height="200px" />
      </nav>
    </section>
  </aside>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Logo from "./Logo.vue";

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
    defaultLogo(event, repo) {
      event.target.src = require("@/assets/images/default.webp");
      repo.status = "error";
    },
  },
  beforeMount() {
    this.loadRepoList();
  },
  components: { Logo },
};
</script>
<style lang="scss" scoped>
section {
  gap: 1rem;
}
nav.card {
  max-height: 200px;
}
.logo {
  zoom: 0.4;
}
nav:hover {
  transform: scale(1.1);
}
</style>
