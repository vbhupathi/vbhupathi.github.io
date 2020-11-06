import Vue from "vue"
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import('./views/about.vue') }
        },
        {
            path: '/blog',
            name: 'blog',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import('./views/blog.vue') }
        },
        {
          path: '/projects',
          name: 'blog',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => { return import('./views/projects.vue') }
      }
    ]
})

