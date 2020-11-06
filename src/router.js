import Vue from "vue"
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    router: [{
        path: '/',
        name: 'home',
        component: Home
        },
        {
            path: '/About',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import('./views/About.vue') }
        },
        {
            path: '/Blog',
            name: 'blog',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import('./views/Blog.vue') }
        }
        {
          path: '/Projects',
          name: 'blog',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => { return import('./views/Projects.vue') }
      }
    ]
})
