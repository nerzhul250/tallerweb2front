import Vue from 'vue';
import Router from 'vue-router'
import users from './views/users'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name: 'users',
            component: users
        }
    ]
})