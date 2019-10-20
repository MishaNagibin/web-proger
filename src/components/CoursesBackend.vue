<template>
    <main class="c-courses-backend container">
        <section class="container">
            <cCoursesBackendFilter :lang="lang" />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import { CategoriesBackend } from "@/modeles";
import { CATEGORIES_BACKEND } from "@/store/actions";
import api from "@/api";
import cCoursesBackendFilter from "@/components/CoursesBackendFilter.vue";

export default Vue.extend({
    name: "cCoursesFrontend",
    components: { cCoursesBackendFilter },
    data() {
        return {
            lang: undefined as string | undefined
        };
    },
    computed: {
        categoriesBackend(): CategoriesBackend[] {
            return this.$store.state.categoriesBackend.categoriesBackend || [];
        }
    },
    created() {
        if (
            this.$store.state.categoriesBackend.categoriesBackend === undefined
        ) {
            this.$store.dispatch(CATEGORIES_BACKEND.GET).then(() => {
                this.getLang();
            });
        }
        this.getLang();
    },
    watch: {
        $route() {
            this.getLang();
        }
    },
    methods: {
        getLang() {
            if (this.$store.state.categoriesBackend.categoriesBackend) {
                this.lang = this.categoriesBackend.filter(
                    c => c.slug === this.$route.params.slug
                )[0].name;
            }
        }
    }
});
</script>

<style lang="scss">
@import "../styles/colors";

.c-courses-frontend {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
    }
}
</style>
