<template>
    <div>
        登陆
        <router-link to="/home">home</router-link><br>
        <!-- <button @click="fetchInfo()">获取用户信息</button><br> -->
        <el-button @click="fetchInfo()">获取用户信息</el-button>
        <my-button></my-button>
    </div>
</template>

<script>
import MyButton from "@/components/MyButton";
import { getUserInfo } from "@/api/user";
export default {
    name: "login",
    components: {
        MyButton
    },
    methods: {
        fetchInfo: () => {
            getUserInfo()
        }
    }
}
</script>
