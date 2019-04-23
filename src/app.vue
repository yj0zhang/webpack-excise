<template>
    <div>
        welcome {{ username }} 
        <img :src="logo">
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
    div {
        margin: 0;
    }
</style>

<script>

import logo from './static/images/polar-bear.jpg';

export default {
    name: "app",
    data: () => {
        return {
            username: 'zhang',
            logo: logo
        }
    }
}
</script>

