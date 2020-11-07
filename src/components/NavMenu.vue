<template>
  <nav class="columns is-2 menu">
    <!-- <p class="menu-label">Menu</p> -->
    <ul class="menu-items">
      <router-link class="menu-item" to="/home">Home</router-link>
      <router-link class="menu-item" to="/blog">Blog</router-link>
      <router-link class="menu-item" to="/about">About</router-link>
      <router-link class="menu-item" to="/projects">Projects</router-link><br/>
    </ul>
  </nav>
</template>
<script>

export default {

}
</script>
<style lang="scss" scoped>

/* Style the navigation menu */
.menu-items{
  width: 100%;
  background-color: rgb(85, 85, 85);
  overflow: auto;

}

/* Navigation links */
.menu-items .menu-item {
  float: left;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
  width: 20%; /* Four equal-width links. If you have two links, use 50%, and 33.33% for three links, etc.. */
  text-align: center; /* If you want the text to be centered */
}

/* Add a background color on mouse-over */
.menu-items .menu-item:hover {
  background-color: rgb(156, 170, 161);
}

/* Style the current/active link */
.menu-items .menu-item.active {
  background-color: #4CAF50;
}

/* Add responsiveness - on screens less than 500px, make the navigation links appear on top of each other, instead of next to each other */
@media screen and (max-width: 500px) {
  .menu-items .menu-item {
    float: none;
    display: block;
    width: 100%;
    text-align: left; /* If you want the text to be left-aligned on small screens */
  }
}

</style>
