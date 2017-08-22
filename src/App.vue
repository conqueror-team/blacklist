<template>
    <div id="app" class="container">
        <page-header></page-header>
        <page-content></page-content>
    </div>
</template>

<script>

    import PageHeader from './components/PageHeader.vue';
    import PageContent from './components/PageContent.vue';

    export default {
        components: {
            'page-content': PageContent,
            'page-header': PageHeader
        },
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
    }
</script>

<style>

</style>
