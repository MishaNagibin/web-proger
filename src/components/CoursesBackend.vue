<template>
    <main class="c-courses-backend">
        <section class="container">
            <cCoursesBackendFilter :lang="lang" />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import { CategoriesBackend } from "@/modeles";
import api from "@/api";
import cCoursesBackendFilter from "@/components/CoursesBackendFilter.vue";

export default Vue.extend({
    name: "cCoursesFrontend",
    components: { cCoursesBackendFilter },
    data() {
        return {
            categoriesBackend: [] as CategoriesBackend[],
            lang: undefined as string | undefined
        };
    },
    created() {
        api.categoriesBackend.get().then(c => {
            this.categoriesBackend = c;
            this.getLang();
        });
    },
    watch: {
        $route() {
            this.getLang();
        }
    },
    methods: {
        getLang() {
            this.lang = this.categoriesBackend.filter(
                c => c.slug === this.$route.params.slug
            )[0].name;
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
