import Index from '../views/index/Index.vue'
import indexHome from '../views/index/indexcomponent/indexHome.vue' //主页
import sort from '../views/index/singersort/sort.vue'  //歌曲排行
import singer from '../views/index/singers/singers.vue' //歌手详情
import singdetail from '../views/songdetail/songdetail.vue' //歌单详情
import error from '../views/error/error.vue'
import down from '../views/down/down.vue'
export default [
    {
        path: '/',
        component: Index,
        children: [
            {
                path: 'index',
                component: indexHome,
            },
            {
                path: 'sort',
                component: sort
            },
            {
                path: 'songer',
                component: singer
            },
            {
                path:'',
                redirect:'/index'
            },
            {
                path: '/songlist',
                component: singdetail
            },
        ]
    },
    {
        path:'/down',
        component:down
    },

    {
        path:'/:url',
        component:error
    }
]