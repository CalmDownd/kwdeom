import { createRouter, createWebHashHistory} from 'vue-router'
import routes from './routes'
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior:(to, from, pos) => pos || {top : 0 }
})
// 路由跳转前
router.beforeEach((to, from, next) => {
    next()
})
// 路由跳转后
router.afterEach((to, from) => {
    
});
export default router