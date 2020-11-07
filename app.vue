<template>
  <div id="app">
    <font-awesome-icon icon="user-secret" /> 
    <HeaderBar />
    
    <div class="main-section columns">
      <main class="column">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar';

export default {
  name: 'App',
  components:{
      HeaderBar
      
  }
}
</script>

<!--<style lang="scss">
  @import '@/design/index.scss';

</style>-->
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

  html > body {
  margin: 0 !important;
}

.main-section {
  padding: 1rem 1rem;
  position: absolute;
}

.notification pre {
  background-color: inherit;
  color: white;
  font-size: 16px;
  line-height: normal;
}

div.color-line {
  width: 160px;
  height: 8px;
  border: 1px #dbdbdb solid;
  margin: 8px 0;
}

.menu-list .active-link,
.menu-list .router-link-active {
  color: #337ab7;
  background-color: #6c7470;
  position: relative;
    font-weight: 700;
    box-sizing: border-box;
    text-align: -webkit-match-parent;
            text-align: -webkit-match-parent;
}


.not-found {
  i {
    font-size: 20px;
    margin-right: 8px;
  }
  .title {
    letter-spacing: 0px;
    font-weight: normal;
    font-size: 24px;
    text-transform: none;
  }
}

.title {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
  word-break: break-word;
}
.sub-title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  word-break: break-word;
}

header {
  font-weight: bold;
  font-family: Arial;
  margin-bottom: 30px;
  padding-left: 0px;
    padding-right: 0px;
    border-bottom: 1px solid #e5e5e5;
    text-transform: uppercase;
    font-weight: normal;
        border-radius: 4px;
        
  span {
    letter-spacing: 0px;
    &.firstName {
      color: #2c3e50;
    } 
    &.lastName {
      color: #42b883;
    }
  }
  .navbar-item.nav-home {
    border: 3px solid transparent;
    border-radius: 0%;
    float: left;
    &:hover {
      border-right: 3px solid #42b883;
      border-left: 3px solid #42b883;
    }
  }
  .fab {
    font-size: 24px;
    &.js-logo {
      color: #42b883;
    }
  }
  .buttons {
    i.fab {
      color: rgb(107, 128, 122);
      margin-left: 20px;
      margin-right: 10px;
      &:hover {
        color: #42b883;
      }
    }
  }
}

.edit-detail {
  .input[readonly] {
    background-color: #fafafa;
  }
}

.content-title-group {
  margin-bottom: 16px;
  h2 {
    border-left: 16px solid #42b883;
    border-bottom: 2px solid #42b883;
    padding-left: 8px;
    padding-right: 16px;
    display: inline-block;
    text-transform: uppercase;
    color: #555;
    letter-spacing: 0px;
    &:hover {
      color: #42b883;
    }
  }
  h3 {
    border-left: 16px solid #42b883;
    border-bottom: 2px solid #42b883;
    padding-left: 8px;
    padding-right: 16px;
    display: inline-block;
    text-transform: uppercase;
    color: #555;
    letter-spacing: 0px;
    &:hover {
      color: #42b883;
    }
  }
  button.button {
    border: 0;
    color: #999;
    &:hover {
      color: #42b883;
    }
  }
}
ul.list {
  box-shadow: none;
}
div.card-content {
  background-color: #fafafa;
  .name {
    font-size: 28px;
    color: #000;
  }
  .description {
    font-size: 20px;
    color: #999;
  }
  background-color: #fafafa;
}
.card {
  margin-bottom: 2em;
}

label.label {
  font-weight: normal;
}

p.card-header-title {
  background-color: #42b883;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  display: block;
  padding-left: 24px;
}
.card-footer button {
  font-size: 16px;
  i {
    margin-right: 10px;
  }
  color: #888;
  &:hover {
    color: #42b883;
  }
}

.modal-card-foot button {
  display: inline-block;
  width: 80px;
}

.modal-card-head,
.modal-card-body {
  text-align: center;
}

.field {
  margin-bottom: 0.75rem;
}

.navbar-burger {
  margin-left: auto;
}

button.link {
  background: none;
  border: none;
  cursor: pointer;
}

input.invalid,
textarea.invalid,
select.invalid {
  border-left: 10px red solid !important;
}

.list-item {
  color: #000;
  &:hover {
    color: #42b883;
  }
  &.is-active {
    background-color: #42b883;
    border-radius: 0;
    border-top: #fff solid 1px;
    border-bottom: #fff solid 1px;
    color: #fff;
  }
}

label.input {
  background-color: #e5e5e5;
  border: 1px solid #ccc;
}

p.comment {
  margin: 8px;
}

img {
  float: left; 
  
   border-radius: 50%;  
   margin-bottom: 30px;
    width: 250px;
  
    
}
img:hover {
  transform: scaleX(-1);
}

</style>
