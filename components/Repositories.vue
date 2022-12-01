<template>
  <aside>
    <h1 class="is-size-1 is-flex is-justify-content-center">
      Conheça meus projetos
    </h1>
    <section class="is-flex is-flex-wrap-wrap is-justify-content-center">
      <nav
        v-for="(repo, index) of repoList"
        :key="`repo_${index}`"
        class="card"
      >
        <a
          :href="repo.html_url"
          role="link"
          rel="search external"
          :aria-label="repo.description"
          target="_blank"
        >
        <Logo
          v-if="repo.language === 'Vue'"
          :name="repo.name.replaceAll('_', ' ')"
          :images="[require('@/assets/logos/logoVue.png')]"
          :title="truncate(21, repo.name.replaceAll('_', ' '))"
          title-color="rgb(72 199 142)"
          bar-color="rgb(72 199 142)"
          class="logo size-150"
        />
        <Logo
          v-else-if="repo.language === 'JavaScript' "
          :name="repo.name.replaceAll('_', ' ')"
          :images="[require('@/assets/images/javascript.png')]"
          :title="truncate(21, repo.name.replaceAll('_', ' '))"
          title-color="#f7df1b"
          bar-color="#f7df1b"
          class="logo size-150"
        />
        <Logo
          v-else-if="repo.language === 'TypeScript' "
          :name="repo.name.replaceAll('_', ' ')"
          :images="[require('@/assets/logos/typescript.png')]"
          :title="truncate(21, repo.name.replaceAll('_', ' '))"
          title-color="#FCFCFC"
          bar-color="#FCFCFC"
          class="logo size-150"
        />
        <Logo
          v-else-if="repo.language === 'CSS'"
          :name="repo.name.replaceAll('_', ' ')"
          :images="[require('@/assets/images/css.png')]"
          :title="truncate(21, repo.name.replaceAll('_', ' '))"
          title-color="#FCFCFC"
          bar-color="#FCFCFC"
          class="logo size-150"
        />
        <img
            v-else
            :src="`https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/logo.webp`"
            :callback="repo.language"
            width="200px"
            :alt="repo.name.replaceAll('_', ' ')"
            :title="truncate(21, repo.name.replaceAll('_', ' '))"
            @error="(event) => defaultLogo(event, repo)"
          >
        </a>
      </nav>
      <nav
        v-for="index of 15"
        v-show="isLoad"
        :key="`repo_load_${index}`"
        class="card"
      >
        <b-skeleton width="200px" height="200px" />
      </nav>
    </section>
  </aside>
</template>
<script>
import { truncate } from "@/static/utils";
import { mapActions, mapGetters } from "vuex";
import Logo from "./Logo.vue";

export default {
    name: "RepositoriesProjects",
    components: { Logo },
    data () {
        return {
            isLoad: false,
            truncate
        };
    },
    computed: {
        ...mapGetters({
            repoList: "getRepoList"
        })
    },
    beforeMount () {
        this.loadRepoList();
    },
    methods: {
        ...mapActions({
            listRequest: "repoListRequestAction"
        }),
        async loadRepoList () {
            this.isLoad = true;
            await this.listRequest();
            this.isLoad = false;
        },
        defaultLogo (event, repo) {
            event.target.src = require("@/assets/images/default.webp");
            repo.status = "error";
        }
    }
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
