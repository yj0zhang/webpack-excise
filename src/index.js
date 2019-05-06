import Vue from "vue";
import App from "./app";
import vueRouter from "vue-router";
// import ElementUI from "element-ui";
// import 'element-ui/lib/theme-chalk/index.css'
import {routes} from "./routes/index";

Vue.use(vueRouter);
// Vue.use(ElementUI);

const router = new vueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})