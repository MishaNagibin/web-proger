<template>
    <main class="v-home">
        <section class="container">
            <div class="info">
                <h1>Добро пожаловать на Web-Proger</h1>
                <span>Ресурс видеоуроков программирования для разработчиков, а помимо программирования есть и многое другое. Бери знания своего профиля у нас.</span>
            </div>
            <div class="popular-categories">
                <h2>Популярные категории</h2>
                <span>
                    <router-link :to="{ name: 'Frontend' }">Frontend</router-link>
                    <router-link :to="{ name: 'Backend' }">Backend</router-link>
                    <router-link :to="{ name: 'Layout' }">Вёрстка</router-link>
                    <router-link :to="{ name: 'WebDesign' }">Веб-дизайн</router-link>
                    <router-link :to="{ name: 'MobileDevelopment' }">Мобильная разработка</router-link>
                    <router-link :to="{ name: 'Cms' }">CMS</router-link>
                    <router-link :to="{ name: 'Seo' }">SEO</router-link>
                    <router-link :to="{ name: 'Gamedev' }">GameDev</router-link>
                    <router-link :to="{ name: 'Testing' }">Тестирование</router-link>
                    <router-link :to="{ name: 'Modeling' }">Моделирование</router-link>
                </span>
            </div>

            <section class="last-added-courses">
                <h2>Последние добавленные курсы</h2>
                <div
                    v-for="(course, index) of preparedCourses"
                    :key="index"
                >
                    <router-link :to="{ name: 'Course', params: { courseID: course.ID, courseSlug: course.slug } }">
                        <span>{{ course.category }}</span>
                        <img :src="getImgUrl(course.image)" />
                    </router-link>
                    <div class="info">
                        <h3>{{ course.name }}</h3>
                        <span>{{ course.description }}</span>
                        <router-link :to="{ name: 'Course', params: { courseID: course.ID, courseSlug: course.slug } }">
                            <button>Посмотреть</button>
                        </router-link>
                    </div>
                </div>
                <router-link :to="{ name: 'Courses' }">
                    <button>Все курсы</button>
                </router-link>
            </section>
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Courses } from "@/modeles";
import api from "@/api";

export default Vue.extend({
    name: "Home",
    data() {
        return {
            courses: [] as Courses[]
        };
    },
    created() {
        api.courses.get().then(c => {
            this.courses = c;
        });
    },
    methods: {
        getImgUrl(image: string) {
            return require("@/assets/images/" + image);
        }
    },
    computed: {
        preparedCourses(): Object {
            return this.courses.slice(0, 5);
        }
    }
});
</script>

<style lang="scss">
@import "../../styles/colors";

.v-home {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
        align-items: center;
        display: flex;
        flex-direction: column;

        & > .info {
            max-width: 600px;
            display: flex;
            flex-direction: column;
            align-items: center;

            & > h1 {
                font-size: 26px;
            }

            & > span {
                text-align: center;
            }
        }

        & > .popular-categories {
            height: fit-content;
            background-color: $gray-200;
            margin: 20px 0;
            padding: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 4px;

            & > span {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;

                & > a {
                    margin: 0 20px 20px 0;
                    background-color: $gray-300;
                    width: 180px;
                    text-align: center;
                    border-radius: 4px;
                    padding: 20px;
                    text-decoration: none;
                    color: $gray-900;
                    align-self: center;

                    &:hover {
                        box-shadow: 0 0 10px 3px $gray-500;
                        cursor: pointer;
                        color: $gray-000;
                        background-color: $red-500;
                    }
                }
            }
        }

        & > .last-added-courses {
            display: flex;
            flex-direction: column;
            max-width: 1200px;
            align-items: center;

            & > div {
                margin: 20px 0;
                background-color: $gray-200;
                display: flex;

                & > a {
                    text-decoration: none;
                    display: flex;
                    align-self: center;
                    color: $gray-000;
                    position: relative;

                    & > span {
                        position: absolute;
                        background-color: $red-500;
                        padding: 5px;
                    }

                    & > img {
                        width: 350px;
                    }
                }

                & > .info {
                    display: flex;
                    flex-direction: column;
                    margin-left: 20px;

                    & > h3 {
                        margin: 0;
                    }

                    & > a {
                        display: flex;
                        align-self: flex-end;
                        text-decoration: none;

                        & > button {
                            border: 1px solid $red-500;
                            outline: none;
                            user-select: none;
                            cursor: pointer;
                            background: $red-500;
                            margin-right: 20px;
                            border-radius: 4px;
                            padding: 0 16px;
                            color: $gray-000;
                            height: 40px;
                            margin-bottom: 20px;

                            &:hover {
                                background: $red-400;
                            }

                            &:active {
                                background: $red-600;
                            }

                            &:focus {
                                box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.15);
                            }
                        }
                    }

                    & > span {
                        margin-bottom: 10px;
                    }
                }

                &:hover {
                    box-shadow: 0 0 10px 3px $gray-500;
                }
            }

            & > a {
                display: flex;
                text-decoration: none;

                & > button {
                    border: 1px solid $red-500;
                    outline: none;
                    user-select: none;
                    cursor: pointer;
                    background: $red-500;
                    border-radius: 4px;
                    padding: 0 16px;
                    color: $gray-000;
                    height: 40px;
                    margin-bottom: 20px;
                    width: 200px;

                    &:hover {
                        background: $red-400;
                    }

                    &:active {
                        background: $red-600;
                    }

                    &:focus {
                        box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.15);
                    }
                }
            }
        }
    }
}
</style>