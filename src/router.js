import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/views/page-not-found';

Vue.use(Router);

const parseProps = r => ({ id: parseInt(r.params.id) });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "bundle.heroes" */ './views/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "bundle.about" */ './views/about.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () =>
        import(/* webpackChunkName: "bundle.about" */ './views/blog.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () =>
        import(/* webpackChunkName: "bundle.about" */ './views/projects.vue'),
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
