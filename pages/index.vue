<template>
  <section
    style="
      background: linear-gradient(
        to right,
        rgba(255, 0, 0, 0),
        rgba(255, 99, 71, 0.6)
      );
    "
  >
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
