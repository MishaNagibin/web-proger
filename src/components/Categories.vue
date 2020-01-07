<template>
    <section class="c-categories">
        <div
            :class="[{ blackout: isMenuActive }]"
            @click="onCloseMenuClick"
        ></div>
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
                :to="category.langSlug ? { name: 'Courses', params: { categorySlug: category.categorySlug, langSlug: category.langSlug } }: { name: 'Courses', params: { categorySlug: category.categorySlug } } "
                :class="{ active: $route.params.langSlug ? category.langSlug === $route.params.langSlug : category.name === 'Все' }"
            >{{ category.name }}</router-link>
        </section>
        <div :class="['mobile-menu', { 'full-height': isMenuActive }]">
            <div
                :class="[{ 'show-select-item': !isMenuActive, hide: isMenuActive }]"
                @click="listShow"
            >
                {{ categorySelected }}
                <span :class="['icon', { 'arrow-down': !isMenuActive }]"></span>
            </div>
            <div
                v-show="isMenuActive"
                class="controls menu-drop-down"
            >
                <div
                    class="icon close"
                    @click="onCloseMenuClick"
                ></div>

                <div
                    v-for="(category, index) of categories"
                    :key="index"
                    :class="['category', { active: categorySelected === category.name || ($route.params.slug && $route.params.slug === category.slug) }]"
                >
                    <router-link
                        :to="category.route ? { name: category.route } : { name: categoryName || category.route, params: { slug: category.slug || categoryName } } "
                    >{{ category.name }}</router-link>
                </div>
            </div>
        </div>
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
    data() {
        return {
            isMenuActive: false
        };
    },
    computed: {
        categorySelected(): string {
            let result = "Все";
            this.categories.forEach(c => {
                if (
                    Object.keys(this.$route.params).length > 0 &&
                    this.$route.params.langSlug === c.langSlug
                ) {
                    result = c.name;
                }
            });

            return result;
        },
        categories(): Subcategories[] {
            return this.$store.state.categories.categories || [];
        },
        categoryDescription(): Subcategories[] {
            return (
                this.categories.filter(
                    c => c.langSlug === this.$route.params.langSlug
                ) || this.categories[0]
            );
        }
    },
    watch: {
        $route() {
            this.$store.dispatch(CATEGORIES.GET, this.$route.params.categorySlug ? this.$route.params.categorySlug : this.$route.name);
            this.isMenuActive = false;
        }
    },
    created() {
        if (this.$store.state.categories.categories === undefined) {
            this.$store.dispatch(CATEGORIES.GET, this.$route.params.categorySlug ? this.$route.params.categorySlug : this.$route.name);
        }
    },
    methods: {
        onCloseMenuClick() {
            this.isMenuActive = false;
        },
        listShow() {
            this.isMenuActive = !this.isMenuActive;
        }
    }
});
</script>

<style lang="scss">
@import "../styles/colors";
@import "../styles/icons";

.c-categories {
    display: flex;
    flex-direction: column;
    justify-content: center;

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

    & .blackout {
        height: 100%;
        width: 100%;
        position: fixed;
        background-color: transparent;
        z-index: 997;
        top: 0;
        left: 0;
    }

    & > .full-height {
        height: 80%;
        z-index: 998;
        position: fixed;
        align-self: center;
        top: 10%;
        border-radius: 4px;
        background-color: $gray-000;
        overflow: auto;
        box-shadow: 0 1px 300px rgba(0, 0, 0, 1);
    }

    & > .mobile-menu {
        width: 90%;
        display: none;

        & > .hide {
            display: none;
        }

        & > .show-select-item {
            max-width: 900px;
            min-width: 200px;
            background-color: $gray-000;
            border: 1px solid $gray-400;
            border-radius: 4px;
            color: $gray-800;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            padding: 4px 2px 4px 15px;
            width: 100%;
            align-self: center;

            & > .arrow-down {
                background-color: $gray-500;
                mask-repeat: no-repeat;
            }
        }

        & > .menu-drop-down {
            display: flex;
            flex-direction: column;
            font-size: 16px;
            user-select: none;
            align-items: center;

            & > .close {
                align-self: flex-end;
                margin: 10px 10px 0 0;
            }

            & .active {
                color: $primary-300;
                padding: 5px 15px;
            }

            & > .category {
                display: flex;
                width: 90%;
                padding: 10px;
                border-bottom: 1px solid $gray-500;

                & > a {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    text-decoration: none;
                    color: $gray-900;
                }
            }

            & > .active {
                background-color: $red-300;
                border-color: $red-300;

                & > a {
                    color: $gray-000;
                }
            }

            & > :last-child {
                border: none;
            }
        }
    }
}

@media screen and (max-width: 850px) {
    .c-categories {
        & > .mobile-menu {
            display: flex;
            flex-direction: column;
            align-self: center;
        }

        & > .filter {
            display: none;
        }
    }
}
</style>