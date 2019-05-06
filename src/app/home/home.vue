<template>
    <div>
        {{text}}
        <router-link to="/login">登陆</router-link>
        <el-button type="primary">主要按钮</el-button>
        <button @click="fetchInfo()">home获取用户信息</button>
        <my-button :type="'warn'"></my-button>
    </div>
</template>

<style lang="scss" scoped>

    div {
        font-size: 24px;
    }
</style>


<script>
import { getUserInfo } from "@/api/user";
import MyButton from "@/components/MyButton"
export default {
    name: "home",
    components: {
        MyButton
    },
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