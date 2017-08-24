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
        <pagination-bar :requestPage="requestPage" :pageSize="pageSize" :totalCount="totalCount"></pagination-bar>
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
            'pagination-bar': PaginationBar},
        name: 'page-content',
        data() {
            return {
                requestPage:0,
                pageSize:10,
                totalCount:105
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