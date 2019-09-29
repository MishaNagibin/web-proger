<template>
    <main class="v-courses">
        <router-view />
        <section
            v-show="$route.name === 'Courses'"
            class="container"
        >
            <cBreadcrumb />
            <section class="filter">
                <span>
                    <span class="icon filter"></span>
                    <span>Фильтр</span>
                </span>
                <router-link
                    v-for="(category, index) of categories"
                    :key="index"
                    :to="{ name: category.route }"
                    :class="{ active: $route.name === category.route}"
                >{{ category.name }}</router-link>
            </section>
            <cCourses :listCourses="courses" />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Categories, Courses } from "@/modeles";
import api from "@/api";
import cBreadcrumb from "@/components/Breadcrumb.vue";
import cCourses from "@/components/Courses.vue";

export default Vue.extend({
    name: "Courses",
    components: {
        cBreadcrumb,
        cCourses
    },
    data() {
        return {
            courses: [] as Courses[],
            categories: [] as Categories[]
        };
    },
    created() {
        api.courses.get().then(c => {
            this.courses = c;
        });
        api.categories.get().then(c => {
            this.categories = c;
        });
    }
});
</script>

<style lang="scss">
@import "../../styles/colors";
@import "../../styles/icons";

.v-courses {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;

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
    }
}
</style>