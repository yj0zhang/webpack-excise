<template>
    <div>
        登陆
        <router-link to="/home">首页</router-link>
        <my-button></my-button>
    </div>
</template>

<script>
import MyButton from "../../components/Button";
export default {
    name: "login",
    components: [
        MyButton
    ]
}
</script>
