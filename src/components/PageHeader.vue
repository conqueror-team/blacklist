<template>
    <div class="header">
        <h1 style="text-align: center">黑名单系统</h1>

        <ul class="nav nav-pills navbar-form" style="margin-bottom: 10px;">
            <li role="presentation" class="active"><a href="#">黑名单</a></li>
            <li role="presentation"><a href="http://bbs.dnfzhengfuzhe.com/forum.php" target="_blank">论坛</a></li>
            <li role="presentation"><a
                    href="http://luke.dnfzhengfuzhe.com/" target="_blank">塔罗牌小工具</a>
            </li>
            <li role="presentation"><a
                    href="http://bbs.dnfzhengfuzhe.com/forum.php?mod=viewthread&amp;tid=59&amp;extra=" target="_blank">加入我们</a>
            </li>
            <li role="presentation"><a href="#">Create By Jcr</a></li>
            <li role="presentation" style="margin-top: 5px;float:right;margin-right: -40px">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="搜索名称" v-model="searchKeyword">
                </div>
                <button type="button" class="btn btn-primary" @click="search()">搜索</button>
            </li>
            <li role="presentation" style="float:right;"><a href="#" style="color:red">管理黑名单</a></li>
        </ul>
    </div>
</template>

<script>

    import MemberManager from "../assets/js/MemberManager";
    import EventBus from "../assets/js/EventBus.js";
    let memberManager = new MemberManager();
    let bus = EventBus.getBus();
    export default {
        name: 'page-header',
        data() {
            return {
                searchKeyword:''
            }
        },
        methods:{
            search:function () {
                bus.$emit("onSearchClick",this.searchKeyword);
            }
        }
    }
</script>

<style>

</style>