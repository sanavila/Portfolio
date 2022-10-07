<template >
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
    Libras,
  },
};
</script>
<style scoped>
  section {
    background: linear-gradient(
      to right,
      #0000,
      #ff634799
    );
  }
</style>
