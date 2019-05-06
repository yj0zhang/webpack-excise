<template>
    <div>
        登陆
        <router-link to="/home">home</router-link>
        <button @click="fetchInfo()">获取用户信息</button>
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
