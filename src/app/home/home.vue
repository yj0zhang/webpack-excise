<template>
    <div>
        首页
        <router-link to="/login">登陆</router-link>
        <el-button type="primary">主要按钮</el-button>
        <my-button></my-button>
    </div>
</template>

<style lang="scss" scoped>

    div {
        font-size: 24px;
    }
</style>


<script>
import MyButton from "../../components/Button"
export default {
    name: "home",
    components: [
        MyButton
    ]
}
</script>