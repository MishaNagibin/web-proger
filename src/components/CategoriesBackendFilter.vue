<template>
    <section class="c-courses-backend-filter">
        <section class="description">
            <span
                v-for="(category, index) of preparedCategories"
                :key="index"
            >{{ category.description }}</span>
        </section>
        <section class="filter">
            <span>
                <span class="icon filter"></span>
                <span>Фильтр</span>
            </span>
            <router-link
                v-for="(category, index) of categoriesBackend"
                :key="index"
                :to="{ name: category.route }"
                :class="{ active: $route.name === category.route}"
            >{{ category.name }}</router-link>
        </section>
        <section class="courses">
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
        </section>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Categories, Courses } from "@/modeles";
import api from "@/api";

export default Vue.extend({
    name: "CoursesBackendFilter",
    data() {
        return {
            courses: [] as Courses[],
            categoriesBackend: [] as Categories[],
            categories: [] as Categories[],
            category: undefined as string | undefined
        };
    },
    created() {
        this.$root.$on(
            "category",
            (category: string) => (this.category = category)
        );
        api.categories.get().then(c => {
            this.categories = c;
        });
        api.courses.get().then(c => {
            this.courses = c;
        });
        api.categoriesBackend.get().then(c => {
            this.categoriesBackend = c;
        });
    },
    methods: {
        getImgUrl(image: string) {
            return require("@/assets/images/" + image);
        }
    },
    computed: {
        preparedCourses(): Object {
            return this.courses
                .filter(c => c.category === this.category)
                .slice(0, 10);
        },
        preparedCategories(): Object {
            return this.categories.filter(c => c.route === this.$route.name);
        }
    }
});
</script>

<style lang="scss">
@import "../styles/colors";
@import "../styles/icons";

.c-courses-backend-filter {
    & > .description {
        padding: 20px;
        background-color: $red-500;
        color: $gray-000;
        margin: 20px 0;
        box-shadow: 0 0 10px 3px $gray-500;
    }

    & > .filter {
        display: flex;
        flex-wrap: wrap;
        user-select: none;

        & > span {
            width: 100px;
            padding: 10px;
            margin: 5px;
            background-color: $red-300;
            display: flex;
            justify-content: space-around;
            border-radius: 4px;
            color: $gray-000;
            font-weight: 600;

            & > .icon {
                background-color: $gray-000;
            }
        }

        & > a {
            text-decoration: none;
            color: $gray-900;
            width: fit-content;
            padding: 10px;
            margin: 5px;
            text-align: center;
            align-self: center;

            &:hover {
                color: $gray-000;
                box-shadow: 0 0 10px 3px $gray-500;
                background-color: $red-500;
                border-radius: 4px;
            }
        }

        & > .active {
            background-color: $red-500;
            color: $gray-000;
            border-radius: 4px;
        }
    }

    & > .courses {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div {
            margin: 20px 0;
            background-color: $gray-200;
            display: flex;
            width: 100%;

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
                width: 100%;

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
</style>