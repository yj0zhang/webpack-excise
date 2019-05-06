<template>
    <div>
        <div>{{label}}</div>
        button type: {{type}}
    </div>
</template>

<script>
export default {
    name: "MyButton",
    props: {
        type: {
            default: "primary"
        }
    },
    data() {
        return {
            label: "公共组件测试"
        }
    }
}
</script>
