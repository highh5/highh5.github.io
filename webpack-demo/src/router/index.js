import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";

Vue.use(VueRouter);

var router = new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/about',
      component:About,
    }
  ]
});
export default router;
