<template>
    <div class="bs-example container">
        <table class="table table-striped" style="margin-bottom: 0px">
            <thead>
            <tr>
                <th>#</th>
                <th>name</th>
                <th>area</th>
                <th>picture</th>
                <th>comment</th>
                <th>create_time</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="item in memberList">
                <tr>
                    <th v-text="item.id"></th>
                    <td v-text="item.name"></td>
                    <td v-text="item.area"></td>
                    <td>
                        <a :href="item.picture" v-show="isShowPicture(item)" target="_blank">
                            <img :src="item.picture" width="50px" height="50px"/>
                        </a>
                    </td>
                    <td v-text="item.comment"></td>
                    <td v-text="item.create_time"></td>
                </tr>
            </template>
            </tbody>
        </table>
        <pagination-bar :request-page="requestPage" :page-size="pageSize" :total-count="totalCount"
                        @on-page-item-change="onPageItemChange"></pagination-bar>
    </div>
</template>

<script>

    import MemberManager from "../assets/js/MemberManager.js";
    import PaginationBar from "./PaginationBar.vue";

    let memberManager = new MemberManager();
    let defaultPageSize = 10;

    export default {
        components: {
            'pagination-bar': PaginationBar
        },
        name: 'page-content',
        data() {
            return {
                requestPage: 1,
                pageSize: defaultPageSize,
                totalCount: 0,
                memberList: []
            }
        },
        methods: {
            onPageItemChange: function (page) {
                this.requestPage = page;
                this.loadMemberList(page, defaultPageSize);
            },
            loadMemberList: function (requestPage, pageSize) {
                let self = this;
                memberManager.getMemberList(requestPage, pageSize, function (ret, isSuccess) {
                    if (isSuccess) {
                        self.requestPage = requestPage;
                        self.pageSize = pageSize;
                        self.totalCount = ret.result.totalCount;
                        self.memberList = ret.result.data;
                    } else {
                        self.requestPage = 1;
                        self.pageSize = pageSize;
                        self.totalCount = 0;
                        self.memberList = [];
                    }
                })
            },
            isShowPicture: function (item) {
                if (item.picture == "") {
                    return false;
                } else {
                    return true;
                }
            }
        },
        mounted: function () {
            this.loadMemberList(1, defaultPageSize);
        }
    }
</script>

<style>
    .bs-example {
        background-color: #fff;
        border-color: #ddd;
        border-width: 1px;
        border-radius: 6px 6px 6px 6px;
        -webkit-box-shadow: none;
        box-shadow: none;
        position: relative;
        padding: 15px 15px 15px 15px;
        border-style: solid;
    }
</style>