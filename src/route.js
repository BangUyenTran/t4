import VueRouter from 'vue-router';
import Manager from '@/pages/Manager';
import DigitalEdition from '@/pages/DigitalEdition';
import PrintEditor from '@/pages/PrintEditor';

const routes = [
    { path: '/manager', component: Manager },
    { path: '/print', component: PrintEditor },
    { path: '/digital', component: DigitalEdition },
]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router