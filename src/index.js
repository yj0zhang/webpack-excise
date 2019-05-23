import Vue from "vue";
import App from "./app";
import vueRouter from "vue-router";
//element整个包太大了，按需引入
import { Button, Select } from "element-ui";
import { routes } from "./routes/index";

Vue.use(vueRouter);
Vue.use(Button)
Vue.use(Select)

const router = new vueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})