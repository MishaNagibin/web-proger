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
import { CATEGORIES_FRONTEND } from "@/store/actions";
import { CategoriesFrontend } from "@/modeles";

export default Vue.extend({
    name: "Frontend",
    components: { cCategoriesFrontendFilter, cCoursesFrontend },
    data() {
        return {
            categoryName: undefined as string | undefined
        };
    },
    computed: {
        categoriesFrontend(): CategoriesFrontend[] {
            return (
                this.$store.state.categoriesFrontend.categoriesFrontend || []
            );
        }
    },
    created() {
        if (
            this.$store.state.categoriesFrontend.categoriesFrontend ===
            undefined
        ) {
            this.$store.dispatch(CATEGORIES_FRONTEND.GET).then(() => {
                this.getCategoryName();
                this.updatedBreadcrumbs();
            });
        }
        this.getCategoryName();
        this.updatedBreadcrumbs();
    },
    watch: {
        $route() {
            this.getCategoryName();
            this.updatedBreadcrumbs();
        }
    },
    methods: {
        getCategoryName() {
            if (this.$store.state.categoriesFrontend.categoriesFrontend) {
                this.categoryName =
                    this.categoriesFrontend.filter(
                        c => c.slug === this.$route.params.slug
                    )[0].name || undefined;
            }
        },
        updatedBreadcrumbs() {
            if (this.$route.params.slug) {
                this.$set(this.$route.meta.breadcrumbs, 2, {
                    name: this.$route.name,
                    routeName: this.$route.name
                });
                this.$set(this.$route.meta.breadcrumbs, 3, {
                    name: this.categoryName
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
