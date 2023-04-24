import Vue from "vue";
import VueRouter from "vue-router";
import DetailPage from '../views/DetailPage.vue'
import Home from '../views/Home.vue'
import SubscribePage from '../views/SubscribePage.vue'


Vue.use(VueRouter);

const routes = [
    {path:'/', component:Home, name:'home-page'},
    {path:'/details-pack', component:DetailPage, name:'detail-page'},
    {path:'/subscribe', component:SubscribePage, name:'reserv-page'},

    
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
