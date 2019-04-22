<template>
    <div>
        <div>登录页面</div>
        <input type="text" placeholder="用户名" v-model="username" name="username">
        <input type="password" placeholder="密码" v-model="password" name="password">
    </div>
</template>

<style lang="scss" scoped>
    @import "../_variables.scss";
    input {
        border: 1px solid $clr_gray1;
    }
</style>



<script>
export default {
    name: "login",
    data: () => {
        return {
            username: "",
            password: ""
        }
    }
}
</script>
