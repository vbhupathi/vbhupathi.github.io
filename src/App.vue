<template>
    <div id="app">
        <HeaderBar></HeaderBar>
        <div class="main-section content-title-group">
          <h2 class="title">VBhupathi</h2>
        </div>
    </div>
</template>

<script>

    import HeaderBar from '@/components/HeaderBar';
    export default {
        name: 'App',
        components: { HeaderBar },
    };
</script>

 <style lang="scss">
 @import '@/design/index.scss';
 </style>
