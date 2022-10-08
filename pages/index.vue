<template >
  <section>
    <About />
    <!-- <Languages /> -->
    <Trajectories />
    <Repositories />
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
    Libras,
  },
};
</script>
<style scoped>
/*section {
    background: #464a4e;
    color: aliceblue;
  }*/
</style>
