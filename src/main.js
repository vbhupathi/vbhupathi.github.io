 import Vue from 'vue';
 import App from './app';
 import router from './router/router'
 Vue.config.productionTip = false;



 const app = new Vue({
   router,
   render: h => h(App)
 }).$mount('#app');

