<template>
  <header>
    <nav class="navbar has-background-dark is-dark" role="navigation" aria-label="main navigation">
      <HeaderBarLinks></HeaderBarLinks>
    </nav>
  </header>
</template>
<script>
import HeaderBarLinks from '@/components/HeaderBarLinks';
export default {
  name: 'HeaderBar',
  components:{
    HeaderBarLinks
  }
};
</script>
<style lang="scss" scoped>

</style>
