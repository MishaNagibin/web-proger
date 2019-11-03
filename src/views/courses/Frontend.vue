<template>
    <main class="v-frontend">
        <section class="container">
            <cCategories :categoryName="'Frontend'" />
            <cCourses :listCourses="preparedCourses" />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Courses } from "@/modeles";
import { COURSES } from "@/store/actions";
import cCategories from "@/components/Categories.vue";
import cCourses from "@/components/Courses.vue";

export default Vue.extend({
    name: "Frontend",
    components: { cCategories, cCourses },
    computed: {
        courses(): Courses[] {
            return this.$store.state.courses.courses || [];
        },
        preparedCourses(): Courses[] {
            return this.courses.filter(c =>
                this.$route.params.slug
                    ? c.lang.toLowerCase() === this.$route.params.slug
                    : c.category === this.$route.name
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
        this.updatedBreadcrumbs();
    },
    methods: {
        updatedBreadcrumbs() {
            if (this.$route.params.slug && this.preparedCourses.length > 0) {
                this.$set(this.$route.meta.breadcrumbs, 2, {
                    name: this.$route.name,
                    routeName: this.$route.name
                });
                this.$set(this.$route.meta.breadcrumbs, 3, {
                    name: this.preparedCourses[0].lang
                });
            } else {
                this.$set(this.$route.meta.breadcrumbs, 2, {
                    name: this.$route.name
                });

                if (this.$route.meta.breadcrumbs.length > 3) {
                    this.$route.meta.breadcrumbs.pop();
                }
            }
        }
    }
});
</script>

<style lang="scss">
@import "../../styles/colors";
@import "../../styles/icons";

.v-frontend {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
    }
}
</style>
