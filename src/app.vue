<template>
    <div>
        welcome {{ username }}
    </div>
</template>

<style lang="scss" scoped>
    div {
        margin: 0;
    }
</style>


<script>

export default {
    name: "app",
    data: () => {
        return {
            username: 'zhang',
        }
    }
}
</script>
