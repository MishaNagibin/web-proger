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
                <cCourses
                    :listCourses="courses"
                    :isHome="true"
                />
                <router-link :to="{ name: 'Courses' }">
                    <cButton :buttonText="'Все курсы'" />
                </router-link>
            </section>
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Courses } from "@/modeles";
import api from "@/api";
import cButton from "@/components/Button.vue";
import cCourses from "@/components/Courses.vue";

export default Vue.extend({
    name: "Home",
    components: { cButton, cCourses },
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
        preparedCourses(): Courses[] {
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
            text-align: center;

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
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 4px;
            text-align: center;

            & > span {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;

                & > a {
                    background-color: $gray-300;
                    width: 180px;
                    text-align: center;
                    border-radius: 4px;
                    padding: 20px;
                    text-decoration: none;
                    color: $gray-900;
                    align-self: center;
                    margin: 0 20px 20px 20px;

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
            max-width: 1600px;
            align-items: center;

            & > h2 {
                text-align: center;
            }

            & > a {
                display: flex;
                text-decoration: none;
            }
        }
    }
}

@media screen and (max-width: 850px) {
    .v-home {
        .container {
            .last-added-courses {
                & > a {
                    justify-content: center;

                    & > .c-button {
                        & > button {
                            margin: 15px 20px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 590px) {
    .v-home {
        .container {
            .last-added-courses {
                width: 100%;
                display: block;
            }
        }
    }
}
</style>
