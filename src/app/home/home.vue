<template>
    <div>
        {{text}}
        <router-link to="/login">登陆</router-link>
        <br>
        <el-button type="primary">主要按钮</el-button>
        <br>
        <button @click="fetchInfo()">home获取用户信息</button>
    </div>
</template>

<style lang="scss" scoped>

    div {
        font-size: 24px;
    }
</style>


<script>
import { getUserInfo } from "@/api/user";
export default {
    name: "home",
    data() {
        return {
            text: "首页"
        }
    },
    methods: {
        fetchInfo: () => {
            getUserInfo()
        }
    }
}
</script>