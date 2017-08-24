<template>
    <div>
        <ul class="pagination" style="">
            <li :class="{disabled:!isPrevious}">
                <a href="#" aria-label="Previous">
                    <span>&laquo;</span>
                </a>
            </li>
            <template v-for="item in pageList">
                <li :class="{active:item.isActive}"><a href="#" v-text="item.pageText"></a></li>
            </template>
            <li :class="{disabled:!isNext}">
                <a href="#" aria-label="Next">
                    <span>&raquo;</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'pagination-bar',
        props: ['requestPage', 'pageSize', 'totalCount'],
        data() {
            return {}
        },
        methods: {},
        mounted: function () {

        },
        computed: {
            pageList: function () {
                let requestPage = parseInt(this.requestPage);
                let pageSize = parseInt(this.pageSize);
                let totalCount = parseInt(this.totalCount);
                let totalPage = parseInt(totalCount % pageSize == 0 ? totalCount / pageSize : totalCount / pageSize + 1);
                return buildPageList(requestPage, pageSize, totalPage);
            },
            isPrevious: function () {
                if (this.requestPage > 1) {
                    return true;
                } else {
                    return false;
                }
            },
            isNext: function () {
                let totalCount = parseInt(this.totalCount);
                let pageSize = parseInt(this.pageSize);
                let totalPage = parseInt(totalCount % pageSize == 0 ? totalCount / pageSize : totalCount / pageSize + 1);
                if (this.requestPage < totalPage) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    function buildPageList(requestPage, pageSize, totalPage) {
        let list = [];
        if (totalPage <= 7) {
            for (let i = 1; i <= totalPage; i++) {
                list.push(i == requestPage ? buildPage(i, true) : buildPage(i));
            }
        } else {
            if (requestPage > 4) {
                list.push(buildPage(1));
                list.push(buildPage("..."));
                if (totalPage - requestPage >= 4) {
                    list.push(buildPage(requestPage - 1));
                    list.push(buildPage(requestPage,true));
                    list.push(buildPage(requestPage + 1));
                    list.push(buildPage("..."));
                    list.push(buildPage(totalPage));
                } else {
                    for (let i = totalPage - 4; i <= totalPage; i++) {
                        list.push(i == requestPage ? buildPage(i, true) : buildPage(i));
                    }
                }
            } else {
                for (let i = 1; i <= 5; i++) {
                    list.push(i == requestPage ? buildPage(i, true) : buildPage(i));
                }
                list.push(buildPage("..."));
                list.push(buildPage(totalPage));
            }
        }
        return list;
    }

    function buildPage(pageText, isActive = false) {
        return {
            pageText: pageText,
            isActive: isActive
        }
    }
</script>

<style>

</style>