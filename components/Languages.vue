<template>
  <aside>
    <h1 class="is-size-2">Conhecimentos</h1>
    <b-carousel
      autoplay
      v-model="values"
      :items-to-list="increment"
      repeat
      :interval="interval"
      :animated="animated"
    >
      <b-carousel-item
        v-for="(group, index_group) of groupLanguageList"
        :key="`group_${index_group}`"
      >
        <img 
          v-for="(lang, index) of group"
          :key="`lang_${index}`"
          :src="lang.path"
          :alt="lang.alt"
          width="25%"
          class="carousel-image px-5"
          
        />
      </b-carousel-item>
    </b-carousel>
  </aside>
</template>
<script>
export default {
  name: "Languages",
  data() {
    return {
      arrow: true,
      values: 0,
      increment: 1,
      animated: "slide",
      interval: 2000,
      languagesList: [
        { path: require("@/assets/images/css.png"), alt: "Logo CSS" },
        { path: require("@/assets/images/github.png"), alt: "Logo Github" },
        { path: require("@/assets/images/html.png"), alt: "Logo HTML" },
        { path: require("@/assets/images/javascript.png"), alt: "Logo JS" },
        { path: require("@/assets/images/mysql.png"), alt: "Logo MySQL" },
        { path: require("@/assets/images/react.png"), alt: "Logo Reacjs" },
        { path: require("@/assets/images/vuejs.png"), alt: "Logo Vuejs" },
      ],
    };
  },
  computed: {
    groupLanguageList() {
      let supList = [...this.languagesList];
      const list = [];
      while (supList.length) {
        list.push(supList.splice(0, 4));
      }
      return list;
    },
  },
};
</script>
<style lang="scss" scoped>
.carousel-image {
  max-height: 160px;
}
</style>