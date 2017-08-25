<template>
    <div>
        <ul class="pagination" style="">
            <li :class="{disabled:!isPrevious}">
                <span @click="onPreviousClick()">&laquo;</span>
            </li>
            <template v-for="(item,index) in pageList">
                <li :class="{active:item.isActive}">
                    <span v-text="item.pageText" @click="onPageItemClick(index)"></span></li>
            </template>
            <li :class="{disabled:!isNext}">
                <span @click="onNextClick()">&raquo;</span>
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
        methods: {
            onPageItemClick: function (cIndex) {
                let list = this.pageList;
                let index = parseInt(cIndex);
                if (index == 1 && list[index].pageText == "...") {
                    this.$emit("on-page-item-change", this.requestPage - 2);
                } else if (index == 5 && list[index].pageText == "...") {
                    this.$emit("on-page-item-change", this.requestPage + 2);
                } else {
                    this.$emit("on-page-item-change", list[index].pageText);
                }
            },
            onPreviousClick: function () {
                if (this.isPrevious) {
                    this.$emit("on-page-item-change", this.requestPage - 1);
                }
            },
            onNextClick: function () {
                if (this.isNext) {
                    this.$emit("on-page-item-change", this.requestPage + 1);
                }
            }
        },
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
                    list.push(buildPage(requestPage, true));
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
    span:hover{
        cursor:pointer
    }
</style>