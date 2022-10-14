<template>
  <section>
    <About />
    <Trajectories />
    <Repositories />
    <Languages />
    <Libras />
  </section>
</template>
<script>
import About from "~/components/About.vue";
import Repositories from "~/components/Repositories.vue";
import Languages from "~/components/Languages.vue";
import Trajectories from "~/components/Trajectories.vue";
import Libras from "~/components/Libras.vue";

export default {
    name: "IndexPage",
    components: {
        About,
        Repositories,
        Languages,
        Trajectories,
        Libras
    }
};
</script>
<style scoped>
/* section { */
    /* background-image: url("../assets/profile/linguagens-2021-1152x648.jpg"); */
    /* color: aliceblue; */
  /* } */
</style>
