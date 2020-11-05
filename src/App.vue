<template>
  <div id="app">
    <HeaderBar/>
    <div class="main-section columns">
      <NavMenu/>
    <main class="column">
    <router-view />
    </main>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar';
import NavMenu from '@/components/NavMenu';

export default {
  name: 'App',
  components:{
      HeaderBar,
      NavMenu
  }


}
</script>


<!--<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// </style>-->
