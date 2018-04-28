import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/Login'
import Project from '@/view/Project'
import AdminForm from '@/view/AdminForm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Project',
      component: Project
    },
    {
      path: '/adminForm',
      name: 'AdminForm',
      component: AdminForm
    }
  ]
})
