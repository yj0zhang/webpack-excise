<template>
    <div>
        welcome {{ username }}
    </div>
</template>

<script>
import Vue from "vue"

export default {
    name: "app",
    data: () => {
        return {
            username: 'zhang',
        }
    }
}
</script>
