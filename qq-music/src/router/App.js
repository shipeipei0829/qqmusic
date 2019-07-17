//App.js一级路由
import Index from '../pages/index/index';
import List from '../pages/list/list';
import Play from '../pages/play/paly'
const routes = [
    {
        path: '/index',
        component: Index
    },
    {
        path: '/list/:id',
        component: List
    },
    {
        path: '/play/:id',
        component: Play
    },
    {
        path: '*',
        redirect: '/index'
    },
]
export default routes