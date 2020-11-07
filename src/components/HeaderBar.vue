<template>
  <header>
    <nav
      class="navbar has-background-dark is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderBarBrand></HeaderBarBrand>
      <NavMenu></NavMenu>
      <HeaderBarLinks></HeaderBarLinks>
    </nav>
  </header>
</template>

<script>
import HeaderBarBrand from '@/components/HeaderBarBrand';
import HeaderBarLinks from '@/components/HeaderBarLinks';
import NavMenu from '@/components/NavMenu';
export default {
  name: 'HeaderBar',
  components: { HeaderBarBrand, HeaderBarLinks, NavMenu },
};
</script>
