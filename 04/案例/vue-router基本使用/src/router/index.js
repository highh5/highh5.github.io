import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/profile/:id',
    component:()=> import('../components/profile'),
    meta:{
      title:'档案'
    }
  },
  {
    path: '/home',
    component: ()=> import('../components/home'),
    children:[
      {
        path:'',
        redirect: 'message'
      },
      {
        path:'message',
        component:() => import('../components/message')
      },
      {
        path:'news',
        component:() => import('../components/news')
      }
    ],
    meta:{
      title:'首页'
    }
  },
  {
    path: '/about',
    component: ()=> import('../components/about'),
    meta:{
      title:'关于我们'
    }
  },
  {
    path: '/user/:id',
    component: ()=> import('../components/user'),
    meta:{
      title:'用户中心'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title;
  next();
})

export default router
