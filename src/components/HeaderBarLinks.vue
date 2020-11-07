<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a v-bind:href="github" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a v-bind:href="twitter" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div class="social-item">
          <li><a :href="github"><i class="fab fa-github" aria-hidden="true"></i></a></li>
          <li><a :href="twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
          <!-- <li><a href="https://linkedin.com/venkatabhupathi"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li> -->
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderBarLinks",
  data() {
    return {
      github: 'https://github.com/vbhupathi',
      twitter: 'https://twitter.com/vnbhupathi'
    }
  },
}
</script>
<style lang="scss" scoped>

.social-item body {

  margin:0;
  padding:0;
  background: #dedede;
}

.social-item {
  position: fixed;
  top:10%;
  left:10%;
  transform: translate(-50%, -50%);
  margin:0;
  padding:0;
  display:flex;
}

.social-item li {
  list-style: none;
}

.social-item li a {
  position: relative;
  width:30px;
  height:30px;
  display:block;
  text-align:center;
  margin:0 10px;
  border-radius: 50%;
  padding: 6px;
  box-sizing: border-box;
  text-decoration:none;
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
  background: linear-gradient(0deg, #ddd, #fff);
  transition: .5s;
}

.social-item li a:hover {
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  text-decoration:none;
}

.social-item li a .fab {
  width: 100%;
  height:100%;
  display:block;
  background: linear-gradient(0deg, #fff, #ddd);
  border-radius: 50%;
  line-height: calc(60px - 12px);
  font-size:24px;
  color: #262626;
  transition: .5s;
}

.social-item li:nth-child(1) a:hover .fab {
  color: #3b5998;
}

.social-item li:nth-child(2) a:hover .fab {
  color: #00aced;
}

.social-item li:nth-child(3) a:hover .fab {
  color: #dd4b39;
}

</style>
