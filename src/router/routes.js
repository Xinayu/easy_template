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


// ------------ login
const login = {
    path: '/login',
    name: 'login',
    meta: {
        title: '大虾请登录'
    },
    component: () => import('@/views/login/login.vue')
}



// ------------ 导出
export const routes = [
    home,
    login
];