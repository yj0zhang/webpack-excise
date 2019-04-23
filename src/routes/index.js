import login from '../app/login/login';

const routes = [
    {
        path: "/",
        name: "root",
        redirect: {
            path: "/login"
        }
    },
    {
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: "/home",
        name: "home",
        component: function(resolve) {
            require(['../app/home/home'], resolve)
        }
    },
    {
        path: "*",
        name: "404"
    }
]

export {routes}