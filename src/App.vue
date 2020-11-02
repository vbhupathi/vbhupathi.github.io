<template>
    <div id="app">
        <Home msg="Hello world!" />
        <NavMenu :nav-links="navLinks" :image-path="reqruire('./assests/logo.png')"
                 background="#fff" link-color="#777"
                 hoverBackground="#ddd"/>
        <router-view />

    </div>
</template>

<script>
    import Home from './views/Home.vue';
    import NavMenu from './components/NavMenu.vue';
    export default {
        name: 'app',
        components: {
            Home,
            NavMenu
        },
        data: () => {
            navLinks: [
                {
                    text: 'Tech',
                    path: '/technology',
                    icon: ''

                },
                {
                    text: 'Science',
                    path: '/science',
                    icon: ''

                },
                {
                    text: 'Entertainment',
                    path: '/entertainment',
                    icon: ''

                },
                {
                    text: 'Reviews',
                    path: '/reviews',
                    icon: ''

                }
            ]
        },
    };
</script>

<style lang="scss">
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

figure{
    margin: 0;

}
body{
    margin: 0;
}

#app{
    font-family:'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    text-align:center;
    color: #2c3e50;

}

#nav{
    padding: 30px;
    a{
         font-weight:bold;
         color:#2c3e50;
         &.router-link-exact-active{
                                       color:#42b983;
                                   }
     }

    }
}
</style>

