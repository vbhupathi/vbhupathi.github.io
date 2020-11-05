 import Vue from 'vue';
 import App from '@/app';
 import router from './router'
 Vue.config.productionTip = false;

 new Vue({
   router,
   render: h => h(App)
 }).$mount('#app');


 // const app = Vue.createApp({
 //     data:function(){
 //         return {
 //             name: 'Venkata Bhupathi',
 //             aboutMe: 'I am passionately inquisitive about web & software design and development. I enjoy working in a group to transform business requirements into technical solutions, particularly when I get the chance to apply standards of software engineering and mathematical analysis to the design, development, testing, and evaluation of said software. Currently working, as a Software Developer at Indiana University, on innovative software projects for the High. Educ. industry. Graduated from Central Connecticut State University with a Masters Degree in Computer Information Technology.',
 //             image:'./assets/images/Person.jpg',
 //         }
 //     }
 // })
