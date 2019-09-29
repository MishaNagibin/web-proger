import Vue from 'vue'
import Router from 'vue-router'
import vHome from '@/views/home/Home.vue'
import vCourses from '@/views/courses/Courses.vue'
import vFrontend from '@/views/courses/Frontend.vue'
import vBackend from '@/views/courses/Backend.vue'
import vVue from '@/views/frontend/Vue.vue'
import vReact from '@/views/frontend/React.vue'
import vAngular from '@/views/frontend/Angular.vue'
import vTypeScript from '@/views/frontend/TypeScript.vue'
import vRxJS from '@/views/frontend/RxJS.vue'
import vJavaScript from '@/views/frontend/JavaScript.vue'
import vJQuery from '@/views/frontend/JQuery.vue'
import vEcmaScript from '@/views/frontend/EcmaScript.vue'
import vRedux from '@/views/frontend/Redux.vue'
import vNuxt from '@/views/frontend/Nuxt.vue'
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

Vue.use(Router)

const SITE_TITLE = "Web-Proger";

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: vHome,
            meta: {
                title: `${SITE_TITLE} | Главная`,
                breadcrumb: { name: 'Главная страница' }
            },
        },
        {
            path: '/courses',
            name: 'Courses',
            component: vCourses,
            meta: {
                title: `${SITE_TITLE} | Курсы`,
                breadcrumb: [
                    { name: 'Главная страница', link: 'Home' },
                    { name: 'Курсы' }
                ]
            },
            children: [
                {
                    name: "Frontend",
                    path: "frontend",
                    component: vFrontend,
                    meta: {
                        title: `${SITE_TITLE} | Frontend`,
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
                            { name: 'Frontend' }
                        ]
                    },
                    children: [
                        {
                            name: "Vue",
                            path: "vue",
                            component: vVue,
                            meta: {
                                title: `${SITE_TITLE} | Vue`,
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Frontend', link: 'Frontend' },
                                    { name: 'Vue' }
                                ]
                            },
                        },
                        {
                            name: "React",
                            path: "react",
                            component: vReact,
                            meta: {
                                title: `${SITE_TITLE} | React`,
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Frontend', link: 'Frontend' },
                                    { name: 'React' }
                                ]
                            },
                        },
                        {
                            name: "Angular",
                            path: "angular",
                            component: vAngular,
                            meta: {
                                title: `${SITE_TITLE} | Angular`,
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Frontend', link: 'Frontend' },
                                    { name: 'Angular' }
                                ]
                            },
                        },
                        {
                            name: "TypeScript",
                            path: "typescript",
                            component: vTypeScript,
                            meta: {
                                title: `${SITE_TITLE} | TypeScript`,
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Frontend', link: 'Frontend' },
                                    { name: 'TypeScript' }
                                ]
                            },
                        },
                        {
                            name: "RxJS",
                            path: "rxjs",
                            component: vRxJS,
                            meta: {
                                title: `${SITE_TITLE} | RxJS`,
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Frontend', link: 'Frontend' },
                                    { name: 'RxJS' }
                                ]
                            },
                        },
                        {
                            name: "JavaScript",
                            path: "javascript",
                            component: vJavaScript,
                            meta: {
                                title: `${SITE_TITLE} | JavaScript`,
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Frontend', link: 'Frontend' },
                                    { name: 'JavaScript' }
                                ]
                            },
                        },
                        {
                            name: "JQuery",
                            path: "jquery",
                            component: vJQuery,
                            meta: {
                                title: `${SITE_TITLE} | JQuery`,
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Frontend', link: 'Frontend' },
                                    { name: 'JQuery' }
                                ]
                            },
                        },
                        {
                            name: "EcmaScript",
                            path: "ecmascript",
                            component: vEcmaScript,
                            meta: {
                                title: `${SITE_TITLE} | EcmaScript`,
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Frontend', link: 'Frontend' },
                                    { name: 'EcmaScript' }
                                ]
                            },
                        },
                        {
                            name: "Redux",
                            path: "redux",
                            component: vRedux,
                            meta: {
                                title: `${SITE_TITLE} | Redux`,
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Frontend', link: 'Frontend' },
                                    { name: 'Redux' }
                                ]
                            },
                        },
                        {
                            name: "Nuxt",
                            path: "nuxt",
                            component: vNuxt,
                            meta: {
                                title: `${SITE_TITLE} | Nuxt`,
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Frontend', link: 'Frontend' },
                                    { name: 'Nuxt' }
                                ]
                            },
                        },
                    ]
                },
                {
                    name: "Backend",
                    path: "backend",
                    component: vBackend,
                    meta: {
                        title: `${SITE_TITLE} | Backend`,
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                                breadcrumb: [
                                    { name: 'Главная страница', link: 'Home' },
                                    { name: 'Курсы', link: 'Courses' },
                                    { name: 'Backend', link: 'Backend' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
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
                        breadcrumb: [
                            { name: 'Главная страница', link: 'Home' },
                            { name: 'Курсы', link: 'Courses' },
                            { name: 'Вёрстка' }
                        ]
                    },
                },
            ]
        },
        {
            path: '/course/:courseSlug',
            name: 'Course',
            component: vCourses
        },
    ]
})
