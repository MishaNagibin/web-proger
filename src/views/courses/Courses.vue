<template>
    <main class="v-courses">
        <section class="container">
            <cCategories :categoryName="$route.name" />
            <cCourses :listCourses="preparedCourses" />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import { COURSES, CATEGORIES } from "@/store/actions";
import { Courses, Subcategories } from "@/modeles";
import api from "@/api";
import cCategories from "@/components/Categories.vue";
import cCourses from "@/components/Courses.vue";

export default Vue.extend({
    name: "Courses",
    components: { cCategories, cCourses },
    data() {
        return {
            categories: [] as Subcategories[]
        };
    },
    computed: {
        courses(): Courses[] {
            return this.$store.state.courses.courses || [];
        },
        preparedCourses(): Courses[] {
            return this.courses.filter(c =>
                this.$route.params.langSlug
                    ? c.lang.toLowerCase() === this.$route.params.langSlug
                    : this.$route.params.categorySlug
                    ? c.category.toLowerCase() ===
                      this.$route.params.categorySlug
                    : c
            );
        }
    },
    watch: {
        $route() {
            this.updatedBreadcrumbs();
        },
        preparedCourses() {
            this.updatedBreadcrumbs();
        }
    },
    created() {
        if (this.$store.state.courses.courses === undefined) {
            this.$store.dispatch(COURSES.GET);
        }
        api.categories.get("Courses").then(c => {
            this.categories = c;
        });

        this.updatedBreadcrumbs();
    },
    methods: {
        updatedBreadcrumbs() {
            const category =
                this.categories.find(
                    c => c.categorySlug === this.$route.params.categorySlug
                ) || ({} as Subcategories);
            if (
                this.$route.params.langSlug &&
                this.preparedCourses.length > 0
            ) {
                this.$set(this.$route.meta.breadcrumbs, 2, {
                    name: category.name,
                    routeName: this.$route.name,
                    params: this.$route.params.categorySlug
                });
                this.$set(this.$route.meta.breadcrumbs, 3, {
                    name: this.preparedCourses[0].lang
                });
            } else {
                this.$set(this.$route.meta.breadcrumbs, 1, {
                    name: "Курсы",
                    routeName: this.$route.name
                });
                if (this.$route.params.categorySlug) {
                    this.$set(this.$route.meta.breadcrumbs, 2, {
                        name: category.name
                    });
                }

                if (this.$route.meta.breadcrumbs.length > 3) {
                    this.$route.meta.breadcrumbs.pop();
                }
            }

            if (
                !this.$route.params.langSlug &&
                !this.$route.params.categorySlug
            ) {
                this.$set(this.$route.meta.breadcrumbs, 1, {
                    name: "Курсы"
                });
            }

            if (
                Object.keys(this.$route.params).length === 0 &&
                this.$route.meta.breadcrumbs.length > 2
            ) {
                this.$route.meta.breadcrumbs.pop();
            }
        }
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
                border-radius: 4px;
                background-color: $gray-300;

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
