<template>
    <div class="bs-example">
        <table class="table">
            <thead>
            <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th>3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'page_content',
        data() {
            return {

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
        padding: 15px 15px 15px;
        margin: 0 -15px 15px;
        border-style: solid;
    }
</style>