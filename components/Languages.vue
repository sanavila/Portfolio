<template>
  <aside>
    <h1 class="is-size-1 is-flex is-justify-content-center">
      Conhecimentos
    </h1>
    <img
      v-for="(logo, index) of languagesList"
      :key="`logo_${index}`"
      :src="logo.path"
      :alt="logo.alt"
      class="pl-3 images"
    >
  </aside>
</template>
<script>
export default {
    name: "LanguagesKnow",
    data () {
        return {
            languagesList: [
                { path: require("@/assets/images/css.png"), alt: "Logo CSS" },
                { path: require("@/assets/images/github.png"), alt: "Logo Github" },
                { path: require("@/assets/images/html.png"), alt: "Logo HTML" },
                { path: require("@/assets/images/javascript.png"), alt: "Logo JS" },
                { path: require("@/assets/images/mysql.png"), alt: "Logo MySQL" },
                { path: require("@/assets/images/react.png"), alt: "Logo Reacjs" },
                { path: require("@/assets/images/vuejs.png"), alt: "Logo Vuejs" }
            ]
        };
    },
    computed: {
        groupLanguageList () {
            const supList = [...this.languagesList];
            const list = [];
            while (supList.length) {
                list.push(supList.splice(0, 4));
            }
            return list;
        }
    }
};
</script>
<style lang="scss" scoped>
aside {
  padding: 30px;
}
</style>
