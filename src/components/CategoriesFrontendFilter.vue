<template>
    <section class="c-courses-frontend-filter">
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
                v-for="(category, index) of categoriesFrontend"
                :key="index"
                :to="{ name: category.route }"
                :class="{ active: $route.name === category.route}"
            >{{ category.name }}</router-link>
        </section>
        <cCourses
            :listCourses="courses"
            :categoryCourse="category"
        />
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Categories, Courses } from "@/modeles";
import cCourses from "@/components/Courses.vue";
import api from "@/api";

export default Vue.extend({
    name: "CoursesFrontendFilter",
    components: {
        cCourses
    },
    data() {
        return {
            courses: [] as Courses[],
            categoriesFrontend: [] as Categories[],
            category: undefined as string | undefined,
            categories: [] as Categories[]
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
        api.categoriesFrontend.get().then(c => {
            this.categoriesFrontend = c;
        });
    },
    methods: {
        getImgUrl(image: string) {
            return require("@/assets/images/" + image);
        }
    },
    computed: {
        preparedCategories(): Object {
            return this.categories.filter(c => c.route === this.$route.name);
        }
    }
});
</script>

<style lang="scss">
@import "../styles/colors";
@import "../styles/icons";

.c-courses-frontend-filter {
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
}
</style>