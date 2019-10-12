/**
 * router的配置文件
 */

// ------------ 首页
const home = {
    path: '/',
    name: 'home',
    meta: {
        title: '目录结构制作'
    },
    component: () => import('@/views/home/home.vue')
}


// ------------ 导出
export const routes = [
    home
];