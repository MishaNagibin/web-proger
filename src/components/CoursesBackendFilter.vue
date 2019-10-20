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
                :to="{ name: 'Backend', params: { slug: category.slug } }"
                :class="{ active: $route.params.slug === category.slug }"
            >{{ category.name }}</router-link>
        </section>
        <cCourses
            :listCourses="courses"
            :langCourse="lang"
        />
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { CategoriesBackend, Courses } from "@/modeles";
import { COURSES, CATEGORIES_BACKEND } from "@/store/actions";
import api from "@/api";
import cCourses from "@/components/Courses.vue";

export default Vue.extend({
    name: "cCoursesBackendFilter",
    props: {
        lang: {
            type: String
        }
    },
    components: {
        cCourses
    },
    computed: {
        preparedCategories(): Object {
            return this.categoriesBackend.filter(
                c => c.slug === this.$route.params.slug
            );
        },
        courses(): Courses[] {
            return this.$store.state.courses.courses || [];
        },
        categoriesBackend(): CategoriesBackend[] {
            return this.$store.state.categoriesBackend.categoriesBackend || [];
        }
    },
    created() {
        if (this.$store.state.courses.courses === undefined) {
            this.$store.dispatch(COURSES.GET);
        }
        if (
            this.$store.state.categoriesBackend.categoriesBackend === undefined
        ) {
            this.$store.dispatch(CATEGORIES_BACKEND.GET);
        }
    },
    methods: {
        getImgUrl(image: string) {
            return require("@/assets/images/" + image);
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
}
</style>