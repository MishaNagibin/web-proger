import Vue from 'vue'
import Router from 'vue-router'
import vHome from '@/views/home/Home.vue'
import vCourses from '@/views/courses/Courses.vue'
import vCourse from '@/views/course/Course.vue';
import vTechnologies from '@/views/technologies/Technologies.vue';

Vue.use(Router)

export const SITE_TITLE = "Web-Proger";

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        (document.getElementById("app") as HTMLInputElement).scrollTo({ top: 0, left: 0, behavior: "smooth" })
    },
    routes: [
        {
            name: 'Home',
            path: '/',
            component: vHome,
            meta: {
                title: `${SITE_TITLE} | Главная`,
                breadcrumbs: { name: 'Главная страница' }
            },
        },
        {
            name: 'Technologies',
            path: '/technologies',
            component: vTechnologies,
            meta: {
                title: `${SITE_TITLE} | Технологии`,
                breadcrumbs: [
                    { name: 'Главная страница', routeName: 'Home' },
                    { name: 'Технологии' }
                ]
            }
        },
        {
            name: 'Courses',
            path: '/courses',
            component: vCourses,
            meta: {
                title: `${SITE_TITLE} | Курсы`,
                breadcrumbs: [
                    { name: 'Главная страница', routeName: 'Home' },
                    { name: 'Курсы' }
                ]
            },
            children: [
                {
                    name: "Frontend",
                    path: "frontend/:slug?",
                    component: vCourses,
                    props: true,
                    meta: {
                        title: `${SITE_TITLE} | Frontend`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Frontend' }
                        ]
                    },
                },
                {
                    name: "Backend",
                    path: "backend/:slug?",
                    component: vCourses,
                    props: true,
                    meta: {
                        title: `${SITE_TITLE} | Backend`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Backend' }
                        ]
                    },
                },
                {
                    name: "Layout",
                    path: "layout",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | Вёрстка`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Вёрстка' }
                        ]
                    },
                },
                {
                    name: "WebDesign",
                    path: "web-design",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | Веб-дизайн`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Веб-дизайн' }
                        ]
                    },
                },
                {
                    name: "Cms",
                    path: "cms",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | CMS`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'CMS' }
                        ]
                    },
                },
                {
                    name: "Seo",
                    path: "seo",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | SEO`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'SEO' }
                        ]
                    },
                },
                {
                    name: "MobileDevelopment",
                    path: "mobile-development",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | Мобильная разработка`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Мобильная разработк' }
                        ]
                    },
                },
                {
                    name: "Gamedev",
                    path: "gamedev",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | GameDev`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'GameDev' }
                        ]
                    },
                },
                {
                    name: "Testing",
                    path: "testing",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | Тестирование`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Тестирование' }
                        ]
                    },
                },
                {
                    name: "SystemProgramming",
                    path: "system-programming",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | Системное программирование`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Системное программирование' }
                        ]
                    },
                },
                {
                    name: "Graphic",
                    path: "graphic",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | Графика`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Графика' }
                        ]
                    },
                },
                {
                    name: "Modeling",
                    path: "modeling",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | Моделирование`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Вёрстка' }
                        ]
                    },
                },
                {
                    name: "Video",
                    path: "video",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | Видеомонтаж`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Вёрстка' }
                        ]
                    },
                },
                {
                    name: "Other",
                    path: "other",
                    component: vCourses,
                    meta: {
                        title: `${SITE_TITLE} | Другое`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Вёрстка' }
                        ]
                    },
                },
            ]
        },
        {
            name: 'Course',
            path: '/course/:courseID(\\d+)-:courseSlug',
            component: vCourse,
            props: r => ({ ...r.params, courseID: Number(r.params.courseID) }),
            meta: {
                title: `${SITE_TITLE} | Курс`,
                breadcrumbs: [
                    { name: 'Главная страница', routeName: 'Home' },
                    { name: 'Курсы', routeName: 'Courses' },
                ]
            }
        },
    ]
})
