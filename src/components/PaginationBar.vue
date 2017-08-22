<template>
    <div>
        <ul class="pagination" style="">
            <li>
                <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <template v-for="item in pageList">
                <li class=""><a href="#" v-text="item"></a></li>
            </template>
            <li>
                <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name:'pagination-bar',
        props:['requestPage','pageSize','totalCount'],
        data() {
            return {

            }
        },
        methods:{

        },
        mounted:function () {

        },
        computed:{
            pageList:function () {
                let page = parseInt(this.requestPage);
                return [page,page+2,page+3,page+4,page+5];
            }
        }
    }
</script>

<style>

</style>