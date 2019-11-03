<template>
    <section class="c-categories">
        <section
            v-if="categoryDescription.length > 0 && categoryDescription[0].description"
            class="description"
        >
            <span
                v-for="(category, index) of categoryDescription"
                :key="index"
            >{{ category.description }}</span>
        </section>
        <section class="filter">
            <span>
                <span class="icon filter"></span>
                <span>Фильтр</span>
            </span>
            <router-link
                v-for="(category, index) of categories"
                :key="index"
                :to="category.route ? { name: category.route } : { name: categoryName || category.route, params: { slug: category.slug || categoryName } } "
                :class="{ active: $route.params.slug ? category.slug === $route.params.slug : $route.name === category.route }"
            >{{ category.name }}</router-link>
        </section>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { CATEGORIES } from "@/store/actions";
import { Subcategories } from "@/modeles";
import api from "@/api";

export default Vue.extend({
    name: "Categories",
    props: {
        categoryName: {
            type: String
        }
    },
    computed: {
        categories(): Subcategories[] {
            return this.$store.state.categories.categories || [];
        },
        categoryDescription(): Subcategories[] {
            return (
                this.categories.filter(
                    c => c.slug === this.$route.params.slug
                ) || this.categories[0]
            );
        }
    },
    watch: {
        $route() {
            this.$store.dispatch(CATEGORIES.GET, this.$route.name);
        }
    },
    created() {
        if (this.$store.state.categories.categories === undefined) {
            this.$store.dispatch(CATEGORIES.GET, this.$route.name);
        }
    }
});
</script>

<style lang="scss">
@import "../styles/colors";
@import "../styles/icons";

.c-categories {
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
</style>