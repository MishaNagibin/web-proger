<template>
    <main class="c-courses-frontend">
        <section class="container">
            <cCoursesFrontendFilter :lang="lang" />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import { CategoriesFrontend } from "@/modeles";
import api from "@/api";
import cCoursesFrontendFilter from "@/components/CoursesFrontendFilter.vue";

export default Vue.extend({
    name: "cCoursesFrontend",
    components: { cCoursesFrontendFilter },
    data() {
        return {
            categoriesFrontend: [] as CategoriesFrontend[],
            lang: undefined as string | undefined
        };
    },
    created() {
        api.categoriesFrontend.get().then(c => {
            this.categoriesFrontend = c;
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
            this.lang = this.categoriesFrontend.filter(
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
