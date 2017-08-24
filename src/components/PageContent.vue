<template>
    <div class="bs-example container">
        <table class="table table-striped" style="margin-bottom: 0px">
            <thead>
            <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th>3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
            </tr>
            </tbody>
        </table>
        <pagination-bar :request-page="requestPage" :page-size="pageSize" :total-count="totalCount"
                        @on-previous-click="onPreviousClick"
                        @on-next-click="onNextClick"
                        @on-previous-jump-click="onPreviousJumpClick"
                        @on-next-jump-click="onNextJumpClick"
                        @on-page-item-click="onPageItemClick"></pagination-bar>
        <input type="number" v-model="requestPage"/>
        <input type="number" v-model="pageSize"/>
        <input type="number" v-model="totalCount"/>
    </div>
</template>

<script>

    import MemberManager from "../assets/js/MemberManager.js";
    import PaginationBar from "./PaginationBar.vue";

    let a = new MemberManager();

    export default {
        components: {
            'pagination-bar': PaginationBar
        },
        name: 'page-content',
        data() {
            return {
                requestPage: 1,
                pageSize: 10,
                totalCount: 105
            }
        },
        methods: {
            onPreviousClick: function () {
                this.requestPage--;
            },
            onNextClick: function () {
                this.requestPage++;
            },
            onPreviousJumpClick: function () {
                this.requestPage -= 2;
            },
            onNextJumpClick: function () {
                this.requestPage += 2;
            },
            onPageItemClick:function (page) {
                this.requestPage = page;
            }
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