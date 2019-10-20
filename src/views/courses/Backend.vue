<template>
    <main class="v-backend">
        <cCoursesBackend v-if="$route.params.slug" />
        <section
            v-else
            class="container"
        >
            <cCategoriesBackendFilter :category="'Backend'" />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import cCategoriesBackendFilter from "@/components/CategoriesBackendFilter.vue";
import cCoursesBackend from "@/components/CoursesBackend.vue";
import { CATEGORIES_BACKEND } from "@/store/actions";
import { CategoriesBackend } from "@/modeles";

export default Vue.extend({
    name: "Backend",
    components: { cCoursesBackend, cCategoriesBackendFilter },
    data() {
        return {
            categoryName: undefined as string | undefined
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
            if (this.$store.state.categoriesBackend.categoriesBackend) {
                this.categoryName =
                    this.categoriesBackend.filter(
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

.v-backend {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
    }
}
</style>
