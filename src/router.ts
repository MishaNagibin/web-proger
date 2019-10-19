import Vue from 'vue'
import Router from 'vue-router'
import vHome from '@/views/home/Home.vue'
import vCourses from '@/views/courses/Courses.vue'
import vCourse from '@/views/course/Course.vue';
import vFrontend from '@/views/courses/Frontend.vue'
import vBackend from '@/views/courses/Backend.vue'
import vYii from '@/views/backend/Yii.vue'
import vNodeJS from '@/views/backend/NodeJS.vue'
import vPHP from '@/views/backend/PHP.vue'
import vMySQL from '@/views/backend/MySQL.vue'
import vPython from '@/views/backend/Python.vue'
import vSymfony from '@/views/backend/Symfony.vue'
import vPostgreSQL from '@/views/backend/PostgreSQL.vue'
import vLaravel from '@/views/backend/Laravel.vue'
import vRuby from '@/views/backend/Ruby.vue'
import vRubyOnRails from '@/views/backend/RubyOnRails.vue'
import vSharp from '@/views/backend/Sharp.vue'
import vJava from '@/views/backend/Java.vue'
import vSlim from '@/views/backend/Slim.vue'
import vGolang from '@/views/backend/Golang.vue'
import courses from './api/courses';

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
                    component: vFrontend,
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
                    path: "backend",
                    component: vBackend,
                    meta: {
                        title: `${SITE_TITLE} | Backend`,
                        breadcrumbs: [
                            { name: 'Главная страница', routeName: 'Home' },
                            { name: 'Курсы', routeName: 'Courses' },
                            { name: 'Backend' }
                        ]
                    },
                    children: [
                        {
                            name: "Yii",
                            path: "yii",
                            component: vYii,
                            meta: {
                                title: `${SITE_TITLE} | Yii`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'Yii' }
                                ]
                            },
                        },
                        {
                            name: "NodeJS",
                            path: "nodejs",
                            component: vNodeJS,
                            meta: {
                                title: `${SITE_TITLE} | NodeJS`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'NodeJS' }
                                ]
                            },
                        },
                        {
                            name: "PHP",
                            path: "php",
                            component: vPHP,
                            meta: {
                                title: `${SITE_TITLE} | PHP`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'PHP' }
                                ]
                            },
                        },
                        {
                            name: "MySQL",
                            path: "mysql",
                            component: vMySQL,
                            meta: {
                                title: `${SITE_TITLE} | MySQL`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'MySQL' }
                                ]
                            },
                        },
                        {
                            name: "Python",
                            path: "python",
                            component: vPython,
                            meta: {
                                title: `${SITE_TITLE} | Python`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'Python' }
                                ]
                            },
                        },
                        {
                            name: "Symfony",
                            path: "symfony",
                            component: vSymfony,
                            meta: {
                                title: `${SITE_TITLE} | Symfony`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'Symfony' }
                                ]
                            },
                        },
                        {
                            name: "PostgreSQL",
                            path: "postgresql",
                            component: vPostgreSQL,
                            meta: {
                                title: `${SITE_TITLE} | PostgreSQL`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'PostgreSQL' }
                                ]
                            },
                        },
                        {
                            name: "Laravel",
                            path: "laravel",
                            component: vLaravel,
                            meta: {
                                title: `${SITE_TITLE} | Laravel`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'Laravel' }
                                ]
                            },
                        },
                        {
                            name: "Ruby",
                            path: "ruby",
                            component: vRuby,
                            meta: {
                                title: `${SITE_TITLE} | Ruby`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'Ruby' }
                                ]
                            },
                        },
                        {
                            name: "RubyOnRails",
                            path: "ruby-on-rails",
                            component: vRubyOnRails,
                            meta: {
                                title: `${SITE_TITLE} | Ruby On Rails`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'Ruby On Rails' }
                                ]
                            },
                        },
                        {
                            name: "Sharp",
                            path: "sharp",
                            component: vSharp,
                            meta: {
                                title: `${SITE_TITLE} | C#`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'C#' }
                                ]
                            },
                        },
                        {
                            name: "Java",
                            path: "java",
                            component: vJava,
                            meta: {
                                title: `${SITE_TITLE} | Java`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'Java' }
                                ]
                            },
                        },
                        {
                            name: "Slim",
                            path: "slim",
                            component: vSlim,
                            meta: {
                                title: `${SITE_TITLE} | Slim`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'Slim' }
                                ]
                            },
                        },
                        {
                            name: "Golang",
                            path: "golang",
                            component: vGolang,
                            meta: {
                                title: `${SITE_TITLE} | Golang`,
                                breadcrumbs: [
                                    { name: 'Главная страница', routeName: 'Home' },
                                    { name: 'Курсы', routeName: 'Courses' },
                                    { name: 'Backend', routeName: 'Backend' },
                                    { name: 'Golang' }
                                ]
                            },
                        }
                    ]
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
