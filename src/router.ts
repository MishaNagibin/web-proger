import Vue from 'vue'
import Router from 'vue-router'
import vHome from '@/views/home/Home.vue'
import vCourses from '@/views/courses/Courses.vue'
import vFrontend from '@/views/courses/Frontend.vue'
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

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: vHome
        },
        {
            path: '/courses',
            name: 'Courses',
            component: vCourses,
            children: [
                {
                    name: "Frontend",
                    path: "frontend",
                    component: vFrontend,
                    children: [
                        {
                            name: "Vue",
                            path: "vue",
                            component: vVue,
                        },
                        {
                            name: "React",
                            path: "react",
                            component: vReact,
                        },
                        {
                            name: "Angular",
                            path: "angular",
                            component: vAngular,
                        },
                        {
                            name: "TypeScript",
                            path: "typescript",
                            component: vTypeScript,
                        },
                        {
                            name: "RxJS",
                            path: "rxjs",
                            component: vRxJS,
                        },
                        {
                            name: "JavaScript",
                            path: "javascript",
                            component: vJavaScript,
                        },
                        {
                            name: "JQuery",
                            path: "jquery",
                            component: vJQuery,
                        },
                        {
                            name: "EcmaScript",
                            path: "ecmascript",
                            component: vEcmaScript,
                        },
                        {
                            name: "Redux",
                            path: "redux",
                            component: vRedux,
                        },
                        {
                            name: "Nuxt",
                            path: "nuxt",
                            component: vNuxt,
                        },
                    ]
                },
                {
                    name: "Backend",
                    path: "backend",
                    component: vCourses,
                },
                {
                    name: "Layout",
                    path: "layout",
                    component: vCourses,
                },
                {
                    name: "WebDesign",
                    path: "web-design",
                    component: vCourses,
                },
                {
                    name: "Cms",
                    path: "cms",
                    component: vCourses,
                },
                {
                    name: "Seo",
                    path: "seo",
                    component: vCourses,
                },
                {
                    name: "MobileDevelopment",
                    path: "mobile-development",
                    component: vCourses,
                },
                {
                    name: "Gamedev",
                    path: "gamedev",
                    component: vCourses,
                },
                {
                    name: "Testing",
                    path: "testing",
                    component: vCourses,
                },
                {
                    name: "SystemProgramming",
                    path: "system-programming",
                    component: vCourses,
                },
                {
                    name: "Graphic",
                    path: "graphic",
                    component: vCourses,
                },
                {
                    name: "Modeling",
                    path: "modeling",
                    component: vCourses,
                },
                {
                    name: "Video",
                    path: "video",
                    component: vCourses,
                },
                {
                    name: "Other",
                    path: "other",
                    component: vCourses,
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
