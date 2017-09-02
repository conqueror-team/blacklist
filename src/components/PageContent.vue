<template>
    <div class="bs-example container">
        <table class="table table-striped" style="margin-bottom: 0px">
            <thead>
            <tr>
                <!--<th>#</th>-->
                <th>ID/名称</th>
                <th>跨区</th>
                <th>相关截图</th>
                <th>备注</th>
                <th>创建时间</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="item in memberList">
                <tr>
                    <!--<th v-text="item.id"></th>-->
                    <td v-text="item.name"></td>
                    <td v-text="item.area"></td>
                    <td>
                        <a :href="'showImage?href='+item.picture" v-show="isShowPicture(item)" target="_blank">
                            <img :src="item.picture" width="80px" height="80px"/>
                        </a>
                    </td>
                    <td v-text="item.comment"></td>
                    <td v-text="convertTime(item.create_time)"></td>
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
    import EventBus from "../assets/js/EventBus.js";
    import BootboxManager from "../assets/js/BootboxManager.js";

    let memberManager = new MemberManager();
    let bootbox = new BootboxManager();
    let defaultPageSize = 10;
    let bus = EventBus.getBus();
    let self = this;

    function registerEvent(self) {
        bus.$on("onSearchClick", function (searchKeyword) {
            if (searchKeyword == '') {
                self.loadMemberList(1, defaultPageSize);
                return;
            }
            memberManager.searchMember(searchKeyword, function (ret, isSuccess) {
                if (isSuccess && ret.code == 0 && ret.result.totalCount > 0) {
                    self.requestPage = 1;
                    self.pageSize = defaultPageSize;
                    self.totalCount = ret.result.totalCount;
                    self.memberList = ret.result.data;
                } else {
                    bootbox.showErrorMessage('无搜索结果');
                    self.loadMemberList(1, defaultPageSize);
                }
            })
        });
    }


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
                    if (isSuccess && ret.code == 0) {
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
            },
            convertTime:function (timestamp) {
                let date = new Date();
                date.setTime(timestamp * 1000);
                return date.toLocaleString();
            }
        },
        mounted: function () {
            this.loadMemberList(1, defaultPageSize);
            registerEvent(this);
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