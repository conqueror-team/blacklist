<template>
    <div id="app">
        <page_header></page_header>
    </div>
</template>

<script>

    import page_header from './components/header.vue'

    export default {
        components: {page_header},
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
