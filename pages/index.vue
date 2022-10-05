<template>
  <section>
   <About />
   <Repositories />
   <Languages/>
   <Trajectories/>
   <Libras/>
  </section>
</template>
<script>
import Card from '~/components/Card'
import About from '~/components/About.vue';
import Repositories from '~/components/Repositories.vue';
import Languages from '~/components/Languages.vue';
import Trajectories from '~/components/Trajectories.vue';
import Libras from '~/components/Libras.vue';


export default {
  name: 'IndexPage',
  components: {
    Card,
    About,
    Repositories,
    Languages,
    Trajectories,
    Libras
}
}
</script>
