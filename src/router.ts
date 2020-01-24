import Vue from 'vue'
import Router from 'vue-router'
import vCourse from '@/views/course/Course.vue';
import vCourses from '@/views/courses/Courses.vue'
import vHome from '@/views/home/Home.vue'
import vTechnologies from '@/views/technologies/Technologies.vue';
import vTechnology from '@/views/technology/Technology.vue';
import vLoginOrRegistration from '@/views/loginOrRegistration/LoginOrRegistration.vue';

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
            path: '/courses/:categorySlug?/:langSlug?',
            component: vCourses,
            props: true,
            meta: {
                title: `${SITE_TITLE} | Курсы`,
                breadcrumbs: [
                    { name: 'Главная страница', routeName: 'Home' },
                    { name: 'Курсы' }
                ]
            }
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
        {
            name: 'Technology',
            path: '/technology/:technologyID(\\d+)-:technologySlug',
            component: vTechnology,
            props: r => ({ ...r.params, technologyID: Number(r.params.technologyID) }),
            meta: {
                title: `${SITE_TITLE} | Технология`,
                breadcrumbs: [
                    { name: 'Главная страница', routeName: 'Home' },
                    { name: 'Технологии', routeName: 'Technologies' },
                ]
            }
        },
        {
            name: 'LoginOrRegistration',
            path: '/:mode(login|registration)',
            component: vLoginOrRegistration,
            props: true,
            meta: {
                title: `${SITE_TITLE} | Авторизация`,
                breadcrumbs: [
                    { name: 'Главная страница', routeName: 'Home' },
                    { name: 'Авторизация' },
                ]
            }
        },
    ]
})
