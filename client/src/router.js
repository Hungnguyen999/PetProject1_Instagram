import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import ModeratorIndex from './views/ModeratorIndex.vue'
import UserIndex from './views/UserIndex.vue'
import userRouter from './user-modules/router.js'
import notFound from './views/NotFound/404.vue'
// import HomePage from './user-modules/HomePage/Homepage.vue'
// import LoginPage from './components/Authentication/Login.vue'
// import RegisterPage from './components/Authentication/Register.vue'
const BaseRoutes = [
    {
        path: '/moderator',
        component: ModeratorIndex,
    },
    {
        path : '/',
        component: UserIndex,
        children:  userRouter
    },
    // nếu không sẽ chuyển đến trang home
    { path: '*', redirect: '/404',component: notFound, }
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: BaseRoutes,
    scrollBehavior() {
        return { x:0, y:0 }
    }
})

router.beforeEach((to, from, next) => {
// chuyển đến trang login nếu chưa được login
const publicPages = ['/login', '/register'];
const authRequired = !publicPages.includes(to.path);
const loggedIn = localStorage.token;

if (authRequired && !loggedIn) {
    return next('/login');
}
if(!authRequired && loggedIn){
    return next('/');
}

next();
})
export default router