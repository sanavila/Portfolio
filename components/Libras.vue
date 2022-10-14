<template>
  <div vw class="enabled">
    <div vw-access-button class="active" />
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper" />
    </div>
  </div>
</template>
<script>
export default {
    name: "LibrasWidget",
    beforeMount () {
        /* eslint-disable no-new */
        new window.VLibras.Widget("https://vlibras.gov.br/app");
    }
};
</script>
