<template>
    <div id="app" class="container">
        <page_header></page_header>
        <page_content></page_content>
    </div>
</template>

<script>

    import page_header from './components/page_header.vue';
    import page_content from './components/page_content.vue';

    export default {
        components: {
            page_content,
            page_header},
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
