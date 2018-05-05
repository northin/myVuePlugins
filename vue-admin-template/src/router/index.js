import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/Login'
import Project from '@/view/Project'
import AdminForm from '@/view/AdminForm'
import AdminForm2 from '@/view/AdminForm2'
import Form2 from '@/view/Form2'
import Editor from '@/view/Editor'
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
    },
    {
      path: '/adminForm2',
      name: 'AdminForm2',
      component: AdminForm2
    },
    {
      path: '/form2',
      name: 'Form2',
      component: Form2
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    }
  ]
})
