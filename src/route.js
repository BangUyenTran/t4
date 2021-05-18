import Manager from '@/pages/Manager';
import VueRouter from 'vue-router';

const router = new VueRouter({
    routes: [
        // dynamic segments start with a colon
        { path: '/manager', component: Manager }
    ]
})

export default router