<template>
  <section class="section">
   <About />
   <Repositories />
  </section>
</template>

<script>
import Card from '~/components/Card'
import About from '~/components/About.vue';
import Repositories from '~/components/Repositories.vue';


export default {
  name: 'IndexPage',
  components: {
    Card,
    About,
    Repositories
}
}
</script>
