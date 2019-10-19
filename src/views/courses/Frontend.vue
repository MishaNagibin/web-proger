<template>
    <main class="v-frontend">
        <cCoursesFrontend v-if="$route.params.slug" />
        <section
            v-else
            class="container"
        >
            <cCategoriesFrontendFilter :category="'Frontend'" />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import cCategoriesFrontendFilter from "@/components/CategoriesFrontendFilter.vue";
import cCoursesFrontend from "@/components/CoursesFrontend.vue";

export default Vue.extend({
    name: "Frontend",
    components: { cCategoriesFrontendFilter, cCoursesFrontend },
    created() {
        this.updatedBreadcrumbs();
    },
    watch: {
        $route() {
            this.updatedBreadcrumbs();
        }
    },
    methods: {
        updatedBreadcrumbs() {
            if (this.$route.params.slug) {
                this.$set(this.$route.meta.breadcrumbs, 2, {
                    name: this.$route.name,
                    routeName: this.$route.name
                });
                this.$set(this.$route.meta.breadcrumbs, 3, {
                    name: this.$route.params.slug
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
