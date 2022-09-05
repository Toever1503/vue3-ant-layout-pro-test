import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
import BasicLayout from '../layouts/BasicLayout.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            meta: {title: 'Home'},
            component: BasicLayout,
            redirect: '/dashboard',
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    meta: {title: 'Tổng quan', icon: 'icon-tuihuobaozhang'},
                    component: () => import('../views/DashboardHomeView.vue'),
                },
                {
                    path: '/posts',
                    name: 'post_management',
                    meta: {title: 'Quản lý bài đăng', icon: 'icon-antdesign'},
                    component: () => import('../views/posts/PostHomeView.vue'),
                },
                {
                    path: '/courses',
                    name: 'course_management',
                    meta: {title: 'Quản lý khóa học', icon: 'icon-antdesign'},
                    component: () => import('../views/courses/CourseHomeView.vue'),
                },
                {
                    path: '/teachers',
                    name: 'teacher_management',
                    meta: {title: 'Quản lý giáo viên', icon: 'icon-antdesign'},
                    component: () => import('../views/teachers/TeacherHomeView.vue'),
                },
                {
                    path: '/tags',
                    name: 'tag_management',
                    meta: {title: 'Quản lý thẻ', icon: 'icon-antdesign'},
                    component: () => import('../views/tags/TagHomeView.vue'),
                },
                {
                    path: '/coupons',
                    name: 'coupon_management',
                    meta: {title: 'Quản lý coupon', icon: 'icon-antdesign'},
                    component: () => import('../views/coupons/CouponHomeView.vue'),
                },
                {
                    path: '/orders',
                    name: 'order_management',
                    meta: {title: 'Quản lý đơn hàng', icon: 'icon-antdesign'},
                    component: () => import('../views/orders/OrderHomeView.vue'),
                },
                {
                    path: '/statistics',
                    name: 'statistics',
                    meta: {title: 'Thống kê', icon: 'icon-tuijian', flat: true},
                    component: () => import('../views/statistics/StatisticHomeView.vue'),
                    redirect: () => ({name: 'page1'}),
                    children: [
                        {
                            path: 'page-1',
                            name: 'page1',
                            meta: {title: 'page1'},
                            component: () => import('../views/admins/PageInfo.vue'),
                        },
                        {
                            path: 'page-2',
                            name: 'page2',
                            meta: {title: 'page2'},
                            component: () => import('../views/admins/PageTypography.vue'),
                        },
                    ],
                },
                {
                    path: '/reviews',
                    name: 'review_management',
                    meta: {title: 'Quản lý đánh giá', icon: 'icon-antdesign'},
                    component: () => import('../views/reviews/ReviewHomeView.vue'),
                },
                {
                    path: '/medias',
                    name: 'media_management',
                    meta: {title: 'Quản lý file', icon: 'icon-antdesign'},
                    component: () => import('../views/medias/MediaHomeView.vue'),
                },
                {
                    path: '/users',
                    name: 'user_management',
                    meta: {title: 'Quản lý người dùng', icon: 'icon-antdesign'},
                    component: () => import('../views/users/UserHomeView.vue'),
                }
            ],
        },
    ],
})

export default router
