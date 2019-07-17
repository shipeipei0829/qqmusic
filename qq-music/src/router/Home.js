import Tuijian from '../components/tuijian'
import Top from '../components/top'
import Search from '../components/search'

const Routes = [
    {
        path: '/index/tuijian',
        component: Tuijian
    },
    {
        path: '/index/top',
        component: Top
    },
    {
        path: '/index/search',
        component: Search
    },
    {
        path:'*',
        redirect:'/index/tuijian'
    }
]
export default Routes;