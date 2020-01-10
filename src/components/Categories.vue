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
                :to="category.langSlug ? { name: 'Courses', params: { categorySlug: category.categorySlug, langSlug: category.langSlug } } : category.categorySlug !== 'Courses' ? { name: 'Courses', params: { categorySlug: category.categorySlug } } : ''"
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
            <transition name="slide-fade">
                <div
                    v-if="isMenuActive"
                    class="controls menu-drop-down"
                >
                    <span
                        class="icon close"
                        @click="onCloseMenuClick"
                    ></span>
                    <div>
                        <div
                            v-for="(category, index) of categories"
                            :key="index"
                            :class="['category', { active: $route.params.langSlug ? category.langSlug === $route.params.langSlug : category.name === 'Все' }]"
                        >
                            <router-link
                                :to="category.langSlug ? { name: 'Courses', params: { categorySlug: category.categorySlug, langSlug: category.langSlug } } : category.categorySlug !== 'Courses' ? { name: 'Courses', params: { categorySlug: category.categorySlug } } : ''"
                            >{{ category.name }}</router-link>
                        </div>
                    </div>
                </div>
            </transition>
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
    data() {
        return {
            isMenuActive: false
        };
    },
    computed: {
        categorySelected(): string {
            let result = "Все";
            for (const c of this.categories) {
                if (
                    this.$route.params.langSlug !== undefined &&
                    this.$route.params.langSlug === c.langSlug
                ) {
                    return c.name;
                } else if (
                    this.$route.params.categorySlug !== undefined &&
                    c.categorySlug !== undefined
                ) {
                    result =
                        c.categorySlug[0].toUpperCase() +
                        c.categorySlug.slice(1);
                }
            }

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
            this.$store.dispatch(
                CATEGORIES.GET,
                this.$route.params.categorySlug
                    ? this.$route.params.categorySlug
                    : this.$route.name
            );
            this.isMenuActive = false;
        }
    },
    created() {
        this.$store.dispatch(
            CATEGORIES.GET,
            this.$route.params.categorySlug
                ? this.$route.params.categorySlug
                : this.$route.name
        );
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
        z-index: 998;
        position: fixed;
        align-self: center;
        top: 0;
        left: 0;
        border-radius: 4px;
        background-color: $gray-000;
        overflow: auto;
        box-shadow: 0 1px 300px rgba(0, 0, 0, 1);
    }

    & > .mobile-menu {
        width: 100%;
        height: 100%;
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

        & > .slide-fade-enter-active {
            transition: all 0.3s ease;
        }

        & > .slide-fade-leave-active {
            transition: all 0.8s ease;
        }

        & > .slide-fade-enter,
        & > .slide-fade-leave-to {
            transform: translateX(-100px);
            opacity: 0;
        }

        & > .menu-drop-down {
            display: flex;
            padding: 80px 20px;
            flex-direction: row-reverse;

            & > .close {
                margin: 10px 10px 0 0;
                display: flex;
                mask-repeat: no-repeat;
                align-self: start;
            }

            & > div {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                & > .category {
                    background-color: $gray-300;
                    width: 140px;
                    height: 20px;
                    text-align: center;
                    border-radius: 4px;
                    padding: 20px;
                    text-decoration: none;
                    color: $gray-900;
                    align-self: center;
                    margin: 0 20px 20px 20px;
                    display: flex;
                    align-items: center;

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

@media screen and (max-width: 740px) {
    .c-categories {
        & > .mobile-menu {
            & > .menu-drop-down {
                & > div {
                    & > .category {
                        width: 120px;
                        margin: 0 0 20px 20px;
                    }
                }
            }
        }
    }
}
</style>