import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import CheckInComponent from "@/registration/pages/check-in.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', name: 'home', component: HomeComponent, meta: { title: 'Home'}},
        { path: '/check-in', name: 'check-in', component: CheckInComponent, meta: { title: 'Check In'}},
        { path: '/',                        redirect: '/home'}

    ]
})

router.beforeEach((to, from, next) =>{
    let baseTitle = 'Eventify';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})

export default router;