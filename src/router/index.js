import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login';
import Main from '@/components/Main';
//
import UserList from '@/components/user/List';
import Profile from '@/components/user/Profile';
//
// 404
import NotFound from '@/components/NotFound';
import Test from '@/components/test/Test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/test',
      component: Test
    },
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path: '/main',
      component: Main, // 嵌套路由
      props: true,
      children: [
        {path: '/user/Profile/:id', name: 'UserP', component: Profile, props: true},
        {path: '/user/List', component: UserList}
        // path,写的是服务端的网址，component中的才是真正要引入界面的地址
      ]
    },
    {
      path: '/login',
      component: Login
    }, {// 重定向
      path: '/home',
      redirect: '/main'// 重定向到Main的请求上，走/main的path
    }, {
      // 404
      path: '*',
      component: NotFound
    }
  ]
});
