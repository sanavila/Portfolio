<template>
  <aside>
    <h1 class="is-size-2">Conhecimentos</h1>  
    <b-carousel-list   
        v-model="values"
        :data= "languagesList"
        :items-to-show="perList"
        :items-to-list="increment"
        :repeat="repeat"
    > 
    <template #item="lang">
    <img
        :src="lang.path"
        :alt="lang.alt"
    />  
    </template> 
    </b-carousel-list>
  </aside>
</template>
<script>
export default {
  name: "Languages",
  data() {
    return {
      arrow: true,
      values: 1,
      perList: 4,
      increment: 1,
      repeat: true,
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
};
</script>