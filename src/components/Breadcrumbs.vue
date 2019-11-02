<template>
    <section
        v-if="$route.name !== 'Home'"
        class="c-breadcrumbs"
    >
        <ul>
            <li
                v-for="(b, i) of breadcrumbs"
                :key="i"
            >
                <span class="icon arrow-forward"></span>
                <span
                    :class="{ 'not-linked': !b.routeName }"
                    @click="routeTo(i)"
                >{{ b.name }}</span>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Breadcrumbs } from "@/modeles";

export default Vue.extend({
    name: "Breadcrumbs",
    data() {
        return {
            breadcrumbs: [] as Breadcrumbs[]
        };
    },
    created() {
        this.breadcrumbs = this.$route.meta.breadcrumbs;
    },
    watch: {
        $route() {
            this.breadcrumbs = this.$route.meta.breadcrumbs;
        }
    },
    methods: {
        routeTo(pRouteTo: number) {
            if (this.breadcrumbs[pRouteTo].routeName) {
                this.$router.push({
                    name: this.breadcrumbs[pRouteTo].routeName
                });
            }
        }
    }
});
</script>

<style lang="scss" scoped>
@import "../styles/colors";

.c-breadcrumbs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1560px;
    width: 100%;
    margin: 20px auto;

    & > ul {
        display: flex;
        user-select: none;
        flex-wrap: wrap;
        padding: 0 20px;
        margin: 0;

        & > li {
            display: flex;
            align-items: center;

            &:first-child {
                & > .icon {
                    display: none;
                }
            }

            & > .icon {
                background-color: $gray-500;
            }

            & > span {
                color: $red-500;
                cursor: pointer;

                &:hover {
                    color: $red-600;
                }
            }

            & > .not-linked {
                color: unset;
                cursor: default;

                &:hover {
                    color: unset;
                }
            }
        }
    }
}
</style>