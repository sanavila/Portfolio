<template>
  <section>
   <About />
   <Repositories />
   <Languages/>
  </section>
</template>
<script>
import Card from '~/components/Card'
import About from '~/components/About.vue';
import Repositories from '~/components/Repositories.vue';
import Languages from '~/components/Languages.vue';


export default {
  name: 'IndexPage',
  components: {
    Card,
    About,
    Repositories,
    Languages
}
}
</script>
